"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Syntetisert lydbilde (ingen lydfiler): ambient pad + båtmotor-forbikjøring
// med stereo-panorering og måkeskrik når Oystr-kortet er synlig og lyd er på.
// Audio-grafen er portert 1:1 fra prototypen.
type SoundRig = {
  ac: AudioContext;
  master: GainNode;
  engineGain: GainNode;
  gullBurst: () => void;
  startPass: () => void;
};

export function useSound() {
  const [sound, setSound] = useState(false);
  const rig = useRef<SoundRig | null>(null);
  const soundOn = useRef(false);
  const oystrVisible = useRef(false);
  const gullOn = useRef(false);
  const gullT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const passT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const updateScene = useCallback(() => {
    const on = soundOn.current && oystrVisible.current;
    const was = gullOn.current;
    gullOn.current = on;
    const r = rig.current;
    if (r) {
      if (on && !was) {
        r.gullBurst();
        clearTimeout(passT.current);
        r.startPass();
      } else if (!on) {
        clearTimeout(passT.current);
        r.engineGain.gain.cancelScheduledValues(r.ac.currentTime);
        r.engineGain.gain.setTargetAtTime(0, r.ac.currentTime, 0.5);
      }
    }
  }, []);

  const setOystrVisible = useCallback(
    (visible: boolean) => {
      oystrVisible.current = visible;
      updateScene();
    },
    [updateScene]
  );

  const buildRig = useCallback(() => {
    type LegacyWindow = Window & { webkitAudioContext?: typeof AudioContext };
    const Ctx = window.AudioContext || (window as LegacyWindow).webkitAudioContext!;
    const ac = new Ctx();
    const master = ac.createGain();
    master.gain.value = 0;
    master.connect(ac.destination);
    const mk = (freq: number, det: number, vol: number) => {
      const o = ac.createOscillator();
      o.type = "sine";
      o.frequency.value = freq;
      o.detune.value = det;
      const g = ac.createGain();
      g.gain.value = vol;
      o.connect(g);
      g.connect(master);
      o.start();
      return o;
    };
    mk(55, 0, 0.5);
    mk(110, 6, 0.22);
    mk(164.8, -5, 0.1);
    const lfo = ac.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoG = ac.createGain();
    lfoG.gain.value = 0.012;
    lfo.connect(lfoG);
    lfoG.connect(master.gain);
    lfo.start();
    // Rask båt i det fjerne: motorknatring + vannsprut, panorerer forbi
    const mkNoise = (secs: number) => {
      const len = ac.sampleRate * secs;
      const buf = ac.createBuffer(1, len, ac.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      const src = ac.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      src.start();
      return src;
    };
    const eg = ac.createGain();
    eg.gain.value = 0;
    const pan: StereoPannerNode | GainNode = ac.createStereoPanner
      ? ac.createStereoPanner()
      : ac.createGain();
    eg.connect(pan);
    pan.connect(ac.destination);
    // Motor: knatrende puls (propell) — sagtann gjennom bandpass, AM 13 Hz
    const eng1 = ac.createOscillator();
    eng1.type = "sawtooth";
    eng1.frequency.value = 105;
    const eng2 = ac.createOscillator();
    eng2.type = "square";
    eng2.frequency.value = 52.5;
    const engBp = ac.createBiquadFilter();
    engBp.type = "bandpass";
    engBp.frequency.value = 420;
    engBp.Q.value = 0.8;
    const engAmp = ac.createGain();
    engAmp.gain.value = 0.5;
    const chop = ac.createOscillator();
    chop.type = "square";
    chop.frequency.value = 13;
    const chopG = ac.createGain();
    chopG.gain.value = 0.3;
    chop.connect(chopG);
    chopG.connect(engAmp.gain);
    const engMix = ac.createGain();
    engMix.gain.value = 0.55;
    eng1.connect(engBp);
    eng2.connect(engBp);
    engBp.connect(engAmp);
    engAmp.connect(engMix);
    engMix.connect(eg);
    eng1.start();
    eng2.start();
    chop.start();
    // Vannsprut: hvit støy, høypass, svak bølging
    const spray = mkNoise(2);
    const sprayHp = ac.createBiquadFilter();
    sprayHp.type = "highpass";
    sprayHp.frequency.value = 1600;
    const sprayG = ac.createGain();
    sprayG.gain.value = 0.12;
    const swell = ac.createOscillator();
    swell.frequency.value = 0.35;
    const swellG = ac.createGain();
    swellG.gain.value = 0.05;
    swell.connect(swellG);
    swellG.connect(sprayG.gain);
    swell.start();
    spray.connect(sprayHp);
    sprayHp.connect(sprayG);
    sprayG.connect(eg);
    // Forbikjøring: pan -1 → 1 og volum-svell, gjentas
    const pass = () => {
      if (gullOn.current) {
        const t = ac.currentTime;
        const dur = 11;
        if ("pan" in pan) {
          pan.pan.setValueAtTime(-0.9, t);
          pan.pan.linearRampToValueAtTime(0.9, t + dur);
        }
        eg.gain.cancelScheduledValues(t);
        eg.gain.setValueAtTime(Math.max(0.06, eg.gain.value), t);
        eg.gain.linearRampToValueAtTime(0.85, t + dur * 0.45);
        eg.gain.linearRampToValueAtTime(0.12, t + dur);
        // dopplerantydning: pitch litt opp mot midten, ned etter
        eng1.frequency.setValueAtTime(112, t);
        eng1.frequency.linearRampToValueAtTime(96, t + dur);
        eng2.frequency.setValueAtTime(56, t);
        eng2.frequency.linearRampToValueAtTime(48, t + dur);
      }
      passT.current = setTimeout(pass, 13000);
    };
    // Måke: «ki-ki-kiiiaaah» — korte høye støt + langt fallende skrik
    const cry = (t0: number, base: number, long: boolean) => {
      const o = ac.createOscillator();
      o.type = "sawtooth";
      const dur = long ? 0.55 : 0.14;
      o.frequency.setValueAtTime(base, t0);
      if (long) {
        o.frequency.linearRampToValueAtTime(base * 1.1, t0 + 0.08);
        o.frequency.exponentialRampToValueAtTime(base * 0.5, t0 + dur);
      } else {
        o.frequency.exponentialRampToValueAtTime(base * 0.78, t0 + dur);
      }
      const vib = ac.createOscillator();
      vib.frequency.value = long ? 22 : 34;
      const vibG = ac.createGain();
      vibG.gain.value = long ? 90 : 40;
      vib.connect(vibG);
      vibG.connect(o.frequency);
      const bp = ac.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = base * 1.4;
      bp.Q.value = 2.2;
      const hp = ac.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 700;
      const g = ac.createGain();
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(long ? 0.3 : 0.22, t0 + 0.03);
      g.gain.setValueAtTime(long ? 0.3 : 0.22, t0 + dur * 0.55);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(bp);
      bp.connect(hp);
      hp.connect(g);
      g.connect(ac.destination);
      o.start(t0);
      o.stop(t0 + dur + 0.05);
      vib.start(t0);
      vib.stop(t0 + dur + 0.05);
    };
    const gullBurst = () => {
      const t = ac.currentTime + 0.05;
      const base = 1500 + Math.random() * 250;
      cry(t, base, false);
      cry(t + 0.18, base * 0.96, false);
      cry(t + 0.36, base, true);
      if (Math.random() < 0.5) cry(t + 1.15, base * 0.92, true);
    };
    const gull = () => {
      if (gullOn.current) gullBurst();
      gullT.current = setTimeout(gull, 3500 + Math.random() * 4000);
    };
    gull();
    rig.current = { ac, master, engineGain: eg, gullBurst, startPass: pass };
  }, []);

  const toggleSound = useCallback(() => {
    if (!soundOn.current) {
      if (!rig.current) buildRig();
      const r = rig.current!;
      r.ac.resume();
      r.master.gain.setTargetAtTime(0.045, r.ac.currentTime, 1.2);
      soundOn.current = true;
      setSound(true);
      updateScene();
    } else {
      const r = rig.current!;
      r.master.gain.setTargetAtTime(0, r.ac.currentTime, 0.4);
      soundOn.current = false;
      setSound(false);
      updateScene();
    }
  }, [buildRig, updateScene]);

  useEffect(() => {
    return () => {
      clearTimeout(gullT.current);
      clearTimeout(passT.current);
      if (rig.current) {
        rig.current.ac.close();
        rig.current = null;
      }
    };
  }, []);

  return { sound, toggleSound, setOystrVisible };
}
