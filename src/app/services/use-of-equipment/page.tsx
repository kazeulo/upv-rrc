import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Use of Equipment | UPV Regional Research Center",
  description:
    "Access and operate advanced laboratory instruments at the UPV RRC under the supervision of trained personnel.",
};

function IcoFlask() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M9 3h6M9 3v7L4.5 17A2 2 0 006 21h12a2 2 0 001.5-4L15 10V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}
function IcoShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IcoGradCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 10l10-6 10 6-10 6-10-6z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}
function IcoGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function IcoCheckCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l3 3 5-5" />
    </svg>
  );
}

export default function UseOfEquipmentPage() {
  return (
    <ServicePage
      title="Use of Equipment"
      subtitle="Operate advanced instruments under expert supervision"
      breadcrumb="Use of Equipment"
      heroIcon={<IcoFlask />}
      overviewHeading="Supervised Access to Advanced Instruments"
      paragraphs={[
        "Clients are permitted to use the laboratory equipment under the supervision and guidance of our trained laboratory personnel. To ensure safe and effective operation, training is required prior to using any equipment. This ensures that users are familiar with the equipment's functions, proper handling, and safety protocols.",
        "Please coordinate with RRC personnel for further details on available equipment, training schedules, and usage guidelines. Our staff will be happy to assist you in scheduling training and provide instructions on how to use the equipment effectively.",
      ]}
      features={[
        {
          icon: <IcoShield />,
          title: "Trained Supervision",
          text: "All equipment use is guided and supervised by qualified RRC laboratory personnel at all times.",
        },
        {
          icon: <IcoGradCap />,
          title: "Mandatory Training",
          text: "Pre-use training is required to ensure every user understands proper handling and safety protocols.",
        },
        {
          icon: <IcoGrid />,
          title: "Broad Instrument Access",
          text: "Access a wide range of analytical instruments spanning multiple scientific disciplines.",
        },
        {
          icon: <IcoCheckCircle />,
          title: "Safety-First Approach",
          text: "Strict adherence to laboratory safety standards ensures a secure environment for all users.",
        },
      ]}
    />
  );
}
