"use client";

import { useState, useRef } from "react";

// Icons 
function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
function IconChevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"
      className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="M3 6l5 5 5-5" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

// Dropdown item icons (20×20 canvas)
function IcoMicroscope() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M5 15h10M5 18h10M12 15v-4M8 15v-4" />
      <circle cx="10" cy="7" r="3.5" />
      <path d="M10 3.5V2" />
    </svg>
  );
}
function IcoBuilding() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="2" y="2" width="16" height="16" rx="1" />
      <path d="M2 7.5h16M7 2v16M12.5 7.5V18" />
    </svg>
  );
}
function IcoFlask() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M7.5 2.5h5M7.5 2.5v5.5L3.5 14A1.8 1.8 0 005 17h10a1.8 1.8 0 001.5-3L12.5 8V2.5" />
      <path d="M6 11.5h8" />
    </svg>
  );
}
function IcoGradCap() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M2 8l8-5 8 5-8 5-8-5z" />
      <path d="M5 10v4c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4" />
      <path d="M18 8v4.5" />
    </svg>
  );
}

// Data 
const SERVICES_ITEMS = [
  {
    label: "Sample Processing",
    desc: "Expert biological, chemical & environmental sample analysis with certified reporting.",
    href: "/services/sample-processing",
    icon: <IcoMicroscope />,
  },
  {
    label: "Use of Facilities",
    desc: "Reserve dedicated labs, conference rooms, and collaborative research spaces.",
    href: "/services/use-of-facilities",
    icon: <IcoBuilding />,
  },
  {
    label: "Use of Equipment",
    desc: "Access state-of-the-art analytical instruments for research and testing needs.",
    href: "/services/use-of-equipment",
    icon: <IcoFlask />,
  },
  {
    label: "Training",
    desc: "Enroll in workshops, technique courses, and capacity-building programs.",
    href: "/services/training",
    icon: <IcoGradCap />,
  },
];

const LABS_ITEMS = [
  {
    label: "Applied Chemistry",
    desc: "Chemical analysis and materials characterization.",
    href: "#laboratories",
  },
  {
    label: "Biology",
    desc: "Biodiversity research and biological assessments.",
    href: "#laboratories",
  },
  {
    label: "Foods, Feeds & Functional Nutrition",
    desc: "Nutritional analysis and food science research.",
    href: "#laboratories",
  },
  {
    label: "Material Science & Nanotechnology",
    desc: "Advanced materials research and nanostructures.",
    href: "#laboratories",
  },
  {
    label: "Microbiology & Bioengineering",
    desc: "Microbial research and bioprocess engineering.",
    href: "#laboratories",
  },
];

type DropdownKey = "services" | "labs";

