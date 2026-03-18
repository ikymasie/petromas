"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your enquiry. Our team will contact you shortly.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[var(--bg)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-head text-[0.75rem] font-bold tracking-[0.15em] text-[var(--lime)] uppercase mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-head text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[var(--navy)] leading-tight mb-4 aerospace-text-glow">
            Start a <span className="text-[var(--lime)]">Conversation</span>
          </h2>
          <p className="text-[1.05rem] text-[var(--grey-600)] leading-loose tracking-wide aerospace-text-body">
            Ready to secure a reliable fuel supply? Fill in the form and our team will respond within 2 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
          
          {/* Form Side */}
          <div className="bg-[var(--white)] p-8 md:p-10 rounded-2xl shadow-[0_2px_8px_rgba(45,42,119,0.08)] card-bg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-head text-[0.85rem] font-bold text-[var(--charcoal)] tracking-wider">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-transparent border-2 border-[var(--grey-200)] rounded-lg text-[0.95rem] text-[var(--charcoal)] transition-all duration-300 focus:outline-none focus:border-[var(--navy)] focus:ring-4 focus:ring-[var(--navy)]/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-head text-[0.85rem] font-bold text-[var(--charcoal)] tracking-wider">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="ABC Mining Ltd"
                    className="w-full px-5 py-3.5 bg-transparent border-2 border-[var(--grey-200)] rounded-lg text-[0.95rem] text-[var(--charcoal)] transition-all duration-300 focus:outline-none focus:border-[var(--navy)] focus:ring-4 focus:ring-[var(--navy)]/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-head text-[0.85rem] font-bold text-[var(--charcoal)] tracking-wider">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@company.co.za"
                    className="w-full px-5 py-3.5 bg-transparent border-2 border-[var(--grey-200)] rounded-lg text-[0.95rem] text-[var(--charcoal)] transition-all duration-300 focus:outline-none focus:border-[var(--navy)] focus:ring-4 focus:ring-[var(--navy)]/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-head text-[0.85rem] font-bold text-[var(--charcoal)] tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+27 11 000 0000"
                    className="w-full px-5 py-3.5 bg-transparent border-2 border-[var(--grey-200)] rounded-lg text-[0.95rem] text-[var(--charcoal)] transition-all duration-300 focus:outline-none focus:border-[var(--navy)] focus:ring-4 focus:ring-[var(--navy)]/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block font-head text-[0.85rem] font-bold text-[var(--charcoal)] tracking-wider">Service of Interest</label>
                <select 
                  id="service" 
                  className="w-full px-5 py-3.5 bg-transparent border-2 border-[var(--grey-200)] rounded-lg text-[0.95rem] text-[var(--charcoal)] transition-all duration-300 focus:outline-none focus:border-[var(--navy)] focus:ring-4 focus:ring-[var(--navy)]/10 appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236c757d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                >
                  <option value="">Select a service...</option>
                  <option value="fuel-delivery">On-Demand Fuel Delivery</option>
                  <option value="bulk-supply">Bulk Petroleum Supply</option>
                  <option value="storage">Petroleum Storage Infrastructure</option>
                  <option value="fleet">Fleet Fuel Management</option>
                  <option value="technical">Technical &amp; Engineering Services</option>
                  <option value="station">Service Station Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-head text-[0.85rem] font-bold text-[var(--charcoal)] tracking-wider">Message *</label>
                <textarea 
                  id="message" 
                  required 
                  rows={5}
                  placeholder="Tell us about your fuelling requirements, volume, location, and timeline..."
                  className="w-full px-5 py-3.5 bg-transparent border-2 border-[var(--grey-200)] rounded-lg text-[0.95rem] text-[var(--charcoal)] transition-all duration-300 focus:outline-none focus:border-[var(--navy)] focus:ring-4 focus:ring-[var(--navy)]/10 resize-y"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary w-full py-4 text-[0.9rem] disabled:opacity-70 disabled:cursor-not-allowed text-[var(--bg)]"
              >
                {isSubmitting ? "SENDING ENQUIRY..." : "SEND ENQUIRY"}
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="bg-[var(--navy-dark)] text-[#E2E8F0] p-8 md:p-10 rounded-2xl shadow-[0_20px_60px_rgba(45,42,119,0.16)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--navy)]/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <h3 className="font-head text-2xl font-bold text-white mb-10">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 bg-[var(--navy)]/50 rounded-lg flex items-center justify-center text-[var(--lime)] border border-[var(--navy-light)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block font-head text-lg text-white mb-1">Registered Office</strong>
                    <p className="text-[0.9rem] text-gray-400 leading-relaxed">Plot 64517, Unit 22<br />Fairground Office Park<br />Gaborone, Botswana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 bg-[var(--navy)]/50 rounded-lg flex items-center justify-center text-[var(--lime)] border border-[var(--navy-light)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block font-head text-lg text-white mb-1">Postal Address</strong>
                    <p className="text-[0.9rem] text-gray-400 leading-relaxed">P. O. Box 2803<br />Gaborone, Botswana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 bg-[var(--navy)]/50 rounded-lg flex items-center justify-center text-[var(--lime)] border border-[var(--navy-light)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block font-head text-lg text-white mb-1">Phone & Fax</strong>
                    <p className="text-[0.9rem] text-gray-400 leading-relaxed">
                      Phone: <a href="tel:+26771600015" className="hover:text-[var(--lime)] transition-colors">+267 71600015</a><br/>
                      Fax: +267 393-0098
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 bg-[var(--navy)]/50 rounded-lg flex items-center justify-center text-[var(--lime)] border border-[var(--navy-light)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block font-head text-lg text-white mb-1">Email</strong>
                    <p className="text-[0.9rem] text-gray-400 leading-relaxed">
                      <a href="mailto:admin@petromas.co.bw" className="hover:text-[var(--lime)] transition-colors break-all">admin@petromas.co.bw</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 bg-[var(--navy)]/50 rounded-lg flex items-center justify-center text-[var(--lime)] border border-[var(--navy-light)]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block font-head text-lg text-white mb-1">Operating Hours</strong>
                    <p className="text-[0.9rem] text-gray-400 leading-relaxed">Mon &ndash; Fri: 07:00 &ndash; 18:00<br /><span className="text-[var(--lime)]">Emergency: 24/7</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[var(--navy-light)] relative z-10">
               <div className="w-full relative h-[180px] rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center group">
                 <iframe 
                   src="https://maps.google.com/maps?q=Plot%2064517,%20Unit%2022,%20Fairground%20Office%20Park,%20Gaborone,%20Botswana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                   className="w-full h-full border-0 filter grayscale-[40%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto"
                   allowFullScreen={false} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 />
                 <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
