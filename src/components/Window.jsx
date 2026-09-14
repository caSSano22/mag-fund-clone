import React, { useState } from 'react';
import { useAppearance } from '../context/AppearanceContext';

export const Window = ({
  title = "Window",
  children,
  className = "",
  bodyClassName = "",
  closable = false,
  onClose
}) => {
  const { playSound } = useAppearance();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    playSound('window');
    setCollapsed(!collapsed);
  };

  const handleClose = () => {
    playSound('tick');
    if (onClose) onClose();
  };

  return (
    <div className={`window ${className}`}>
      <div className="window-title flex items-center justify-between px-2 py-1 select-none">
        <div className="flex items-center gap-1.5 min-w-0">
          {closable && (
            <button
              onClick={handleClose}
              aria-label="Close window"
              className="w-3 h-3 border border-plat-500 bg-plat-200 active:bg-plat-400 flex items-center justify-center text-[9px] leading-none"
            >
              ×
            </button>
          )}
          <span className="window-title-text chicago text-[13px] font-bold truncate">
            {title}
          </span>
        </div>
        <div className="window-widget flex items-center gap-1">
          <button
            onClick={toggleCollapse}
            aria-label="Collapse window"
            className="w-3.5 h-3.5 border border-plat-500 bg-plat-100 active:bg-plat-300 flex items-center justify-center text-[9px]"
          >
            {collapsed ? '+' : '−'}
          </button>
        </div>
      </div>
      {!collapsed && (
        <div className={`window-body ${bodyClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};
