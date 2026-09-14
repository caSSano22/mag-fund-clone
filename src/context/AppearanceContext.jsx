import React, { createContext, useContext, useState, useEffect } from 'react';
import { sound } from '../utils/sound';

const THEME_DEFAULTS = {
  platinum: 'platinum',
  heritage: 'cubes',
  editorial: 'orbits'
};

const THEME_COLORS = {
  platinum: '#1d4231',
  heritage: '#1a2e20',
  editorial: '#182a1e'
};

const LIGHT_WALLPAPERS = ['paper', 'blueprint', 'starchart'];

const AppearanceContext = createContext();

export const AppearanceProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('mag_theme') || 'platinum';
  });

  const [wallpaper, setWallpaperState] = useState(() => {
    return localStorage.getItem('mag_wallpaper') || 'auto';
  });

  const [soundOn, setSoundOnState] = useState(() => {
    const saved = localStorage.getItem('mag_sound');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const resolvedWallpaper = wallpaper === 'auto' ? THEME_DEFAULTS[theme] || 'platinum' : wallpaper;

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.wallpaper = resolvedWallpaper;
    root.dataset.desk = LIGHT_WALLPAPERS.includes(resolvedWallpaper) ? 'light' : 'dark';
    root.dataset.cursor = 'normal';

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', THEME_COLORS[theme] || '#1d4231');
    }

    localStorage.setItem('mag_theme', theme);
    localStorage.setItem('mag_wallpaper', wallpaper);
  }, [theme, wallpaper, resolvedWallpaper]);

  useEffect(() => {
    localStorage.setItem('mag_sound', JSON.stringify(soundOn));
  }, [soundOn]);

  const setTheme = (newTheme) => {
    if (soundOn) sound.tick();
    setThemeState(newTheme);
  };

  const setWallpaper = (newWallpaper) => {
    if (soundOn) sound.tick();
    setWallpaperState(newWallpaper);
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOnState(next);
    if (next) sound.chime();
  };

  const playSound = (type = 'tick') => {
    if (!soundOn) return;
    if (sound[type]) sound[type]();
  };

  return (
    <AppearanceContext.Provider
      value={{
        theme,
        setTheme,
        wallpaper,
        setWallpaper,
        resolvedWallpaper,
        soundOn,
        toggleSound,
        playSound
      }}
    >
      {children}
    </AppearanceContext.Provider>
  );
};

export const useAppearance = () => useContext(AppearanceContext);
