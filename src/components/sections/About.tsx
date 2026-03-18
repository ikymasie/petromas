import Image from "next/image";
import { CheckCircle, Clock, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--white)] transition-colors duration-300">
      {/* V1 background watermark effect */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] opacity-[0.03] pointer-events-none hidden md:block" style={{ backgroundImage: "url('/images/logo.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Images Grid */}
        <div className="relative grid grid-cols-[1.5fr_1fr] grid-rows-[300px_200px] gap-4">
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
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[var(--lime)] text-[var(--bg)] px-8 py-4 rounded-xl text-center shadow-[0_20px_60px_rgba(45,42,119,0.16)] whitespace-nowrap z-10">
            <span className="block font-head text-4xl font-black leading-none mb-1">15+</span>
            <span className="text-xs font-bold opacity-90 uppercase tracking-wider">Years of Excellence</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="pt-8">
          <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
            WHO WE ARE
          </span>
          <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-4 aerospace-text-glow">
            Southern Africa's<br />
            <span className="text-[var(--lime)]">Trusted Energy</span> Partner
          </h2>
          <div className="space-y-4 text-[var(--grey-600)] leading-loose tracking-wide mb-8 aerospace-text-body">
            <p>
              Petromas is a dynamic, proudly South African petroleum and energy company
              committed to delivering reliable, efficient, and sustainable fuel solutions.
              With a strong operational footprint across the region, we serve mining houses,
              construction companies, logistics fleets, agricultural enterprises, and government institutions.
            </p>
            <p>
              Our team of experienced professionals, modern fleet, and ISO-compliant processes
              ensure that every litre of fuel we supply meets the highest standards of quality,
              safety, and environmental stewardship.
            </p>
          </div>

          <div className="space-y-5 mt-9">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 bg-[var(--grey-100)] rounded-lg flex items-center justify-center text-[var(--lime)]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.9rem] text-[var(--navy)] mb-1">ISO-Certified Quality</strong>
                <p className="text-[0.88rem] text-[var(--grey-600)]">Rigorous standards across all operations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 bg-[var(--grey-100)] rounded-lg flex items-center justify-center text-[var(--lime)]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.9rem] text-[var(--navy)] mb-1">24/7 Reliability</strong>
                <p className="text-[0.88rem] text-[var(--grey-600)]">Round-the-clock availability and support.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 bg-[var(--grey-100)] rounded-lg flex items-center justify-center text-[var(--lime)]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <strong className="block font-head text-[0.9rem] text-[var(--navy)] mb-1">Pan-African Reach</strong>
                <p className="text-[0.88rem] text-[var(--grey-600)]">Serving clients across Southern Africa.</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a href="#contact" className="btn btn-primary">
              REQUEST A CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
