import React from 'react';

const Logo = ({ size = 'default' }) => {
  const dimensions = {
    small: { width: '2.5rem', height: '2.5rem', fontSize: '1rem' },
    default: { width: '3.5rem', height: '3.5rem', fontSize: '1.5rem' },
    large: { width: '5rem', height: '5rem', fontSize: '2rem' }
  };

  const style = dimensions[size];

  return (
    <svg 
      width={style.width} 
      height={style.height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle with Gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#047857', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Circle Background */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
      
      {/* Three People Silhouettes - representing team/consulting */}
      {/* Person 1 - Left */}
      <circle cx="35" cy="35" r="8" fill="white" opacity="0.9" />
      <ellipse cx="35" cy="55" rx="12" ry="15" fill="white" opacity="0.9" />
      
      {/* Person 2 - Center (slightly larger - leader) */}
      <circle cx="50" cy="30" r="9" fill="white" />
      <ellipse cx="50" cy="52" rx="13" ry="17" fill="white" />
      
      {/* Person 3 - Right */}
      <circle cx="65" cy="35" r="8" fill="white" opacity="0.9" />
      <ellipse cx="65" cy="55" rx="12" ry="15" fill="white" opacity="0.9" />
      
      {/* Optional: Add initials "IC" at the bottom */}
      <text 
        x="50" 
        y="85" 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fontWeight="bold" 
        fill="white" 
        textAnchor="middle"
      >
        IC
      </text>
    </svg>
  );
};

export default Logo;