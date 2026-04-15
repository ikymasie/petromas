"use client";

import { Globe, Truck, Clock, Map } from "lucide-react";
import { motion } from "framer-motion";

export function Operations() {
  return (
    <section id="operations" className="py-16 md:py-24 bg-[var(--white)] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
            WHERE WE OPERATE
          </span>
          <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-4 aerospace-text-glow">
            Our <span className="text-[var(--lime)]">Operational Footprint</span>
          </h2>
          <p className="text-[1.05rem] text-[var(--grey-600)] leading-loose tracking-wide aerospace-text-body">
            Headquartered in Gaborone, Petromas operates a robust regional network ensuring seamless petroleum supply across the SADC region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#E2E8F0] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(45,42,119,0.16)]"
          >
            <div className="h-[480px] w-full relative group bg-[var(--navy-dark)]">
               <img 
                 src="/images/map_africa.png"
                 alt="Petromas Operational Map of Africa highlighting Botswana Hub"
                 className="w-full h-full object-contain filter brightness-110 transition-transform duration-700 group-hover:scale-105"
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 pt-4"
          >
            <div className="flex items-start gap-4 p-5 bg-[var(--grey-100)] rounded-lg border-l-4 border-[var(--lime)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-md group">
              <div className="w-11 h-11 shrink-0 bg-[var(--navy)] rounded-lg flex items-center justify-center text-[var(--lime)] group-hover:scale-110 transition-transform">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.95rem] text-[var(--navy)] mb-1">SADC Coverage</strong>
                <p className="text-[0.85rem] text-[var(--grey-600)]">Dedicated logistics and supply network across the SADC region.</p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 p-5 bg-[var(--navy-dark)]/5 rounded-lg border border-[var(--navy)]/10"
            >
              <p className="text-[0.85rem] text-[var(--navy-dark)] leading-relaxed italic">
                <strong>Corporate Note:</strong> Petromas also has a sister company registered in South Africa trading under the name <strong>Petromas Energy Pty Ltd</strong> with offices in Houghton, Johannesburg.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
