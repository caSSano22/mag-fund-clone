import React, { useState } from 'react';
import { useAppearance } from '../context/AppearanceContext';

export const InfoTooltip = ({ text, mark = "i", label = "More about this" }) => {
  const [visible, setVisible] = useState(false);
  const { playSound } = useAppearance();

  const toggleTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    playSound('tick');
    setVisible(!visible);
  };

  return (
    <span className="relative inline-block ml-1">
      <span
        role="button"
        tabIndex={0}
        aria-label={label}
        className={`info-mark cursor-pointer select-none ${mark === '?' ? 'info-mark-why' : ''}`}
        onClick={toggleTooltip}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {mark}
      </span>
      {visible && (
        <span className="balloon absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-56 p-2 text-[11px] leading-snug bg-plat-50 border border-plat-500 rounded shadow-md text-plat-900 pointer-events-none">
          {text}
        </span>
      )}
    </span>
  );
};
