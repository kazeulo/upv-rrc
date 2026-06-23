import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Sample Processing | UPV Regional Research Center",
  description:
    "Submit your samples for professional analysis at the UPV RRC. Raw data generated directly from our advanced analytical instruments.",
};

// ─── Hero icon ────────────────────────────────────────────────────────────────
function IcoMicroscope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M6 18h12M6 22h12M14 18v-5M10 18v-5" />
      <circle cx="12" cy="9" r="4" />
      <path d="M12 5V3" />
    </svg>
  );
}

// ─── Feature icons ────────────────────────────────────────────────────────────
function IcoData() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}
function IcoUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function IcoClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}
function IcoFlask() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 3h6M9 3v7L4.5 17A2 2 0 006 21h12a2 2 0 001.5-4L15 10V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PRICING = [
  {
    tier: "Basic",
    range: "₱500 – ₱1,000",
    unit: "per sample",
    includes: ["Simple chemical analysis", "pH testing"],
    highlight: false,
  },
  {
    tier: "Advanced",
    range: "₱1,500 – ₱3,000",
    unit: "per sample",
    includes: ["Spectrometry", "Chromatography"],
    highlight: true,
  },
  {
    tier: "Specialized",
    range: "₱2,000 – ₱5,000",
    unit: "per sample",
    includes: ["Environmental samples", "Complex biological samples"],
    highlight: false,
  },
];

function IcoCheck() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M3 8l4 4 6-6" />
    </svg>
  );
}

// Page
export default function SampleProcessingPage() {
  return (
    <ServicePage
      title="Sample Processing"
      subtitle="Professional analysis of your samples"
      breadcrumb="Sample Processing"
      heroIcon={<IcoMicroscope />}
      overviewHeading="What is Sample Processing?"
      paragraphs={[
        "Clients can send their samples for processing, where raw data and results will be generated directly from the instrument. Please note that this service only provides raw data and does not include data processing, interpretation, or a Certificate of Analysis.",
        "To ensure smooth processing, your sample should be prepared and ready for analysis. If there are any specific protocols or guidelines, kindly provide them at the time of submission (if applicable).",
      ]}
      features={[
        {
          icon: <IcoData />,
          title: "Raw Data Output",
          text: "Results generated directly from the instrument. No interpretation or Certificate of Analysis is included.",
        },
        {
          icon: <IcoUsers />,
          title: "Expert Handling",
          text: "Trained RRC laboratory personnel manage every step of the sample processing workflow.",
        },
        {
          icon: <IcoClipboard />,
          title: "Protocol Support",
          text: "Provide your own protocols or guidelines at submission for customized analysis.",
        },
        {
          icon: <IcoFlask />,
          title: "Sample-Ready Required",
          text: "Samples must be prepared and ready for analysis prior to submission to the RRC.",
        },
      ]}
    >
    </ServicePage>
  );
}
