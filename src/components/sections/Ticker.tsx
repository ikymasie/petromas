import React from "react";

const services = [
  "Fuel Delivery",
  "Bulk Petroleum",
  "Petroleum Storage",
  "Fleet Solutions",
  "Technical Services",
  "Lube Supply",
  "Energy Consulting",
  "24/7 Support",
];

export function Ticker() {
  return (
    <div className="bg-[var(--navy)] overflow-hidden py-3.5 border-y-4 border-[var(--lime)]">
      <div className="inline-flex gap-10 whitespace-nowrap animate-[tickerScroll_30s_linear_infinite]">
        {[...services, ...services].map((service, index) => (
          <React.Fragment key={index}>
            <span className="font-head text-xs md:text-sm font-bold tracking-[0.1em] text-[var(--white)] uppercase">
              {service}
            </span>
            <span className="text-[var(--lime)]">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
