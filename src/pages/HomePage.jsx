import React from 'react';
import { Link } from 'react-router-dom';
import { Window } from '../components/Window';
import { PixelIcon } from '../components/PixelIcon';
import { InfoTooltip } from '../components/InfoTooltip';

const PROGRAMS_DATA = [
  {
    id: 'retirement',
    title: 'The (4,0,1)k',
    chip: null,
    sub: "DeFi's first employer match-style savings primitive: monthly contributions with an 8–12% match, minted from the exact headroom the contributions create.",
    link: '/programs/retirement'
  },
  {
    id: 'warrants',
    title: 'The Warrant Desk',
    chip: 'STANDBY',
    sub: 'Levered MAG: $1 of premium controls many dollars of tape. The worst case is losing the premium.',
    link: '/programs/warrants'
  },
  {
    id: 'derby',
    title: 'The Derby',
    chip: 'STANDBY',
    sub: 'Pari-mutuel: back one runner in a weekly race of the nine stocks; winners split the pot.',
    link: '/programs/derby'
  },
  {
    id: 'credit',
    title: 'Credit Facility',
    chip: 'STANDBY',
    sub: 'Borrow USDG against the floor value of staked MAG. Fixed rate, 121-day rolls, no liquidations — ever.',
    link: '/programs/credit'
  },
  {
    id: 'stake',
    title: 'Shareholder Program',
    chip: 'STANDBY',
    sub: 'A distribution every 8 hours, set by formula and capped by the floor gate.',
    link: '/desk?tab=stake'
  },
  {
    id: 'bond',
    title: 'Bond Desk',
    chip: 'STANDBY',
    sub: 'Pay with USDG or stock tokens. The price is the highest of NAV, the 1-hour average and the pool price, plus at most 20%. Five-day vest; staking the payout adds 3%.',
    link: '/desk?tab=bond'
  },
  {
    id: 'draw',
    title: 'The Draw',
    chip: 'STANDBY',
    sub: 'Free entry for every staker. Draws every 8 hours and every week, paid in USDG; the monthly Mega starts when the treasury reaches $2,500,000. Funded by profit, never emissions.',
    link: '/programs/draw'
  },
  {
    id: 'wars',
    title: 'The Wars & Leagues',
    chip: 'STANDBY',
    sub: 'Gauge votes move one stock by at most 5 points of the treasury per 8-hour epoch. Bribes are off at launch.',
    link: '/programs/wars'
  },
  {
    id: 'pit',
    title: 'The Pit',
    chip: 'STANDBY',
    sub: 'Free forecast chips on the tape\'s next print. Call it up or down; winners take the swept side in Draw tickets. No rake, ever.',
    link: '/programs/pit'
  },
  {
    id: 'machine',
    title: 'The Machine',
    chip: 'STANDBY',
    sub: 'The engine room, open to visitors: live signals, the USDG targets, and 10 years of backtests that lead with the losing years.',
    link: '/machine'
  },
  {
    id: 'genesis',
    title: 'Genesis — the 3,333 Seats',
    chip: 'STANDBY',
    sub: 'Vice President, Partner, Chairman. Perks stay with a registered seat, and the ranked list buys at the ranked price.',
    link: '/genesis'
  }
];

