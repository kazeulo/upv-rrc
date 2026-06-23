//    Icons  
function IcoMail() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <rect x="2" y="4" width="16" height="12" rx="1.5" />
      <path d="M2 6.5l8 5.5 8-5.5" />
    </svg>
  );
}
function IcoPhone() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <path d="M3 3.5A1.5 1.5 0 014.5 2h2.4a1 1 0 01.97.757l.7 2.8a1 1 0 01-.27.986l-1.18 1.18a10.5 10.5 0 004.156 4.157l1.18-1.18a1 1 0 01.987-.27l2.8.7A1 1 0 0118 12.1V14.5A1.5 1.5 0 0116.5 16C8.492 16 2 9.508 2 3.5z" />
    </svg>
  );
}
function IcoPin() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 mt-0.5">
      <path d="M10 18s-7-6.686-7-10.5a7 7 0 1114 0C17 11.314 10 18 10 18z" />
      <circle cx="10" cy="7.5" r="2.5" />
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

// Footer
export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Publications", href: "/#publications" },
    { label: "Contact", href: "/#contact" },
  ];

  const contactItems = [
    { icon: <IcoPin />, text: "University of the Philippines Visayas, Miagao, Iloilo 5023, Philippines" },
    { icon: <IcoMail />, text: "rrc.upvisayas@up.edu.ph" },
    { icon: <IcoPhone />, text: "+63 33 315 9494" },
    { icon: <IcoClock />, text: "Mon – Fri, 8 AM – 5 PM" },
  ];

  return (
    <footer className="bg-[#081929] text-white/60">
      {/*  Main grid  */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/rrc_logo_bnw.png"
              alt="UPV Regional Research Center"
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-xs leading-relaxed text-white/45 mb-6 max-w-xs">
              A centralized, multidisciplinary research facility of the University of the
              Philippines Visayas — advancing science and innovation since 2018.
            </p>
          </div>

          {/* Col 2: Quick Links + Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5 mb-8">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-relaxed">
                  <span className="text-[var(--color-primary)] mt-0.5 opacity-80">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/*  Bottom bar  */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
          <p>© {year} University of the Philippines Visayas. All rights reserved.</p>
          <p className="text-white/20">UPV Regional Research Center · Miagao, Iloilo</p>
        </div>
      </div>
    </footer>
  );
}
