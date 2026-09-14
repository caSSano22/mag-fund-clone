import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Window } from '../components/Window';
import { PixelIcon } from '../components/PixelIcon';

const PROGRAM_DETAILS = {
  retirement: {
    title: 'The (4,0,1)k',
    chip: null,
    sub: 'DeFi\'s first employer match-style savings primitive',
    desc: 'Monthly contributions with an 8–12% match, minted from the exact headroom the contributions create. Designed for long-term compounding shareholders looking for predictable growth.',
    features: [
      '8% to 12% employer-style protocol match on monthly contributions',
      'Minted solely from surplus headroom created by new capital inflows',
      'Automated 30-day vesting schedule to lock in compounding gains',
      'Zero liquidation risk with guaranteed ratcheting floor backing'
    ]
  },
  warrants: {
    title: 'The Warrant Desk',
    chip: 'STANDBY',
    sub: 'Levered MAG: $1 of premium controls many dollars of tape',
    desc: 'The Warrant Desk provides upside exposure to MAG tokenized equity performance with limited downside risk. The worst case scenario is losing the paid premium.',
    features: [
      'Call option style leverage on MAG equity portfolio returns',
      'Fixed expiry windows: 7-day, 30-day, and 90-day warrant contracts',
      'Strict risk cap: Maximum potential loss is bounded by initial premium paid',
      'Fully backed by treasury USDG reserve buffers'
    ]
  },
  derby: {
    title: 'The Derby',
    chip: 'STANDBY',
    sub: 'Pari-mutuel stock prediction race',
    desc: 'Back one runner in a weekly race of the nine tokenized tech stocks (NVDA, AAPL, MSFT, TSLA, etc.). Winners split the total pooled pot proportionally.',
    features: [
      'Weekly pari-mutuel race across the 9 trend-managed stocks',
      'Winners take 100% of the runner pot with zero house rake',
      'Draw ticket bonus awards for every participating stub',
      'Live leaderboards and epoch performance stats'
    ]
  },
  credit: {
    title: 'Credit Facility',
    chip: 'STANDBY',
    sub: 'Borrow USDG against floor value of staked MAG',
    desc: 'Borrow USDG stablecoins directly against the guaranteed floor backing value of your staked MAG tokens. Fixed rates, 121-day rolls, and no liquidations ever.',
    features: [
      'Borrow up to 80% LTV against the $0.71 USDG floor value',
      'Fixed borrowing rate of 4.5% APR',
      '121-day rollable debt positions',
      'Zero liquidations — position is backed 100% by ratcheting treasury'
    ]
  },
  draw: {
    title: 'The Draw',
    chip: 'STANDBY',
    sub: 'Free entry for every MAG staker',
    desc: 'Draws take place every 8 hours and every week, paid directly in USDG stablecoins. The monthly Mega Draw starts when the treasury reaches $2,500,000.',
    features: [
      'Free entry automatically generated for every active MAG staker',
      '8-hour epoch mini draws + weekly major draws',
      'Monthly Mega Draw funded by protocol profit, never token inflation',
      'Instant payout directly into wallet or paper balance'
    ]
  },
  wars: {
    title: 'The Wars & Leagues',
    chip: 'STANDBY',
    sub: 'Gauge votes move stock allocation by 5 points',
    desc: 'Shareholders vote on gauge weights to adjust treasury stock target weights by up to 5 percentage points per 8-hour epoch. Bribes are disabled at launch.',
    features: [
      'Gauge weight voting powered by staked MAG balance',
      'Reallocate up to 5 points of treasury weighting every epoch',
      'Protection against malicious shifts: Bounded 5% cap per vote cycle',
      'Transparent on-chain snapshot governance'
    ]
  },
  pit: {
    title: 'The Pit',
    chip: 'STANDBY',
    sub: 'Free forecast chips on tape print',
    desc: 'Call the next print of the ticker tape up or down. Winners take the swept side in Draw tickets with zero rake.',
    features: [
      'Free forecast chips distributed every 8-hour epoch',
      'Predict direction (UP or DOWN) on tech stock tape prints',
      'Winners earn bonus Draw tickets for the monthly Mega Draw',
      'Zero rake, zero fees, 100% participant sweep'
    ]
  }
};

export const ProgramDetailPage = () => {
  const { id } = useParams();
  const prog = PROGRAM_DETAILS[id] || {
    title: `Program: ${id}`,
    chip: 'STANDBY',
    sub: 'Mutual Assets Group Protocol Primitive',
    desc: 'Detailed documentation for this primitive is being updated on-chain.',
    features: ['Immutable smart contract execution', '100% on-chain oracle verification']
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Window title={`PROGRAM.HTM — ${prog.title}`}>
        <div className="p-4 space-y-4">
          <div className="flex items-start gap-4 border-b border-plat-400 pb-3">
            <PixelIcon type={id} width={36} height={36} className="mt-1" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="chicago text-xl font-bold text-plat-900">{prog.title}</h1>
                {prog.chip && (
                  <span className="chip border border-plat-400 bg-plat-200 px-2 py-0.5 text-[9px] font-mono uppercase text-plat-700">
                    {prog.chip}
                  </span>
                )}
              </div>
              <p className="text-[12px] text-plat-600 font-bold mt-0.5">{prog.sub}</p>
            </div>
          </div>

          <p className="text-[12px] leading-relaxed text-plat-800">
            {prog.desc}
          </p>

          <div className="space-y-2 pt-2">
            <h3 className="chicago text-sm font-bold text-plat-900">Key Primitive Features</h3>
            <ul className="space-y-1.5 text-[11px] list-disc pl-5 text-plat-800">
              {prog.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex gap-3">
            <Link to="/desk" className="btn btn-primary px-4 py-1.5 text-[12px] font-bold">
              Access in Shareholder Terminal
            </Link>
            <Link to="/" className="btn btn-default px-4 py-1.5 text-[12px]">
              Back to Overview
            </Link>
          </div>
        </div>
      </Window>
    </div>
  );
};
