"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const stats = [
  { number: 60, suffix: "+", label: "Customer Sites Served" },
  { number: 30, suffix: " Million+", label: "Litres Delivered Annually" },
  { number: 17, suffix: " Years+", label: "Years of Operation" },
];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  React.useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        springValue.set(value);
      }
    });
  }, [scrollYProgress, value, springValue]);

  return (
    <div 
      ref={ref}
      className="px-8 py-16 text-center bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-white/15 md:first:rounded-l-2xl md:last:rounded-r-2xl shadow-2xl aerospace-stat-card"
    >
      <div className="mb-4">
        <motion.span className="font-head text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none">
          {displayValue}
        </motion.span>
        <span className="font-head text-xl md:text-2xl font-bold text-[var(--lime)] align-super ml-1">
          {suffix}
        </span>
      </div>
      <span className="block text-[0.85rem] font-bold text-white/90 uppercase tracking-[0.15em]">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative py-24 md:py-32 overflow-hidden bg-[var(--navy-dark)]">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('/images/5.jpeg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-dark)]/90 via-[var(--navy-dark)]/80 to-[var(--navy)]/70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 md:bg-transparent rounded-2xl overflow-hidden md:overflow-visible">
          {stats.map((stat, index) => (
            <Counter 
              key={index}
              value={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
