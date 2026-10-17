"use client";

import { useId, type PointerEvent } from "react";
import styles from "./InterstellarArtwork.module.css";

export default function InterstellarArtwork() {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `interstellar-${uid}-${name}`;
  const paint = (name: string) => `url(#${id(name)})`;
  const respond = (event: PointerEvent<SVGSVGElement>) => {
    if (!event.isPrimary) return;
    const scene = event.currentTarget;
    const matrix = scene.getScreenCTM();
    if (!matrix) return;
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    scene.dataset.engaged = "true";
    scene.style.setProperty("--pointer-x", `${Math.max(-1, Math.min(1, (point.x - 400) / 400))}`);
    scene.style.setProperty("--pointer-y", `${Math.max(-1, Math.min(1, (point.y - 400) / 400))}`);
  };
  const reset = (event: PointerEvent<SVGSVGElement>) => {
    if (!event.isPrimary) return;
    delete event.currentTarget.dataset.engaged;
    event.currentTarget.style.setProperty("--pointer-x", "0");
    event.currentTarget.style.setProperty("--pointer-y", "0");
  };

  return (
    <svg className={`ds-artwork-orbital ${styles.scene}`} viewBox="0 0 800 800" fill="none" aria-hidden="true" focusable="false"
      onPointerMove={respond} onPointerDown={respond} onPointerLeave={reset} onPointerCancel={reset}
      onPointerUp={event => { if (event.pointerType !== "mouse") reset(event); }}>
      <defs>
        <linearGradient id={id("sky")} x1="0" y1="0" x2=".7" y2="1">
          <stop stopColor="#070f1d" /><stop offset=".55" stopColor="#142a3a" /><stop offset="1" stopColor="#6c858a" />
        </linearGradient>
        <radialGradient id={id("aura")}>
          <stop stopColor="#d7edee" stopOpacity=".3" /><stop offset=".6" stopColor="#77bbcb" stopOpacity=".12" /><stop offset="1" stopColor="#77bbcb" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("portal")} cx="35%" cy="30%" r="75%">
          <stop stopColor="#34586c" /><stop offset=".45" stopColor="#132e43" /><stop offset=".82" stopColor="#08121e" /><stop offset=".94" stopColor="#587c8c" /><stop offset="1" stopColor="#def5ef" />
        </radialGradient>
        <linearGradient id={id("rim")} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#658b9b" /><stop offset=".3" stopColor="#e9fff5" /><stop offset=".6" stopColor="#f5d2a1" /><stop offset="1" stopColor="#78b7cf" />
        </linearGradient>
        <linearGradient id={id("sea")} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#5b7b82" /><stop offset=".2" stopColor="#233f4b" /><stop offset="1" stopColor="#080e17" />
        </linearGradient>
        <linearGradient id={id("reflection")} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#d9eee2" stopOpacity=".65" /><stop offset="1" stopColor="#92c7cc" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("hull")} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#344652" /><stop offset=".18" stopColor="#a6bac0" /><stop offset=".43" stopColor="#edf1e8" /><stop offset=".7" stopColor="#9baeb3" /><stop offset="1" stopColor="#344552" />
        </linearGradient>
        <linearGradient id={id("booster")} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#283946" /><stop offset=".35" stopColor="#94aab1" /><stop offset=".7" stopColor="#d9e1dc" /><stop offset="1" stopColor="#475d68" />
        </linearGradient>
        <linearGradient id={id("flame")} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#fff8dc" /><stop offset=".24" stopColor="#cdefff" stopOpacity=".95" /><stop offset=".7" stopColor="#69b9da" stopOpacity=".55" /><stop offset="1" stopColor="#69b9da" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("fade")} x1="0" y1="0" x2="0" y2="1">
          <stop offset=".72" stopColor="white" /><stop offset="1" stopColor="black" />
        </linearGradient>
        <clipPath id={id("window")}><rect x="76" y="40" width="648" height="698" rx="324" /></clipPath>
        <clipPath id={id("sphere")}><circle cx="423" cy="315" r="165" /></clipPath>
        <mask id={id("dissolve")}><rect width="800" height="800" fill={paint("fade")} /></mask>
        <filter id={id("glow")} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" /></filter>
      </defs>

      <g mask={paint("dissolve")}>
        <g clipPath={paint("window")}>
          <rect x="76" y="40" width="648" height="700" fill={paint("sky")} />
          <g className={styles.background}>
            <g fill="#e8f5f4">
              {Array.from({ length: 90 }, (_, i) => (
                <circle key={i} className={styles.star} cx={80 + (i * 137.5) % 640} cy={45 + (i * 193.7) % 475}
                  r={i % 11 === 0 ? 1.4 : .65} opacity={.2 + i % 5 * .13} />
              ))}
            </g>
            <path d="M110 216Q350 76 697 177" stroke="#9ac4d1" strokeOpacity=".12" strokeWidth="28" filter={paint("glow")} />
            <circle cx="423" cy="315" r="280" fill={paint("aura")} />
            <circle cx="178" cy="166" r="22" fill="#a5b8bd" />
            <circle cx="186" cy="160" r="22" fill="#132534" />
          </g>

          <g className={styles.depth}>
            <g className={styles.breath}>
              <circle cx="423" cy="315" r="172" stroke={paint("rim")} strokeWidth="9" opacity=".45" filter={paint("glow")} />
              <circle cx="423" cy="315" r="165" fill={paint("portal")} />
              <g clipPath={paint("sphere")}>
                <g className={styles.currents} stroke="#b8dce6" fill="none">
                  {Array.from({ length: 14 }, (_, i) => (
                    <ellipse key={i} cx={423 + i * 3} cy="315" rx={24 + i * 12} ry="166"
                      transform={`rotate(-32 423 315)`} strokeWidth={i % 3 === 0 ? .9 : .5} opacity={.07 + i * .011} />
                  ))}
                </g>
                <path d="M239 355Q352 202 590 275M250 368Q385 231 597 284" stroke="#e9dcc2" strokeOpacity=".4" strokeWidth="1" />
                <path d="M247 360Q367 217 595 280" stroke="#d2ece5" strokeOpacity=".22" strokeWidth="15" filter={paint("glow")} />
                <g fill="#edf9ef">
                  {Array.from({ length: 30 }, (_, i) => <circle key={i} cx={275 + (i * 91) % 295} cy={170 + (i * 63) % 290} r={i % 6 === 0 ? 1.5 : .6} opacity=".5" />)}
                </g>
              </g>
              <circle cx="423" cy="315" r="165" stroke={paint("rim")} strokeWidth="2" />
              <path className={styles.rimLight} d="M276 240A165 165 0 0 1 571 388" stroke="#f3f9df" strokeWidth="3" strokeLinecap="round" strokeDasharray="70 450" />
              <circle cx="423" cy="315" r="186" stroke="#b7d8de" strokeOpacity=".14" strokeWidth=".6" />
            </g>
          </g>

          <path d="M65 524Q225 500 402 515T735 516V780H65Z" fill={paint("sea")} />
          <path d="M76 522Q390 504 724 517" stroke="#d9eee2" strokeOpacity=".5" />
          <g className={styles.reflection} stroke={paint("reflection")} strokeLinecap="round">
            {Array.from({ length: 22 }, (_, i) => (
              <path key={i} d={`M${370 - i * 3 + i % 3 * 9} ${528 + i * 7}h${93 + i * 6 - i % 4 * 12}`} strokeWidth={1 + i * .12} opacity={.7 - i * .023} />
            ))}
          </g>
          <g className={styles.ocean} stroke="#a4cbd2" strokeWidth=".6" fill="none">
            {Array.from({ length: 15 }, (_, i) => (
              <path key={i} d={`M60 ${538 + i * 12}q90 -8 173 0t170 0t170 0t170 0`} opacity={.23 - i * .01} />
            ))}
          </g>
          <path d="M76 681L121 657L161 663L204 641L228 649L256 638L285 661L324 663L361 696L422 726H76Z" fill="#0b1620" />
          <path d="M76 681L121 657L161 663L204 641L228 649L256 638L285 661" stroke="#829ba3" strokeOpacity=".35" />
        </g>
      </g>

      <g className={styles.probeDepth}>
        <g className={styles.probe}>
          <g transform="translate(558 494) rotate(25)">
            <path d="M-20 37Q-20 67 -13 88Q-10 68 -9 40ZM9 40Q10 68 13 88Q20 67 20 37Z" fill={paint("flame")} opacity=".7" filter={paint("glow")} />
            <path d="M-17 39Q-17 62 -13 78Q-10 60 -11 41ZM11 41Q10 60 13 78Q17 62 17 39Z" fill={paint("flame")} opacity=".8" />
            <path d="M-5 43Q-6 74 0 103Q6 74 5 43Z" fill={paint("flame")} opacity=".7" filter={paint("glow")} />
            <path d="M-3 43Q-3 71 0 86Q3 71 3 43Z" fill={paint("flame")} />

            <path d="M-12 9L-29 21L-37 48L-22 40L-13 32Z" fill="#5a707a" stroke="#d3e0dc" strokeWidth=".8" />
            <path d="M12 9L29 21L37 48L22 40L13 32Z" fill="#374e5b" stroke="#b6cbd0" strokeWidth=".8" />
            <path d="M-13 28L-38 37L-43 46L-13 39ZM13 28L38 37L43 46L13 39Z" fill="#263c49" stroke="#a5bac0" strokeWidth=".7" />

            <path d="M-23 -8Q-22 -15 -19 -19Q-16 -15 -15 -8V38H-23Z" fill={paint("booster")} stroke="#a9bec2" strokeWidth=".8" />
            <path d="M15 -8Q16 -15 19 -19Q22 -15 23 -8V38H15Z" fill={paint("booster")} stroke="#849ca5" strokeWidth=".8" />
            <path d="M-23 26H-15M15 26H23" stroke="#263a45" strokeWidth="2" />
            <path d="M-22 34H-16V42H-22ZM16 34H22V42H16Z" fill="#202e38" stroke="#a9bfc4" strokeWidth=".8" />
            <path d="M-11 -26Q-8 -43 0 -55Q8 -43 11 -26L12 34Q10 39 7 42H-7Q-10 39 -12 34Z" fill={paint("hull")} stroke="#e5ede6" strokeWidth="1" />
            <path d="M-7 -35Q-4 -45 0 -51Q4 -45 7 -35Z" fill="#d7ded9" opacity=".8" />
            <path d="M-7 -22Q0 -27 7 -22L8 -11Q0 -14 -8 -11Z" fill="#142b3b" stroke="#a8c9d3" strokeWidth=".8" />
            <path d="M-5 -21Q-1 -23 3 -22" stroke="#d3e7eb" strokeWidth=".8" opacity=".7" />
            <path d="M-11 -5H11M-11 20H11M-8 36H8" stroke="#354d59" strokeWidth="1.5" opacity=".9" />
            <path d="M-8 3H-5M5 3H8M-7 27H7" stroke="#e7eee9" strokeWidth="1" opacity=".65" />
            <path d="M-7 41L-5 47H5L7 41Z" fill="#263641" stroke="#abbec1" strokeWidth=".8" />
            <ellipse cx="0" cy="47" rx="4" ry="2" fill="#e6f7f3" />
            <circle cx="-35" cy="43" r="1.5" fill="#e8a56d" />
            <circle cx="35" cy="43" r="1.5" fill="#e8a56d" />
          </g>
        </g>
      </g>
      <path d="M63 384V364a337 337 0 0 1 674 0v20" stroke="var(--accent)" strokeOpacity=".2" strokeWidth=".7" />
      <path d="M49 368h28M723 368h28M400 13v22" stroke="var(--accent)" strokeOpacity=".5" strokeWidth=".7" />
      <g fill="var(--text-muted)" fontFamily="ui-monospace, monospace" fontSize="7" letterSpacing="2.5">
        <text x="41" y="578" transform="rotate(-90 41 578)">A PASSAGE THROUGH THE UNKNOWN</text>
        <text x="760" y="260" transform="rotate(90 760 260)">DEEP SPACE / EXPEDITION 01</text>
        <text x="400" y="755" textAnchor="middle" fill="var(--accent)" fontSize="9">THE OTHER SIDE OF INFINITY</text>
        <text x="400" y="779" textAnchor="middle" fontSize="6" opacity=".6">SOMEWHERE, SOMETHING INCREDIBLE IS WAITING</text>
      </g>
    </svg>
  );
}
