"use client";

import { useId, type CSSProperties, type PointerEvent } from "react";
import styles from "./ThreeBodyArtwork.module.css";

// An illustrative orbital study: each sun follows its own drawn trajectory.
const bodies = [
  { color: "#e99a42", shade: "#a64719", radius: 32, duration: 36, delay: -6, path: "M 570,340 C 570,450 360,535 180,440 C 15,350 160,180 350,220 C 470,245 570,280 570,340 Z" },
  { color: "#43b9d6", shade: "#19617f", radius: 24, duration: 43, delay: -22, path: "M 540,470 C 405,565 145,380 185,235 C 220,105 470,155 510,300 C 530,370 595,430 540,470 Z" },
  { color: "#a58adc", shade: "#55418e", radius: 18, duration: 29, delay: -11, path: "M 260,520 C 125,485 255,180 430,195 C 600,210 510,460 355,475 C 310,480 295,530 260,520 Z" },
];

export default function ThreeBodyArtwork() {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `three-${uid}-${name}`;
  const respond = (event: PointerEvent<SVGSVGElement>) => {
    if (!event.isPrimary) return;
    const scene = event.currentTarget;
    const matrix = scene.getScreenCTM();
    if (!matrix) return;
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    scene.dataset.engaged = "true";
    scene.style.setProperty("--pointer-x", `${Math.max(-1, Math.min(1, (point.x - 350) / 350))}`);
    scene.style.setProperty("--pointer-y", `${Math.max(-1, Math.min(1, (point.y - 380) / 380))}`);
  };
  const reset = (event: PointerEvent<SVGSVGElement>) => {
    if (!event.isPrimary) return;
    delete event.currentTarget.dataset.engaged;
    event.currentTarget.style.setProperty("--pointer-x", "0");
    event.currentTarget.style.setProperty("--pointer-y", "0");
  };

  return <svg className={`ds-artwork-orbital ${styles.scene}`} viewBox="0 0 700 760" fill="none" aria-hidden="true"
    onPointerMove={respond} onPointerDown={respond} onPointerLeave={reset} onPointerCancel={reset}
    onPointerUp={event => { if (event.pointerType !== "mouse") reset(event); }}>
    <defs>
      {bodies.map((body, index) => <radialGradient key={index} id={id(`sun-${index}`)} cx="30%" cy="25%" r="80%">
        <stop stopColor="#fff8df"/><stop offset=".3" stopColor={body.color}/><stop offset="1" stopColor={body.shade}/>
      </radialGradient>)}
    </defs>

    <g className={styles.reference}>
      <circle cx="350" cy="355" r="280" strokeWidth=".7"/>
      <circle cx="350" cy="355" r="263" strokeDasharray="1 10"/>
      <path d="M350 62V91M350 619V648M57 355H86M614 355H643"/>
      {Array.from({ length: 60 }, (_, index) => <path key={index}
        d={index % 5 === 0 ? "M350 75V86" : "M350 75V79"}
        transform={`rotate(${index * 6} 350 355)`} strokeWidth={index % 5 === 0 ? 1 : .6}/>)}
      <path d="M338 355H362M350 343V367"/>
      <circle cx="350" cy="355" r="5"/>
    </g>

    <g className={styles.coordinates}>
      <text x="350" y="49" textAnchor="middle">090°</text>
      <text x="350" y="670" textAnchor="middle">270°</text>
      <text x="42" y="359" textAnchor="end">180°</text>
      <text x="658" y="359">000°</text>
    </g>

    {bodies.map((body, index) => <g key={index}>
      <path d={body.path} stroke={body.color} strokeWidth="1.15" opacity=".65"/>
      <path d={body.path} stroke={body.color} strokeWidth="3" strokeDasharray="48 1200" strokeLinecap="round" opacity=".8"/>
    </g>)}

    {bodies.map((body, index) => <g key={index} className={styles.body} style={{
      offsetPath: `path('${body.path}')`,
      "--duration": `${body.duration}s`,
      "--delay": `${body.delay}s`,
      "--position": `${-body.delay / body.duration * 100}%`,
    } as CSSProperties}>
      <circle r={body.radius + 9} stroke={body.color} strokeWidth=".7" opacity=".5"/>
      <circle r={body.radius + 3} fill="var(--surface)"/>
      <circle r={body.radius} fill={`url(#${id(`sun-${index}`)})`}/>
      <path d={`M${body.radius + 14} -8h19`} stroke={body.color} strokeWidth=".8"/>
      <text x={body.radius + 17} y="-15" className={styles.bodyLabel} fill={body.color}>0{index + 1}</text>
    </g>)}

    <g className={styles.caption} textAnchor="middle">
      <text x="350" y="714">THREE BODIES / NO FIXED HORIZON</text>
      <text x="350" y="738" className={styles.subcaption}>AN ORBITAL STUDY — I</text>
    </g>
  </svg>;
}
