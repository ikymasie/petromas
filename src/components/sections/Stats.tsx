"use client";

import React from "react";

const stats = [
  { number: "2500", suffix: "+", label: "Customer Sites Served" },
  { number: "50", suffix: "M+", label: "Litres Delivered Annually" },
  { number: "15", suffix: "+", label: "Years of Operation" },
  { number: "99", suffix: "%", label: "On-Time Delivery Rate" },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/5.jpeg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,28,85,0.93)] to-[rgba(45,42,119,0.85)] mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="px-8 py-12 text-center bg-white/5 border border-white/10 transition-colors duration-300 hover:bg-white/10 first:rounded-l-lg last:rounded-r-lg"
            >
              <div className="mb-3">
                <span className="font-head text-4xl md:text-5xl lg:text-6xl font-black text-[var(--bg)] leading-none">
                  {stat.number}
                </span>
                <span className="font-head text-2xl font-bold text-[var(--lime)] align-super ml-1">
                  {stat.suffix}
                </span>
              </div>
              <span className="block text-[0.85rem] font-medium text-[var(--bg)]/80 uppercase tracking-[0.08em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
