import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppearance } from '../context/AppearanceContext';

const THEMES = [
  { id: 'platinum', label: 'Platinum System 7' },
  { id: 'heritage', label: 'Heritage Dark' },
  { id: 'editorial', label: 'Editorial Warm' }
];

const WALLPAPERS = [
  { id: 'auto', label: 'Auto (Theme Default)' },
  { id: 'platinum', label: 'Platinum Grid' },
  { id: 'cubes', label: 'Cubes' },
  { id: 'weave', label: 'Weave' },
  { id: 'orbits', label: 'Orbits' },
  { id: 'core', label: 'Core' },
  { id: 'blueprint', label: 'Blueprint' },
  { id: 'stairs', label: 'Stairs' },
  { id: 'halftone', label: 'Halftone' },
  { id: 'starchart', label: 'Starchart' },
  { id: 'paper', label: 'Paper' }
];

export const MenuBar = () => {
  const { theme, setTheme, wallpaper, setWallpaper, soundOn, toggleSound, playSound } = useAppearance();
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const navigate = useNavigate();

  const appleRef = useRef(null);
  const appearanceRef = useRef(null);
  const programsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (appleRef.current && !appleRef.current.contains(e.target)) setAppleMenuOpen(false);
      if (appearanceRef.current && !appearanceRef.current.contains(e.target)) setAppearanceOpen(false);
      if (programsRef.current && !programsRef.current.contains(e.target)) setProgramsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="menu-bar border-b select-none">
      <div className="flex items-center justify-between px-3 py-1 text-[13px] chicago">
        {/* Left Side: Apple Menu & Nav Items */}
        <div className="flex items-center gap-4">
          {/* Apple / MAG Logo Dropdown */}
          <div className="relative" ref={appleRef}>
            <button
              onClick={() => {
                playSound('tick');
                setAppleMenuOpen(!appleMenuOpen);
              }}
              className="menu-title flex items-center gap-1 font-bold hover:bg-plat-300 px-1.5 py-0.5 rounded"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M7 1h2v1h-2zM6 2h1v1h-1zM9 2h1v1h-1zM5 3h6v1h-6zM4 4h8v1h-8zM3 5h10v6h-10zM4 11h8v1h-8zM5 12h6v1h-6z" />
              </svg>
              <span>MAG</span>
            </button>

            {appleMenuOpen && (
              <div className="menu-drop absolute left-0 top-full mt-1 w-52 bg-plat-100 border border-plat-500 shadow-lg z-50 text-[12px] py-1">
                <div className="px-3 py-1 font-bold border-b border-plat-300 text-plat-800">
                  Mutual Assets Group v1.0
                </div>
                <button
                  onClick={() => { navigate('/desk'); setAppleMenuOpen(false); }}
                  className="menu-row w-full text-left px-3 py-1.5 hover:bg-plat-300 flex items-center justify-between"
                >
                  <span>Shareholder Terminal</span>
                  <span className="text-[10px] text-plat-500">/desk</span>
                </button>
                <button
                  onClick={() => { navigate('/manifesto'); setAppleMenuOpen(false); }}
                  className="menu-row w-full text-left px-3 py-1.5 hover:bg-plat-300 flex items-center justify-between"
                >
                  <span>Read Manifesto</span>
                  <span className="text-[10px] text-plat-500">/manifesto</span>
                </button>
                <button
                  onClick={() => { navigate('/genesis'); setAppleMenuOpen(false); }}
                  className="menu-row w-full text-left px-3 py-1.5 hover:bg-plat-300 flex items-center justify-between"
                >
                  <span>Genesis 3,333 Seats</span>
                  <span className="text-[10px] text-plat-500">/genesis</span>
                </button>
                <button
                  onClick={() => { navigate('/machine'); setAppleMenuOpen(false); }}
                  className="menu-row w-full text-left px-3 py-1.5 hover:bg-plat-300 flex items-center justify-between"
                >
                  <span>The Machine</span>
                  <span className="text-[10px] text-plat-500">/machine</span>
                </button>
                <button
                  onClick={() => { navigate('/whitelist'); setAppleMenuOpen(false); }}
                  className="menu-row w-full text-left px-3 py-1.5 hover:bg-plat-300 flex items-center justify-between"
                >
                  <span>Genesis Waitlist</span>
                  <span className="text-[10px] text-plat-500">/whitelist</span>
                </button>
                <div className="border-t border-plat-300 my-1" />
                <button
                  onClick={() => { navigate('/brand'); setAppleMenuOpen(false); }}
                  className="menu-row w-full text-left px-3 py-1.5 hover:bg-plat-300"
                >
                  Brand Resources
                </button>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <Link to="/" className="menu-title hover:bg-plat-300 px-1.5 py-0.5 rounded">Home</Link>
          
          <div className="relative" ref={programsRef}>
            <button
              onClick={() => {
                playSound('tick');
                setProgramsOpen(!programsOpen);
              }}
              className="menu-title hover:bg-plat-300 px-1.5 py-0.5 rounded"
            >
              Programs
            </button>
            {programsOpen && (
              <div className="menu-drop absolute left-0 top-full mt-1 w-56 bg-plat-100 border border-plat-500 shadow-lg z-50 text-[12px] py-1">
                {[
                  { name: '(4,0,1)k', path: '/programs/retirement' },
                  { name: 'The Warrant Desk', path: '/programs/warrants' },
                  { name: 'The Derby', path: '/programs/derby' },
                  { name: 'Credit Facility', path: '/programs/credit' },
                  { name: 'Shareholder Program', path: '/desk?tab=stake' },
                  { name: 'Bond Desk', path: '/desk?tab=bond' },
                  { name: 'The Draw', path: '/programs/draw' },
                  { name: 'The Wars & Leagues', path: '/programs/wars' },
                  { name: 'The Pit', path: '/programs/pit' },
                  { name: 'The Machine', path: '/machine' },
                  { name: 'Genesis — 3,333 Seats', path: '/genesis' }
                ].map(p => (
                  <button
                    key={p.path}
                    onClick={() => { navigate(p.path); setProgramsOpen(false); }}
                    className="menu-row w-full text-left px-3 py-1 hover:bg-plat-300 block truncate"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/desk" className="menu-title hover:bg-plat-300 px-1.5 py-0.5 rounded">Terminal</Link>
          <Link to="/manifesto" className="menu-title hover:bg-plat-300 px-1.5 py-0.5 rounded">Manifesto</Link>
        </div>

        {/* Center: Market Status Badge */}
        <div className="hidden md:block">
          <Link
            to="/whitelist"
            className="bevel-down px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-plat-700 hover:text-plat-900 inline-block font-mono"
          >
            Status: pre-open · whitelist closed
          </Link>
        </div>

        {/* Right Side: Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle retro sound effects"
            className="btn btn-sm text-[11px] px-2 py-0.5 flex items-center gap-1"
            title={soundOn ? "Mute audio" : "Enable audio"}
          >
            <span>{soundOn ? "🔊" : "🔇"}</span>
          </button>

          {/* Appearance Menu */}
          <div className="relative" ref={appearanceRef}>
            <button
              onClick={() => {
                playSound('tick');
                setAppearanceOpen(!appearanceOpen);
              }}
              className="btn btn-sm text-[11px] px-2 py-0.5 flex items-center gap-1"
            >
              <span>🎨 Appearance</span>
            </button>

            {appearanceOpen && (
              <div className="menu-drop absolute right-0 top-full mt-1 w-56 bg-plat-100 border border-plat-500 shadow-xl z-50 text-[11px] p-2 space-y-3">
                <div>
                  <div className="font-bold border-b border-plat-300 pb-1 mb-1 text.plat-800">Theme</div>
                  <div className="space-y-1">
                    {THEMES.map(t => (
                      <label key={t.id} className="flex items-center gap-2 cursor-pointer hover:bg-plat-200 p-1 rounded">
                        <input
                          type="radio"
                          name="theme"
                          checked={theme === t.id}
                          onChange={() => setTheme(t.id)}
                        />
                        <span>{t.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-bold border-b border-plat-300 pb-1 mb-1 text-plat-800">Wallpaper</div>
                  <div className="grid grid-cols-2 gap-1 max-h-40 overflow-y-auto pr-1">
                    {WALLPAPERS.map(w => (
                      <button
                        key={w.id}
                        onClick={() => setWallpaper(w.id)}
                        className={`text-left px-1.5 py-1 border rounded truncate ${wallpaper === w.id ? 'bg-plat-400 border-plat-600 font-bold' : 'border-plat-300 hover:bg-plat-200'}`}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shareholder Terminal Button */}
          <Link to="/desk" className="btn btn-primary text-[11px] px-2.5 py-0.5 font-bold">
            Terminal
          </Link>
        </div>
      </div>
    </header>
  );
};
