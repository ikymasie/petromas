"use client";

import Image from "next/image";
import { ShieldCheck, Target, Check } from "lucide-react";
import { motion } from "framer-motion";

export function WhyUs() {
  const advantageItems = [
    {
      title: "Safety-First Culture",
      desc: "Every Petromas employee is trained to the highest HSSE (Health, Safety, Security & Environment) standards. We have maintained a zero-incident safety record for operational deliveries."
    },
    {
      title: "Technology-Driven Logistics",
      desc: "Our proprietary dispatch system uses real-time GPS, automated scheduling, and digital proof-of-delivery to give you full visibility over your fuel supply chain."
    },
    {
      title: "Price Competitiveness",
      desc: "Our bulk-buying power and operational efficiency mean we consistently offer the most competitive rates without compromising on quality or service."
    },
    {
      title: "Dedicated Account Management",
      desc: "Every client is assigned a dedicated account manager who understands their business needs and is available around the clock."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--white)] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
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
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-[var(--navy)] text-[var(--lime)] p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-[#00E5FF]/20 aerospace-badge"
            >
              <ShieldCheck className="w-10 h-10" />
              <span className="font-head text-lg font-bold uppercase tracking-wider text-white">
                HSSE<br/>Certified
              </span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3 mt-12 lg:mt-0">
              WHY PETROMAS
            </span>
            <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-10 aerospace-text-glow">
              The <span className="text-[var(--lime)]">Petromas</span> Advantage
            </h2>
            
            <div className="space-y-8">
              {advantageItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--lime)]/20 text-[var(--lime)] flex items-center justify-center mt-1 group-hover:bg-[var(--lime)] group-hover:text-[var(--navy)] transition-colors duration-300">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <div>
                    <strong className="block font-head text-[1.05rem] text-[var(--navy)] mb-2 mt-0.5">{item.title}</strong>
                    <p className="text-[0.95rem] text-[var(--grey-600)] leading-relaxed tracking-wide aerospace-text-body">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
