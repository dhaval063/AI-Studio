import React from 'react';

interface NamyaLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'light' | 'dark';
}

export default function NamyaLogo({
  className = '',
  height = 45,
  variant = 'light'
}: NamyaLogoProps) {
  const heightStyle = typeof height === 'number' ? `${height}px` : height;
  const isDark = variant === 'dark';

  return (
    <div
      id={isDark ? "namya-logo-dark" : "namya-logo-light"}
      className={`flex items-center select-none pointer-events-none ${className}`}
      style={{ height: heightStyle }}
    >
      <svg
        className="h-full w-auto"
        viewBox="0 0 240 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Leaf Logo Icon */}
        <g transform="translate(5, 5)">
          {/* Outer organic petal shape */}
          <path
            d="M20 2C9 2 2 11 2 20C2 29 9 38 20 38C31 38 38 29 38 20C38 11 31 2 20 2Z"
            fill={isDark ? "#34D399" : "#0D9488"}
            fillOpacity="0.12"
          />
          <path
            d="M20 2C31 2 38 11 38 20C38 29 20 38 20 38C20 38 2 29 2 20C2 11 9 2 20 2Z"
            stroke={isDark ? "#34D399" : "#0D9488"}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Inner Leaf Veins */}
          <path
            d="M20 8V32"
            stroke={isDark ? "#34D399" : "#0D9488"}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M20 16C24 16 29 13 30 11"
            stroke={isDark ? "#34D399" : "#0D9488"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 24C24 24 29 21 30 19"
            stroke={isDark ? "#34D399" : "#0D9488"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 20C16 20 11 17 10 15"
            stroke={isDark ? "#34D399" : "#0D9488"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        
        {/* Elegant Typography */}
        <text
          x="55"
          y="31"
          fill={isDark ? "#FFFFFF" : "#0F172A"}
          fontSize="23"
          fontWeight="800"
          fontFamily="'Inter', sans-serif"
          letterSpacing="0.05em"
        >
          NAMYA
        </text>
        <text
          x="148"
          y="31"
          fill={isDark ? "#34D399" : "#0D9488"}
          fontSize="13"
          fontWeight="600"
          fontFamily="'Inter', sans-serif"
          letterSpacing="0.12em"
        >
          ECO-PACK
        </text>
      </svg>
    </div>
  );
}



