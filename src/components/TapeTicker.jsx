import React, { useState, useEffect } from 'react';

const TAPE_ITEMS = [
  { label: "PRE-OPEN", value: "the opening-bell book", tone: "down" },
  { label: "NAV AT THE BELL", value: "$0.71" },
  { label: "WALL BID", value: "$0.70" },
  { label: "PREMIUM", value: "NaN", nan: true },
  { label: "APY", value: "NaN", nan: true },
  { label: "CEILING", value: "45.0%" },
  { label: "NEXT PAYOUT", value: "at activation" },
  { label: "EPOCH", value: "0" },
  { label: "NVDA", value: "$128.40 +3.42%", tone: "up" },
  { label: "AAPL", value: "$224.10 +1.15%", tone: "up" },
  { label: "MSFT", value: "$448.20 -0.45%", tone: "down" },
  { label: "TSLA", value: "$235.60 +5.12%", tone: "up" },
  { label: "AMZN", value: "$186.50 +0.88%", tone: "up" },
  { label: "GOOGL", value: "$178.90 -0.21%", tone: "down" },
  { label: "META", value: "$512.30 +2.04%", tone: "up" },
  { label: "AMD", value: "$156.70 +4.10%", tone: "up" },
  { label: "NFLX", value: "$642.10 +1.20%", tone: "up" },
  { label: "BTC", value: "$94,850 +2.10%", tone: "up" },
  { label: "ETH", value: "$3,420 +1.80%", tone: "up" }
];

export const TapeTicker = () => {
  const [items, setItems] = useState(TAPE_ITEMS);

  // Slight price fluctuation simulator for realistic live market ticker effect
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => prev.map(item => {
        if (item.tone === 'up' || item.tone === 'down') {
          const delta = (Math.random() - 0.48) * 0.1;
          const match = item.value.match(/\$([0-9,\.]+)\s+([\+\-][0-9\.]+)%/);
          if (match) {
            const rawVal = parseFloat(match[1].replace(',', ''));
            const rawPct = parseFloat(match[2]);
            const newVal = (rawVal + delta).toFixed(2);
            const newPct = (rawPct + delta * 0.2).toFixed(2);
            const sign = newPct >= 0 ? '+' : '';
            return {
              ...item,
              value: `$${newVal} ${sign}${newPct}%`,
              tone: newPct >= 0 ? 'up' : 'down'
            };
          }
        }
        return item;
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tape led-screen border-x-0 border-t-0 py-1 overflow-hidden" style={{ '--tape-secs': '75s' }} aria-hidden="true">
      <div className="tape-track flex whitespace-nowrap">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="inline-flex items-baseline whitespace-nowrap">
            {items.map((item, idx) => (
              <span key={`${copyIndex}-${idx}`} className="mx-4 inline-flex items-baseline gap-1.5">
                <span className="led-label text-[10.5px] uppercase tracking-wider">{item.label}</span>
                <span className={`led-value text-[11px] ${item.tone === 'down' ? 'led-red text-red-400' : item.tone === 'up' ? 'text-emerald-400' : ''} ${item.nan ? 'nan-mark' : ''}`}>
                  {item.value}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
