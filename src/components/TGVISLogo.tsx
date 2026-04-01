export default function TGVISLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="The Green Valley International School Logo"
    >
      {/* Outer circle background */}
      <circle cx="100" cy="100" r="98" fill="white" stroke="#0d3b66" strokeWidth="2" />

      {/* Laurel wreath - left */}
      <g opacity="0.9">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <ellipse
            key={`ll-${i}`}
            cx={30 + i * 2}
            cy={60 + i * 16}
            rx="10"
            ry="6"
            transform={`rotate(${30 + i * 5}, ${30 + i * 2}, ${60 + i * 16})`}
            fill="#1a6b6a"
            opacity={0.7 + i * 0.04}
          />
        ))}
        {/* Stems */}
        <path d="M28 55 Q35 100 42 165" stroke="#1a6b6a" strokeWidth="2" fill="none" opacity="0.5" />
      </g>

      {/* Laurel wreath - right */}
      <g opacity="0.9">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <ellipse
            key={`lr-${i}`}
            cx={170 - i * 2}
            cy={60 + i * 16}
            rx="10"
            ry="6"
            transform={`rotate(${-30 - i * 5}, ${170 - i * 2}, ${60 + i * 16})`}
            fill="#1a6b6a"
            opacity={0.7 + i * 0.04}
          />
        ))}
        <path d="M172 55 Q165 100 158 165" stroke="#1a6b6a" strokeWidth="2" fill="none" opacity="0.5" />
      </g>

      {/* Shield shape */}
      <path
        d="M60 45 L100 35 L140 45 L140 120 Q140 155 100 170 Q60 155 60 120 Z"
        fill="url(#shieldGradient)"
        stroke="#0d3b66"
        strokeWidth="2.5"
      />

      {/* Shield inner border */}
      <path
        d="M65 50 L100 41 L135 50 L135 118 Q135 150 100 163 Q65 150 65 118 Z"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Shield cross divider */}
      <line x1="100" y1="41" x2="100" y2="163" stroke="white" strokeWidth="1.5" opacity="0.5" />
      <line x1="65" y1="95" x2="135" y2="95" stroke="white" strokeWidth="1.5" opacity="0.5" />

      {/* Quadrant 1 - Tree (top-left) */}
      <g transform="translate(75, 55)">
        {/* Tree crown */}
        <circle cx="10" cy="8" r="12" fill="#2d8a4e" opacity="0.8" />
        <circle cx="5" cy="14" r="8" fill="#3da55d" opacity="0.7" />
        <circle cx="15" cy="14" r="8" fill="#3da55d" opacity="0.7" />
        {/* Trunk */}
        <rect x="8" y="18" width="4" height="12" rx="1" fill="#8B6914" />
      </g>

      {/* Quadrant 2 - Atom (top-right) */}
      <g transform="translate(115, 65)">
        <circle cx="10" cy="10" r="3" fill="#0d3b66" />
        <ellipse cx="10" cy="10" rx="14" ry="5" fill="none" stroke="#0d3b66" strokeWidth="1.2" transform="rotate(0, 10, 10)" />
        <ellipse cx="10" cy="10" rx="14" ry="5" fill="none" stroke="#0d3b66" strokeWidth="1.2" transform="rotate(60, 10, 10)" />
        <ellipse cx="10" cy="10" rx="14" ry="5" fill="none" stroke="#0d3b66" strokeWidth="1.2" transform="rotate(120, 10, 10)" />
      </g>

      {/* Quadrant 3 - Book (bottom-left) */}
      <g transform="translate(72, 102)">
        <path d="M5 20 L15 12 L25 20 L15 16 Z" fill="#0d3b66" opacity="0.8" />
        <path d="M8 18 L15 14 L22 18" fill="none" stroke="white" strokeWidth="0.8" />
        <path d="M10 16 L15 13 L20 16" fill="none" stroke="white" strokeWidth="0.6" />
        {/* Person reading */}
        <circle cx="15" cy="8" r="3" fill="#0d3b66" />
        <path d="M15 11 L15 17 M12 14 L18 14" stroke="#0d3b66" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Quadrant 4 - Ashoka Chakra (bottom-right) */}
      <g transform="translate(110, 105)">
        <circle cx="15" cy="15" r="12" fill="none" stroke="#0d3b66" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="3" fill="#0d3b66" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <line
            key={`spoke-${i}`}
            x1="15"
            y1="15"
            x2={15 + 10 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={15 + 10 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke="#0d3b66"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* "BELIEVE LEARN ACHIEVE" banner across shield */}
      <rect x="62" y="87" width="76" height="16" rx="2" fill="#0d3b66" opacity="0.85" />
      <text x="100" y="99" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">
        BELIEVE LEARN ACHIEVE
      </text>

      {/* Circular text - School name */}
      <defs>
        <linearGradient id="shieldGradient" x1="60" y1="35" x2="140" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5cc8c8" />
          <stop offset="100%" stopColor="#1a8a7a" />
        </linearGradient>
        <path id="textPathTop" d="M30 100 A70 70 0 0 1 170 100" fill="none" />
        <path id="textPathBottom" d="M170 110 A70 70 0 0 1 30 110" fill="none" />
      </defs>

      <text fill="#0d3b66" fontSize="11" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="3">
        <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
          THE GREEN VALLEY
        </textPath>
      </text>
      <text fill="#0d3b66" fontSize="10" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="2.5">
        <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
          INTERNATIONAL SCHOOL
        </textPath>
      </text>
    </svg>
  );
}
