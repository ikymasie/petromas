import Image from "next/image";
import { ShieldCheck, Target, Check } from "lucide-react";

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-[var(--white)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(45,42,119,0.16)]">
              <Image 
                src="/images/8.jpeg" 
                alt="Petromas engineer on-site" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[var(--navy)] text-[var(--lime)] p-6 rounded-2xl shadow-xl flex items-center gap-4 transition-transform group-hover:-translate-y-2 border border-[#00E5FF]/20 aerospace-badge">
              <ShieldCheck className="w-10 h-10" />
              <span className="font-head text-lg font-bold uppercase tracking-wider text-white">
                HSSE<br/>Certified
              </span>
            </div>
          </div>

          <div className="lg:pl-8">
            <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3 mt-12 lg:mt-0">
              WHY PETROMAS
            </span>
            <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-10 aerospace-text-glow">
              The <span className="text-[var(--lime)]">Petromas</span> Advantage
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--lime)]/20 text-[var(--lime)] flex items-center justify-center mt-1 group-hover:bg-[var(--lime)] group-hover:text-[var(--navy)] transition-colors duration-300">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <div>
                  <strong className="block font-head text-[1.05rem] text-[var(--navy)] mb-2 mt-0.5">Safety-First Culture</strong>
                  <p className="text-[0.95rem] text-[var(--grey-600)] leading-relaxed tracking-wide aerospace-text-body">
                    Every Petromas employee is trained to the highest HSSE (Health, Safety, Security &amp; Environment) standards. We have maintained a zero-incident safety record for operational deliveries.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--lime)]/20 text-[var(--lime)] flex items-center justify-center mt-1 group-hover:bg-[var(--lime)] group-hover:text-[var(--navy)] transition-colors duration-300">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <div>
                  <strong className="block font-head text-[1.05rem] text-[var(--navy)] mb-2 mt-0.5">Technology-Driven Logistics</strong>
                  <p className="text-[0.95rem] text-[var(--grey-600)] leading-relaxed tracking-wide aerospace-text-body">
                    Our proprietary dispatch system uses real-time GPS, automated scheduling, and digital proof-of-delivery to give you full visibility over your fuel supply chain.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--lime)]/20 text-[var(--lime)] flex items-center justify-center mt-1 group-hover:bg-[var(--lime)] group-hover:text-[var(--navy)] transition-colors duration-300">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <div>
                  <strong className="block font-head text-[1.05rem] text-[var(--navy)] mb-2 mt-0.5">Price Competitiveness</strong>
                  <p className="text-[0.95rem] text-[var(--grey-600)] leading-relaxed tracking-wide aerospace-text-body">
                    Our bulk-buying power and operational efficiency mean we consistently offer the most competitive rates without compromising on quality or service.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--lime)]/20 text-[var(--lime)] flex items-center justify-center mt-1 group-hover:bg-[var(--lime)] group-hover:text-[var(--navy)] transition-colors duration-300">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </div>
                <div>
                  <strong className="block font-head text-[1.05rem] text-[var(--navy)] mb-2 mt-0.5">Dedicated Account Management</strong>
                  <p className="text-[0.95rem] text-[var(--grey-600)] leading-relaxed tracking-wide aerospace-text-body">
                    Every client is assigned a dedicated account manager who understands their business needs and is available around the clock.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
