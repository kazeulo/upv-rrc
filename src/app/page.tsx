import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Icon Components 
function IconFlask() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M9 3h6M9 3v7L4.5 17A2 2 0 006 21h12a2 2 0 001.5-4L15 10V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}
function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 3v18M15 9v12" />
    </svg>
  );
}
function IconMicroscope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M6 18h12M6 22h12M14 18v-5M10 18v-5" />
      <circle cx="12" cy="9" r="4" />
      <path d="M12 5V3" />
    </svg>
  );
}
function IconGradCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M2 10l10-6 10 6-10 6-10-6z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Data
const SERVICES = [
  {
    icon: <IconMicroscope />,
    title: "Sample Processing",
    description:
      "Submit biological, chemical, or environmental samples for expert processing. Raw data generated directly from our advanced instruments.",
    accent: "from-[#2a7a9e] to-[var(--color-primary)]",
    href: "/services/sample-processing",
  },
  {
    icon: <IconFlask />,
    title: "Use of Equipment",
    description:
      "Access state-of-the-art laboratory instruments and analytical equipment for your research and testing needs.",
    accent: "from-[var(--color-primary)] to-[var(--color-primary-dark)]",
    href: "/#services",
  },
  {
    icon: <IconBuilding />,
    title: "Use of Facilities",
    description:
      "Reserve dedicated laboratory spaces, conference rooms, and research areas fitted for collaborative scientific work.",
    accent: "from-[var(--color-primary-dark)] to-[#1d4060]",
    href: "/#services",
  },
  {
    icon: <IconGradCap />,
    title: "Training",
    description:
      "Enroll in workshops, laboratory technique courses, and capacity-building programs led by our expert researchers.",
    accent: "from-[var(--color-primary)] to-[#1e5f88]",
    href: "/#services",
  },
];

// Hero
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/building.png"
          alt="RRC Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2235]/90 via-[#0d2235]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2235]/80 via-transparent to-[#0d2235]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)]">
              University of the Philippines Visayas
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.0] tracking-tight text-white mb-6 [font-family:var(--font-display)]">
            Regional
            <br />
            <span className="text-[var(--color-primary-light)]">Research</span>
            <br />
            Center
          </h1>

          <div className="w-16 h-[3px] bg-[var(--color-primary)] mb-6" />

          <p className="text-md text-white/75 leading-relaxed mb-10 max-w-xl">
            A centralized multidisciplinary facility that provides various services catering to different 
            fields of natural and physical sciences, specifically - Applied Chemistry, Biology, Food Science, 
            Material Science and Nanotechnology, Microbiology and Bioengineering, and Computational Sciences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors duration-200 shadow-lg shadow-[var(--color-primary)]/30"
            >
              Check Services <IconArrow />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/25 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
            >
              About RRC
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-8 lg:gap-16">
          {[
            { num: "4", label: "Core Services" },
            { num: "5", label: "Research Laboratories" },
            { num: "30+", label: "Partner SUCs & HEIs" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-white">{num}</span>
              <span className="text-xs uppercase tracking-[0.15em] text-white/50">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services
function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-secondary)] leading-tight [font-family:var(--font-display)]">
              Our Services
            </h2>
          </div>
          <p className="text-[var(--color-muted)] text-sm lg:text-base max-w-sm leading-relaxed">
            The UPV RRC provides comprehensive research support services to
            academics, industries, and government agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <a
              key={s.title}
              href={s.href}
              className="group relative bg-white rounded-2xl border border-[var(--color-border)] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl`} />
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-[var(--color-secondary)] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 flex-1">
                {s.description}
              </p>
              <div className="flex items-center gap-1 text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider group-hover:gap-2 transition-all duration-300">
                Learn more <IconArrow />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// About
function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--color-primary-light)]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                About Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-secondary)] leading-tight mb-6 [font-family:var(--font-display)]">
              Pioneering Research in the Visayas Region
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              The UPV Regional Research Center is a newly established multidisciplinary
              research facility that started operating in 2018. Formally institutionalized
              by the UP System Board of Regents in November 2022, it aims to strengthen
              the research and innovation capabilities of UP Visayas.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              Through five ISO-compliant laboratories, expert researchers, and strong
              partnerships with over 30 SUCs and HEIs, we provide accessible,
              high-quality research services — extending our reach across Western Visayas
              and toward neighboring countries in Asia and the Pacific.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:gap-3"
            >
              Learn More About Us <IconArrow />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Five Research Laboratories", desc: "Applied Chemistry, Biology, Food Science, Material Science, and Microbiology." },
              { title: "30+ Partner SUCs & HEIs", desc: "S&T capacity building network across Western Visayas and beyond." },
              { title: "Training & Extension Division", desc: "Workshops, method development, and equipment use programs." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-white rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors duration-300"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--color-secondary)] text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// News
const NEWS = [
  {
    featured: true,
    category: "Milestone",
    date: "November 10, 2022",
    title: "UP Board of Regents Formally Institutionalizes the UPV Regional Research Center",
    excerpt:
      "During its 1375th meeting at Quezon Hall, UP Diliman, the UP System Board of Regents approved the institutionalization of the RRC — cementing its place as a permanent unit of UP Visayas.",
    href: "#",
  },
  {
    featured: false,
    category: "Partnership",
    date: "2023",
    title: "RRC Expands Reach to 30+ SUCs and HEIs Across Western Visayas",
    excerpt:
      "Both the RRC and PGC Visayas have engaged with no less than 30 state universities and higher education institutions to carry out S&T capacity building mandates.",
    href: "#",
  },
  {
    featured: false,
    category: "Research",
    date: "Ongoing",
    title: "RRC Implements Research & Extension Projects with In-House and External Funding",
    excerpt:
      "The Center continues to offer sample processing, equipment use, and capacity-building training while pursuing additional grants to expand its research output.",
    href: "#",
  },
];

function IcoCalendar() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <rect x="1" y="2" width="14" height="13" rx="1.5" />
      <path d="M1 6h14M5 1v2M11 1v2" />
    </svg>
  );
}

