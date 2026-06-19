import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Use of Facilities | UPV Regional Research Center",
  description:
    "Rent the UPV RRC's Audio-Visual Room and other spaces for meetings, seminars, workshops, and events.",
};

function IcoBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 3v18M15 9v12" />
    </svg>
  );
}
function IcoDoor() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="2" width="18" height="20" rx="1" />
      <path d="M9 2v20M15 12h.01" />
    </svg>
  );
}
function IcoMonitor() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
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
function IcoCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function UseOfFacilitiesPage() {
  return (
    <ServicePage
      title="Use of Facilities"
      subtitle="Versatile spaces for meetings, seminars, and events"
      breadcrumb="Use of Facilities"
      heroIcon={<IcoBuilding />}
      overviewHeading="Modern, Fully Equipped Research Spaces"
      paragraphs={[
        "Clients are welcome to rent facilities within the UPV RRC, such as the Audio-Visual Room (AVR) and other available spaces. These facilities can be used for various purposes, including meetings, seminars, workshops, or events. Each facility is equipped with modern amenities to support your specific needs.",
        "To ensure proper usage and availability, prior coordination and booking are required. Our staff will assist you in securing the space, ensuring all necessary equipment and arrangements are in place for your event.",
      ]}
      features={[
        {
          icon: <IcoDoor />,
          title: "Versatile Spaces",
          text: "AVR, conference rooms, and specialized research areas available for a wide range of uses.",
        },
        {
          icon: <IcoMonitor />,
          title: "Modern Amenities",
          text: "Facilities are equipped with presentation technology and tools to support your event.",
        },
        {
          icon: <IcoUsers />,
          title: "Staff Coordination",
          text: "Our team assists with setup, logistics, and on-site support throughout your booking.",
        },
        {
          icon: <IcoCalendar />,
          title: "Flexible Scheduling",
          text: "Book spaces for meetings, seminars, workshops, and various other event types.",
        },
      ]}
    />
  );
}
