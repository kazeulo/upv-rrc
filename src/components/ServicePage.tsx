import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROCESS_STEPS, SERVICE_NOTICES, SERVICE_CONTACT } from "@/data/services";

// ─ Types 
export interface ServiceFeature {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface ServicePageProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  heroIcon: ReactNode;
  overviewHeading: string;
  paragraphs: string[];
  features: ServiceFeature[];
  children?: ReactNode;
}

// ─ Shared icons ─
function IcoMail() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <rect x="2" y="4" width="16" height="12" rx="1.5" />
      <path d="M2 6.5l8 5.5 8-5.5" />
    </svg>
  );
}
function IcoClock() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6v4l2.5 2.5" />
    </svg>
  );
}
function IcoCheck() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M3 8l4 4 6-6" />
    </svg>
  );
}
function IcoArrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
function IcoMail24() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

// ─ 1. Hero 
function Hero({
  title,
  subtitle,
  breadcrumb,
  icon,
}: {
  title: string;
  subtitle: string;
  breadcrumb: string;
  icon: ReactNode;
}) {
  return (
    <section className="relative h-[44vh] min-h-[280px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/building.png"
          alt="RRC Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081929]/95 via-[#081929]/80 to-[#081929]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081929]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pb-14">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs font-medium">
          <a href="/" className="text-white/40 hover:text-white/70 transition-colors">Home</a>
          <span className="text-white/20">/</span>
          <a href="/#services" className="text-white/40 hover:text-white/70 transition-colors">Services</a>
          <span className="text-white/20">/</span>
          <span className="text-white/65">{breadcrumb}</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 text-[var(--color-primary-light)] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-primary-light)]/60 mb-1.5">
              RRC Services
            </p>
            <h1 className="text-4xl lg:text-6xl font-black text-white [font-family:var(--font-display)] leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-white/50 mt-2 font-medium">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─ 2. Overview 
function Overview({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Description — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[var(--color-primary)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  About This Service
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-secondary)] [font-family:var(--font-display)] leading-snug">
                {heading}
              </h2>
            </div>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--color-muted)] leading-relaxed text-sm lg:text-[15px]">
                {p}
              </p>
            ))}
          </div>

          {/* Sidebar — 1 col */}
          <div className="space-y-4">
            {/* Contact card */}
            <div className="rounded-2xl bg-[var(--color-secondary)] p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
                Contact Us
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white/70 flex items-center justify-center shrink-0">
                    <IcoMail />
                  </div>
                  <a
                    href={`mailto:${SERVICE_CONTACT.email}`}
                    className="text-sm text-white/70 hover:text-white transition-colors break-all"
                  >
                    {SERVICE_CONTACT.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white/70 flex items-center justify-center shrink-0">
                    <IcoClock />
                  </div>
                  <span className="text-sm text-white/70">{SERVICE_CONTACT.hours}</span>
                </div>
              </div>
            </div>

            {/* Notices */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 mb-4">
                Important Notices
              </p>
              <ul className="space-y-3">
                {SERVICE_NOTICES.map((notice) => (
                  <li key={notice} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                      <IcoCheck />
                    </div>
                    <span className="text-sm text-amber-800 leading-snug">{notice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─ 3. Features ─
function Features({ features }: { features: ServiceFeature[] }) {
  const accents = [
    "bg-[var(--color-primary-light)] text-[var(--color-primary)]",
    "bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)]",
    "bg-slate-100 text-slate-600",
    "bg-[var(--color-primary-light)] text-[var(--color-primary)]",
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl ${accents[i % accents.length]} flex items-center justify-center mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-sm font-bold text-[var(--color-secondary)] [font-family:var(--font-display)] mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─ 4. Process ─
function Process() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Process
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-secondary)] [font-family:var(--font-display)]">
            How It Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((s) => (
            <div
              key={s.step}
              className="group relative bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg hover:border-[var(--color-primary)]/20 transition-all duration-200"
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-5 text-5xl font-black text-slate-50 [font-family:var(--font-display)] leading-none select-none group-hover:text-[var(--color-primary)]/8 transition-colors duration-200">
                {s.step}
              </span>
              {/* Active number badge */}
              <div className="w-8 h-8 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-bold flex items-center justify-center mb-4 [font-family:var(--font-display)]">
                {s.step}
              </div>
              <p className="text-sm font-bold text-[var(--color-secondary)] [font-family:var(--font-display)] mb-2 leading-snug">
                {s.label}
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">{s.text}</p>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─ 5. CTA ─
function CTA({ title }: { title: string }) {
  return (
    <section className="py-20 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)] mb-4">
              Get Started
            </p>
            <h2 className="text-2xl lg:text-3xl font-black text-white [font-family:var(--font-display)] leading-snug mb-3">
              Ready to Avail {title}?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Reach out via email or use the chatbot to begin your consultation. Our team will guide you through every step.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${SERVICE_CONTACT.email}`}
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              <IcoMail24 /> Email Us
            </a>
            <a
              href="/#contact"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/8 text-white font-semibold text-sm border border-white/15 hover:bg-white/14 transition-colors duration-200"
            >
              Contact Page <IcoArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Page shell
export default function ServicePage({
  title,
  subtitle,
  breadcrumb,
  heroIcon,
  overviewHeading,
  paragraphs,
  features,
  children,
}: ServicePageProps) {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-bg)]">
        <Hero title={title} subtitle={subtitle} breadcrumb={breadcrumb} icon={heroIcon} />
        <Overview heading={overviewHeading} paragraphs={paragraphs} />
        <Features features={features} />
        {children}
        <Process />
        <CTA title={title} />
      </main>
      <Footer />
    </>
  );
}