function News() {
  const [featured, ...rest] = NEWS;

  return (
    <section id="news" className="py-24 lg:py-32 bg-slate-50 border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Latest Updates
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-secondary)] leading-tight [font-family:var(--font-display)]">
              News &amp; Announcements
            </h2>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all duration-200"
          >
            View all <IconArrow />
          </a>
        </div>

        {/* Featured left + two stacked right */}
        <div className="grid lg:grid-cols-5 gap-5">
          {/* Featured card */}
          <a
            href={featured.href}
            className="group lg:col-span-3 relative flex flex-col justify-end overflow-hidden rounded-2xl min-h-[420px]"
          >
            <img
              src="/images/building.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081929]/95 via-[#081929]/55 to-[#081929]/10" />
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-white/45">
                  <IcoCalendar /> {featured.date}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-white [font-family:var(--font-display)] leading-snug mb-3 group-hover:text-[var(--color-primary-light)] transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-lg line-clamp-3">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary-light)] uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200">
                Read more <IconArrow />
              </span>
            </div>
          </a>

          {/* Two stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col flex-1 bg-white rounded-2xl border border-[var(--color-border)] p-7 hover:shadow-lg hover:border-[var(--color-primary)]/25 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-[var(--color-muted)]">
                    <IcoCalendar /> {item.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--color-secondary)] [font-family:var(--font-display)] leading-snug mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-200 flex-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5 line-clamp-3">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200">
                  Read more <IconArrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const info = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Our Address",
      value: "University of the Philippines – Visayas, Miagao, Iloilo",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      ),
      label: "Email Us",
      value: "upvrrc@gmail.com",
      href: "mailto:upvrrc@gmail.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: "Call Us",
      value: "+63 912 345 6789",
      href: "tel:+639123456789",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      label: "Opening Hours",
      value: "Mon – Sat: 11AM – 11PM",
      sub: "Sunday: Closed",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-secondary)] leading-tight [font-family:var(--font-display)]">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)] mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[var(--color-secondary)]">{item.value}</p>
                  )}
                  {"sub" in item && item.sub && (
                    <p className="text-xs text-[var(--color-muted)] mt-0.5">{item.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-xl min-h-[380px]">
            <iframe
              title="UPV RRC Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.2!2d122.2364!3d10.6419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aef2d2c6b2f0b3%3A0x1234567890abcdef!2sUniversity%20of%20the%20Philippines%20Visayas!5e0!3m2!1sen!2sph!4v1680000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Page
export default function HomePage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-secondary)]">
      <Header />
      <Hero />
      <Services />
      <About />
      <News />
      <ContactSection />
      <Footer />
    </main>
  );
}
