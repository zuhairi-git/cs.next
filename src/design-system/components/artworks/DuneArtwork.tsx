"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import styles from "./DuneArtwork.module.css";

// Fixed coordinates make the scene deterministic during server rendering.
const stars = [
  [180, 188, 1], [231, 114, .8], [312, 82, 1.1], [546, 126, .8],
  [604, 211, 1.2], [156, 305, .7], [269, 233, .7], [634, 330, .8],
  [335, 167, .6], [560, 338, .6], [209, 367, .7], [655, 276, .6],
];
const dust = Array.from({ length: 35 }, (_, index) => ({
  x: 110 + (index * 137) % 575,
  y: 385 + (index * 47) % 300,
  radius: index % 5 === 0 ? 1.4 : .65,
}));

/** A self-contained scene. IDs are unique even when multiple specimens share a page. */
export default function DuneArtwork() {
  const instance = useId().replace(/:/g, "");
  const id = (name: string) => `dune-${instance}-${name}`;
  const paint = (name: string) => `url(#${id(name)})`;
  const [gusts, setGusts] = useState<{ x: number; y: number; key: number }[]>([]);
  const lastGust = useRef(0);
  const gustId = useRef(0);
  useEffect(() => {
    if (!gusts.length) return;
    // Also clears feedback when reduced-motion styles disable animations.
    const timeout = window.setTimeout(() => setGusts([]), 1600);
    return () => window.clearTimeout(timeout);
  }, [gusts]);
  const stirSand = (point: DOMPoint, force = false) => {
    const now = performance.now();
    if (!force && now - lastGust.current < 240) return;
    lastGust.current = now;
    const gust = { x: point.x, y: point.y, key: ++gustId.current };
    setGusts(previous => [...previous.slice(-1), gust]);
  };
  const respond = (event: PointerEvent<SVGSVGElement>) => {
    if (!event.isPrimary) return null;
    const scene = event.currentTarget;
    const matrix = scene.getScreenCTM();
    if (!matrix) return null;
    scene.dataset.engaged = "true";
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    if (event.pointerType === "mouse") {
      scene.style.setProperty("--pointer-x", `${Math.max(-1, Math.min(1, (point.x - 400) / 400))}`);
      scene.style.setProperty("--pointer-y", `${Math.max(-1, Math.min(1, (point.y - 425) / 425))}`);
    }
    return point;
  };
  const reset = (event: PointerEvent<SVGSVGElement>) => {
    if (!event.isPrimary) return;
    delete event.currentTarget.dataset.engaged;
    event.currentTarget.style.setProperty("--pointer-x", "0");
    event.currentTarget.style.setProperty("--pointer-y", "0");
  };

  return <svg className={`ds-artwork-horizon ${styles.scene}`} viewBox="0 0 800 850" fill="none" aria-hidden="true" focusable="false"
    onPointerMove={event => {
      const point = respond(event);
      if (point && (event.buttons & 1)) stirSand(point);
    }} onPointerLeave={reset} onPointerCancel={reset}
    onPointerUp={event => { if (event.pointerType !== "mouse") reset(event); }}
    onPointerDown={event => {
      if (!event.isPrimary || event.button !== 0) return;
      const point = respond(event);
      if (point) stirSand(point, true);
    }}>
    <defs>
      <linearGradient id={id("touch-sand")} x1="-28" y1="0" x2="66" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f4ce92" stopOpacity="0" />
        <stop offset=".45" stopColor="#f4ce92" stopOpacity=".7" />
        <stop offset="1" stopColor="#f4ce92" stopOpacity="0" />
      </linearGradient>
      <clipPath id={id("portal")}>
        <path d="M72 752V358a328 328 0 0 1 656 0v394Z" />
      </clipPath>
      <clipPath id={id("planet")}><circle cx="452" cy="255" r="100" /></clipPath>
      <linearGradient id={id("sky")} x1="400" y1="40" x2="400" y2="650" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0a1018" /><stop offset=".35" stopColor="#24252a" />
        <stop offset=".65" stopColor="#78533b" /><stop offset=".83" stopColor="#c28d55" /><stop offset="1" stopColor="#483124" />
      </linearGradient>
      <radialGradient id={id("atmosphere")} cx="0" cy="0" r="1" gradientTransform="translate(452 323) rotate(90) scale(300 270)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffc785" stopOpacity=".44" /><stop offset=".43" stopColor="#d78e43" stopOpacity=".16" /><stop offset="1" stopColor="#d78e43" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={id("corona")} cx="0" cy="0" r="1" gradientTransform="translate(452 255) scale(156)" gradientUnits="userSpaceOnUse">
        <stop offset=".57" stopColor="#fff1c6" stopOpacity="0" /><stop offset=".65" stopColor="#ffe2a2" stopOpacity=".85" />
        <stop offset=".7" stopColor="#eaaa54" stopOpacity=".35" /><stop offset="1" stopColor="#d79245" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={id("sun")} x1="377" y1="174" x2="526" y2="349" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8f6445" /><stop offset=".4" stopColor="#dfae6b" /><stop offset=".8" stopColor="#fff2c9" /><stop offset="1" stopColor="#e6a057" />
      </linearGradient>
      <radialGradient id={id("planet-face")} cx="0" cy="0" r="1" gradientTransform="translate(419 218) rotate(51) scale(155 165)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0c131a" /><stop offset=".73" stopColor="#171b20" /><stop offset="1" stopColor="#5c4535" />
      </radialGradient>
      <linearGradient id={id("haze")} x1="400" y1="390" x2="400" y2="550" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f0bf81" stopOpacity="0" /><stop offset=".5" stopColor="#e7b575" stopOpacity=".27" /><stop offset="1" stopColor="#e7b575" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={id("far-sand")} x1="390" y1="443" x2="390" y2="650" gradientUnits="userSpaceOnUse">
        <stop stopColor="#b38353" /><stop offset=".45" stopColor="#785137" /><stop offset="1" stopColor="#4f3428" />
      </linearGradient>
      <linearGradient id={id("horizon-sand")} x1="400" y1="450" x2="400" y2="550" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c39a6b" stopOpacity=".5" /><stop offset=".4" stopColor="#ad8257" stopOpacity=".55" /><stop offset="1" stopColor="#99714d" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={id("middle-sand")} x1="374" y1="505" x2="439" y2="718" gradientUnits="userSpaceOnUse">
        <stop stopColor="#efc486" /><stop offset=".15" stopColor="#bc874d" /><stop offset=".58" stopColor="#805233" /><stop offset="1" stopColor="#3c2922" />
      </linearGradient>
      <linearGradient id={id("slip-face")} x1="458" y1="503" x2="563" y2="651" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4b3026" /><stop offset=".6" stopColor="#69432c" /><stop offset="1" stopColor="#946037" />
      </linearGradient>
      <linearGradient id={id("near-sand")} x1="343" y1="633" x2="390" y2="814" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c08d56" /><stop offset=".16" stopColor="#795035" /><stop offset=".55" stopColor="#35251e" /><stop offset="1" stopColor="#17130f" />
      </linearGradient>
      <linearGradient id={id("crest")} x1="40" y1="580" x2="744" y2="580" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f4ce92" stopOpacity="0" /><stop offset=".38" stopColor="#f4ce92" stopOpacity=".65" /><stop offset=".65" stopColor="#ffe6ac" /><stop offset="1" stopColor="#f4ce92" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={id("frame")} x1="116" y1="87" x2="700" y2="769" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a38256" stopOpacity=".3" /><stop offset=".35" stopColor="#e1ba7e" stopOpacity=".7" /><stop offset=".66" stopColor="#a38256" stopOpacity=".15" /><stop offset="1" stopColor="#e1ba7e" stopOpacity=".5" />
      </linearGradient>
      <linearGradient id={id("dissolve")} x1="0" y1="680" x2="0" y2="814" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" /><stop offset=".25" stopColor="#f5f5f5" /><stop offset=".55" stopColor="#a0a0a0" /><stop offset=".8" stopColor="#303030" /><stop offset="1" stopColor="black" />
      </linearGradient>
      <mask id={id("base-fade")}><rect width="800" height="850" fill={paint("dissolve")} /></mask>
      <linearGradient id={id("sand-edges")} x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="black" /><stop offset=".04" stopColor="#202020" /><stop offset=".09" stopColor="#a0a0a0" /><stop offset=".16" stopColor="white" />
        <stop offset=".84" stopColor="white" /><stop offset=".91" stopColor="#a0a0a0" /><stop offset=".96" stopColor="#202020" /><stop offset="1" stopColor="black" />
      </linearGradient>
      <mask id={id("sand-fade")} maskUnits="userSpaceOnUse" x="-20" y="470" width="840" height="370">
        <rect x="-20" y="470" width="840" height="370" fill={paint("sand-edges")} />
      </mask>
      <filter id={id("grain")} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="3" stitchTiles="stitch" seed="12" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <filter id={id("glow")} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" /></filter>
    </defs>

    {/* The architectural aperture frames a world, rather than a flat emblem. */}
    <path d="M49 630V358a351 351 0 0 1 702 0v272" stroke="var(--ds-accent)" strokeOpacity=".15" />
    <path d="M62 681V358a338 338 0 0 1 676 0v323" stroke={paint("frame")} strokeWidth=".8" />
    <g className={styles.registration} stroke="var(--ds-accent)" strokeOpacity=".5" strokeWidth=".7">
      <path d="M400 4V29M387 16H413M47 350H61M739 350H753M49 369H56M744 369H751" />
      <path d="M103 145L111 151M689 151L697 145M190 61L194 70M606 70L610 61" />
    </g>

    <g mask={paint("base-fade")}>
      <g clipPath={paint("portal")}>
        <rect x="72" y="29" width="656" height="750" fill={paint("sky")} />
        <rect x="72" y="29" width="656" height="650" fill={paint("atmosphere")} />
        <g className={styles.stars} fill="#e8d6b9" opacity=".5">
          {stars.map(([x, y, radius], index) => <circle key={index} cx={x} cy={y} r={radius} />)}
        </g>
        <path d="M145 180L183 180M164 161V199" stroke="#cbbba1" strokeOpacity=".2" strokeWidth=".5" />
        <circle cx="164" cy="180" r="2" fill="#e9d8bd" fillOpacity=".5" />

        {/* An eclipsed star: a dark sphere, warm rim light, and a breathing corona. */}
        <g className={styles.eclipse}>
        <circle className={styles.corona} cx="452" cy="255" r="156" fill={paint("corona")} />
        <circle cx="452" cy="255" r="103" stroke="#ffdf9a" strokeOpacity=".35" strokeWidth="6" filter={paint("glow")} />
        <circle cx="452" cy="255" r="103" fill={paint("sun")} />
        <circle cx="449" cy="251" r="100" fill={paint("planet-face")} />
        <g clipPath={paint("planet")} opacity=".1" className={styles.grain}>
          <rect x="348" y="150" width="208" height="210" filter={paint("grain")} />
        </g>
        <path d="M537 311A103 103 0 0 1 390 337" stroke="#fff0c8" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="521" cy="330" r="3" fill="#fff3ca" filter={paint("glow")} />
        <circle cx="452" cy="255" r="123" stroke="#e1b979" strokeOpacity=".12" strokeWidth=".5" />
        <path d="M351 129A162 162 0 0 1 604 310" stroke="#e1b979" strokeOpacity=".13" strokeWidth=".5" strokeDasharray="2 8" />
        </g>

        {/* The far horizon: haze-softened geology and a monumental distant citadel. */}
        <path d="M55 479L96 457L131 461L162 438L199 433L228 452L268 447L305 462L350 454L382 442L420 445L465 427L514 434L543 421L590 431L642 411L675 421L736 403V584H55Z" fill="#68513f" opacity=".66" />
        <path d="M48 490C104 482 143 470 181 475S221 468 244 469S285 463 308 468S347 477 369 474S402 465 426 468S464 472 487 465S525 451 548 455S582 461 606 453S650 442 680 447S725 451 752 444V568H48Z" fill={paint("horizon-sand")} />
        <g fill="#3c3530">
          <path d="M254 470L297 357L306 357L347 470Z" /><path d="M232 476L254 421H267L276 476Z" />
          <path d="M343 470V437L350 431H361L369 472Z" /><path d="M282 466V399H290V466Z" />
        </g>
        <path d="M306 357L347 470H311Z" fill="#b49160" fillOpacity=".56" />
        <path d="M297 357H306M255 422H265" stroke="#e0b678" strokeOpacity=".65" strokeWidth=".8" />
        <path d="M297 376L278 431M298 392L285 431M300 408L293 431" stroke="#d3b17d" strokeOpacity=".2" strokeWidth=".5" />
        <path d="M305 470V444a5 5 0 0 0-10 0v26" fill="#221f1c" />
        <rect x="72" y="385" width="656" height="180" fill={paint("haze")} className={styles.haze} />

        {/* A distant winged silhouette provides a second scale reference. */}
        <g className={styles.birdFlight}>
        <g transform="translate(212 335) rotate(-12)" fill="#292a28" opacity=".8">
          <g className={styles.birdWings}><path d="M0 1L-24 -9L-5 -1L-18 8L0 3L18 8L5 -1L24 -9Z" /></g>
          <path d="M-2 -3L2 -3L3 8H-3Z" />
        </g>
        </g>

        {/* Back dune and its sloping leeward face. */}
        <path d="M48 531C155 483 225 489 331 509C450 533 536 444 748 471V716H48Z" fill={paint("far-sand")} />
        <path d="M48 531C155 483 225 489 331 509C450 533 536 444 748 471" stroke="#edc18a" strokeOpacity=".35" strokeWidth=".8" />
        <path d="M369 513C487 517 583 475 741 477L728 530C563 491 503 551 402 558Z" fill="#5b3c2d" opacity=".36" />
        <g stroke="#e5b17c" strokeOpacity=".12" strokeWidth=".65">
          <path d="M100 541C210 511 258 526 331 530M93 551C207 520 268 539 346 541M89 562C206 532 274 550 354 553" />
          <path d="M540 486C610 469 672 472 718 481M520 498C593 477 664 482 716 491M501 511C579 487 656 492 714 502" />
        </g>
      </g>

      {/* The near dunes spill out of the aperture for tangible foreground depth. */}
      <g mask={paint("sand-fade")}>
      <g className={styles.middleDune}>
      <path d="M0 674C98 600 211 582 295 569C379 556 424 502 504 488C439 536 526 599 621 605C704 612 755 566 800 556C775 615 753 716 704 783H94C50 750 22 715 0 674Z" fill={paint("middle-sand")} />
      <path d="M504 488C439 536 526 599 621 605C704 612 755 566 800 556C780 604 759 652 737 692C670 679 587 634 550 601C510 565 469 537 504 488Z" fill={paint("slip-face")} />
      <path d="M0 674C98 600 211 582 295 569C379 556 424 502 504 488" stroke={paint("crest")} strokeWidth="1.5" />
      <path d="M504 488C476 511 476 531 498 554" stroke="#ffdf9f" strokeOpacity=".65" strokeWidth=".8" />
      <g className={styles.contours} stroke="#f1c48b" strokeWidth=".75" fill="none">
        <path d="M69 647C162 600 249 618 332 579C397 549 428 519 464 512" />
        <path d="M78 657C173 611 249 630 339 589C403 560 428 532 454 526" />
        <path d="M87 667C181 625 254 641 344 602C403 576 426 546 450 541" />
        <path d="M98 677C190 638 262 652 350 615C405 592 425 562 453 557" />
        <path d="M111 687C204 651 274 663 357 628C410 607 431 579 463 574" />
        <path d="M127 697C218 665 286 675 368 642C420 621 446 597 480 593" />
        <path d="M143 708C231 680 302 686 382 657C438 636 465 616 499 613" />
        <path d="M536 572C578 610 661 633 738 605M550 590C594 625 658 644 742 619M567 612C612 641 674 656 746 636" />
      </g>

      {/* The last ridge, footsteps, and travelers anchor the immense landscape. */}
      </g>
      <g className={styles.nearDune}>
      <path d="M0 770C100 670 216 664 301 681C387 699 445 677 504 637C592 578 688 605 800 668C768 730 724 785 661 828H129C68 815 27 795 0 770Z" fill={paint("near-sand")} />
      <path d="M0 770C100 670 216 664 301 681C387 699 445 677 504 637C592 578 688 605 800 668" stroke={paint("crest")} strokeWidth="1.1" />
      <g stroke="#cc9e64" strokeOpacity=".11" strokeWidth=".6">
        <path d="M51 754C155 689 229 703 304 709S438 701 517 656S650 625 751 663" />
        <path d="M69 766C168 707 238 719 314 724S443 718 524 674S646 642 737 674" />
        <path d="M87 778C180 725 251 734 325 739S450 735 531 691S646 660 723 686" />
      </g>
      <g className={styles.travelers} fill="#211d18">
        <path d="M498 637L478 648L503 640Z" opacity=".5" />
        <g className={styles.travelerStep}>
        <circle cx="502" cy="617" r="2.5" />
        <path d="M499 620L505 620L508 636L496 638Z" />
        <g className={styles.travelerLegs}><path d="M501 632L500 641M505 632L506 638" stroke="#211d18" strokeWidth="1.7" /></g>
        <path className={styles.scarf} d="M499 622Q491 625 490 621Q492 628 500 626Z" />
        </g>
        <g className={`${styles.travelerStep} ${styles.secondTraveler}`}>
        <circle cx="521" cy="609" r="1.9" /><path d="M519 611L524 611L526 625L516 626Z" />
        <g className={styles.travelerLegs}><path d="M520 623L519 629M524 621L525 626" stroke="#211d18" strokeWidth="1.3" /></g>
        </g>
      </g>
      <g fill="#241d17" opacity=".48">
        {Array.from({ length: 8 }, (_, index) => <g key={index} transform={`translate(${495 - index * 5.8} ${647 + index * 6.8}) rotate(-32)`}>
          <ellipse rx="1.1" ry="2" /><ellipse cx="5" cy="3" rx="1.1" ry="2" />
        </g>)}
      </g>
      </g>
      </g>
      <g className={styles.wind}>
      <g className={styles.windStreaks} stroke="#f8d496" strokeWidth=".7" strokeLinecap="round">
        <path d="M138 550Q190 535 239 540" />
        <path d="M366 591Q411 574 455 576" />
        <path d="M553 480Q607 468 657 472" />
        <path d="M166 709Q214 699 261 705" />
      </g>
      <g className={styles.dust} fill="#f8d496">
        {dust.map((particle, index) => <circle key={index} cx={particle.x} cy={particle.y} r={particle.radius} opacity={.12 + (index % 4) * .1} />)}
      </g>
      </g>
      {gusts.map(gust => <g key={gust.key} transform={`translate(${gust.x} ${gust.y})`} pointerEvents="none">
        <g className={styles.sandBurst}>
          <g className={styles.touchWind} stroke={paint("touch-sand")} strokeWidth="1.2" strokeLinecap="round">
            <path d="M-28 8Q6 -8 32 -3T66 -7" />
          </g>
          {Array.from({ length: 6 }, (_, i) => <circle key={i} className={styles.spiceGrain}
            cx={i * 6 - 15} cy={(i * 7) % 12 - 6} r={i % 3 === 0 ? 1.2 : .7}
            fill="#f4ce92"
            style={{ "--grain-x": `${16 + i * 4}px`, "--grain-y": `${-6 - i * 3}px`, "--grain-delay": `${i * 30}ms` } as CSSProperties} />)}
        </g>
      </g>)}
      <g clipPath={paint("portal")} className={styles.grain} opacity=".065">
        <rect x="72" y="29" width="656" height="750" filter={paint("grain")} />
      </g>
    </g>

    {/* Quiet gallery detailing, outside the scene. */}
    <path d="M72 595V358a328 328 0 0 1 656 0v212" stroke={paint("frame")} strokeWidth="1" />
    <g className={styles.registration} fill="var(--ds-accent)" opacity=".55" fontFamily="ui-monospace, monospace" fontSize="7" letterSpacing="2.5">
      <text x="27" y="516" transform="rotate(-90 27 516)">ARRAKIS / THE LONG HORIZON</text>
      <text x="777" y="369" transform="rotate(90 777 369)">STUDY OF LIGHT — II</text>
    </g>
    <path d="M286 817H370M430 817H514M400 810L407 817L400 824L393 817Z" stroke="var(--ds-accent)" strokeOpacity=".4" strokeWidth=".7" />
  </svg>;
}
