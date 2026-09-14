import React from 'react';

export const WallpaperSvg = ({ name }) => {
  const cx = 800;
  const cy = 450;

  switch (name) {
    case 'orbits':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25">
            {[180, 320, 460, 600, 740, 880].map((r, i) => (
              <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.52} strokeDasharray={i % 2 === 0 ? "4 4" : undefined} />
            ))}
            <line x1={cx - 900} y1={cy} x2={cx + 900} y2={cy} strokeDasharray="2 4" />
            <line x1={cx} y1={cy - 500} x2={cx} y2={cy + 500} strokeDasharray="2 4" />
          </g>
          <circle cx={cx} cy={cy} r="6" fill="#e2c25c" opacity="0.8" />
          <circle cx={cx + 320} cy={cy - 80} r="4" fill="#315936" opacity="0.9" />
          <circle cx={cx - 460} cy={cy + 120} r="5" fill="#e2c25c" opacity="0.7" />
        </svg>
      );

    case 'cubes':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none desktop-breathe">
          <g fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.18">
            {Array.from({ length: 12 }).map((_, i) => {
              const x = 120 + i * 130;
              return Array.from({ length: 8 }).map((_, j) => {
                const y = 80 + j * 110 + (i % 2 === 0 ? 0 : 55);
                return (
                  <g key={`${i}-${j}`} transform={`translate(${x}, ${y})`}>
                    <polygon points="0,-25 22,-12 0,0 -22,-12" fill="currentColor" opacity="0.05" />
                    <polygon points="0,0 22,-12 22,14 0,26" fill="currentColor" opacity="0.08" />
                    <polygon points="-22,-12 0,0 0,26 -22,14" fill="currentColor" opacity="0.03" />
                  </g>
                );
              });
            })}
          </g>
        </svg>
      );

    case 'weave':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.22">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`d1-${i}`} x1={-200 + i * 70} y1="0" x2={200 + i * 70} y2="900" strokeDasharray="6 6" />
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`d2-${i}`} x1={1800 - i * 70} y1="0" x2={1400 - i * 70} y2="900" strokeDasharray="6 6" />
            ))}
          </g>
        </svg>
      );

    case 'core':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <circle cx="1260" cy="170" r="230" fill="#e7a71e" opacity="0.12" />
          <circle cx="1260" cy="170" r="140" fill="none" stroke="#e7a71e" strokeWidth="2" opacity="0.25" strokeDasharray="8 4" />
          <circle cx="1260" cy="170" r="40" fill="#315936" opacity="0.3" />
        </svg>
      );

    case 'blueprint':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <g fill="none" stroke="#315936" strokeWidth="0.5" opacity="0.2">
            {Array.from({ length: 40 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 25} x2="1600" y2={i * 25} />
            ))}
            {Array.from({ length: 64 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 25} y1="0" x2={i * 25} y2="900" />
            ))}
          </g>
        </svg>
      );

    case 'stairs':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2">
            {Array.from({ length: 14 }).map((_, i) => {
              const stepX = 100 + i * 90;
              const stepY = 800 - i * 50;
              return (
                <path key={i} d={`M ${stepX} ${stepY} L ${stepX + 90} ${stepY} L ${stepX + 90} ${stepY - 50}`} />
              );
            })}
          </g>
        </svg>
      );

    case 'halftone':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <g fill="currentColor" opacity="0.12">
            {Array.from({ length: 24 }).map((_, i) => (
              Array.from({ length: 15 }).map((_, j) => (
                <circle key={`${i}-${j}`} cx={i * 70 + 35} cy={j * 60 + 30} r={(i + j) % 5 + 1.5} />
              ))
            ))}
          </g>
        </svg>
      );

    case 'starchart':
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <g fill="none" stroke="#e8d9bf" strokeWidth="0.8" opacity="0.2">
            <polyline points="200,200 400,150 550,300 700,220 900,350 1200,180" strokeDasharray="3 3" />
            <polyline points="300,600 500,750 750,650 1100,800 1350,680" strokeDasharray="3 3" />
          </g>
          <g fill="#e2c25c" opacity="0.6">
            <circle cx="200" cy="200" r="3" />
            <circle cx="400" cy="150" r="4" />
            <circle cx="550" cy="300" r="3" />
            <circle cx="700" cy="220" r="5" />
            <circle cx="900" cy="350" r="3.5" />
            <circle cx="1200" cy="180" r="4" />
          </g>
        </svg>
      );

    default: // platinum or default background grid lines
      return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none">
          <g fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={`p-h-${i}`} x1="0" y1={i * 45} x2="1600" y2={i * 45} />
            ))}
            {Array.from({ length: 32 }).map((_, i) => (
              <line key={`p-v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="900" />
            ))}
          </g>
        </svg>
      );
  }
};
