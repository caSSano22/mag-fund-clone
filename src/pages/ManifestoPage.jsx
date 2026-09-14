import React from 'react';
import { Window } from '../components/Window';

export const ManifestoPage = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Window title="MANIFESTO.HTM — Mutual Assets Group">
        <div className="p-4 space-y-4 text-plat-900 text-[12px] leading-relaxed">
          <h1 className="chicago text-xl font-bold border-b border-plat-400 pb-2">
            The Manifesto of Mutual Assets Group
          </h1>
          <p className="italic text-plat-700">
            "Policy is arithmetic, governance is bounded, the treasury is fully on-chain."
          </p>

          <section className="space-y-2">
            <h2 className="chicago text-sm font-bold text-plat-900 uppercase tracking-wide">
              1. Arithmetic Over Discretion
            </h2>
            <p>
              Mutual Assets Group (MAG) operates on strict algorithmic rules rather than discretionary fund management. The backing floor per token is calculated strictly as Treasury ÷ Supply ($0.71 at opening bell). No mint or emissions can push the floor below its highest historical mark.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="chicago text-sm font-bold text-plat-900 uppercase tracking-wide">
              2. Systematic Equity Treasury
            </h2>
            <p>
              Traditional central banks and DeFi treasuries hold idle stablecoins. MAG backs its tokens with nine trend-managed tokenized technology stocks (NVDA, AAPL, MSFT, TSLA, AMZN, GOOGL, META, AMD, NFLX) alongside a 10% BTC/ETH sleeve. Three moving-average votes dynamically rebalance exposure into USDG stablecoins during market downturns.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="chicago text-sm font-bold text-plat-900 uppercase tracking-wide">
              3. Transparent Loss-Leading Backtests
            </h2>
            <p>
              We reject cherry-picked backtest curves. The documentation and backtesting engine for MAG lead with losing years on purpose. Investors and stakers evaluate the protocol based on drawdown performance and floor ratcheting survival during bear regimes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="chicago text-sm font-bold text-plat-900 uppercase tracking-wide">
              4. Complete On-Chain Handover
            </h2>
            <p>
              All contracts and price oracles are deployed immutably on-chain under AGPL-3.0. Governance naturally transitions to long-term MAG stakers as emissions and distributions compound every 8-hour epoch.
            </p>
          </section>
        </div>
      </Window>
    </div>
  );
};
