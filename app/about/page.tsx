import React from "react";

const fields = [
  {
    name: "Applied Chemistry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b79a2" strokeWidth={2} width={18} height={18}>
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    name: "Food Science",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b79a2" strokeWidth={2} width={18} height={18}>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "Microbiology & Bioengineering",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b79a2" strokeWidth={2} width={18} height={18}>
        <circle cx={12} cy={12} r={3} />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: "Biology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b79a2" strokeWidth={2} width={18} height={18}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Material Science & Nanotechnology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b79a2" strokeWidth={2} width={18} height={18}>
        <rect x={2} y={7} width={20} height={14} rx={2} />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    name: "Computational Science",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b79a2" strokeWidth={2} width={18} height={18}>
        <rect x={2} y={3} width={20} height={14} rx={2} />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* ── Hero ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20 pb-20 border-b border-gray-200">
        {/* Left: description */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#3b79a2] mb-2">
            About Us
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-gray-900 mb-5">
            UP Visayas{" "}
            <span className="text-[#3b79a2]">Regional Research Center</span>
          </h1>
          <p className="text-base leading-relaxed text-gray-500">
            The University of the Philippines Visayas – Regional Research Center (RRC) is a
            newly established unit that aims to strengthen the research and innovation
            capabilities of UP Visayas by providing researchers access to and training on
            advanced analytical equipment and method development.
          </p>
        </div>

        {/* Right: logo + est */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-36 h-36 rounded-full border-2 border-[#3b79a2] flex items-center justify-center bg-gray-50">
            <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width={72} height={72}>
              <path
                d="M28 12h16M30 12v16L20 44a8 8 0 0 0 7 12h18a8 8 0 0 0 7-12L42 28V12"
                stroke="#3b79a2"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx={28} cy={46} r={2.5} fill="#3b79a2" opacity={0.5} />
              <circle cx={36} cy={50} r={2} fill="#3b79a2" opacity={0.4} />
              <circle cx={44} cy={46} r={2} fill="#3b79a2" opacity={0.5} />
            </svg>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-[#3b79a2] tracking-wide">
              UPV – RRC
            </p>
            <p className="text-xs text-gray-400 mt-1">Regional Research Center</p>
          </div>
          <span className="text-xs font-semibold text-[#185fa5] bg-[#e6f1fb] px-4 py-1.5 rounded-full tracking-wide">
            Est. 2024
          </span>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <p className="text-xs font-semibold tracking-widest uppercase text-[#3b79a2] mb-4">
        Mission & Vision
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div className="bg-white border border-gray-200 border-t-4 border-t-[#3b79a2] rounded-xl p-8">
          <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-sm leading-relaxed text-gray-500">
            To strengthen the research and innovation capabilities of UP Visayas by providing
            researchers access to and training on advanced analytical equipment and method
            development, serving society's needs.
          </p>
        </div>
        <div className="bg-white border border-gray-200 border-t-4 border-t-[#5a97bf] rounded-xl p-8">
          <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-sm leading-relaxed text-gray-500">
            To establish UPV as a leader in inter-, trans-, and multidisciplinary research in
            the fields of Fisheries and Aquatic Sciences and allied disciplines — serving as a
            hub of knowledge and technology development, driven by the needs of society.
          </p>
        </div>
      </div>

      {/* ── Fields of Research ── */}
      <div className="mb-20">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#3b79a2] mb-2">
          Research Focus
        </p>
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">
          Fields of Research Excellence
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Core disciplines driving innovation and discovery at the RRC.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {fields.map((field) => (
            <div
              key={field.name}
              className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4"
            >
              <div className="w-9 h-9 rounded-lg bg-[#e6f1fb] flex items-center justify-center shrink-0">
                {field.icon}
              </div>
              <span className="text-sm font-medium text-gray-800 leading-snug">
                {field.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 bg-[#f4f8fc] border border-dashed border-[#3b79a2] rounded-xl px-5 py-4">
          <span className="text-xs font-semibold text-[#185fa5] bg-[#e6f1fb] px-3 py-1 rounded-full whitespace-nowrap">
            Expanding Soon
          </span>
          <p className="text-sm text-gray-500">
            Advanced Instrumentation and Device Engineering &nbsp;·&nbsp; Marine Field Studies
          </p>
        </div>
      </div>

      {/* ── Org Chart ── */}
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-[#3b79a2] mb-2">
          Structure
        </p>
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-2">
          Organizational Chart
        </h2>
        <p className="text-sm text-gray-400 mb-10">
          The leadership and administrative structure of the UPV Regional Research Center.
        </p>

        <div className="flex flex-col items-center">
          {/* Director */}
          <div className="bg-white border border-gray-200 border-t-4 border-t-[#3b79a2] rounded-xl px-7 py-4 text-center min-w-[260px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3b79a2] mb-1">Director</p>
            <p className="text-sm font-medium text-gray-900">RRC Director</p>
            <p className="text-xs text-gray-400 mt-0.5">UP Visayas – RRC</p>
          </div>

          <div className="w-px h-8 bg-gray-200" />

          {/* Admin */}
          <div className="bg-white border border-gray-200 border-t-4 border-t-[#5a97bf] rounded-xl px-7 py-4 text-center min-w-[220px]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3b79a2] mb-1">Administration</p>
            <p className="text-sm font-medium text-gray-900">Administrative Officer</p>
            <p className="text-xs text-gray-400 mt-0.5">Operations & Finance</p>
          </div>

          <div className="w-px h-6 bg-gray-200" />

          {/* Branch lines */}
          <div className="flex">
            <div className="border-t border-r border-gray-200 w-36 h-6" />
            <div className="border-t border-l border-gray-200 w-36 h-6" />
          </div>

          {/* Two units */}
          <div className="flex gap-5 items-start">
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-center min-w-[175px]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3b79a2] mb-1">Unit Head</p>
              <p className="text-sm font-medium text-gray-900">Research Division</p>
              <p className="text-xs text-gray-400 mt-0.5">Core Research Programs</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-center min-w-[175px]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3b79a2] mb-1">Unit Head</p>
              <p className="text-sm font-medium text-gray-900">Laboratory Services</p>
              <p className="text-xs text-gray-400 mt-0.5">Equipment & Training</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-8">
          Full organizational chart to be updated as the RRC grows.
        </p>
      </div>

    </section>
  );
};

export default AboutUs;