"use client";

import { useState, useRef, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 py-14 border-b border-white/8">
          <div>
            <p className="font-display text-sm font-bold text-white mb-3">UPV Regional Research Center</p>
            <p className="text-[0.78rem] text-white/35 leading-relaxed max-w-xs font-light">
              A multidisciplinary research facility of UP Visayas focused on fisheries and aquatic science R&D.
              <br /><br />
              Miag-ao, Iloilo, Philippines 5023
            </p>
          </div>
          <div>
            <p className="text-[0.56rem] uppercase tracking-[0.18em] text-white/25 font-semibold mb-5">Navigate</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {["Home", "Services", "News & Announcements", "Location", "FAQs", "About Us"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-[0.78rem] text-white/38 hover:text-white transition-colors no-underline font-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.56rem] uppercase tracking-[0.18em] text-white/25 font-semibold mb-5">Contact</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { val: "rrc@upv.edu.ph", href: "mailto:rrc@upv.edu.ph" },
                { val: "(033) 315-0000", href: "tel:+63333150000" },
                { val: "rrc.upv.edu.ph", href: "#" },
                { val: "Miag-ao, Iloilo 5023", href: "#" },
              ].map((c) => (
                <li key={c.val}>
                  <a href={c.href} className="text-[0.78rem] text-white/38 hover:text-white transition-colors no-underline font-light">
                    {c.val}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-[0.65rem] text-white/20">
            © {new Date().getFullYear()} UPV Regional Research Center. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((l) => (
              <a key={l} href="#" className="text-[0.65rem] text-white/20 hover:text-white/55 transition-colors no-underline">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}