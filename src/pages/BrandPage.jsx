import React from 'react';
import { Window } from '../components/Window';

export const BrandPage = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Window title="BRAND.HTM — Brand Resources & Visual Assets">
        <div className="p-4 space-y-6">
          <div>
            <h1 className="chicago text-xl font-bold text-plat-900">
              Mutual Assets Group Brand Assets
            </h1>
            <p className="text-[12px] text-plat-700 mt-1">
              Official logomarks, typography specifications, and color palette tokens for MAG media and shareholder publications.
            </p>
          </div>

          {/* Logo Downloads */}
          <div className="space-y-3">
            <h2 className="chicago text-sm font-bold border-b border-plat-400 pb-1">
              Logomark Downloads
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bevel-down p-3 bg-plat-100 flex flex-col items-center justify-between text-center space-y-2">
                <img src="/icon.svg" alt="MAG Icon SVG" className="w-12 h-12" />
                <span className="text-[11px] font-bold">Vector Icon (SVG)</span>
                <a href="/icon.svg" download className="btn btn-default text-[10px] px-2 py-0.5 w-full">Download</a>
              </div>
              <div className="bevel-down p-3 bg-plat-100 flex flex-col items-center justify-between text-center space-y-2">
                <img src="/apple-icon.png" alt="MAG Apple Icon PNG" className="w-12 h-12 rounded" />
                <span className="text-[11px] font-bold">App Icon (PNG)</span>
                <a href="/apple-icon.png" download className="btn btn-default text-[10px] px-2 py-0.5 w-full">Download</a>
              </div>
              <div className="bevel-down p-3 bg-plat-100 flex flex-col items-center justify-between text-center space-y-2">
                <img src="/opengraph-image.jpg" alt="OpenGraph Banner" className="w-20 h-12 object-cover rounded" />
                <span className="text-[11px] font-bold">OG Card (1200x630)</span>
                <a href="/opengraph-image.jpg" download className="btn btn-default text-[10px] px-2 py-0.5 w-full">Download</a>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="space-y-3">
            <h2 className="chicago text-sm font-bold border-b border-plat-400 pb-1">
              Official Color Tokens
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
              {[
                { name: 'Platinum Desk', hex: '#1d4231', bg: 'bg-[#1d4231]' },
                { name: 'Heritage Dark', hex: '#1a2e20', bg: 'bg-[#1a2e20]' },
                { name: 'Editorial Forest', hex: '#315936', bg: 'bg-[#315936]' },
                { name: 'Gold Accent', hex: '#e2c25c', bg: 'bg-[#e2c25c]' }
              ].map((c, i) => (
                <div key={i} className="bevel-down p-2 bg-plat-100 space-y-1">
                  <div className={`h-8 w-full rounded border border-plat-400 ${c.bg}`} />
                  <div className="font-bold text-plat-900">{c.name}</div>
                  <div className="font-mono text-[10px] text-plat-600">{c.hex}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-3">
            <h2 className="chicago text-sm font-bold border-b border-plat-400 pb-1">
              Brand Typography
            </h2>
            <div className="space-y-2 text-[12px] text-plat-800">
              <div>
                <span className="font-bold text-plat-900 chicago">Chicago FLF:</span> Used for window headers, Chicago titles, and classic System 7 menu UI.
              </div>
              <div>
                <span className="font-bold text-plat-900 font-serif">Newsreader Serif:</span> Used for manifesto prose, editorials, and financial disclosures.
              </div>
              <div>
                <span className="font-bold text-plat-900 font-sans">Instrument Sans:</span> Used for body text, numbers, and user interface controls.
              </div>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};
