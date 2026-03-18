import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[var(--navy-dark)]">
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-overlay"
        autoPlay 
        muted 
        loop 
        playsInline 
        poster="/images/5.jpeg"
      >
        <source src="/images/fuel.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,28,85,0.92)] via-[rgba(30,28,85,0.7)] to-[rgba(45,42,119,0.5)] aerospace-hero-gradient"></div>
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block font-head text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[var(--lime)] border border-[var(--lime)]/50 py-1.5 px-4 rounded-full mb-6 backdrop-blur-sm bg-[var(--lime)]/10 shadow-[0_0_15px_rgba(176,38,255,0.2)] aerospace-eyebrow">
            Petroleum &amp; Energy Solutions
          </span>
          <h1 className="font-head text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Fuelling Progress,<br />
            <span className="text-[var(--lime)] block">Powering the Future</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed tracking-wide mb-10 max-w-xl">
            On-demand fuel delivery · Bulk petroleum supply · Technical energy services<br />
            Serving Southern Africa with precision and reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#services" className="btn btn-primary text-sm tracking-wider px-8 py-4">
              OUR SERVICES
            </Link>
            <Link href="#contact" className="btn btn-outline text-white border-white/70 hover:bg-white hover:text-[var(--navy)] text-sm tracking-wider px-8 py-4">
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
}
