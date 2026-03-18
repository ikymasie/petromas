import { Pickaxe, Building2, Truck, Tractor, Landmark, Zap, Plane, Coffee } from "lucide-react";

const industries = [
  { name: "Mining & Extraction", icon: Pickaxe },
  { name: "Construction", icon: Building2 },
  { name: "Logistics & Transport", icon: Truck },
  { name: "Agriculture", icon: Tractor },
  { name: "Government & Municipalities", icon: Landmark },
  { name: "Power Generation", icon: Zap },
  { name: "Marine & Aviation", icon: Plane },
  { name: "Hospitality & Retail", icon: Coffee },
];

export function Industries() {
  return (
    <section id="industries" className="py-16 md:py-24 bg-[var(--bg)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight aerospace-text-glow">
            Trusted Across <span className="text-[var(--lime)]">Key Sectors</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center gap-3.5 px-5 py-8 bg-[var(--white)] rounded-2xl text-center shadow-[0_2px_8px_rgba(45,42,119,0.08)] border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-[var(--lime)] hover:shadow-[0_20px_60px_rgba(45,42,119,0.16)] group card-bg outline-none"
                tabIndex={0}
              >
                <div className="text-[var(--navy)] group-hover:text-[var(--lime)] group-hover:drop-shadow-[0_0_8px_rgba(176,38,255,0.4)] transition-all duration-300">
                  <Icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <span className="font-head text-sm font-semibold text-[var(--charcoal)] tracking-wide group-hover:text-[var(--navy)] transition-colors">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
