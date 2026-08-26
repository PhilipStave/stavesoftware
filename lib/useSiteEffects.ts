"use client";

import { useEffect } from "react";

// Alle scroll-/muse-effektene fra prototypen, portert 1:1:
// preloader, reveals, typewriter, count-up, egendefinert markør, spotlight,
// magnetknapper, 3D-tilt, nav-scramble, video-restart ved inview,
// parallax, hero-skalering, horisontalt produktspor og bakgrunnsbytte.
export function useSiteEffects({
  onOystrVisible,
}: {
  onOystrVisible: (visible: boolean) => void;
}) {
  useEffect(() => {
    // Preloader
    const pre = document.getElementById("preloader");
    const num = document.getElementById("preload-num");
    const fill = document.getElementById("prefill");
    const line = document.getElementById("preline");
    const word = document.getElementById("preword");
    const GL = "#/\\%&@$§01";
    let p = 0;
    let preT: ReturnType<typeof setTimeout> | undefined;
    const tick = () => {
      p = Math.min(100, p + Math.random() * 13 + 3);
      const pi = Math.floor(p);
      if (num)
        num.textContent =
          (p < 100 && Math.random() < 0.3
            ? GL[Math.floor(Math.random() * GL.length)]
            : "") +
          pi +
          "%";
      if (fill) fill.style.clipPath = `inset(${100 - pi}% 0 0 0)`;
      if (line) line.style.width = pi + "%";
      if (p < 100) {
        preT = setTimeout(tick, 90);
      } else {
        if (num) num.textContent = "100%";
        if (word)
          word.style.animation =
            "prePop .5s cubic-bezier(.16,1,.3,1), preGlitch .25s steps(2) 2";
        setTimeout(() => {
          if (pre) {
            pre.style.transform = "translateY(-100%)";
            pre.style.pointerEvents = "none";
          }
          document.body.classList.add("loaded");
          setTimeout(() => {
            if (pre) pre.style.display = "none";
          }, 1100);
        }, 620);
      }
    };
    tick();
    // Reveals
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    // Typewriter
    const typeEl = (el: Element) => {
      const chars: HTMLElement[] = [];
      const walk = (node: Node) =>
        Array.from(node.childNodes).forEach((n) => {
          if (n.nodeType === 3 && n.textContent && n.textContent.trim()) {
            const frag = document.createDocumentFragment();
            n.textContent.split("").forEach((ch) => {
              const s = document.createElement("span");
              s.className = "twc";
              s.textContent = ch;
              frag.appendChild(s);
              chars.push(s);
            });
            (n as ChildNode).replaceWith(frag);
          } else if (
            n.nodeType === 1 &&
            !(n as Element).classList.contains("twcaret")
          )
            walk(n);
        });
      walk(el);
      el.classList.add("typing");
      let i = 0;
      const step = () => {
        if (i < chars.length) {
          chars[i++].classList.add("on");
          setTimeout(step, 45);
        } else
          setTimeout(() => {
            el.classList.remove("typing");
            el.classList.add("done");
          }, 900);
      };
      step();
    };
    const ioT = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ioT.unobserve(e.target);
            typeEl(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    // Count-up
    const ioC = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          ioC.unobserve(e.target);
          const el = e.target as HTMLElement;
          const target = parseFloat(el.getAttribute("data-count") || "0");
          const suf = el.getAttribute("data-suffix") || "";
          const pad = parseInt(el.getAttribute("data-pad") || "0");
          const t0 = performance.now();
          const dur = 1400;
          const anim = (t: number) => {
            const k = Math.min(1, (t - t0) / dur);
            const ease = 1 - Math.pow(1 - k, 3);
            let v = String(Math.round(target * ease));
            if (pad) v = v.padStart(pad, "0");
            el.textContent = v + suf;
            if (k < 1) requestAnimationFrame(anim);
          };
          requestAnimationFrame(anim);
        });
      },
      { threshold: 0.6 }
    );
    const observe = () => {
      document
        .querySelectorAll("[data-reveal]:not(.in)")
        .forEach((el) => io.observe(el));
      document
        .querySelectorAll(".tw:not(.done):not(.typing)")
        .forEach((el) => ioT.observe(el));
      document.querySelectorAll("[data-count]").forEach((el) => ioC.observe(el));
    };
    observe();
    const obsInterval = setInterval(observe, 800);
    setTimeout(() => clearInterval(obsInterval), 5000);
    // Cursor
    const dot = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100;
    const spot = document.getElementById("spot");
    const mm = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      const target = e.target as Element | null;
      const t = target && target.closest && target.closest("[data-hover]");
      if (ring) ring.classList.toggle("big", !!t);
      if (spot)
        spot.style.background = `radial-gradient(520px at ${mx}px ${my}px, rgba(143,184,224,.075), transparent 70%)`;
    };
    window.addEventListener("mousemove", mm);
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        ["techoverlay", "serviceoverlay"].forEach((id) => {
          const ov = document.getElementById(id);
          if (ov) ov.classList.remove("open");
        });
        document.documentElement.style.overflow = "";
      }
    };
    window.addEventListener("keydown", esc);
    const ht = document.getElementById("herotitle");
    let hx = 0,
      hy = 0;
    let raf1 = 0;
    const ringLoop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ring) ring.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`;
      if (ht) {
        const tx = (mx / window.innerWidth - 0.5) * -22;
        const ty = (my / window.innerHeight - 0.5) * -12;
        hx += (tx - hx) * 0.05;
        hy += (ty - hy) * 0.05;
        ht.style.transform = `translate3d(${hx.toFixed(1)}px, ${hy.toFixed(1)}px, 0)`;
      }
      raf1 = requestAnimationFrame(ringLoop);
    };
    ringLoop();
    // Magnetic
    const magnets: Array<
      [HTMLElement, (e: MouseEvent) => void, () => void]
    > = [];
    document.querySelectorAll<HTMLElement>("[data-magnet]").forEach((el) => {
      const over = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        el.style.transition = "transform .2s";
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.22}px)`;
      };
      const out = () => {
        el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
        el.style.transform = "";
      };
      el.addEventListener("mousemove", over);
      el.addEventListener("mouseleave", out);
      magnets.push([el, over, out]);
    });
    // 3D tilt
    const tilts: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];
    document.querySelectorAll<HTMLElement>("[data-tilt3d]").forEach((el) => {
      const over = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform .1s";
        el.style.transform = `rotateY(${(px * 7).toFixed(2)}deg) rotateX(${(-py * 7).toFixed(2)}deg)`;
      };
      const out = () => {
        el.style.transition = "transform .6s cubic-bezier(.16,1,.3,1)";
        el.style.transform = "";
      };
      el.addEventListener("mousemove", over);
      el.addEventListener("mouseleave", out);
      tilts.push([el, over, out]);
    });
    // Nav scramble
    type ScrambleEl = HTMLElement & { _si?: ReturnType<typeof setInterval> };
    const scrambles: Array<[ScrambleEl, () => void]> = [];
    const CH = "ABCDEFGHIKLMNOPRSTUVWX#/\\%&";
    document.querySelectorAll<ScrambleEl>("[data-scramble]").forEach((el) => {
      const orig = el.textContent || "";
      const enter = () => {
        let f = 0;
        clearInterval(el._si);
        el._si = setInterval(() => {
          el.textContent = orig
            .split("")
            .map((c, i) =>
              c === " "
                ? " "
                : i < f
                  ? orig[i]
                  : CH[Math.floor(Math.random() * CH.length)]
            )
            .join("");
          if (f++ > orig.length) {
            clearInterval(el._si);
            el.textContent = orig;
          }
        }, 32);
      };
      el.addEventListener("mouseenter", enter);
      scrambles.push([el, enter]);
    });
    // Video-restart ved inview + Oystr-synlighet for lydsystemet
    const ioV = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            v.currentTime = 0;
            v.play().catch(() => {});
          } else v.pause();
          if (v.id === "oystrvid") onOystrVisible(e.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );
    ["oystrvid", "altivvid"].forEach((id) => {
      const v = document.getElementById(id);
      if (v) ioV.observe(v);
    });
    // Scroll loop: parallax, progress, hero pin, horisontalt spor, bg-bytte
    const hero = document.getElementById("heroinner");
    const prodSec = document.getElementById("produkter");
    const track = document.getElementById("htrack");
    const pagebg = document.getElementById("pagebg");
    let light = false;
    let raf2 = 0;
    const loop = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      document.querySelectorAll<HTMLElement>("[data-plx]").forEach((el) => {
        const f = parseFloat(el.getAttribute("data-plx") || "0");
        const r = el.getBoundingClientRect();
        el.style.transform = `translateY(${((r.top + r.height / 2 - vh / 2) * f).toFixed(1)}px)`;
      });
      const h = document.documentElement;
      const prog = document.getElementById("progress");
      if (prog)
        prog.style.width = `${((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100).toFixed(2)}%`;
      if (hero) {
        const k = Math.min(1, Math.max(0, h.scrollTop / vh));
        hero.style.transform = `scale(${(1 - k * 0.1).toFixed(3)})`;
        hero.style.transformOrigin = "50% 100%";
        hero.style.opacity = String(Math.max(0, 1 - k * 1.4).toFixed(3));
      }
      const grain = document.getElementById("grain");
      if (grain) grain.style.opacity = h.scrollTop > vh * 0.85 ? ".55" : "0";
      let active = "topp";
      ["topp", "produkter", "tjenester", "modellen", "teknologi", "kontakt"].forEach(
        (id) => {
          const s = document.getElementById(id);
          if (s && s.getBoundingClientRect().top <= vh * 0.5) active = id;
        }
      );
      document.querySelectorAll("#dotnav a").forEach((a) => {
        const d = a.querySelector(".dot");
        if (d) d.classList.toggle("on", a.getAttribute("data-sect") === active);
      });
      if (prodSec && track) {
        const r = prodSec.getBoundingClientRect();
        const total = r.height - vh;
        const k = Math.min(1, Math.max(0, -r.top / total));
        const dist = Math.max(0, track.scrollWidth - vw);
        track.style.transform = `translateX(${(-k * dist).toFixed(1)}px)`;
        const wantLight = r.top < vh * 0.5 && r.bottom > vh * 0.5;
        if (wantLight !== light) {
          light = wantLight;
          if (pagebg)
            pagebg.style.background = light ? "#f2efe9" : "#0a0f16";
        }
      }
      raf2 = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      [io, ioT, ioC, ioV].forEach((o) => o.disconnect());
      clearInterval(obsInterval);
      clearTimeout(preT);
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("keydown", esc);
      document.documentElement.style.overflow = "";
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      magnets.concat(tilts).forEach(([el, over, out]) => {
        el.removeEventListener("mousemove", over);
        el.removeEventListener("mouseleave", out);
      });
      scrambles.forEach(([el, enter]) => {
        el.removeEventListener("mouseenter", enter);
        clearInterval(el._si);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
