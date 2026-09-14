import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppearanceProvider, useAppearance } from './context/AppearanceContext';
import { WallpaperSvg } from './components/WallpaperSvg';
import { MenuBar } from './components/MenuBar';
import { TapeTicker } from './components/TapeTicker';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ManifestoPage } from './pages/ManifestoPage';
import { WhitelistPage } from './pages/WhitelistPage';
import { TerminalPage } from './pages/TerminalPage';
import { GenesisPage } from './pages/GenesisPage';
import { MachinePage } from './pages/MachinePage';
import { BrandPage } from './pages/BrandPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';

const MainLayout = () => {
  const { resolvedWallpaper } = useAppearance();

  return (
    <div className="relative min-h-screen flex flex-col antialiased text-plat-900 bg-plat-900 selection:bg-plat-400">
      {/* Dynamic Vector Wallpaper Background */}
      <WallpaperSvg name={resolvedWallpaper} />

      {/* Foreground Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* System 7 Desktop Menu Bar */}
        <MenuBar />

        {/* LED Ticker Marquee Bar */}
        <TapeTicker />

        {/* Main Content Viewport */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/manifesto" element={<ManifestoPage />} />
            <Route path="/whitelist" element={<WhitelistPage />} />
            <Route path="/desk" element={<TerminalPage />} />
            <Route path="/genesis" element={<GenesisPage />} />
            <Route path="/machine" element={<MachinePage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="/programs/:id" element={<ProgramDetailPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AppearanceProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </AppearanceProvider>
  );
}
