import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-plat-300 py-6 text-center text-[11px] text-plat-600 space-y-2 select-none">
      <p className="max-w-2xl mx-auto px-4 leading-relaxed">
        Not investment advice. Distributions are algorithmic and may be zero. The floor can be traded down, never diluted down. This documentation leads with its losing years on purpose.
      </p>
      <p className="font-mono text-[10.5px]">
        AGPL-3.0 · the published code is the sole authority · shareholder communications: @magdotfund
      </p>
      <div className="pt-2">
        <Link to="/brand" className="underline underline-offset-4 text-plat-800 hover:text-plat-900 font-bold">
          Brand resources
        </Link>
      </div>
    </footer>
  );
};
