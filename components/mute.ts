// React SSR-er ikke `muted`-attributtet; sett det før hydrering rekker å
// blokkere autoplay.
export const mute = (el: HTMLVideoElement | null) => {
  if (el) {
    el.muted = true;
    el.defaultMuted = true;
  }
};
