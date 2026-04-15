"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Logistics", href: "/multimodal" },
    { name: "Operations", href: "/#operations" },
    { name: "Industries", href: "/#industries" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[var(--navy-dark)]/95 backdrop-blur-lg shadow-xl py-3 aerospace-scrolled"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <Link href="/#home" className="relative group block">
            <Image
              src="/images/logo.png"
              alt="Petromas Logo"
              width={210}
              height={65}
              className="h-10 lg:h-[3rem] w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(130,195,65,0.4)] brightness-0 invert"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative font-head font-bold text-[0.8rem] tracking-[0.15em] uppercase text-white hover:text-[var(--lime)] transition-colors group py-2 aerospace-nav-link"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--lime)] transition-all duration-300 group-hover:w-full aerospace-nav-underline"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4 border-l border-white/20 pl-8 ml-2"
          >
            <Link href="/#contact" className="btn btn-primary px-8 py-3.5 text-[0.75rem]">
              CONTACT US
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white p-2 outline-none"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[var(--navy-dark)] z-40 lg:hidden flex flex-col p-8 pt-24"
          >
            <nav className="flex flex-col gap-6 mt-8 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-white text-3xl font-head font-black tracking-wider border-b border-white/5 pb-4 hover:text-[var(--lime)] transition-colors block w-full"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full"
              >
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn btn-primary mt-10 text-lg w-full py-5"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
