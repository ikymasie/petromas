"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Truck,
  Train,
  ShieldCheck,
  Clock,
  Zap,
  MapPin,
  BarChart3,
  Leaf,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const roadFeatures = [
  { icon: ShieldCheck, title: "GPS Live Tracking", desc: "Real-time location monitoring for every tanker in our fleet." },
  { icon: Clock, title: "24/7 On-Demand Delivery", desc: "Emergency and scheduled deliveries around the clock." },
  { icon: Zap, title: "Rapid Response Teams", desc: "Dedicated rapid deployment crews for urgent site requirements." },
  { icon: ShieldCheck, title: "HSSE Certified Drivers", desc: "All drivers trained to international health, safety, and environment standards." },
];

const railFeatures = [
  { icon: BarChart3, title: "High-Volume Capacity", desc: "A single rail transit can move millions of litres, far exceeding road-only operations." },
  { icon: MapPin, title: "Strategic Siding Access", desc: "Established access points at key inland sidings across the SADC region." },
  { icon: Leaf, title: "Lower Carbon Footprint", desc: "Rail transport emits up to 75% less CO₂ per tonne-km compared to road freight." },
  { icon: CheckCircle2, title: "Integrated Scheduling", desc: "Seamlessly coordinated with road delivery for true last-mile continuity." },
];

const stats = [
  { value: "50+", label: "Tanker Fleet Size" },
  { value: "30M+", label: "Litres Delivered Annually" },
  { value: "6", label: "SADC Countries Served" },
  { value: "24/7", label: "Operational Availability" },
];

