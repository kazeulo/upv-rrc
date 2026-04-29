"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "Inquire via chatbot or email",
    detail: (
      <>
        Use the chatbot for initial consultations, or email us at{" "}
        <a href="mailto:rrc.upvisayas@up.edu.ph" className="text-primary underline underline-offset-2">
          rrc.upvisayas@up.edu.ph
        </a>.
      </>
    ),
  },
  {
    title: "Discuss service specifics",
    detail: "An RRC representative will walk you through the service details, facility availability, and scheduling.",
  },
  {
    title: "Submit your service request",
    detail: "Once the schedule and sample submission mode are set, you'll receive an account to fill out the service request form.",
  },
  {
    title: "Wait for approval",
    detail: "Your request will be evaluated. You will receive a notification once it has been approved by the RRC.",
  },
  {
    title: "Settle payment",
    detail: "A charge slip is issued after sample processing. Settle the bill at the UPV Cash Office.",
  },
  {
    title: "Upload your Official Receipt",
    detail: "Log in to your account and upload the Official Receipt to trigger the release of your results.",
  },
  {
    title: "Submit feedback",
    detail: "Share your experience to help us improve our services for future clients.",
  },
];

const PRICING = [
  {
    lab: "Food, Feeds, and Functional Laboratory",
    rows: [
      { service: "Texture Analysis (Basic Compression)", rate: "Php 130.00/sample", inclusions: "—" },
      { service: "Texture Analysis (Basic Tensile)", rate: "Php 130.00/sample", inclusions: "—" },
      { service: "Freeze Drying", rate: "Php 250.00/hour", inclusions: "—" },
      { service: "Spray Drying", rate: "Php 1,410.00/liter of sample", inclusions: "—" },
    ],
  },
  {
    lab: "Material Science & Nanotechnology Laboratory",
    rows: [
      { service: "AFM Imaging", rate: "Php 6,410.00/sample", inclusions: "2 scans per sample" },
      { service: "Surface Profilometry", rate: "Php 8,010.00/sample", inclusions: "2 scans per sample" },
      { service: "Surface Roughness", rate: "Php 8,010.00/sample", inclusions: "2 scans per sample" },
      { service: "Topography", rate: "Php 8,010.00/sample", inclusions: "2 scans per sample" },
      { service: "FTIR-ATR Analysis (No ID)", rate: "Php 4,260.00/sample", inclusions: "2 replicates per sample" },
      { service: "FT-MIDR Analysis (No ID)", rate: "Php 4,260.00/sample", inclusions: "2 replicates per sample" },
      { service: "FT-NIR Analysis (No ID)", rate: "Php 4,260.00/sample", inclusions: "2 replicates per sample" },
      { service: "Raman Analysis", rate: "Php 4,120.00/sample", inclusions: "2 replicates per sample" },
      { service: "SEM Analysis", rate: "Php 5,900.00/sample", inclusions: "5 SEM images" },
      { service: "SEM Imaging – EDS Point Analysis", rate: "Php 6,300.00/sample", inclusions: "5 SEM images + 2 EDS scans" },
      { service: "SEM Imaging – EDS Line Analysis", rate: "Php 7,560.00/sample", inclusions: "5 SEM images + 2 EDS scans" },
      { service: "SEM Imaging – EDS Mapping Analysis", rate: "Php 8,920.00/sample", inclusions: "5 SEM images + 2 EDS scans" },
      { service: "Sputter Coater", rate: "Php 590.00/sample", inclusions: "—" },
      { service: "Spin Coater", rate: "Php 590.00/sample", inclusions: "—" },
      { service: "Fluorescence Analysis", rate: "Php 3,470.00/sample", inclusions: "2 replicates per sample" },
      { service: "Phosphorescence Analysis", rate: "Php 3,470.00/sample", inclusions: "2 replicates per sample" },
      { service: "Lifetime Measurements", rate: "Php 3,470.00/sample", inclusions: "2 replicates per sample" },
      { service: "Thermogravimetric Analysis", rate: "Php 4,140.00/sample", inclusions: "2 replicates per sample" },
      { service: "Differential Scanning Calorimetry", rate: "Php 4,140.00/sample", inclusions: "2 replicates per sample" },
      { service: "Absorbance Measurements (UV-Vis)", rate: "Php 430.00/sample", inclusions: "2 replicates per sample" },
      { service: "Absorbance Measurements (UV-Vis-NIR)", rate: "Php 860.00/sample", inclusions: "2 replicates per sample" },
      { service: "Reflectance Measurements", rate: "Php 1,710.00/sample", inclusions: "2 replicates per sample" },
      { service: "Transmission Analysis", rate: "Php 1,710.00/sample", inclusions: "2 replicates per sample" },
    ],
  },
  {
    lab: "Applied Chemistry Laboratory",
    rows: [
      { service: "Type 1 (Ultrapure) Water", rate: "Php 300.00/3 liters", inclusions: "—" },
      { service: "Type 2 (Pure) Water", rate: "Php 280.00/liter", inclusions: "—" },
    ],
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingAccordion() {
  const [openLab, setOpenLab] = useState<string | null>(PRICING[0].lab);

  return (
    <div className="flex flex-col divide-y divide-cream border border-cream">
      {PRICING.map((lab) => {
        const isOpen = openLab === lab.lab;
        return (
          <div key={lab.lab}>
            <button
              onClick={() => setOpenLab(isOpen ? null : lab.lab)}
              className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-surface transition-colors cursor-pointer border-none text-left gap-4"
            >
              <span className="font-display text-[0.82rem] font-bold text-slate-dark uppercase tracking-[0.1em]">
                {lab.lab}
              </span>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[0.68rem] uppercase tracking-[0.1em] text-slate-light font-medium">
                  {lab.rows.length} service{lab.rows.length !== 1 ? "s" : ""}
                </span>
                <span className="text-primary">
                  <ChevronDown open={isOpen} />
                </span>
              </div>
            </button>

            {isOpen && (
              <div className="overflow-x-auto border-t border-cream">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-surface">
                      <th className="px-6 py-3 text-[0.58rem] uppercase tracking-[0.16em] font-semibold text-slate-light w-[55%]">
                        Service
                      </th>
                      <th className="px-6 py-3 text-[0.58rem] uppercase tracking-[0.16em] font-semibold text-slate-light">
                        Rate / Fee
                      </th>
                      <th className="px-6 py-3 text-[0.58rem] uppercase tracking-[0.16em] font-semibold text-slate-light">
                        Inclusions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {lab.rows.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-t border-cream hover:bg-surface/60 transition-colors ${
                          i % 2 === 1 ? "bg-surface/30" : ""
                        }`}
                      >
                        <td className="px-6 py-3.5 text-[0.8rem] text-slate-dark font-medium leading-snug">
                          {row.service}
                        </td>
                        <td className="px-6 py-3.5 text-[0.8rem] font-bold text-primary whitespace-nowrap">
                          {row.rate}
                        </td>
                        <td className="px-6 py-3.5 text-[0.76rem] text-slate font-light">
                          {row.inclusions}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function SampleProcessingPage() {
  return (
    <main className="bg-surface min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/lab-hero.jpg')" }}
        />

        {/* Flat dark overlay — no gradient, intentionally duller than homepage */}
        <div className="absolute inset-0 bg-primary-darker/90" />

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <a href="/" className="text-[0.65rem] uppercase tracking-[0.18em] text-white/40 hover:text-white/70 transition-colors no-underline font-medium">
              UPV RRC
            </a>
            <span className="text-white/25 text-[0.65rem]">/</span>
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/60 font-medium">
              Services
            </span>
            <span className="text-white/25 text-[0.65rem]">/</span>
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-light font-medium">
              Sample Processing
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 max-w-5xl">
            {/* Left — title block */}
            <div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.08]">
                Sample<br />Processing
              </h1>
            </div>

            {/* Right — desc + actions */}
            <div className="max-w-md lg:pb-1">
              <p className="text-[0.82rem] leading-[1.9] text-white/60 font-light mb-6">
                Raw data and results generated directly from the equipment — no interpretation,
                data processing, or Certificate of Analysis included.
              </p>

              <div className="flex gap-3 flex-wrap">
                
                <a  href="#pricing"
                  className="text-[0.68rem] uppercase tracking-[0.12em] font-semibold text-white bg-primary px-6 py-2.5 hover:bg-primary-dark transition-colors no-underline"
                >
                  View Pricing
                </a>
                
                <a  href="#how-to-avail"
                  className="text-[0.68rem] uppercase tracking-[0.12em] font-semibold text-white/70 border border-white/20 px-6 py-2.5 hover:border-white/45 hover:text-white transition-colors no-underline"
                >
                  How to Avail
                </a>
              </div>
            </div>
          </div>

          {/* Notice — separated below the title row */}
          <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6 max-w-2xl">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-primary-light mt-0.5 flex-shrink-0">
              <circle cx="8" cy="8" r="7.5" stroke="currentColor" />
              <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-[0.72rem] leading-[1.75] text-white/45 font-light">
              Samples must be prepared and ready for analysis prior to submission. Provide any
              specific protocols or guidelines at the time of drop-off.
            </p>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-surface border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <span className="text-[0.58rem] uppercase tracking-[0.22em] text-primary font-semibold block mb-3">
                Fee Schedule
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-dark">
                Pricing by Laboratory
              </h2>
            </div>
            <p className="text-[0.75rem] text-slate-light font-light max-w-xs text-right leading-relaxed">
              Select a laboratory below to view the full list of services and their corresponding rates.
            </p>
          </div>

          <PricingAccordion />

          <p className="mt-5 text-[0.68rem] text-slate-light font-light">
            * Rates are subject to change without prior notice. Contact the RRC for the latest fee schedule.
          </p>
        </div>
      </section>

      {/* HOW TO AVAIL */}
      <section id="how-to-avail" className="bg-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <div className="mb-14">
            <span className="text-[0.58rem] uppercase tracking-[0.22em] text-primary font-semibold block mb-3">
              Process
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-dark">
              How to Avail
            </h2>
          </div>

          {/* Timeline-style steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.65rem] top-0 bottom-0 w-px bg-cream hidden lg:block" />

            <div className="flex flex-col gap-0">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-6 lg:gap-10 group">
                  {/* Node */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-[3.3rem] h-[3.3rem] rounded-full border-2 border-cream bg-white group-hover:border-primary group-hover:bg-primary/5 transition-colors flex items-center justify-center flex-shrink-0 z-10">
                      <span className="font-display text-[0.75rem] font-bold text-slate-light group-hover:text-primary transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-cream min-h-[1.5rem] lg:hidden" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-8 pt-3 flex-1 ${i < STEPS.length - 1 ? "border-b border-cream" : ""}`}>
                    <h3 className="font-display text-[0.9rem] font-bold text-slate-dark mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[0.78rem] leading-[1.85] text-slate font-light">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-primary-darker px-8 lg:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
            <div className="relative">
              <p className="font-display text-[1.1rem] font-bold text-white mb-1">
                Ready to submit your samples?
              </p>
              <p className="text-[0.75rem] text-white/60 font-light">
                Start with a quick inquiry — our team will guide you through the rest.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 relative">
              
              <a  href="mailto:rrc.upvisayas@up.edu.ph"
                className="text-[0.68rem] uppercase tracking-[0.12em] font-semibold text-white/80 border border-white/25 px-5 py-3 hover:border-white/60 hover:text-white transition-colors no-underline"
              >
                Email Us
              </a>
              <button className="text-[0.68rem] uppercase tracking-[0.12em] font-semibold text-white bg-primary px-5 py-3 hover:bg-primary-dark transition-colors border-none cursor-pointer">
                Open Chatbot
              </button>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}