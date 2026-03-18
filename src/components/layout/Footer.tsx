import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] text-[#E2E8F0] pt-16 pb-8 border-t border-[var(--navy-light)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="#home" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Petromas Logo"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Fuelling progress across Southern Africa with reliability, safety, and precision. Your trusted petroleum and energy partner.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--lime)] hover:text-white transition-colors group">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--lime)] hover:text-white transition-colors group">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter / X" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--lime)] hover:text-white transition-colors group">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-head font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">About Us</Link></li>
              <li><Link href="#stats" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Why Petromas</Link></li>
              <li><Link href="#operations" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Our Reach</Link></li>
              <li><Link href="#contact" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-head font-bold text-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Fuel Delivery</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Bulk Supply</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Storage Solutions</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Fleet Management</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Technical Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-head font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li><a href="tel:+26771600015" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">+267 71600015</a></li>
              <li><a href="mailto:admin@petromas.co.bw" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">admin@petromas.co.bw</a></li>
              <li><Link href="#contact" className="text-sm text-gray-400 hover:text-[var(--lime)] transition-colors">Send Enquiry</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Petromas (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">POPIA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
