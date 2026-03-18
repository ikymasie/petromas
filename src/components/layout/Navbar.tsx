"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Operations", href: "#operations" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--navy-dark)]/95 backdrop-blur-lg shadow-md py-4 aerospace-scrolled"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href="#home" className="relative group">
          <Image
            src="/images/logo.png"
            alt="Petromas Logo"
            width={210}
            height={65}
            className="h-12 lg:h-[3.25rem] w-auto transition-transform group-hover:scale-105 brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative font-head font-semibold text-sm tracking-wider text-white hover:text-[var(--lime)] transition-colors group py-2 aerospace-nav-link"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--lime)] transition-all group-hover:w-full aerospace-nav-underline"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            <Link href="#contact" className="btn btn-primary">
              CONTACT US
            </Link>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-[var(--navy-dark)] z-40 lg:hidden transform transition-transform duration-300 flex flex-col p-6",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-2xl font-head font-bold tracking-wide border-b border-white/10 pb-4 hover:text-[var(--lime)] transition-colors aerospace-nav-link"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="btn btn-primary mt-6 text-lg"
          >
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
}
