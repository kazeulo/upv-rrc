import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | UPV Regional Research Center",
  description:
    "Learn about the University of the Philippines Visayas Regional Research Center — its history, mission, divisions, and research impact.",
};

//    Shared                                             ─
function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[var(--color-primary)]/30">
      <circle cx="12" cy="8" r="4.5" />
      <path d="M3 21c0-4.5 4-8 9-8s9 3.5 9 8" />
    </svg>
  );
}

function IcoEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IcoTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// Org chart card
function OrgCard({
  name,
  title,
  sub,
  large = false,
}: {
  name: string;
  title: string;
  sub?: string;
  large?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center text-center bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
        large ? "py-8 px-10" : ""
      }`}
    >
      <div
        className={`rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-4 ${
          large ? "w-24 h-24" : "w-[4.5rem] h-[4.5rem]"
        }`}
      >
        <PersonIcon />
      </div>
      <p
        className={`font-bold text-[var(--color-secondary)] [font-family:var(--font-display)] mb-1 ${
          large ? "text-base" : "text-sm"
        }`}
      >
        {name}
      </p>
      <p
        className={`text-[var(--color-primary)] font-semibold mb-1 ${
          large ? "text-sm" : "text-xs"
        }`}
      >
        {title}
      </p>
      {sub && (
        <p className="text-xs text-[var(--color-muted)] leading-relaxed mt-1">{sub}</p>
      )}
    </div>
  );
}

function DivisionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px flex-1 bg-[var(--color-border)]" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] px-3 py-1.5 rounded-full bg-[var(--color-primary-light)]">
        {text}
      </span>
      <div className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
  );
}

//    1. Banner                                           
function Banner() {
  return (
    <section className="relative h-[42vh] min-h-[280px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/building.jpg"
          alt="UPV RRC Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e30]/75 to-[#0a1e30]/90" />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl lg:text-7xl font-black text-white [font-family:var(--font-display)] mb-3 tracking-tight">
          About Us
        </h1>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
          Get To Know Us More
        </p>
      </div>
    </section>
  );
}

//    2. About Section                                     ──
function AboutSection() {
  const fields1 = ["Applied Chemistry", "Food Science", "Microbiology & Bioengineering"];
  const fields2 = ["Biology", "Material Science & Nanotechnology", "Computational Science"];

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-secondary)] [font-family:var(--font-display)] uppercase tracking-widest mb-5">
            UPV Regional Research Center
          </h2>
          <div className="h-[3px] w-16 bg-[var(--color-primary)] mx-auto rounded-full" />
        </div>

        <div className="space-y-14">
          {/* Block 1: Logo + intro */}
          <div className="flex flex-col sm:flex-row items-center gap-10 bg-slate-50 rounded-2xl border border-[var(--color-border)] p-8 lg:p-10">
            <div className="relative shrink-0">
              <img
                src="/images/rrc_logo.png"
                alt="RRC Logo"
                className="h-28 w-auto object-contain"
              />
              <span className="absolute -bottom-2 -right-4 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                Est. 2018
              </span>
            </div>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm lg:text-base">
              The University of the Philippines Visayas – Regional Research Center (RRC) is a
              newly established unit that aims to strengthen the research and innovation
              capabilities of UP Visayas by providing researchers access to and training on
              advanced analytical equipment and method development.
            </p>
          </div>

          {/* Block 2: Fields */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 lg:p-10 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--color-secondary)] [font-family:var(--font-display)] mb-7">
              Fields of Research Excellence
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 mb-7">
              {[fields1, fields2].map((col, ci) => (
                <ul key={ci} className="space-y-3">
                  {col.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <p className="text-xs text-[var(--color-muted)] italic border-t border-[var(--color-border)] pt-5">
              <em className="not-italic font-semibold text-[var(--color-secondary)]">Expanding soon to include:</em>{" "}
              Advanced Instrumentation and Device Engineering, Marine Field Studies
            </p>
          </div>

          {/* Block 3: Mission statement + CTA */}
          <div className="max-w-3xl">
            <p className="text-[var(--color-muted)] leading-relaxed text-sm lg:text-base mb-8">
              The UPV RRC aims to establish UPV as a leader in inter-, trans-, and
              multidisciplinary research in the fields of Fisheries and Aquatic Sciences, and
              allied disciplines by serving as a hub of knowledge and technology development,
              driven by the needs of society.
            </p>
            <a
              href="/#services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors duration-200 shadow-md shadow-[var(--color-primary)]/20"
            >
              Explore Our Services
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

//    3. Mission & Vision                                     
function MissionVision() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/building.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-[#081929]/92" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision */}
          <div className="flex flex-col items-center text-center bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 rounded-full bg-white/12 border border-white/20 flex items-center justify-center text-white mb-6">
              <IcoEye />
            </div>
            <h2 className="text-xl font-black text-white [font-family:var(--font-display)] mb-5">
              Our Vision
            </h2>
            <p className="text-white/65 leading-relaxed text-sm">
              A dynamic advanced research institution in the Philippines, internationally
              recognized as a leader in innovations in the fields of Fisheries, Aquatic
              Sciences, and Allied disciplines.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center text-center bg-[var(--color-primary)]/15 backdrop-blur-sm border border-[var(--color-primary)]/25 rounded-2xl p-8 lg:p-10">
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/30 border border-[var(--color-primary)]/40 flex items-center justify-center text-white mb-6">
              <IcoTarget />
            </div>
            <h2 className="text-xl font-black text-white [font-family:var(--font-display)] mb-5">
              Our Mission
            </h2>
            <p className="text-white/65 leading-relaxed text-sm">
              To establish UPV as a leader in multidisciplinary research in the fields of
              Fisheries, Aquatic Sciences, and allied disciplines by serving as a hub of
              knowledge and technology development, driven by the needs of society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

//    4. Organizational Chart                                 ─
function OrgChart() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-black text-[var(--color-secondary)] [font-family:var(--font-display)] uppercase tracking-widest mb-5">
            Organizational Chart
          </h2>
          <div className="h-[3px] w-16 bg-[var(--color-primary)] mx-auto rounded-full" />
        </div>

        {/* Director */}
        <div className="flex justify-center mb-14">
          <div className="w-full max-w-xs">
            <OrgCard
              name="Asst. Prof. Mary Grace Sedanza, PhD"
              title="Director"
              large
            />
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-8 bg-[var(--color-border)]" />
        </div>

        {/* Research Innovation Division */}
        <DivisionLabel text="Research Innovation Division" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <OrgCard
            name="Jade G. Pahila, PhD"
            title="University Researcher I"
            sub="Food, Feeds, and Functional Nutrition Laboratory"
          />
          <OrgCard
            name="David James M. Lopez"
            title="Laboratory Technician II"
            sub="Food, Feeds, and Functional Nutrition Laboratory"
          />
          <OrgCard
            name="Luke Drandel D. Atencio"
            title="University Researcher I"
            sub="Microbiology Laboratory and Biology Laboratory"
          />
          <OrgCard
            name="Ma. Jamaica Trexy E. Magdayao, R.Ch."
            title="University Researcher I"
            sub="Applied Chemistry Laboratory and Material Science Laboratory"
          />
        </div>

        {/* TECD & Admin */}
        <DivisionLabel text="TECD & Admin Section" />
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-14">
          <OrgCard
            name="Jose Marie A. Eslopor"
            title="University Extension Specialist I"
            sub="Training, Extension, and Communication Division"
          />
          <OrgCard
            name="Susci Ann J. Sobrevega"
            title="Administrative Assistant IV"
            sub="Administrative Section"
          />
        </div>

        {/* Engineering */}
        <DivisionLabel text="Engineering Section" />
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <OrgCard
            name="Engr. Vincent John D. Fuentes"
            title="Engineer IV"
            sub="Engineering Section"
          />
          <OrgCard
            name="Engr. Arnie G. Moquera"
            title="Engineer III"
            sub="Engineering Section"
          />
        </div>
      </div>
    </section>
  );
}

//    Page  ─
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-[72px] bg-[var(--color-bg)]">
        <Banner />
        <AboutSection />
        <MissionVision />
        <OrgChart />
      </main>
      <Footer />
    </>
  );
}
