"use client";

import { useState, useRef, useEffect } from "react";

type Service = {
  code: string;
  icon: React.ElementType;
  title: string;
  desc: string;
};

type HeaderProps = {
  SERVICES: Service[];
};

export default function Header({ SERVICES }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-white/95">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">

        <a href="#home" className="flex items-center gap-3 no-underline shrink-0">
          <img
            src="/images/logo.png"
            alt="UPV RRC"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          <a
            href="/"
            className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] px-4 py-2 text-slate-dark hover:text-primary transition-colors no-underline"
          >
            Home
          </a>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.08em] px-4 py-2 text-slate-dark hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg border border-cream z-50 py-2">
                {SERVICES.map((s) => (
                  <a
                    key={s.code}
                    href="#services"
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-2.5 text-[0.8rem] text-primary font-medium hover:bg-surface transition-colors no-underline"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {[
            { label: "Laboratories", href: "#" },
            { label: "News & Announcements", href: "#" },
            { label: "About Us", href: "/about" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] px-4 py-2 text-slate-dark hover:text-primary transition-colors no-underline whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Login */}
        <a
          href="#"
          className="hidden md:inline-flex items-center px-5 py-2 bg-primary text-white text-[0.75rem] font-bold uppercase tracking-[0.1em] rounded-full hover:bg-primary-dark transition-colors no-underline shrink-0"
        >
          Login
        </a>

        {/* Mobile button */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-5 h-px bg-slate-dark" />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-cream bg-white">
          <a
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3.5 text-sm font-medium text-slate border-b border-cream hover:text-primary no-underline"
          >
            Home
          </a>

          {/* Mobile services toggle */}
          <button
            className="w-full text-left px-6 py-3.5 text-sm font-medium text-slate border-b border-cream/60 hover:text-primary bg-transparent cursor-pointer flex items-center justify-between"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
            >
              <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          {mobileServicesOpen &&
            SERVICES.map((s) => (
              <a
                key={s.code}
                href="#services"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
                className="block pl-10 pr-6 py-2.5 text-sm text-primary border-b border-cream hover:bg-surface no-underline"
              >
                {s.title}
              </a>
            ))}

          {["Laboratories", "News & Announcements", "About Us"].map((l) => (
            <a
              key={l}
              href="#"
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-sm font-medium text-slate border-b border-cream hover:text-primary no-underline"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}