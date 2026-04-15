"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { getOilPrices, OilPriceData } from '@/lib/oil-prices';

export function OilTicker() {
  const [prices, setPrices] = useState<OilPriceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const data = await getOilPrices();
      setPrices(data);
      setLoading(false);
    };

    fetchPrices();
    // Refresh every 5 minutes
    const interval = setInterval(fetchPrices, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="h-14 bg-[var(--navy-dark)]/80 backdrop-blur-md flex items-center justify-center border-b border-white/10">
      <div className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-[var(--lime)] animate-pulse" />
        <span className="text-[0.65rem] font-bold text-white/40 uppercase tracking-widest">Initialising Live Feed...</span>
      </div>
    </div>
  );

  // Triple the prices array for a seamless loop
  const displayPrices = [...prices, ...prices, ...prices];

  return (
    <div className="relative h-14 bg-[var(--navy-dark)]/90 backdrop-blur-md border-b border-white/10 overflow-hidden flex items-center shadow-lg z-20">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--navy-dark)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--navy-dark)] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex items-center h-full">
        {/* Static Title Label */}
        <div className="px-6 border-r border-white/10 h-full flex items-center bg-[var(--navy-dark)] z-30 shadow-[10px_0_20px_rgba(0,0,0,0.3)]">
           <div className="flex items-center gap-3">
             <div className="relative flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-[var(--lime)] animate-ping absolute"></div>
               <div className="w-2 h-2 rounded-full bg-[var(--lime)] relative"></div>
             </div>
             <span className="font-head text-[0.65rem] font-black text-white uppercase tracking-[0.25em] whitespace-nowrap">
               Oil <span className="text-[var(--lime)]">Ticker</span> <span className="text-white/30 ml-1">BWP</span>
             </span>
           </div>
        </div>

        {/* Marquee Scroller */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-33.33%" }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
          className="flex items-center h-full gap-16 whitespace-nowrap pr-16"
        >
          {displayPrices.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 group cursor-default">
              <div className="flex flex-col">
                <span className="font-head text-[0.55rem] font-bold text-white/40 group-hover:text-[var(--lime)] transition-colors uppercase tracking-[0.2em]">
                  {item.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-orbitron text-sm font-medium text-white tracking-[0.1em] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    P{item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                  <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[0.6rem] font-bold ${
                    item.change >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                  } border border-white/5`}>
                    {item.change >= 0 ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                    {Math.abs(item.changePercent).toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