// Mega Dropdown Panel 
function ServicesMega({ onClose }: { onClose: () => void }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-3 gap-12">
      {/* Sidebar */}
      <div className="flex flex-col py-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] mb-3">
          Services
        </span>
        <h3 className="text-lg font-bold text-[var(--color-secondary)] leading-snug mb-3 [font-family:var(--font-display)]">
          What We Offer
        </h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a
          href="#services"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all duration-200 mt-auto"
        >
          View all services <IconArrowRight />
        </a>
      </div>

      {/* 2 × 2 grid */}
      <div className="col-span-2 grid grid-cols-2 gap-2">
        {SERVICES_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="group flex items-start gap-3.5 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-150"
          >
            <div className="mt-0.5 w-9 h-9 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-150">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-secondary)] mb-0.5 group-hover:text-[var(--color-primary)] transition-colors duration-150">
                {item.label}
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function LabsMega({ onClose }: { onClose: () => void }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-3 gap-12">
      {/* Sidebar */}
      <div className="flex flex-col py-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] mb-3">
          Laboratories
        </span>
        <h3 className="text-lg font-bold text-[var(--color-secondary)] leading-snug mb-3 [font-family:var(--font-display)]">
          Our Research Labs
        </h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a
          href="#laboratories"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all duration-200 mt-auto"
        >
          Explore labs <IconArrowRight />
        </a>
      </div>

      {/* 2-column list */}
      <div className="col-span-2 grid grid-cols-2 gap-1 content-start">
        {LABS_ITEMS.map((lab) => (
          <a
            key={lab.label}
            href={lab.href}
            onClick={onClose}
            className="group flex items-start gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-150"
          >
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 group-hover:scale-125 transition-transform duration-150" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-secondary)] mb-0.5 group-hover:text-[var(--color-primary)] transition-colors duration-150">
                {lab.label}
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">{lab.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// Header 
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Page backdrop when dropdown is open */}
      <div
        className={`fixed inset-0 z-40 bg-black/15 backdrop-blur-[2px] transition-opacity duration-200 ${
          openDropdown ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNow}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border)]"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)" }}
      >
        {/* ── Main nav bar ── */}
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="/images/rrc_logo.png"
              alt="UPV Regional Research Center"
              className="h-13 lg:h-15 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            <a href="/" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[var(--color-secondary)] hover:bg-slate-50 transition-colors duration-150">
              Home
            </a>

            {/* Services trigger */}
            <div onMouseEnter={() => openMenu("services")} onMouseLeave={scheduleClose}>
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 [font-family:var(--font-body)] ${
                  openDropdown === "services"
                    ? "text-[var(--color-primary)] bg-[var(--color-primary-light)]/50"
                    : "text-slate-600 hover:text-[var(--color-secondary)] hover:bg-slate-50"
                }`}
              >
                Services
                <IconChevron open={openDropdown === "services"} />
              </button>
            </div>

            {/* Laboratories trigger */}
            <div onMouseEnter={() => openMenu("labs")} onMouseLeave={scheduleClose}>
              <button
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 [font-family:var(--font-body)] ${
                  openDropdown === "labs"
                    ? "text-[var(--color-primary)] bg-[var(--color-primary-light)]/50"
                    : "text-slate-600 hover:text-[var(--color-secondary)] hover:bg-slate-50"
                }`}
              >
                Laboratories
                <IconChevron open={openDropdown === "labs"} />
              </button>
            </div>

            <a href="#FAQs" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[var(--color-secondary)] hover:bg-slate-50 transition-colors duration-150">
              FAQs
            </a>
            
            <a href="#news" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[var(--color-secondary)] hover:bg-slate-50 transition-colors duration-150">
              News
            </a>

            <a href="/about" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[var(--color-secondary)] hover:bg-slate-50 transition-colors duration-150">
              About
            </a>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors duration-200 shadow-sm shadow-[var(--color-primary)]/20"
            >
              Get in Touch
            </a>
            <button
              onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null); }}
              className="lg:hidden p-1 text-slate-600"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </nav>

        {/* ── Mega dropdown: Services ── */}
        <div
          className={`absolute top-full left-0 right-0 bg-white border-t border-[var(--color-border)] transition-all duration-200 ${
            openDropdown === "services"
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1.5 pointer-events-none"
          }`}
          style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)" }}
          onMouseEnter={() => openMenu("services")}
          onMouseLeave={scheduleClose}
        >
          <ServicesMega onClose={closeNow} />
        </div>

        {/* ── Mega dropdown: Laboratories ── */}
        <div
          className={`absolute top-full left-0 right-0 bg-white border-t border-[var(--color-border)] transition-all duration-200 ${
            openDropdown === "labs"
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1.5 pointer-events-none"
          }`}
          style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)" }}
          onMouseEnter={() => openMenu("labs")}
          onMouseLeave={scheduleClose}
        >
          <LabsMega onClose={closeNow} />
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white border-t border-[var(--color-border)] ${
            mobileOpen ? "max-h-[44rem]" : "max-h-0"
          }`}
        >
          <div className="px-5 py-3 divide-y divide-[var(--color-border)]">
            <a href="/" onClick={() => setMobileOpen(false)} className="flex py-3.5 text-sm font-medium text-[var(--color-secondary)]">
              Home
            </a>

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                className="w-full flex items-center justify-between py-3.5 text-sm font-medium text-[var(--color-secondary)]"
              >
                Services <IconChevron open={mobileExpanded === "services"} />
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-200 ${mobileExpanded === "services" ? "max-h-80" : "max-h-0"}`}>
                <div className="pb-3 space-y-0.5">
                  {SERVICES_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-[var(--color-primary)] hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-[var(--color-primary)]">{item.icon}</span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#about" onClick={() => setMobileOpen(false)} className="flex py-3.5 text-sm font-medium text-[var(--color-secondary)]">
              About
            </a>

            {/* Labs accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "labs" ? null : "labs")}
                className="w-full flex items-center justify-between py-3.5 text-sm font-medium text-[var(--color-secondary)]"
              >
                Laboratories <IconChevron open={mobileExpanded === "labs"} />
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-200 ${mobileExpanded === "labs" ? "max-h-96" : "max-h-0"}`}>
                <div className="pb-3 space-y-0.5">
                  {LABS_ITEMS.map((lab) => (
                    <a
                      key={lab.label}
                      href={lab.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-[var(--color-primary)] hover:bg-slate-50 transition-colors"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                      {lab.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#publications" onClick={() => setMobileOpen(false)} className="flex py-3.5 text-sm font-medium text-[var(--color-secondary)]">
              Publications
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="flex py-3.5 text-sm font-medium text-[var(--color-secondary)]">
              Contact
            </a>

            <div className="py-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
