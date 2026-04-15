"use client";

import Image from "next/image";
import { CheckCircle, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--white)] transition-colors duration-300">
      {/* V1 background watermark effect */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] opacity-[0.03] pointer-events-none hidden md:block" style={{ backgroundImage: "url('/images/logo.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Images Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-[1.5fr_1fr] grid-rows-[300px_200px] gap-4"
        >
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden group">
            <Image 
              src="/images/1.jpeg" 
              alt="Petromas field engineer at work" 
              width={600} 
              height={500} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden self-start group">
            <Image 
              src="/images/3.jpeg" 
              alt="Petromas engineering team" 
              width={400} 
              height={200} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[var(--lime)] text-[var(--bg)] px-8 py-4 rounded-xl text-center shadow-[0_20px_60px_rgba(45,42,119,0.16)] whitespace-nowrap z-10"
          >
            <span className="block font-head text-4xl font-black leading-none mb-1">17+</span>
            <span className="text-xs font-bold opacity-90 uppercase tracking-wider">Years of Excellence</span>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-8"
        >
          <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
            ABOUT US
          </span>
          <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-4 aerospace-text-glow">
            Botswana's <span className="text-[var(--lime)]">Leading Energy</span> Partner
          </h2>
          <div className="space-y-4 text-[var(--grey-600)] leading-loose tracking-wide mb-8 aerospace-text-body">
            <p>
              Founded in 2008, Cavert (Pty) Limited t/a Petromas is a 100% Botswana Citizen-Owned petroleum distribution company headquartered in Gaborone. We have built a robust reputation in the fuel sector, operating both nationally and regionally to service mining companies, parastatals, and private entities.
            </p>
            <p>
              Our core focus is to provide end-to-end petroleum supply and logistics solutions, ensuring continuity in the entire supply chain through professionalism, integrity, and strict adherence to international best practices.
            </p>
          </div>

          <div className="space-y-5 mt-9">
            {[
              { icon: CheckCircle, title: "ISO-Certified Quality", desc: "Rigorous standards across all operations." },
              { icon: Clock, title: "24/7 Reliability", desc: "Round-the-clock availability and support." },
              { icon: Globe, title: "Pan-African Reach", desc: "Serving clients across Southern Africa." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 shrink-0 bg-[var(--grey-100)] rounded-lg flex items-center justify-center text-[var(--lime)] group-hover:bg-[var(--navy)] group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block font-head text-[0.9rem] text-[var(--navy)] mb-1">{item.title}</strong>
                  <p className="text-[0.88rem] text-[var(--grey-600)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
          >
            <a href="#contact" className="btn btn-primary">
              REQUEST A CONSULTATION
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
