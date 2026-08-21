"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Lydbilde: syntetisert ambient pad (fra prototypen) + ekte opptak (CC0,
// freesound.org) av motorbåt-forbikjøring og måker når Oystr-kortet er
// synlig og lyd er på. Båten spilles som tilfeldige utsnitt med
// stereo-panorering; måkene som en dempet løkke.
type SoundRig = {
  ac: AudioContext;
  master: GainNode;
  boatOut: GainNode;
};

export function useSound() {
  const [sound, setSound] = useState(false);
  const rig = useRef<SoundRig | null>(null);
  const soundOn = useRef(false);
  const oystrVisible = useRef(false);
  const gullOn = useRef(false);
  const boatBuf = useRef<AudioBuffer | null>(null);
  const gullBuf = useRef<AudioBuffer | null>(null);
  const gullNodes = useRef<{ src: AudioBufferSourceNode; gain: GainNode } | null>(null);
  const passT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const startGulls = useCallback(() => {
    const r = rig.current;
    if (!r || !gullBuf.current) return;
    if (!gullNodes.current) {
      const src = r.ac.createBufferSource();
      src.buffer = gullBuf.current;
      src.loop = true;
      const gain = r.ac.createGain();
      gain.gain.value = 0;
      src.connect(gain);
      gain.connect(r.ac.destination);
      src.start();
      gullNodes.current = { src, gain };
    }
    gullNodes.current.gain.gain.setTargetAtTime(0.2, r.ac.currentTime, 0.8);
  }, []);

  const stopGulls = useCallback(() => {
    const r = rig.current;
    if (r && gullNodes.current)
      gullNodes.current.gain.gain.setTargetAtTime(0, r.ac.currentTime, 0.5);
  }, []);

  // Én forbikjøring: tilfeldig utsnitt av opptaket, panorert forbi
  const pass = useCallback(function passFn() {
    const r = rig.current;
    if (r && gullOn.current && boatBuf.current) {
      const buf = boatBuf.current;
      const dur = Math.min(22, buf.duration);
      const off = Math.random() * Math.max(0, buf.duration - dur - 1);
      const t = r.ac.currentTime;
      const src = r.ac.createBufferSource();
      src.buffer = buf;
      const g = r.ac.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.5, t + 3);
      g.gain.setValueAtTime(0.5, t + dur - 4);
      g.gain.linearRampToValueAtTime(0, t + dur);
      const dir = Math.random() < 0.5 ? 1 : -1;
      let out: AudioNode = g;
      if (r.ac.createStereoPanner) {
        const p = r.ac.createStereoPanner();
        p.pan.setValueAtTime(-0.7 * dir, t);
        p.pan.linearRampToValueAtTime(0.7 * dir, t + dur);
        g.connect(p);
        out = p;
      }
      src.connect(g);
      out.connect(r.boatOut);
      src.start(t, off, dur);
      src.stop(t + dur + 0.1);
      passT.current = setTimeout(passFn, (dur + 6 + Math.random() * 8) * 1000);
    } else {
      passT.current = setTimeout(passFn, 4000);
    }
  }, []);

  const updateScene = useCallback(() => {
    const on = soundOn.current && oystrVisible.current;
    const was = gullOn.current;
    gullOn.current = on;
    const r = rig.current;
    if (!r) return;
    if (on && !was) {
      r.boatOut.gain.setValueAtTime(1, r.ac.currentTime);
      startGulls();
      clearTimeout(passT.current);
      pass();
    } else if (!on && was) {
      clearTimeout(passT.current);
      stopGulls();
      r.boatOut.gain.setTargetAtTime(0, r.ac.currentTime, 0.5);
    }
  }, [pass, startGulls, stopGulls]);

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
    // Ambient pad — som i prototypen
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
    const boatOut = ac.createGain();
    boatOut.gain.value = 1;
    boatOut.connect(ac.destination);
    rig.current = { ac, master, boatOut };
    // Last opptakene (kun når lyd faktisk skrus på)
    const load = (url: string, target: { current: AudioBuffer | null }) =>
      fetch(url)
        .then((res) => res.arrayBuffer())
        .then((buf) => ac.decodeAudioData(buf))
        .then((decoded) => {
          target.current = decoded;
          if (gullOn.current) {
            startGulls();
            if (passT.current === undefined) pass();
          }
        })
        .catch(() => {});
    load("/uploads/seagulls.mp3", gullBuf);
    load("/uploads/boat-pass.mp3", boatBuf);
  }, [pass, startGulls]);

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
      clearTimeout(passT.current);
      if (rig.current) {
        rig.current.ac.close();
        rig.current = null;
      }
      gullNodes.current = null;
    };
  }, []);

  return { sound, toggleSound, setOystrVisible };
}
