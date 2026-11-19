import type { CSSProperties } from "react";

/** Inline, pre-paint: turn on reveal styles unless the user prefers reduced motion; undo them if the app never hydrates. */
export const revealBootScript = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.dataset.motion='on';setTimeout(function(){if(!window.__revealReady)d.removeAttribute('data-motion')},4000)}catch(e){}})()`;

/** Stagger position for a reveal element, read by the CSS as `--reveal-i`. */
export const revealIndex = (index: number) => ({ "--reveal-i": index }) as CSSProperties;
