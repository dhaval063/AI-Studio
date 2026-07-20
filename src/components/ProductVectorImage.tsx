import React from 'react';

interface ProductVectorImageProps {
  id: string;
  name: string;
  category: 'plates' | 'bowls' | 'containers' | 'trays' | 'cups' | 'takeaway';
  className?: string;
}

export default function ProductVectorImage({ id, name, category, className = '' }: ProductVectorImageProps) {
  const normalizedId = id.toLowerCase();
  const normalizedName = name.toLowerCase();

  // Color constants to maintain a clean Scandinavian organic look (warm white/bagasse cream/soft gray/teal accents)
  const colors = {
    bg: '#FAF9F6',          // Warm sugarcane bagasse cream
    border: '#E6E4DD',      // Soft natural border
    accent: '#0D9488',      // Namya Teal accent
    accentLight: '#F0FDFA', // Light teal highlights
    shadow: '#D1CFC7',      // Soft organic shadows
    partition: '#D1CFC7'    // Divider lines
  };

  // 1. PLATES
  if (category === 'plates') {
    const isCompartment = normalizedId.includes('comp') || normalizedName.includes('compartment') || normalizedId.includes('3cp') || normalizedId.includes('4cp');
    const is4CP = normalizedId.includes('4cp') || normalizedName.includes('4-compartment') || normalizedName.includes('4cp');

    return (
      <svg className={`w-full h-full max-h-[160px] max-w-[160px] ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft Drop Shadow under plate */}
        <circle cx="50" cy="52" r="42" fill={colors.shadow} opacity="0.3" filter="blur(1px)" />
        {/* Main Plate Body */}
        <circle cx="50" cy="50" r="42" fill={colors.bg} stroke={colors.border} strokeWidth="1.5" />
        
        {/* Decorative Outer Rim Ridge */}
        <circle cx="50" cy="50" r="38" stroke={colors.border} strokeWidth="0.75" strokeDasharray="2 1" />
        <circle cx="50" cy="50" r="35" stroke={colors.border} strokeWidth="1" />

        {isCompartment ? (
          is4CP ? (
            /* 4-Compartment Plate Dividers */
            <g>
              {/* Divider lines with thickness and rounded joints */}
              <path d="M50 15V85" stroke={colors.border} strokeWidth="2" strokeLinecap="round" />
              <path d="M15 50H85" stroke={colors.border} strokeWidth="2" strokeLinecap="round" />
              {/* Soft inner curves for compartments */}
              <circle cx="32" cy="32" r="12" stroke={colors.border} strokeWidth="0.5" opacity="0.5" />
              <circle cx="68" cy="32" r="12" stroke={colors.border} strokeWidth="0.5" opacity="0.5" />
              <circle cx="32" cy="68" r="12" stroke={colors.border} strokeWidth="0.5" opacity="0.5" />
              <circle cx="68" cy="68" r="12" stroke={colors.border} strokeWidth="0.5" opacity="0.5" />
              {/* Central brand dot */}
              <circle cx="50" cy="50" r="3.5" fill={colors.accent} opacity="0.8" />
            </g>
          ) : (
            /* 3-Compartment Plate Dividers (Large half, two quarters) */
            <g>
              <path d="M50 50V15" stroke={colors.border} strokeWidth="2" strokeLinecap="round" />
              <path d="M50 50L19.7 67.5" stroke={colors.border} strokeWidth="2" strokeLinecap="round" />
              <path d="M50 50L80.3 67.5" stroke={colors.border} strokeWidth="2" strokeLinecap="round" />
              {/* Compartment recess indicators */}
              <circle cx="50" cy="70" r="15" stroke={colors.border} strokeWidth="0.5" opacity="0.4" />
              <circle cx="31" cy="36" r="11" stroke={colors.border} strokeWidth="0.5" opacity="0.4" />
              <circle cx="69" cy="36" r="11" stroke={colors.border} strokeWidth="0.5" opacity="0.4" />
              {/* Central brand dot */}
              <circle cx="50" cy="50" r="3.5" fill={colors.accent} opacity="0.8" />
            </g>
          )
        ) : (
          /* Normal Round Plate Inner Basin */
          <g>
            <circle cx="50" cy="50" r="26" fill={colors.bg} stroke={colors.border} strokeWidth="0.75" />
            <circle cx="50" cy="50" r="23" stroke={colors.border} strokeWidth="0.5" opacity="0.6" />
            {/* Fine design markings (mechanical ribs indicator) */}
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = (i * 360) / 18;
              const rad = (angle * Math.PI) / 180;
              const x1 = 50 + Math.cos(rad) * 35;
              const y1 = 50 + Math.sin(rad) * 35;
              const x2 = 50 + Math.cos(rad) * 38;
              const y2 = 50 + Math.sin(rad) * 38;
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.border} strokeWidth="0.75" opacity="0.7" />
              );
            })}
            <circle cx="50" cy="50" r="14" stroke={colors.accent} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />
          </g>
        )}
      </svg>
    );
  }

  // 2. BOWLS
  if (category === 'bowls') {
    return (
      <svg className={`w-full h-full max-h-[160px] max-w-[160px] ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft Drop Shadow under bowl */}
        <circle cx="50" cy="53" r="41" fill={colors.shadow} opacity="0.35" filter="blur(1px)" />
        {/* Bowl Rim */}
        <circle cx="50" cy="50" r="41" fill={colors.bg} stroke={colors.border} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" stroke={colors.border} strokeWidth="0.5" />
        
        {/* Inner Bowl Basin (illustrating depth) */}
        <circle cx="50" cy="50" r="32" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
        <circle cx="50" cy="50" r="25" stroke={colors.border} strokeWidth="0.75" opacity="0.6" />
        <circle cx="50" cy="50" r="18" fill="#ECEBE4" stroke={colors.border} strokeWidth="0.75" />
        
        {/* Circular reflection for premium depth look */}
        <path d="M22 35C24 25 35 18 50 18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        
        {/* Eco brand accent ring inside */}
        <circle cx="50" cy="50" r="10" stroke={colors.accent} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
      </svg>
    );
  }

  // 3. CONTAINERS / CLAMSHELLS
  if (category === 'containers' || category === 'takeaway') {
    const is3CP = normalizedId.includes('3cp');
    return (
      <svg className={`w-full h-full max-h-[160px] max-w-[160px] ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Drop shadow */}
        <rect x="12" y="16" width="76" height="72" rx="16" fill={colors.shadow} opacity="0.3" filter="blur(1px)" />
        {/* Main box outer body */}
        <rect x="12" y="14" width="76" height="72" rx="16" fill={colors.bg} stroke={colors.border} strokeWidth="1.5" />
        
        {/* Clamshell locking tab and hinge details */}
        <rect x="42" y="82" width="16" height="5" rx="2" fill={colors.border} />
        <rect x="44" y="82" width="12" height="2" rx="1" fill={colors.accent} opacity="0.7" />
        
        {/* Double walls */}
        <rect x="16" y="18" width="68" height="64" rx="12" stroke={colors.border} strokeWidth="1" />
        
        {/* Hinge Line at top */}
        <line x1="12" y1="36" x2="88" y2="36" stroke={colors.border} strokeWidth="1.5" strokeDasharray="3 1" />
        
        {is3CP ? (
          <g>
            {/* 3 Compartment dividers inside container */}
            <path d="M16 58H84" stroke={colors.border} strokeWidth="2" strokeLinecap="round" />
            <path d="M50 58V82" stroke={colors.border} strokeWidth="2" strokeLinecap="round" />
            {/* Recess details */}
            <rect x="20" y="22" width="60" height="30" rx="4" stroke={colors.border} strokeWidth="0.5" opacity="0.5" />
            <rect x="20" y="62" width="26" height="16" rx="3" stroke={colors.border} strokeWidth="0.5" opacity="0.5" />
            <rect x="54" y="62" width="26" height="16" rx="3" stroke={colors.border} strokeWidth="0.5" opacity="0.5" />
          </g>
        ) : (
          <g>
            {/* Single Compartment Inner Box and Ribs */}
            <rect x="20" y="42" width="60" height="36" rx="8" stroke={colors.border} strokeWidth="1" />
            {/* Strength ribs lines typical of bagasse clamshells */}
            <line x1="30" y1="48" x2="30" y2="72" stroke={colors.border} strokeWidth="0.75" />
            <line x1="40" y1="48" x2="40" y2="72" stroke={colors.border} strokeWidth="0.75" />
            <line x1="50" y1="48" x2="50" y2="72" stroke={colors.border} strokeWidth="0.75" />
            <line x1="60" y1="48" x2="60" y2="72" stroke={colors.border} strokeWidth="0.75" />
            <line x1="70" y1="48" x2="70" y2="72" stroke={colors.border} strokeWidth="0.75" />
            {/* Eco Stamp */}
            <circle cx="50" cy="27" r="4" stroke={colors.accent} strokeWidth="0.5" opacity="0.4" />
            <path d="M49 27L51 27" stroke={colors.accent} strokeWidth="0.5" opacity="0.4" />
          </g>
        )}
      </svg>
    );
  }

  // 4. MEAL TRAYS
  if (category === 'trays') {
    let compartmentsCount = 5;
    if (normalizedId.includes('2cp') || normalizedName.includes('2 compartment') || normalizedName.includes('2cp')) compartmentsCount = 2;
    else if (normalizedId.includes('3cp') || normalizedName.includes('3 compartment') || normalizedName.includes('3cp')) compartmentsCount = 3;
    else if (normalizedId.includes('4cp') || normalizedName.includes('4 compartment') || normalizedName.includes('4cp')) compartmentsCount = 4;
    else if (normalizedId.includes('6cp') || normalizedName.includes('6 compartment') || normalizedName.includes('6cp')) compartmentsCount = 6;

    return (
      <svg className={`w-full h-full max-h-[160px] max-w-[160px] ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Drop Shadow */}
        <rect x="8" y="18" width="84" height="64" rx="12" fill={colors.shadow} opacity="0.3" filter="blur(1px)" />
        {/* Tray Outer Rim */}
        <rect x="8" y="16" width="84" height="64" rx="12" fill={colors.bg} stroke={colors.border} strokeWidth="1.5" />
        <rect x="11" y="19" width="78" height="58" rx="9" stroke={colors.border} strokeWidth="0.75" />

        {compartmentsCount === 2 && (
          <g>
            <rect x="15" y="23" width="32" height="50" rx="6" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="53" y="23" width="32" height="50" rx="6" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
          </g>
        )}

        {compartmentsCount === 3 && (
          <g>
            <rect x="15" y="23" width="32" height="50" rx="6" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="53" y="23" width="32" height="23" rx="4" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="53" y="50" width="32" height="23" rx="4" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
          </g>
        )}

        {compartmentsCount === 4 && (
          <g>
            <rect x="15" y="23" width="32" height="23" rx="4" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="53" y="23" width="32" height="23" rx="4" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="15" y="50" width="32" height="23" rx="4" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="53" y="50" width="32" height="23" rx="4" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
          </g>
        )}

        {compartmentsCount === 5 && (
          <g>
            {/* 1 Large long, 2 Medium, 2 Small */}
            <rect x="15" y="23" width="42" height="30" rx="5" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="61" y="23" width="24" height="30" rx="5" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="15" y="57" width="20" height="16" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="39" y="57" width="20" height="16" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="63" y="57" width="22" height="16" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
          </g>
        )}

        {compartmentsCount === 6 && (
          <g>
            <rect x="15" y="23" width="21" height="23" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="39" y="23" width="22" height="23" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="64" y="23" width="21" height="23" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="15" y="50" width="21" height="23" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="39" y="50" width="22" height="23" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
            <rect x="64" y="50" width="21" height="23" rx="3" fill="#F4F3ED" stroke={colors.border} strokeWidth="1" />
          </g>
        )}
      </svg>
    );
  }

  // 5. CUPS & LIDS
  if (category === 'cups') {
    const isLid = normalizedId.includes('lid');

    if (isLid) {
      return (
        <svg className={`w-full h-full max-h-[160px] max-w-[160px] ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lid Shadow */}
          <ellipse cx="50" cy="52" rx="40" ry="24" fill={colors.shadow} opacity="0.35" filter="blur(1px)" />
          {/* Lid Outer Snapping Rim */}
          <ellipse cx="50" cy="50" rx="40" ry="24" fill={colors.bg} stroke={colors.border} strokeWidth="1.5" />
          {/* Concentric Step downs */}
          <ellipse cx="50" cy="50" rx="36" ry="21" stroke={colors.border} strokeWidth="1" />
          <ellipse cx="50" cy="50" rx="28" ry="16" fill="#F2F1EC" stroke={colors.border} strokeWidth="0.75" />
          {/* Sip Hole Tab Area */}
          <ellipse cx="50" cy="50" rx="14" ry="8" stroke={colors.border} strokeWidth="0.5" />
          <path d="M22 50C22 43 32 37 45 37" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          {/* Sip slot */}
          <rect x="76" y="47" width="8" height="3" rx="1.5" fill="#CCCCCC" />
          {/* Eco leaf pattern on lid */}
          <path d="M47 50C47 48 49 46 51 46C53 46 53 48 53 50C53 52 51 54 49 54C47 54 47 52 47 50Z" fill={colors.accent} opacity="0.25" />
        </svg>
      );
    }

    return (
      <svg className={`w-full h-full max-h-[160px] max-w-[160px] ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cup Shadow */}
        <path d="M25 82 L75 82 L65 87 L35 87 Z" fill={colors.shadow} opacity="0.3" filter="blur(1px)" />
        <ellipse cx="50" cy="82" rx="20" ry="4" fill={colors.shadow} opacity="0.4" />
        
        {/* Tapered Cup Body */}
        <path
          d="M26 24 L34 78 C35 82, 38 84, 42 84 H58 C62 84, 65 82, 66 78 L74 24 Z"
          fill={colors.bg}
          stroke={colors.border}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* Double-wall insulated outer wrapper detail */}
        <path
          d="M28 32 L34 74 C34.5 77, 36.5 79, 40 79 H60 C63.5 79, 65.5 77, 66 74 L72 32"
          stroke={colors.border}
          strokeWidth="1.0"
          opacity="0.8"
        />

        {/* Thick rolling rim/lip at top */}
        <rect x="22" y="18" width="56" height="6" rx="3" fill="#EAE8E0" stroke={colors.border} strokeWidth="1" />
        <rect x="23" y="19" width="54" height="4" rx="2" fill={colors.bg} />

        {/* Eco-brand Leaf Stamp on Cup */}
        <g transform="translate(42, 45) scale(0.4)">
          <path
            d="M20 2C31 2 38 11 38 20C38 29 20 38 20 38C20 38 2 29 2 20C2 11 9 2 20 2Z"
            fill={colors.accent}
            fillOpacity="0.2"
            stroke={colors.accent}
            strokeWidth="2"
          />
          <path d="M20 6V30" stroke={colors.accent} strokeWidth="2" />
        </g>
      </svg>
    );
  }

  // Fallback beautiful generic plant loop / eco star icon
  return (
    <svg className={`w-full h-full max-h-[160px] max-w-[160px] ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill={colors.bg} stroke={colors.border} strokeWidth="1.5" />
      <path d="M50 25C63.8 25 75 36.2 75 50C75 63.8 63.8 75 50 75C36.2 75 25 63.8 25 50" stroke={colors.accent} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="50" r="10" fill={colors.accent} fillOpacity="0.1" />
    </svg>
  );
}
