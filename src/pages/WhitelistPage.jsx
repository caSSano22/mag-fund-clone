import React, { useState } from 'react';
import { Window } from '../components/Window';
import { useAppearance } from '../context/AppearanceContext';

export const WhitelistPage = () => {
  const { playSound } = useAppearance();
  const [pledgeAmount, setPledgeAmount] = useState(1000);
  const [registered, setRegistered] = useState(false);
  const [addressInput, setAddressInput] = useState('');

  const estimatedMAG = (pledgeAmount / 0.71).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addressInput) return;
    playSound('chime');
    setRegistered(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Window title="WHITELIST.HTM — Genesis Access Registration">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-plat-400 pb-2">
            <h1 className="chicago text-lg font-bold text-plat-900">
              Genesis Whitelist Registration
            </h1>
            <span className="chip border border-plat-400 bg-plat-200 px-2 py-0.5 text-[10px] font-mono text-plat-700">
              PRE-OPEN
            </span>
          </div>

          <p className="text-[12px] leading-relaxed text-plat-800">
            Registered whitelist seats receive priority allocation at the opening bell floor price of $0.71 USDG per MAG token, alongside bonus Draw tickets and seat rank multipliers.
          </p>

          {!registered ? (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-plat-800">
                  Ethereum / EVM Wallet Address:
                </label>
                <input
                  type="text"
                  placeholder="0x..."
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  className="w-full px-3 py-1.5 border border-plat-500 font-mono text-[12px] bg-plat-50 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-plat-800">
                  <span>Intended USDG Deposit Pledge:</span>
                  <span className="font-mono">${pledgeAmount.toLocaleString()} USDG</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="25000"
                  step="250"
                  value={pledgeAmount}
                  onChange={(e) => setPledgeAmount(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="bevel-down p-3 bg-plat-100 space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-plat-600">Floor Price per MAG:</span>
                  <span className="font-mono font-bold">$0.71 USDG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-plat-600">Estimated MAG Allocation:</span>
                  <span className="font-mono font-bold text-emerald-800">{Number(estimatedMAG).toLocaleString()} MAG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-plat-600">8-Hour Epoch Rebase Yield:</span>
                  <span className="font-mono font-bold">+0.12% / epoch</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full py-2 text-[12px] font-bold">
                Submit Whitelist Pledge
              </button>
            </form>
          ) : (
            <div className="bevel-down p-4 text-center space-y-2 bg-plat-100">
              <div className="text-emerald-700 text-lg font-bold">✓ Whitelist Spot Reserved!</div>
              <p className="text-[11px] text-plat-700">
                Wallet address <span className="font-mono font-bold">{addressInput}</span> is queued for ${pledgeAmount.toLocaleString()} USDG (~{estimatedMAG} MAG).
              </p>
              <button
                onClick={() => setRegistered(false)}
                className="btn btn-default text-[11px] px-3 py-1 mt-2"
              >
                Edit Pledge
              </button>
            </div>
          )}
        </div>
      </Window>
    </div>
  );
};
