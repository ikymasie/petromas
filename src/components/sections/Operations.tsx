import { Globe, Truck, Clock, Map } from "lucide-react";

export function Operations() {
  return (
    <section id="operations" className="py-16 md:py-24 bg-[var(--white)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
            WHERE WE OPERATE
          </span>
          <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-4 aerospace-text-glow">
            Our <span className="text-[var(--lime)]">Operational Footprint</span>
          </h2>
          <p className="text-[1.05rem] text-[var(--grey-600)] leading-loose tracking-wide aerospace-text-body">
            With strategic bases across South Africa, we can reach your site quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="bg-[#E2E8F0] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(45,42,119,0.16)]">
            <div className="h-[480px] w-full relative group">
               <iframe 
                 src="https://maps.google.com/maps?q=Plot%2064517,%20Unit%2022,%20Fairground%20Office%20Park,%20Gaborone,%20Botswana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                 className="w-full h-full border-0 absolute inset-0 filter grayscale-[20%] sepia-[10%] opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
               
               {/* Decorative Overlay for Theme integration */}
               <div className="absolute inset-0 pointer-events-none border-4 border-transparent rounded-t-2xl mix-blend-overlay"></div>
            </div>
            
            <div className="bg-[var(--navy)] p-4 md:px-6 flex gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-[0.82rem] text-[var(--bg)]/80 font-head font-semibold">
                <span className="w-3 h-3 rounded-full bg-[var(--navy)] shadow-[0_0_8px_3px_rgba(0,229,255,0.4)] relative border border-[#00E5FF]/50"></span>
                Headquarters
              </div>
              <div className="flex items-center gap-2 text-[0.82rem] text-[var(--bg)]/80 font-head font-semibold">
                <span className="w-3 h-3 rounded-full bg-[var(--lime)] shadow-[0_0_8px_3px_rgba(176,38,255,0.4)] relative border border-[#B026FF]/50"></span>
                Regional Depots
              </div>
              <div className="flex items-center gap-2 text-[0.82rem] text-[var(--bg)]/80 font-head font-semibold">
                <span className="w-3 h-3 rounded-full bg-[#E2E8F0] shadow-[0_0_8px_3px_rgba(226,232,240,0.3)] relative"></span>
                Partner Sites
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <div className="flex items-start gap-4 p-5 bg-[var(--grey-100)] rounded-lg border-l-4 border-[var(--lime)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-md group">
              <div className="w-11 h-11 shrink-0 bg-[var(--navy)] rounded-lg flex items-center justify-center text-[var(--lime)] group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.95rem] text-[var(--navy)] mb-1">8 Provinces</strong>
                <p className="text-[0.85rem] text-[var(--grey-600)]">Active operations across South Africa</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[var(--grey-100)] rounded-lg border-l-4 border-[var(--lime)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-md group">
              <div className="w-11 h-11 shrink-0 bg-[var(--navy)] rounded-lg flex items-center justify-center text-[var(--lime)] group-hover:scale-110 transition-transform">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.95rem] text-[var(--navy)] mb-1">40+ Tanker Fleet</strong>
                <p className="text-[0.85rem] text-[var(--grey-600)]">Modern, GPS-tracked delivery vehicles</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[var(--grey-100)] rounded-lg border-l-4 border-[var(--lime)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-md group">
              <div className="w-11 h-11 shrink-0 bg-[var(--navy)] rounded-lg flex items-center justify-center text-[var(--lime)] group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.95rem] text-[var(--navy)] mb-1">4-Hour Response</strong>
                <p className="text-[0.85rem] text-[var(--grey-600)]">Emergency delivery SLA in metro areas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[var(--grey-100)] rounded-lg border-l-4 border-[var(--lime)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-md group">
              <div className="w-11 h-11 shrink-0 bg-[var(--navy)] rounded-lg flex items-center justify-center text-[var(--lime)] group-hover:scale-110 transition-transform">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.95rem] text-[var(--navy)] mb-1">SADC Coverage</strong>
                <p className="text-[0.85rem] text-[var(--grey-600)]">Cross-border supply into neighbouring states</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
