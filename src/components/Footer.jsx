import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-plat-300 py-6 text-center text-[11px] text-plat-600 space-y-2 select-none">
      <p className="max-w-2xl mx-auto px-4 leading-relaxed">
        Not investment advice. Distributions are algorithmic and may be zero. The floor can be traded down, never diluted down. This documentation leads with its losing years on purpose.
      </p>
      <p className="font-mono text-[10.5px]">
        AGPL-3.0 · the published code is the sole authority · shareholder communications:{' '}
        <a
          href="https://x.com/magfund_"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-plat-900 font-bold text-plat-800"
        >
          @magfund_
        </a>
      </p>
      <div className="pt-2 flex justify-center items-center gap-4">
        <Link to="/brand" className="underline underline-offset-4 text-plat-800 hover:text-plat-900 font-bold">
          Brand resources
        </Link>
        <span>·</span>
        <a
          href="https://x.com/magfund_"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 text-plat-800 hover:text-plat-900 font-bold flex items-center gap-1"
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Follow @magfund_</span>
        </a>
      </div>
    </footer>
  );
};
