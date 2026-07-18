import React from 'react';
import logoImg from '../assets/images/Logo.png';
import logoImgDark from '../assets/images/1.png';

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

  if (variant === 'dark') {
    return (
      <img
        src={logoImgDark}
        alt="Namya Eco-Pack"
        id="namya-logo-dark"
        className={`object-contain select-none pointer-events-none ${className}`}
        style={{
          height: heightStyle,
        }}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <img
      src={logoImg}
      alt="Namya Eco-Pack"
      id="namya-logo-light"
      className={`object-contain select-none pointer-events-none ${className}`}
      style={{
        height: heightStyle,
      }}
      referrerPolicy="no-referrer"
    />
  );
}



