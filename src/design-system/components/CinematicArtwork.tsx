export default function CinematicArtwork() {
  return (
    <div className="cinematic-artwork" aria-hidden="true">
      <svg className="space-art" viewBox="0 0 800 800" fill="none">
        <defs>
          <radialGradient id="space-halo">
            <stop stopColor="#d5a06c" stopOpacity=".16" />
            <stop offset=".55" stopColor="#9c714d" stopOpacity=".07" />
            <stop offset="1" stopColor="#9c714d" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="accretion">
            <stop stopColor="#a7774c" stopOpacity="0" />
            <stop offset=".3" stopColor="#e8c09a" />
            <stop offset=".5" stopColor="#fff2dc" />
            <stop offset=".7" stopColor="#d6a371" />
            <stop offset="1" stopColor="#ad7b4e" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="event-horizon">
            <stop offset=".77" stopColor="#080a0b" />
            <stop offset=".87" stopColor="#080a0b" />
            <stop offset=".94" stopColor="#f7e5c8" />
            <stop offset=".965" stopColor="#b58658" />
            <stop offset="1" stopColor="#080a0b" stopOpacity="0" />
          </radialGradient>
          <filter id="orbit-glow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="fine-glow">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>
        <circle cx="400" cy="400" r="390" fill="url(#space-halo)" />
        {Array.from({ length: 64 }, (_, i) => (
          <circle
            key={i}
            cx={(i * 137.5 + 29) % 790}
            cy={(i * 197.3 + 41) % 790}
            r={i % 7 === 0 ? 1.4 : 0.65}
            fill="#e8ddcd"
            opacity={0.16 + (i % 4) * 0.14}
          />
        ))}
        <g className="orbital-instrument" stroke="#e6cfad" opacity=".16">
          <circle cx="400" cy="400" r="317" strokeDasharray="1 11" />
          <circle cx="400" cy="400" r="280" strokeWidth=".5" />
          <path d="M400 66v19M400 715v19M66 400h19M715 400h19M163 163l10 10m454 454 10 10m0-474-10 10M173 627l-10 10" />
        </g>
        <g transform="rotate(-24 400 400)">
          <ellipse
            cx="400"
            cy="410"
            rx="310"
            ry="57"
            stroke="url(#accretion)"
            strokeWidth="15"
            filter="url(#orbit-glow)"
            opacity=".7"
          />
          <ellipse
            cx="400"
            cy="410"
            rx="310"
            ry="50"
            stroke="url(#accretion)"
            strokeWidth="2"
          />
          <ellipse
            cx="400"
            cy="410"
            rx="285"
            ry="41"
            stroke="url(#accretion)"
            strokeWidth="1"
            opacity=".6"
          />
          <circle cx="400" cy="400" r="154" fill="url(#event-horizon)" />
          <path
            d="M91 410c49 86 569 86 618 0"
            stroke="url(#accretion)"
            strokeWidth="10"
            filter="url(#orbit-glow)"
          />
          <path
            d="M91 410c49 78 569 78 618 0"
            stroke="url(#accretion)"
            strokeWidth="2.5"
          />
          <path
            d="M104 416c80 64 511 64 592 0"
            stroke="url(#accretion)"
            strokeWidth="1"
            opacity=".6"
          />
          <path
            d="M254 397c0-195 292-195 292 0"
            stroke="#efcfaa"
            strokeWidth="3"
            filter="url(#fine-glow)"
          />
        </g>
        <g stroke="#d7bc98" strokeWidth=".7" opacity=".4">
          <path d="M543 199h80l30-30M270 596h-81l-30 30" />
          <circle cx="543" cy="199" r="3" />
          <circle cx="270" cy="596" r="3" />
        </g>
      </svg>
      <svg className="desert-art" viewBox="0 0 800 800" fill="none">
        <defs>
          <radialGradient id="desert-glow">
            <stop stopColor="#d79f69" stopOpacity=".25" />
            <stop offset="1" stopColor="#d79f69" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="desert-sun"
            x1="400"
            y1="120"
            x2="400"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f0cf9e" />
            <stop offset="1" stopColor="#a95633" />
          </linearGradient>
          <linearGradient
            id="dune-front"
            x1="400"
            y1="400"
            x2="400"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#986244" />
            <stop offset="1" stopColor="#191611" />
          </linearGradient>
          <linearGradient id="dune-back">
            <stop stopColor="#734a34" />
            <stop offset="1" stopColor="#bb8b5a" />
          </linearGradient>
        </defs>
        <circle cx="430" cy="350" r="350" fill="url(#desert-glow)" />
        <circle cx="440" cy="330" r="174" fill="url(#desert-sun)" />
        <circle cx="611" cy="179" r="32" fill="#d7c8aa" opacity=".7" />
        <circle
          cx="430"
          cy="350"
          r="291"
          stroke="#d8b78b"
          strokeWidth=".7"
          opacity=".3"
        />
        <circle
          cx="430"
          cy="350"
          r="320"
          stroke="#d8b78b"
          strokeDasharray="1 12"
          opacity=".25"
        />
        <path
          d="M40 622c120-100 200-100 330-174s180-13 390 83v229H40Z"
          fill="url(#dune-back)"
        />
        <path
          d="M40 712c211-38 256-281 353-338 65 151 187 165 367 267v119H40Z"
          fill="url(#dune-front)"
        />
        <path
          d="M393 374c-69 81-118 221-163 260"
          stroke="#e8ba83"
          opacity=".7"
        />
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            d={`M${422 + i * 6} ${442 + i * 16}Q${475 + i * 5} ${535 + i * 12} 757 ${627 + i * 10}`}
            stroke="#d5ac7d"
            opacity={0.22 - i * 0.012}
          />
        ))}
        <g stroke="#edcfab" opacity=".5">
          <path
            d="M440 86v20M92 350h20M749 350h20M658 122l-12 12M170 280h-40l-25-25"
            strokeWidth=".7"
          />
        </g>
      </svg>
      <div className="art-coordinate art-coordinate-top micro">
        <span className="interstellar-only">GRAVITATIONAL FIELD / 01</span>
        <span className="dune-only">HORIZON STUDY / 02</span>
      </div>
      <div className="art-coordinate art-coordinate-bottom micro">
        <span className="interstellar-only">
          67° 00′ N · BEYOND THE FAMILIAR
        </span>
        <span className="dune-only">24° 30′ N · BUILT TO ENDURE</span>
      </div>
    </div>
  );
}
