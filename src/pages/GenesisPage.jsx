import React from 'react';
import { Window } from '../components/Window';

const SEAT_TIERS = [
  {
    title: 'Vice President',
    price: '$900',
    rankedPrice: '$900',
    supply: 67,
    ranked: 50,
    whitelist: 17,
    fcfs: 0,
    perks: ['1.2× Rebase Multiplier', '2× Draw Tickets', 'Registered VP Seat Title', 'Priority Governance Vote']
  },
  {
    title: 'Partner',
    price: '$1,800',
    rankedPrice: '$1,800',
    supply: 33,
    ranked: 25,
    whitelist: 8,
    fcfs: 0,
    perks: ['1.5× Rebase Multiplier', '5× Draw Tickets', 'Partner Guild Access', 'Gauge Vote Boost']
  },
  {
    title: 'Chairman',
    price: '$3,000',
    rankedPrice: '$3,000',
    supply: 10,
    ranked: 8,
    whitelist: 2,
    fcfs: 0,
    perks: ['2.0× Rebase Multiplier', '10× Draw Tickets', 'Chairman Council Badge', 'Zero Rake Forecast Chip Access']
  }
];

export const GenesisPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Window title="GENESIS.HTM — The 3,333 Seats">
        <div className="p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between border-b border-plat-400 pb-3 gap-2">
            <div>
              <h1 className="chicago text-xl font-bold text-plat-900">
                Genesis — The 3,333 Seats
              </h1>
              <p className="text-[12px] text-plat-600">
                Vice President, Partner, Chairman. Perks stay with a registered seat, and the ranked list buys at the ranked price.
              </p>
            </div>
            <span className="chip border border-plat-400 bg-plat-200 px-3 py-1 font-mono text-[11px] font-bold text-plat-800">
              STANDBY PRE-OPEN
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            {SEAT_TIERS.map((tier, idx) => (
              <div key={idx} className="window flex flex-col justify-between">
                <div className="window-title px-2 py-1 chicago font-bold text-[13px]">
                  {tier.title}
                </div>
                <div className="window-body space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-center py-2 bg-plat-100 bevel-down">
                      <div className="text-[10px] uppercase text-plat-500 font-mono">Ranked Seat Price</div>
                      <div className="text-xl font-bold font-mono text-plat-900">{tier.rankedPrice}</div>
                    </div>

                    <div className="space-y-1 text-[11px]">
                      <div className="font-bold border-b border-plat-300 pb-0.5">Seat Perks:</div>
                      <ul className="space-y-1 pl-3 list-disc text-plat-700">
                        {tier.perks.map((perk, i) => (
                          <li key={i}>{perk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="btn btn-default w-full py-1.5 text-[11px] font-bold mt-4">
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
};