export default function MultimodalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">

      {/* ── Hero Section ── */}
      <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--navy-dark)]">
          <div className="absolute inset-0 opacity-30 bg-[url('/images/road_tanker.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)] via-[var(--navy-dark)]/90 to-[var(--navy-dark)]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)] via-transparent to-transparent" />
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[var(--lime)]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-[var(--lime)] font-head font-bold text-sm tracking-wider uppercase mb-10 hover:gap-3 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block font-head text-[0.7rem] font-bold tracking-[0.2em] text-[var(--lime)] border border-[var(--lime)]/40 px-4 py-1.5 rounded-full uppercase backdrop-blur-sm bg-[var(--lime)]/5">
                Inland Logistics
              </span>
            </div>

            <h1 className="font-head text-5xl md:text-6xl lg:text-8xl font-black text-white leading-none mb-6">
              Multimodal <br />
              <span className="text-[var(--lime)]">Transport</span>
              <span className="text-white/30"> Solutions</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Petromas operates an integrated road and rail logistics network to guarantee
              seamless petroleum supply continuity for the most demanding inland delivery
              requirements across Southern Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[var(--lime)] py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[var(--navy)]/20">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-6"
              >
                <div className="font-head text-3xl md:text-4xl font-black text-[var(--navy-dark)]">{s.value}</div>
                <div className="text-xs font-bold text-[var(--navy-dark)]/80 uppercase tracking-wider mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Road Transport Section ── */}
      <section id="road" className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-6 bg-[var(--lime)]/10 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(45,42,119,0.2)] group">
                <Image
                  src="/images/road_tanker.png"
                  alt="Petromas branded road tanker on highway"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white">
                    <Truck className="w-4 h-4 text-[var(--lime)]" />
                    <span className="font-head text-sm font-bold uppercase tracking-wider">Petromas Road Tanker Fleet</span>
                  </div>
                </div>
              </div>
              {/* Decorative tag */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[var(--navy)] text-white px-6 py-4 rounded-2xl shadow-xl border border-[var(--lime)]/20">
                <div className="font-head text-2xl font-black text-[var(--lime)]">50+</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/70">Tankers Active</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-3 bg-[var(--navy)]/5 border border-[var(--navy)]/10 px-4 py-2 rounded-full text-[var(--navy)] font-head font-bold text-xs tracking-wider uppercase mb-6">
                <Truck className="w-4 h-4" />
                Road Logistics
              </div>
              <h2 className="font-head text-4xl md:text-5xl font-extrabold text-[var(--navy)] leading-tight mb-6">
                Direct, Dedicated <br />
                <span className="text-[var(--lime)]">Road Fleet</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Our modern, GPS-tracked fleet of branded road tankers provides the flexibility
                required for rapid on-demand delivery and scheduled site refills. We operate
                across all terrains — from urban distribution centres to remote mining sites —
                ensuring your operations never run dry.
              </p>
              <div className="space-y-5">
                {roadFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[var(--lime)]/10 border border-[var(--lime)]/20 flex items-center justify-center text-[var(--navy)] group-hover:bg-[var(--navy)] group-hover:text-[var(--lime)] transition-colors duration-300">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block font-head text-[0.95rem] text-[var(--navy)] mb-0.5">{f.title}</strong>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mt-10"
              >
                <Link href="/#contact" className="btn btn-primary inline-flex items-center gap-2">
                  Request a Fleet Quote <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="relative h-24 bg-[var(--bg)] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-1 w-16 bg-[var(--navy)] rounded-full" />
          ))}
        </div>
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="flex items-center gap-3 text-[var(--navy)]/30">
            <div className="h-px flex-1 bg-[var(--navy)]/10" />
            <span className="font-head text-xs font-bold uppercase tracking-widest">Plus Rail</span>
            <div className="h-px flex-1 bg-[var(--navy)]/10" />
          </div>
        </div>
      </div>

      {/* ── Rail Transport Section ── */}
      <section id="rail" className="py-28 bg-[var(--bg)] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="inline-flex items-center gap-3 bg-[var(--navy)]/5 border border-[var(--navy)]/10 px-4 py-2 rounded-full text-[var(--navy)] font-head font-bold text-xs tracking-wider uppercase mb-6">
                <Train className="w-4 h-4" />
                Rail Infrastructure
              </div>
              <h2 className="font-head text-4xl md:text-5xl font-extrabold text-[var(--navy)] leading-tight mb-6">
                High-Volume <br />
                <span className="text-[var(--lime)]">Rail Logistics</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                For large-scale inland deliveries, our strategic rail logistics partnerships
                allow the efficient, cost-effective transport of massive petroleum volumes with
                a significantly reduced environmental footprint. Our established siding access
                points bridge the gap between major coastal ports and landlocked industrial hubs
                deep in the SADC interior.
              </p>
              <div className="space-y-5">
                {railFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[var(--lime)]/10 border border-[var(--lime)]/20 flex items-center justify-center text-[var(--navy)] group-hover:bg-[var(--navy)] group-hover:text-[var(--lime)] transition-colors duration-300">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block font-head text-[0.95rem] text-[var(--navy)] mb-0.5">{f.title}</strong>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-4 mt-10"
              >
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-[var(--lime)] transition-colors">
                  <div className="font-head text-2xl font-black text-[var(--navy)] mb-1">Millions</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Litres per Transit</div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:border-[var(--lime)] transition-colors">
                  <div className="font-head text-2xl font-black text-[var(--navy)] mb-1">75%</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Lower CO₂ vs Road</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-[var(--navy)]/5 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(45,42,119,0.2)] group">
                <Image
                  src="/images/rail_tanker.png"
                  alt="Rail tanker wagons transporting petroleum"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white">
                    <Train className="w-4 h-4 text-[var(--lime)]" />
                    <span className="font-head text-sm font-bold uppercase tracking-wider">Rail Tanker Transport</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-[var(--lime)] text-[var(--navy-dark)] px-6 py-4 rounded-2xl shadow-xl">
                <div className="font-head text-2xl font-black">SADC</div>
                <div className="text-[0.65rem] font-bold uppercase tracking-widest opacity-80">Regional Network</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
              THE PROCESS
            </span>
            <h2 className="font-head text-3xl md:text-4xl font-extrabold text-[var(--navy)] leading-tight">
              Seamless End-to-End <span className="text-[var(--lime)]">Supply</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--lime)]/20 via-[var(--lime)] to-[var(--lime)]/20 pointer-events-none" />
            {[
              { step: "01", icon: MapPin, title: "Order Placed", desc: "Client submits delivery requirement with volume, location and timeline." },
              { step: "02", icon: Train, title: "Rail Dispatch", desc: "Bulk volume loaded at depot siding for efficient long-haul rail movement." },
              { step: "03", icon: Truck, title: "Road Transfer", desc: "Tankers collect at inland siding for last-mile delivery to site." },
              { step: "04", icon: CheckCircle2, title: "Site Delivery", desc: "Fuel delivered, measured, and signed off with digital proof of delivery." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-[var(--navy)] flex items-center justify-center shadow-lg group-hover:bg-[var(--lime)] transition-colors duration-300 z-10 relative">
                    <step.icon className="w-8 h-8 text-[var(--lime)] group-hover:text-[var(--navy)] transition-colors duration-300" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[var(--lime)] text-[var(--navy-dark)] text-[0.65rem] font-black font-head rounded-full w-7 h-7 flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-head text-[var(--navy)] font-bold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-24 bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--lime)]/10 rounded-full blur-[150px] -mr-80 -mt-80" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--navy)]/50 rounded-full blur-[100px] -ml-40 -mb-40" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-head text-[0.7rem] font-bold tracking-[0.2em] text-[var(--lime)] border border-[var(--lime)]/30 px-4 py-1.5 rounded-full uppercase mb-6">
              Get Started
            </span>
            <h2 className="font-head text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Optimized Logistics for <br />
              <span className="text-[var(--lime)]">Your Supply Chain</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Speak to our logistics team to design a custom road-rail solution for your operation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/#contact" className="btn btn-primary px-10 py-4 text-sm tracking-wider">
                Consult Our Logistics Experts
              </Link>
              <Link href="/#services" className="btn btn-outline text-white border-white/30 hover:bg-white hover:text-[var(--navy)] px-10 py-4 text-sm tracking-wider">
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