export const HomePage = () => {
  return (
    <div className="space-y-6">
      {/* Hero Window */}
      <Window title="Welcome.htm — Shareholder Information" className="mx-auto max-w-3xl">
        <div className="space-y-4 p-2 text-center">
          <h2 className="chicago text-xl font-bold text-plat-900">
            Welcome to Mutual Assets Group
          </h2>
          <p className="landing-tagline text-[13px] text-plat-700 italic">
            The rebase protocol on trend-managed equities.
          </p>
          <p className="text-[12px] leading-relaxed text-plat-800 max-w-2xl mx-auto text-pretty">
            Mutual Assets Group, MAG, is a rebase protocol holding trend-managed equities. It is a systematic treasury of tokenized stocks that compounds, pays a rebase to stakers every epoch of 8 hours, and buys itself back below NAV. Immutable. All contracts and oracles on-chain. Governance passes to stakers.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <Link to="/desk" className="btn btn-primary px-4 py-1 text-[12px] font-bold">
              Open the Shareholder Terminal
            </Link>
            <Link to="/manifesto" className="btn btn-default px-4 py-1 text-[12px]">
              Read the Manifesto
            </Link>
            <Link to="/whitelist" className="bevel-down px-3 py-1 text-[10px] uppercase tracking-wider text-plat-700 hover:text-plat-900 font-mono">
              Status: reading the chain…
            </Link>
          </div>
        </div>
      </Window>

      {/* Hero Image Banner */}
      <div className="mt-4 max-w-3xl mx-auto">
        <Link to="/whitelist" className="hero block border border-plat-400 rounded overflow-hidden shadow-sm hover:shadow-md transition-all">
          <img
            src="/art/waitlist-800.webp"
            srcSet="/art/waitlist-800.webp 800w, /art/waitlist-1600.webp 1600w"
            sizes="(max-width: 768px) 100vw, 800px"
            alt="MAG Waitlist Graphic"
            className="block h-auto w-full object-cover"
          />
        </Link>
      </div>

      {/* 4 Feature Window Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Window title="A floor under every MAG">
          <h3 className="chicago border-b border-plat-400 pb-1.5 text-[13px] font-bold">
            A floor under every MAG
          </h3>
          <p className="mt-2 text-[11px] leading-relaxed text-plat-800 text-pretty">
            Treasury ÷ supply is the floor: $0.71 per MAG at the opening bell. The wall bids 98% of it with the treasury's own cash and burns every MAG it buys. No mint can push the floor below its highest mark. Arithmetic, not policy.
          </p>
        </Window>

        <Window title="The Machine, not a manager">
          <h3 className="chicago border-b border-plat-400 pb-1.5 text-[13px] font-bold">
            The Machine, not a manager
          </h3>
          <p className="mt-2 text-[11px] leading-relaxed text-plat-800 text-pretty">
            Three moving-average votes steer nine tokenized stocks and a 10% BTC/ETH sleeve. Two or three green: 30% of the treasury in USDG. One: 40%. None: 10 points more each day, up to 80%. It never borrows or shorts.
          </p>
        </Window>

        <Window title="Backing that can grow">
          <h3 className="chicago border-b border-plat-400 pb-1.5 text-[13px] font-bold">
            Backing that can grow
          </h3>
          <p className="mt-2 text-[11px] leading-relaxed text-plat-800 text-pretty">
            The treasury holds tokenized stocks, BTC, ETH and USDG. Legacy systems hold cash, so their floor moves only on new money. MAG's floor moves with the assets, its DeFi ecosystem and Charters<sup className="text-[0.55em]">TM</sup>, up as well as down.
          </p>
        </Window>

        <Window title="Built to be handed over">
          <h3 className="chicago border-b border-plat-400 pb-1.5 text-[13px] font-bold">
            Built to be handed over
          </h3>
          <p className="mt-2 text-[11px] leading-relaxed text-plat-800 text-pretty">
            Policy is arithmetic, governance is bounded, the treasury is fully <span className="whitespace-nowrap">on-chain</span>. The aim is bigger than just MAG rebasing: it's the <span className="whitespace-nowrap">new-world</span> rebase protocol anyone can deploy on.
          </p>
        </Window>
      </div>

      {/* Two Column Section: The Programs & Sidebar Windows */}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Left Column: Programs List */}
        <Window title="The Programs" bodyClassName="p-0">
          <ul className="divide-y divide-plat-300">
            {PROGRAMS_DATA.map((prog) => (
              <li key={prog.id}>
                <Link
                  to={prog.link}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-plat-100 transition-colors group"
                >
                  <PixelIcon type={prog.id} width={26} height={26} className="mt-0.5" />
                  <span className="min-w-0 flex-1">
                    <span className="chicago flex items-center gap-2 text-[13px] font-bold text-plat-900 group-hover:text-plat-950">
                      {prog.title}
                      {prog.chip && (
                        <span className="chip border border-plat-400 bg-plat-200 px-1 py-0.2 text-[9px] font-mono uppercase text-plat-700">
                          {prog.chip}
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-snug text-plat-600">
                      {prog.sub}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Window>

        {/* Right Column: Hero Banner + Quotes + Milestone */}
        <div className="space-y-4">
          <Link to="/genesis" className="hero block border border-plat-400 rounded overflow-hidden shadow-sm hover:shadow-md transition-all">
            <img
              src="/art/seats-800.webp"
              srcSet="/art/seats-800.webp 800w, /art/seats-1600.webp 1600w"
              sizes="340px"
              alt="Genesis 3,333 Seats"
              className="block h-auto w-full object-cover"
            />
          </Link>

          {/* QUOTES.HTM Window */}
          <Window title="QUOTES.HTM — live figures" bodyClassName="p-0">
            <dl className="divide-y divide-plat-300">
              {[
                { label: "Market price", val: "no market yet" },
                { label: "NAV — backing per MAG", val: "$0.71 USDG" },
                { label: "Premium to NAV", val: "NaN", nan: true, note: "The premium is the market price divided by NAV. There is no market yet." },
                { label: "Treasury", val: "$2,500,000 USDG" },
                { label: "MAG in issue", val: "3,521,126" },
                { label: "Staked for distributions", val: "84.2%" },
                { label: "Next distribution", val: "at activation" }
              ].map((row, idx) => (
                <div key={idx} className="flex items-baseline justify-between gap-3 px-3 py-1.5">
                  <dt className="text-[11px] text-plat-600">{row.label}</dt>
                  <dd className="font-mono text-xs text-plat-900 font-bold flex items-center">
                    {row.nan ? (
                      <span className="nan-mark text-plat-500 flex items-center">
                        NaN <InfoTooltip text={row.note} mark="?" />
                      </span>
                    ) : (
                      row.val
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Window>

          {/* Milestone 1 Window */}
          <Window title="Milestone 1">
            <div className="flex items-baseline justify-between text-[11px]">
              <span className="caps-label text-plat-700 font-bold uppercase">Treasury → $1M</span>
              <span className="font-mono text-plat-900 font-bold">100.0%</span>
            </div>
            <div className="progress progress-pole mt-1.5 h-3 bg-plat-200 border border-plat-400 rounded overflow-hidden" role="progressbar">
              <div className="progress-fill h-full bg-emerald-700 w-full" />
            </div>
            <p className="mt-1.5 text-[10px] leading-snug text-plat-600">
              The meter counts the reserves — $2.5M and ratcheting. It gates nothing.
            </p>
          </Window>
        </div>
      </div>
    </div>
  );
};
