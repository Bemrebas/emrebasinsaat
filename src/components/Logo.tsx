"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 50"
      className={`h-10 w-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crane Icon */}
      <g transform="translate(0, 2)">
        {/* Base */}
        <rect x="5" y="38" width="20" height="6" rx="1" className="fill-accent" />
        {/* Vertical mast */}
        <rect x="12" y="4" width="6" height="36" rx="1" className="fill-primary dark:fill-blue-300" />
        {/* Horizontal boom */}
        <rect x="10" y="4" width="30" height="5" rx="1" className="fill-primary dark:fill-blue-300" />
        {/* Diagonal support */}
        <line x1="18" y1="9" x2="35" y2="4" stroke="currentColor" strokeWidth="2" className="text-primary dark:text-blue-300" />
        {/* Hook cable */}
        <line x1="36" y1="9" x2="36" y2="22" stroke="currentColor" strokeWidth="2" className="text-accent" />
        {/* Hook */}
        <path d="M33 22 Q33 28 36 28 Q39 28 39 22" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
        {/* Rocks/Mining symbol */}
        <polygon points="0,44 8,34 16,44" className="fill-primary/60 dark:fill-blue-400/60" />
        <polygon points="8,44 14,36 22,44" className="fill-accent/60" />
      </g>

      {/* Text */}
      <text x="48" y="28" className="fill-primary dark:fill-white" style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px" }}>
        Emrebaş
      </text>
      <text x="48" y="44" className="fill-current text-gray-500 dark:text-gray-400" style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "1px" }}>
        İNŞAAT VE MADENCİLİK
      </text>
    </svg>
  );
}
