"use client";

import { useState, useRef, useEffect } from "react";

// other imports
import { ParallaxBanner } from "react-scroll-parallax";

// utils
import { SERVICES, FAQS, STATS, NEWS } from "./utils/Contants";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-sans bg-white text-slate-dark antialiased">

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >
        {/* grayscale bg */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/home-bg.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-dark via-primary-darker/85 to-primary-dark/65" />

        <div className="relative z-15 max-w-7xl mx-auto w-full px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[0.70rem] uppercase tracking-[0.22em] text-white mb-5 font-medium">
              University of the Philippines Visayas
            </span>

            <h1 className="font-display text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.06] mb-6">
              Regional Research Center
            </h1>

            {/* thin ruled line — editorial touch */}
            <div className="w-12 h-px bg-white/30 mb-6" />

            <p className="text-[0.95rem] text- leading-[1.85] text-white font-light mb-10 max-w-lg">
              The UP Visayas Regional Research Center is a multidisciplinary research facility of UP Visayas which supports the research and development endeavors of UPV in the field of fisheries and aquatic science R&D and its allied disciplines.
            </p>

            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="#services"
                className="inline-flex rounded-full items-center gap-2.5 bg-primary text-white text-[0.72rem] font-bold uppercase tracking-[0.14em] px-7 py-3.5 hover:bg-primary-dark transition-colors duration-200 no-underline"
              >
                Our Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#about"
                className="text-white text-[0.72rem] font-semibold uppercase tracking-[0.14em] hover:text-white/60 transition-colors no-underline"
              >
                About RRC →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          {/* section header */}
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-semibold block mb-3">
                What We Offer
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-dark leading-tight">
                Core Services
              </h2>
            </div>
            
            <a  href="#contact"
              className="text-[0.7rem] uppercase tracking-[0.12em] text-slate font-semibold border-b border-slate/30 hover:text-primary hover:border-primary transition-colors no-underline pb-px whitespace-nowrap"
            >
              Request a Service →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.code}
                className="group border border-cream rounded-2xl p-8 flex flex-col hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* icon area */}
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <s.icon size={22} className="text-primary/60 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-display text-[1.20rem] font-bold text-slate-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                  {s.title}
                </h3>

                <p className="text-[0.82rem] leading-[1.85] text-slate font-light flex-1">
                  {s.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-cream flex items-center justify-between">
                  <span className="text-[0.68rem] uppercase tracking-[0.12em] text-primary font-semibold">
                    Learn More
                  </span>
                  <div className="w-7 h-7 rounded-full border border-primary/25 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary group-hover:text-white transition-colors">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS */}
      <ParallaxBanner
        layers={[{ image: "/images/stat-bg.jpg", speed: -20 }]}
        className="relative min-h-[500px] py-20 lg:py-28 px-6 lg:px-10"
      >
        <div className="absolute inset-0 bg-primary/70" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/90 font-semibold block mb-2">
            Our Impact
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-12">
            Research by the Numbers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white/15 backdrop-blur-md border-2 border-white/60 rounded-2xl px-8 py-10 flex flex-col items-center gap-4 hover:bg-white/25 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-display text-4xl lg:text-5xl font-bold text-white leading-none">
                  {s.value}
                </p>
                <div className="w-8 h-px bg-white/30" />
                <p className="text-[0.85rem] leading-[1.7] text-white/75 font-light text-center">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </ParallaxBanner>

      {/* NEWS & ANNOUNCEMENTS */}
      <section id="news" className="bg-surface border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-semibold block mb-3">
                Latest
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-dark">
                News & Announcements
              </h2>
            </div>
            
            <a href="#"
              className="text-[0.7rem] uppercase tracking-[0.12em] text-slate font-semibold border-b border-slate/30 hover:text-primary hover:border-primary transition-colors no-underline pb-px whitespace-nowrap"
            >
              All Posts →
            </a>
          </div>

          {/* FEATURED / MAIN LATEST */}
          <article className="group bg-white border border-cream hover:border-primary/20 transition-colors duration-200 cursor-pointer mb-15">
            <div className="grid lg:grid-cols-2">
              {/* Image placeholder */}
              <div className="bg-cream/60 min-h-[260px] lg:min-h-[340px] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-light font-semibold">
                    Featured Image
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[0.6rem] uppercase tracking-[0.14em] text-primary font-semibold border border-primary/20 bg-primary/5 px-2.5 py-1">
                    {NEWS[0].tag}
                  </span>
                  <span className="text-[0.65rem] text-slate-light font-light">
                    {NEWS[0].date}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-dark leading-snug mb-4 group-hover:text-primary transition-colors">
                  {NEWS[0].title}
                </h3>
                <p className="text-[0.85rem] leading-[1.9] text-slate font-light mb-8">
                  {NEWS[0].excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-primary font-semibold">
                  Read More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </article>

          {/* THREE-COLUMN GRID */}
          <div className="grid md:grid-cols-3 gap-px bg-cream">
            {NEWS.slice(1).map((n, i) => (
              <article
                key={i}
                className="group bg-surface hover:bg-white transition-colors duration-200 p-8 lg:p-10 cursor-pointer flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[0.6rem] uppercase tracking-[0.14em] text-primary font-semibold border border-primary/20 bg-primary/5 px-2.5 py-1">
                    {n.tag}
                  </span>
                  <span className="text-[0.65rem] text-slate-light font-light">
                    {n.date}
                  </span>
                </div>
                <h3 className="font-display text-[1rem] font-bold text-slate-dark leading-snug mb-3 group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <p className="text-[0.8rem] leading-[1.8] text-slate font-light flex-1">
                  {n.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-primary font-semibold">
                  Read More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left */}
            <div>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-semibold block mb-3">
                About Us
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-dark leading-tight mb-8">
                A Research Center<br />Rooted in the Visayas
              </h2>

              <div className="space-y-5">
                <p className="text-[0.9rem] leading-[1.9] text-brand font-light">
                  The UP Visayas Regional Research Center is a multidisciplinary research facility of UP Visayas which supports the research and development endeavors of UPV in the field of fisheries and aquatic science R&D and its allied disciplines.
                </p>
                <p className="text-[0.9rem] leading-[1.9] text-brand font-light">
                  The UPV RRC was established in 2018 to provide training on advanced analytical equipment and method development. Upon its institutionalization in 2022, the RRC continues to extend itself among researchers, students, and the industry not only in the Western Visayas region but also to its neighbors in the Asia-Pacific region.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-primary text-white text-[0.72rem] font-bold uppercase tracking-[0.14em] px-6 py-3 hover:bg-primary-dark transition-colors no-underline"
                >
                  Our Services
                </a>
                
                <a
                  href="#contact"
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-brand border-b border-brand/30 hover:text-primary hover:border-primary transition-colors no-underline pb-px"
                >
                  Contact Us →
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="hidden lg:flex flex-col gap-4">
              {/* main image block */}
              <div
                className="w-full h-72 bg-surface border border-cream overflow-hidden"
                style={{
                  backgroundImage: "url('/images/about-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* quote strip */}
              <div className="bg-primary px-8 py-6">
                <p className="font-display text-[1rem] italic text-white/90 leading-relaxed">
                  "Supporting research, training, and innovation across the Visayas and the Asia-Pacific."
                </p>
                <span className="text-[0.6rem] uppercase tracking-[0.16em] text-white/40 font-medium mt-3 block">
                  — UPV Regional Research Center
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-dark border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/35 font-semibold block mb-4">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                Access our facilities<br />for your research needs.
              </h2>
              <p className="text-[0.88rem] leading-[1.85] text-white/50 font-light max-w-sm mb-10">
                Reach out to the UPV Regional Research Center for service requests, research collaborations, and general inquiries.
              </p>

              <div className="space-y-5">
                {[
                  { label: "Email", value: "rrc@upv.edu.ph", href: "mailto:rrc@upv.edu.ph" },
                  { label: "Phone", value: "(033) 315-0000", href: "tel:+63333150000" },
                  { label: "Website", value: "rrc.upv.edu.ph", href: "#" },
                ].map((c) => (
                  <div key={c.label} className="flex items-baseline gap-4">
                    <span className="text-[0.58rem] uppercase tracking-[0.16em] text-white/25 font-semibold w-14 shrink-0">
                      {c.label}
                    </span>
                    <a href={c.href} className="text-[0.88rem] text-white/70 hover:text-white transition-colors no-underline font-light">
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — simple form */}
            <div className="bg-white/5 border border-white/8 p-8 lg:p-10">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-white/35 font-semibold mb-6">
                Send a Message
              </p>
              <div className="space-y-4">
                {[
                  { label: "Full Name", type: "text", placeholder: "Juan dela Cruz" },
                  { label: "Institution / Affiliation", type: "text", placeholder: "University / Agency" },
                  { label: "Email Address", type: "email", placeholder: "you@institution.edu.ph" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-[0.62rem] uppercase tracking-[0.14em] text-white/35 font-semibold mb-1.5">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full bg-white/5 border border-white/10 text-white text-[0.85rem] px-4 py-3 placeholder-white/20 focus:outline-none focus:border-primary transition-colors font-light"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[0.62rem] uppercase tracking-[0.14em] text-white/35 font-semibold mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your inquiry or service request..."
                    className="w-full bg-white/5 border border-white/10 text-white text-[0.85rem] px-4 py-3 placeholder-white/20 focus:outline-none focus:border-primary transition-colors resize-none font-light"
                  />
                </div>
                <button className="w-full bg-primary text-white text-[0.72rem] font-bold uppercase tracking-[0.14em] py-3.5 hover:bg-primary-dark transition-colors mt-2">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-semibold block mb-3">
                Where to Find Us
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-dark">
                Location
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">

            {/* Address block */}
            <div className="space-y-8">
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-slate-light font-semibold mb-2">Address</p>
                <p className="text-[0.9rem] text-slate-dark leading-relaxed font-light">
                  UPV Regional Research Center<br />
                  University of the Philippines Visayas<br />
                  Miag-ao, Iloilo, Philippines 5023
                </p>
              </div>
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-slate-light font-semibold mb-2">Office Hours</p>
                <p className="text-[0.9rem] text-slate-dark font-light">Monday – Friday</p>
                <p className="text-[0.9rem] text-slate-dark font-light">8:00 AM – 5:00 PM</p>
              </div>
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-slate-light font-semibold mb-2">Getting Here</p>
                <p className="text-[0.82rem] text-slate leading-relaxed font-light">
                  Located within the UPV Miag-ao campus. From Iloilo City, take a bus or jeep bound for Miag-ao (approx. 1 hour). The RRC building is near the university library.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=UPV+Miagao+Iloilo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.12em] text-primary font-semibold border-b border-primary/30 hover:border-primary transition-colors no-underline pb-px"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Map embed */}
            <div className="w-full h-80 lg:h-96 bg-surface border border-cream rounded-xl overflow-hidden">
              <iframe
                title="UPV Miag-ao Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d122.2333!3d10.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee1b2f1234567%3A0xabcdef1234567890!2sUniversity%20of%20the%20Philippines%20Visayas%2C%20Miag-ao!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" className="bg-surface border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="mb-14">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-semibold block mb-3">
              Common Questions
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-dark">
              FAQs
            </h2>
          </div>

          <div className="max-w divide-y divide-cream">
            {FAQS.map((f, i) => (
              <div key={i} className="py-1">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-6 py-5 bg-transparent border-none cursor-pointer group"
                >
                  <span className="font-display text-[0.95rem] font-bold text-slate-dark group-hover:text-primary transition-colors leading-snug">
                    {f.q}
                  </span>
                  <span className={`shrink-0 w-5 h-5 border border-slate/20 flex items-center justify-center text-slate transition-all duration-200 mt-0.5 ${openFaq === i ? "bg-primary border-primary text-white rotate-45" : "group-hover:border-primary group-hover:text-primary"}`}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="pb-5 pr-12">
                    <p className="text-[0.85rem] leading-[1.9] text-slate font-light">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}