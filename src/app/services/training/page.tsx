import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Training | UPV Regional Research Center",
  description:
    "Hands-on laboratory training sessions at the UPV RRC for individuals and groups on equipment use, method development, and best practices.",
};

function IcoGradCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M2 10l10-6 10 6-10 6-10-6z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}
function IcoTool() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
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
function IcoFlask() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 3h6M9 3v7L4.5 17A2 2 0 006 21h12a2 2 0 001.5-4L15 10V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}
function IcoLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export default function TrainingPage() {
  return (
    <ServicePage
      title="Training"
      subtitle="Hands-on laboratory training for individuals and groups"
      breadcrumb="Training"
      heroIcon={<IcoGradCap />}
      overviewHeading="Practical Training on Laboratory Equipment & Methods"
      paragraphs={[
        "We offer training sessions for individuals or groups who wish to become proficient in the proper use of our laboratory equipment. These sessions are designed to ensure that users can operate the equipment safely and effectively, adhering to all best practices and protocols. The training is hands-on, allowing participants to gain practical experience with the tools, equipment, and techniques used in the lab.",
        "Our training programs cover a range of equipment and methods, including basic operation, maintenance, troubleshooting, and best practices to ensure optimal performance of the equipment. This is ideal for researchers, students, and professionals who want to utilize our equipment confidently and independently.",
      ]}
      features={[
        {
          icon: <IcoTool />,
          title: "Hands-On Learning",
          text: "Practical, instrument-focused sessions give participants real experience with laboratory tools and techniques.",
        },
        {
          icon: <IcoUsers />,
          title: "Individual & Group",
          text: "Programs are available for single users or small to large teams, tailored to your group's needs.",
        },
        {
          icon: <IcoFlask />,
          title: "Method Development",
          text: "Advanced training in technique development, troubleshooting, and protocol best practices.",
        },
        {
          icon: <IcoLayers />,
          title: "All Skill Levels",
          text: "From basic equipment operation to advanced methodologies — everyone is welcome to join.",
        },
      ]}
    />
  );
}
