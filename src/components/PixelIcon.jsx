import React from 'react';

export const PixelIcon = ({ type, width = 26, height = 26, className = "" }) => {
  const getIconPaths = () => {
    switch (type) {
      case 'retirement':
      case '(4,0,1)k':
        return (
          <>
            <path fill="#000000" d="M7 1h2v1h-2zM6 2h1v1h-1zM9 2h1v1h-1zM5 3h1v1h-1zM10 3h1v1h-1zM4 4h1v1h-1zM11 4h1v1h-1zM3 5h1v1h-1zM12 5h1v1h-1zM1 6h14v1h-14zM1 7h1v1h-1zM14 7h1v1h-1zM1 8h14v1h-14zM1 13h14v1h-14zM0 14h1v1h-1zM15 14h1v1h-1zM0 15h16v1h-16z" />
            <path fill="#e2c25c" d="M7 2h2v1h-2zM6 3h4v1h-4zM5 4h6v1h-6zM4 5h8v1h-8z" />
            <path fill="#dddddd" d="M2 7h12v1h-12zM2 12h12v1h-12zM1 14h14v1h-14z" />
            <path fill="#0c1f16" d="M2 9h1v1h-1zM5 9h2v1h-2zM9 9h2v1h-2zM13 9h1v1h-1zM2 10h1v1h-1zM5 10h2v1h-2zM9 10h2v1h-2zM13 10h1v1h-1z" />
          </>
        );

      case 'warrants':
      case 'Warrant Desk':
        return (
          <>
            <path fill="#000000" d="M2 1h11v1h-11zM1 2h1v1h-1zM13 2h1v1h-1zM1 3h1v1h-1zM3 3h9v1h-9zM13 3h1v1h-1zM1 4h1v1h-1zM13 4h1v1h-1zM1 5h1v1h-1zM3 5h7v1h-7zM13 5h1v1h-1zM1 13h11v1h-11z" />
            <path fill="#ffffff" d="M2 2h11v1h-11zM2 3h1v1h-1zM12 3h1v1h-1zM2 4h11v1h-11zM2 5h1v1h-1zM10 5h3v1h-3zM2 6h11v1h-11zM2 7h1v1h-1z" />
            <path fill="#a93a34" d="M10 11h2v1h-2zM10 12h2v1h-2z" />
          </>
        );

      case 'derby':
      case 'The Derby':
        return (
          <>
            <path fill="#000000" d="M2 1h12v1h-12zM1 2h1v1h-1zM14 2h1v1h-1zM1 3h14v1h-14zM1 4h1v1h-1zM14 4h1v1h-1zM1 5h14v1h-14zM1 6h1v1h-1zM14 6h1v1h-1zM1 7h14v1h-14zM1 8h1v1h-1zM14 8h1v1h-1zM1 9h14v1h-14zM1 10h1v1h-1zM14 10h1v1h-1zM1 11h14v1h-14zM1 12h1v1h-1zM14 12h1v1h-1zM2 13h12v1h-12z" />
            <path fill="#e2c25c" d="M3 3h4v4h-4zM9 3h4v4h-4zM3 9h4v4h-4zM9 9h4v4h-4z" />
            <path fill="#ffffff" d="M7 3h2v4h-2zM3 7h10v2h-10zM7 9h2v4h-2z" />
          </>
        );

      case 'credit':
      case 'Credit Facility':
        return (
          <>
            <path fill="#000000" d="M1 3h14v1h-14zM1 4h1v1h-1zM14 4h1v1h-1zM1 5h1v1h-1zM14 5h1v1h-1zM1 6h1v1h-1zM5 6h5v1h-5zM14 6h1v1h-1zM1 7h1v1h-1zM4 7h1v1h-1zM10 7h1v1h-1zM14 7h1v1h-1zM1 8h1v1h-1zM4 8h1v1h-1zM7 8h1v1h-1zM10 8h1v1h-1zM14 8h1v1h-1zM1 9h14v1h-14z" />
            <path fill="#315936" d="M2 4h12v2h-12z" />
            <path fill="#e2c25c" d="M2 7h2v2h-2zM11 7h2v2h-2z" />
          </>
        );

      case 'stake':
      case 'Shareholder Program':
        return (
          <>
            <path fill="#000000" d="M3 2h10v1h-10zM2 3h1v1h-1zM13 3h1v1h-1zM1 4h1v1h-1zM14 4h1v1h-1zM1 5h14v1h-14zM1 6h1v1h-1zM14 6h1v1h-1zM2 7h12v1h-12zM3 8h10v1h-10zM4 9h8v1h-8zM5 10h6v1h-6zM6 11h4v1h-4zM7 12h2v1h-2z" />
            <path fill="#e2c25c" d="M3 3h10v2h-10zM4 5h8v2h-8z" />
            <path fill="#ffffff" d="M7 3h2v4h-2z" />
          </>
        );

      case 'bond':
      case 'Bond Desk':
        return (
          <>
            <path fill="#000000" d="M3 1h10v1h-10zM2 2h1v12h-1zM13 2h1v12h-1zM3 14h10v1h-10z" />
            <path fill="#ffffff" d="M3 2h10v12h-10z" />
            <path fill="#315936" d="M5 4h6v1h-6zM5 6h6v1h-6zM5 8h4v1h-4zM5 10h6v1h-6z" />
          </>
        );

      case 'draw':
      case 'The Draw':
        return (
          <>
            <path fill="#000000" d="M2 3h12v1h-12zM1 4h1v8h-1zM14 4h1v8h-1zM2 12h12v1h-12z" />
            <path fill="#e7a71e" d="M2 4h12v8h-12z" />
            <path fill="#ffffff" d="M5 6h6v4h-6z" />
            <circle cx="8" cy="8" r="1" fill="#000000" />
          </>
        );

      case 'wars':
      case 'The Wars & Leagues':
        return (
          <>
            <path fill="#000000" d="M7 1h2v14h-2zM2 4h12v1h-12zM4 5h8v1h-8z" />
            <path fill="#e2c25c" d="M2 5h3v4h-3zM11 5h3v4h-3z" />
          </>
        );

      case 'pit':
      case 'The Pit':
        return (
          <>
            <path fill="#000000" d="M4 2h8v1h-8zM2 4h12v1h-12zM1 5h14v6h-14zM2 11h12v1h-12zM4 13h8v1h-8z" />
            <path fill="#315936" d="M3 5h10v6h-10z" />
            <path fill="#ffffff" d="M7 6h2v4h-2z" />
          </>
        );

      case 'machine':
      case 'The Machine':
        return (
          <>
            <path fill="#000000" d="M5 1h6v1h-6zM3 3h10v10h-10zM5 14h6v1h-6z" />
            <path fill="#41e883" d="M5 4h6v6h-6z" />
            <path fill="#000000" d="M7 6h2v2h-2z" />
          </>
        );

      case 'genesis':
      case 'Genesis — the 3,333 Seats':
      default:
        return (
          <>
            <path fill="#000000" d="M4 1h8v1h-8zM2 3h12v1h-12zM1 4h14v8h-14zM2 12h12v1h-12zM4 14h8v1h-8z" />
            <path fill="#e2c25c" d="M3 4h10v7h-10z" />
            <path fill="#ffffff" d="M6 6h4v3h-4z" />
          </>
        );
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      style={{ imageRendering: 'pixelated', flex: 'none' }}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {getIconPaths()}
    </svg>
  );
};
