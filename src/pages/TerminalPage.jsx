import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Window } from '../components/Window';
import { useAppearance } from '../context/AppearanceContext';

export const TerminalPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'stake';
  const { playSound } = useAppearance();

  // Paper Wallet State
  const [usdgBalance, setUsdgBalance] = useState(25000);
  const [stakedMag, setStakedMag] = useState(1420);
  const [bondedMag, setBondedMag] = useState(0);
  const [inputAmount, setInputAmount] = useState(1000);
  const [txLog, setTxLog] = useState([]);

  const setTab = (tab) => {
    playSound('tick');
    setSearchParams({ tab });
  };

  const handleStake = () => {
    if (inputAmount <= 0 || inputAmount > usdgBalance) return;
    playSound('chime');
    const magMinted = inputAmount / 0.71;
    setUsdgBalance(prev => prev - inputAmount);
    setStakedMag(prev => prev + magMinted);
    setTxLog(prev => [{ time: new Date().toLocaleTimeString(), type: 'STAKE', desc: `Staked $${inputAmount} USDG → +${magMinted.toFixed(2)} MAG` }, ...prev]);
  };

  const handleUnstake = () => {
    if (stakedMag <= 0) return;
    playSound('chime');
    const usdgReturned = stakedMag * 0.71;
    setUsdgBalance(prev => prev + usdgReturned);
    setTxLog(prev => [{ time: new Date().toLocaleTimeString(), type: 'UNSTAKE', desc: `Unstaked ${stakedMag.toFixed(2)} MAG → +$${usdgReturned.toFixed(2)} USDG` }, ...prev]);
    setStakedMag(0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Window title="TERMINAL.HTM — Shareholder Terminal">
        <div className="p-4 space-y-4">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-plat-400 pb-3 gap-2">
            <div>
              <h1 className="chicago text-xl font-bold text-plat-900">
                Shareholder Terminal
              </h1>
              <p className="text-[11px] text-plat-600 font-mono">
                Contract Status: IMMUTABLE · Oracle Price: $0.71 USDG / MAG
              </p>
            </div>
            <div className="bevel-down px-3 py-1.5 bg-plat-100 font-mono text-[11px] flex gap-4">
              <div>
                <span className="text-plat-500">USDG Balance:</span> <span className="font-bold text-emerald-700">${usdgBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div>
                <span className="text-plat-500">Staked MAG:</span> <span className="font-bold text-plat-900">{stakedMag.toLocaleString(undefined, { maximumFractionDigits: 2 })} MAG</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-plat-400 space-x-1 select-none">
            {[
              { id: 'stake', label: 'Shareholder Stake' },
              { id: 'bond', label: 'Bond Desk' },
              { id: 'treasury', label: 'Treasury Portfolio' },
              { id: 'history', label: 'Transaction History' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-1.5 chicago text-[12px] border-t border-x rounded-t font-bold ${activeTab === t.id ? 'bg-plat-50 border-plat-500 text-plat-950 border-b-white -mb-px' : 'bg-plat-200 border-plat-400 text-plat-700 hover:bg-plat-300'}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'stake' && (
            <div className="space-y-4 pt-2">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bevel-down p-3 bg-plat-100 space-y-1">
                  <div className="text-[10px] uppercase text-plat-500 font-mono">8-Hour Epoch Rebase</div>
                  <div className="text-lg font-bold font-mono text-emerald-700">+0.124%</div>
                  <div className="text-[10px] text-plat-600">Compounding every 8h</div>
                </div>
                <div className="bevel-down p-3 bg-plat-100 space-y-1">
                  <div className="text-[10px] uppercase text-plat-500 font-mono">Floor Backing / MAG</div>
                  <div className="text-lg font-bold font-mono text-plat-900">$0.71 USDG</div>
                  <div className="text-[10px] text-plat-600">Guaranteed ratcheting bid</div>
                </div>
                <div className="bevel-down p-3 bg-plat-100 space-y-1">
                  <div className="text-[10px] uppercase text-plat-500 font-mono">Next Rebase Countdown</div>
                  <div className="text-lg font-bold font-mono text-plat-900">07:38:12</div>
                  <div className="text-[10px] text-plat-600">Epoch #104</div>
                </div>
              </div>

              <div className="bevel-up p-4 space-y-3 bg-plat-100 border border-plat-400">
                <h3 className="chicago text-sm font-bold">Paper Staking Control Panel</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="number"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(Number(e.target.value))}
                    className="px-3 py-1.5 border border-plat-500 font-mono text-[12px] bg-plat-50 w-48"
                    placeholder="USDG Amount"
                  />
                  <button onClick={handleStake} className="btn btn-primary px-4 py-1.5 text-[12px] font-bold">
                    Stake USDG → MAG
                  </button>
                  <button onClick={handleUnstake} className="btn btn-default px-4 py-1.5 text-[12px]">
                    Unstake All MAG
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bond' && (
            <div className="space-y-4 pt-2">
              <p className="text-[12px] text-plat-800">
                The Bond Desk allows shareholders to acquire MAG tokens at a discount below secondary market price with a 5-day vesting period.
              </p>
              <div className="bevel-down p-4 bg-plat-100 space-y-3">
                <div className="flex justify-between border-b border-plat-300 pb-2 text-[12px]">
                  <span className="font-bold">5-Day USDG Bond Discount:</span>
                  <span className="font-mono text-emerald-700 font-bold">5.4% Discount</span>
                </div>
                <div className="flex justify-between border-b border-plat-300 pb-2 text-[12px]">
                  <span className="font-bold">Bond Price per MAG:</span>
                  <span className="font-mono font-bold">$0.67 USDG</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="font-bold">Vesting Schedule:</span>
                  <span className="font-mono">Linear over 120 hours</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'treasury' && (
            <div className="space-y-4 pt-2">
              <h3 className="chicago text-sm font-bold">Treasury Asset Reserve Breakdown</h3>
              <div className="space-y-2">
                {[
                  { name: 'Tokenized Equities (NVDA, AAPL, MSFT, TSLA, etc.)', pct: 60, col: 'bg-emerald-700' },
                  { name: 'USDG Stablecoin Reserve', pct: 30, col: 'bg-amber-600' },
                  { name: 'Bitcoin (BTC)', pct: 5, col: 'bg-orange-500' },
                  { name: 'Ethereum (ETH)', pct: 5, col: 'bg-blue-600' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span>{item.name}</span>
                      <span className="font-mono font-bold">{item.pct}%</span>
                    </div>
                    <div className="h-3 bg-plat-200 border border-plat-400 rounded overflow-hidden">
                      <div className={`h-full ${item.col}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-2 pt-2">
              <h3 className="chicago text-sm font-bold">Paper Wallet Activity Log</h3>
              {txLog.length === 0 ? (
                <div className="bevel-down p-4 text-center text-[11px] text-plat-500 font-mono">
                  No paper transactions recorded yet.
                </div>
              ) : (
                <ul className="divide-y divide-plat-300 font-mono text-[11px]">
                  {txLog.map((log, idx) => (
                    <li key={idx} className="py-1.5 flex justify-between">
                      <span className="text-plat-500">[{log.time}] {log.type}</span>
                      <span className="font-bold text-plat-900">{log.desc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </Window>
    </div>
  );
};
