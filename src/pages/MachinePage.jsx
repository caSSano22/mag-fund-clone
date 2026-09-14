import React from 'react';
import { Window } from '../components/Window';

const STOCK_SIGNALS = [
  { ticker: 'NVDA', name: 'NVIDIA Corp.', ma200: 'GREEN', ma50: 'GREEN', ma20: 'GREEN', signal: 'BULLISH (3/3)' },
  { ticker: 'AAPL', name: 'Apple Inc.', ma200: 'GREEN', ma50: 'GREEN', ma20: 'RED', signal: 'MODERATE (2/3)' },
  { ticker: 'MSFT', name: 'Microsoft Corp.', ma200: 'GREEN', ma50: 'RED', ma20: 'RED', signal: 'DEFENSIVE (1/3)' },
  { ticker: 'TSLA', name: 'Tesla Inc.', ma200: 'GREEN', ma50: 'GREEN', ma20: 'GREEN', signal: 'BULLISH (3/3)' },
  { ticker: 'AMZN', name: 'Amazon.com Inc.', ma200: 'GREEN', ma50: 'GREEN', ma20: 'GREEN', signal: 'BULLISH (3/3)' },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', ma200: 'GREEN', ma50: 'RED', ma20: 'RED', signal: 'DEFENSIVE (1/3)' },
  { ticker: 'META', name: 'Meta Platforms', ma200: 'GREEN', ma50: 'GREEN', ma20: 'GREEN', signal: 'BULLISH (3/3)' },
  { ticker: 'AMD', name: 'Advanced Micro Devices', ma200: 'GREEN', ma50: 'GREEN', ma20: 'GREEN', signal: 'BULLISH (3/3)' },
  { ticker: 'NFLX', name: 'Netflix Inc.', ma200: 'GREEN', ma50: 'GREEN', ma20: 'GREEN', signal: 'BULLISH (3/3)' }
];

const BACKTEST_YEARS = [
  { year: '2022', SnP: '-19.4%', magFloor: '+4.2%', maxDrawdown: '-6.1%', note: 'Tech bear market, Machine moved to 70% USDG' },
  { year: '2018', SnP: '-6.2%', magFloor: '+2.8%', maxDrawdown: '-4.8%', note: 'Q4 selloff, cash buffer activated' },
  { year: '2020', SnP: '+18.4%', magFloor: '+24.1%', maxDrawdown: '-8.2%', note: 'Covid crash & rapid liquidity recovery' },
  { year: '2021', SnP: '+26.9%', magFloor: '+38.5%', maxDrawdown: '-3.4%', note: 'Bull trend full equity allocation' },
  { year: '2023', SnP: '+24.2%', magFloor: '+31.0%', maxDrawdown: '-4.1%', note: 'AI rally trend continuation' }
];

export const MachinePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Window title="MACHINE.HTM — The Engine Room">
        <div className="p-4 space-y-6">
          <div>
            <h1 className="chicago text-xl font-bold text-plat-900">
              The Machine Engine Room
            </h1>
            <p className="text-[12px] text-plat-700 leading-relaxed mt-1">
              Live trend signals, USDG target allocations, and 10 years of backtested performance leading with losing years on purpose.
            </p>
          </div>

          {/* Signals Table */}
          <div className="space-y-2">
            <h2 className="chicago text-sm font-bold text-plat-900">
              Nine Tokenized Stock Trend Signals
            </h2>
            <div className="border border-plat-400 overflow-x-auto">
              <table className="w-full text-[11px] text-left font-mono">
                <thead className="bg-plat-200 border-b border-plat-400 chicago font-bold text-[11px]">
                  <tr>
                    <th className="p-2">Ticker</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">200-MA</th>
                    <th className="p-2">50-MA</th>
                    <th className="p-2">20-MA</th>
                    <th className="p-2">Signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-plat-300">
                  {STOCK_SIGNALS.map((s, idx) => (
                    <tr key={idx} className="hover:bg-plat-100">
                      <td className="p-2 font-bold text-plat-900">{s.ticker}</td>
                      <td className="p-2 text-plat-700">{s.name}</td>
                      <td className="p-2 text-emerald-700 font-bold">{s.ma200}</td>
                      <td className={`p-2 font-bold ${s.ma50 === 'GREEN' ? 'text-emerald-700' : 'text-red-600'}`}>{s.ma50}</td>
                      <td className={`p-2 font-bold ${s.ma20 === 'GREEN' ? 'text-emerald-700' : 'text-red-600'}`}>{s.ma20}</td>
                      <td className="p-2 font-bold text-plat-900">{s.signal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 10-Year Backtest Table */}
          <div className="space-y-2">
            <h2 className="chicago text-sm font-bold text-plat-900">
              10-Year Backtest (Leading with Losing Years)
            </h2>
            <div className="border border-plat-400 overflow-x-auto">
              <table className="w-full text-[11px] text-left">
                <thead className="bg-plat-200 border-b border-plat-400 chicago font-bold text-[11px]">
                  <tr>
                    <th className="p-2">Year</th>
                    <th className="p-2">S&P 500</th>
                    <th className="p-2">MAG Floor Return</th>
                    <th className="p-2">Max Drawdown</th>
                    <th className="p-2">Machine Regime Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-plat-300 font-mono">
                  {BACKTEST_YEARS.map((b, idx) => (
                    <tr key={idx} className="hover:bg-plat-100">
                      <td className="p-2 font-bold text-plat-900">{b.year}</td>
                      <td className={`p-2 ${b.SnP.startsWith('-') ? 'text-red-600' : 'text-emerald-700'}`}>{b.SnP}</td>
                      <td className="p-2 font-bold text-emerald-700">{b.magFloor}</td>
                      <td className="p-2 text-red-600 font-bold">{b.maxDrawdown}</td>
                      <td className="p-2 text-plat-700 text-[10px]">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};
