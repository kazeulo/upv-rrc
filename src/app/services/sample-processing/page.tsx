import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROCESS_STEPS } from "@/data/services";

export const metadata = {
  title: "Sample Processing | UPV Regional Research Center",
  description:
    "Submit your samples for professional analysis at the UPV RRC. Raw data generated directly from our advanced analytical instruments.",
};

//    Icons  
function IcoFlask() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 3h6M9 3v7L4.5 17A2 2 0 006 21h12a2 2 0 001.5-4L15 10V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}
function IcoInfo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}
function IcoMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
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


//    1. Hero                                             
function Hero() {
  return (
    <section className="relative h-[40vh] min-h-[260px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/building.jpg"
          alt="RRC Laboratory"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081929]/95 via-[#081929]/65 to-[#081929]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pb-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-5 text-xs font-medium">
          <a href="/" className="text-white/45 hover:text-white/75 transition-colors">Home</a>
          <span className="text-white/25">/</span>
          <a href="/#services" className="text-white/45 hover:text-white/75 transition-colors">Services</a>
          <span className="text-white/25">/</span>
          <span className="text-white/70">Sample Processing</span>
        </div>

        {/* Title */}
        <div className="flex items-end gap-5">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/25 border border-[var(--color-primary)]/30 text-[var(--color-primary-light)] flex items-center justify-center shrink-0 mb-1">
            <IcoFlask />
          </div>
          <div>
            <h1 className="text-4xl lg:text-6xl font-black text-white [font-family:var(--font-display)] leading-tight tracking-tight">
              Sample Processing
            </h1>
            <p className="text-sm text-white/55 mt-2 font-medium tracking-wide">
              Professional analysis of your samples
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

//    2. Overview                                         ──
function Overview() {
  return (
    <section className="py-10 lg:py-14 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Description */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[var(--color-primary)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  About This Service
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-secondary)] [font-family:var(--font-display)] leading-snug mb-6">
                What is Sample Processing?
              </h2>
            </div>

            <p className="text-[var(--color-muted)] leading-relaxed text-sm lg:text-base">
              Clients can send their samples for processing, where raw data and results will be
              generated directly from the instrument. Please note that this service only provides
              raw data and does not include data processing, interpretation, or a Certificate of
              Analysis.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm lg:text-base">
              To ensure smooth processing, your sample should be prepared and ready for analysis.
              If there are any specific protocols or guidelines, kindly provide them at the time
              of submission (if applicable).
            </p>

            {/* Important notice */}
            <div className="flex gap-3.5 p-5 rounded-xl bg-amber-50 border border-amber-200">
              <IcoInfo />
              <div className="text-sm text-amber-800 leading-relaxed">
                <strong className="font-semibold">Important:</strong> This service delivers raw instrument data only. Data processing, interpretation, and Certificates of Analysis are not included. Please plan accordingly.
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

//  4. How It Works                                       ─
function HowItWorks() {
  return (
    <section className="py-10 lg:py-14 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
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
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.step}
              className="group relative flex flex-col bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all duration-300"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-black [font-family:var(--font-display)] text-slate-80 leading-none text-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]/20 transition-colors duration-300">
                  {s.step}
                </span>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[var(--color-border)]">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
                      <path d="M2 6h8M7 3l3 3-3 3" />
                    </svg>
                  </div>
                )}
              </div>

              <p className="text-sm font-bold text-[var(--color-secondary)] [font-family:var(--font-display)] mb-2 leading-snug">
                {s.label}
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">{s.text}</p>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//    5. CTA                                             ─
function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)] mb-4">
              Get Started
            </p>
            <h2 className="text-2xl lg:text-3xl font-black text-white [font-family:var(--font-display)] leading-snug mb-4">
              Ready to Submit Your Samples?
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Reach out via email or through our chatbot to begin your consultation.
              Our team will guide you through every step of the process.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:rrc.upvisayas@up.edu.ph"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              <IcoMail />
              Email Us
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

//    Page  ─
export default function SampleProcessingPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[72px] bg-[var(--color-bg)]">
        <Hero />
        <Overview />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
