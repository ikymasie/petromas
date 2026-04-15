"use client";

import Image from "next/image";
import Link from "next/link";
import { Truck, Database, Activity, ShieldCheck, Factory, Store, Train } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "On-Demand Fuel Delivery",
    description: "Scheduled and emergency fuel deliveries to your site, 24 hours a day, 7 days a week. We operate a modern tanker fleet for safe, compliant transport.",
    image: "/images/4.jpeg",
    icon: Truck,
    features: ["Scheduled Deliveries", "Emergency Supply", "Real-Time Tracking"],
  },
  {
    title: "Bulk Petroleum Supply",
    description: "Large-volume petroleum product supply including diesel, petrol, paraffin, and aviation fuel. Ideal for industrial, mining and agricultural clients.",
    image: "/images/7.jpeg",
    icon: Database,
    features: ["Diesel & Petrol", "Paraffin", "Aviation Fuel"],
  },
  {
    title: "Petroleum Storage Infrastructure",
    description: "Design, installation, and maintenance of above-ground and underground fuel storage tanks, dispensing systems, and containment infrastructure.",
    image: "/images/6.jpeg",
    icon: Factory,
    features: ["Tank Installation", "Maintenance", "Compliance Audits"],
  },
  {
    title: "Fleet Fuel Management",
    description: "Comprehensive fleet fuelling solutions with digital fuel management systems, consumption tracking, and cost reporting for corporate fleets.",
    image: "/images/8.jpeg",
    icon: Activity,
    features: ["Digital Monitoring", "Cost Reporting", "Multi-Site Fuelling"],
  },
  {
    title: "Technical & Engineering Services",
    description: "Expert field technicians for equipment calibration, pipeline inspections, pump servicing, and regulatory compliance auditing at your facilities.",
    image: "/images/3.jpeg",
    icon: ShieldCheck,
    features: ["Calibration", "Pipeline Inspection", "Compliance"],
  },
  {
    title: "Service Station Development",
    description: "Full turnkey development of modern service stations including design, construction, equipment supply, branding, and ongoing operational support.",
    image: "/images/2.jpeg",
    icon: Store,
    features: ["Turnkey Build", "Branding", "Operations Support"],
  },
  {
    title: "Multimodal Transport Solutions",
    description: "Seamless end-to-end supply chain continuity through a robust rail and road logistics network. Optimized for regional inland deliveries.",
    image: "/images/rail_tanker.png",
    icon: Train,
    features: ["Road Logistics", "Rail Networks", "SADC-Wide Reach"],
    link: "/multimodal"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[var(--bg)] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
            WHAT WE DO
          </span>
          <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-4 aerospace-text-glow">
            Comprehensive <span className="text-[var(--lime)]">Energy Solutions</span>
          </h2>
          <p className="text-[1.05rem] text-[var(--grey-600)] leading-loose tracking-wide aerospace-text-body">
            From bulk petroleum supply to on-site technical support, Petromas delivers end-to-end energy services tailored to your industry.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[var(--white)] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(45,42,119,0.08)] hover:shadow-[0_20px_60px_rgba(45,42,119,0.16)] transition-all duration-300 hover:-translate-y-2 group card-bg outline-none flex flex-col h-full"
                tabIndex={0}
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,28,85,0.6)] to-transparent"></div>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <div className="w-12 h-12 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-lg flex items-center justify-center mb-4 text-[var(--navy)] transition-all duration-300 group-hover:bg-[#00E5FF]/20 group-hover:border-[var(--navy)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:text-white aerospace-service-icon">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-head text-base font-extrabold text-[var(--navy)] mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[0.9rem] text-[var(--grey-600)] leading-relaxed tracking-wide mb-5 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="font-head text-[0.72rem] font-bold text-[var(--navy)] bg-[var(--grey-100)] border border-[var(--grey-200)] px-3 py-1 rounded-full tracking-[0.05em] shadow-sm transition-colors group-hover:border-[var(--lime)]/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {service.link && (
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[var(--lime)] font-head font-bold text-xs tracking-wider uppercase hover:gap-3 transition-all mt-auto"
                    >
                      Learn More <span className="text-lg">→</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
