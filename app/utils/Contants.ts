// placeholder contents for now

"use client";

import { FlaskConical, Microscope, Building2, GraduationCap } from "lucide-react";

// services
export const SERVICES = [
  {
    code: "01",
    icon: FlaskConical,
    title: "Sample Processing",
    desc: "Clients can send their samples for sample processing. The service will give you the Raw Data/Results generated from the instrument and does not do data processing and interpretation (No Certificate of Analysis). Samples should be ready for processing and protocols should be provided upon submission of sample (if applicable.)",
  },
  {
    code: "02",
    icon: Microscope,
    title: "Use of Equipment",
    desc: "Clients are permitted to use the laboratory equipment under the supervision and guidance of our trained laboratory personnel. To ensure safe and effective operation, training is required prior to using any equipment. This ensures that users are familiar with the equipment’s functions, proper handling, and safety protocols.",
  },
  {
    code: "03",
    icon: Building2,
    title: "Use of Facility",
    desc: "Clients are welcome to rent facilities within the UPV RRC, such as the Audio-Visual Room (AVR) and other available spaces. These facilities can be used for various purposes, including meetings, seminars, workshops, or events. Each facility is equipped with modern amenities to support your specific needs.",
  },
  {
    code: "04",
    icon: GraduationCap,
    title: "Training",
    desc: "We offer training sessions for individuals or groups who wish to become proficient in the proper use of our laboratory equipment. These sessions are designed to ensure that users can operate the equipment safely and effectively, adhering to all best practices and protocols. The training is hands-on, allowing participants to gain practical experience with the tools, equipment, and techniques used in the lab.",
  },
];

// statistics section
export const STATS = [
  { value: "6188", label: "sequenced covid samples for variant detection" },
  { value: "865", label: "served students through trainings and research assistance" },
  { value: "233", label: "trained health professional" },
  { value: "43", label: "assisted research projects from both UPV and other SUCS" },
];

// news section
export const NEWS = [
  {
    tag: "Announcement",
    date: "June 2025",
    title: "RRC Opens Applications for the 2025 Research Grant Program",
    excerpt: "Qualified researchers from UPV and partner institutions may now submit proposals for the annual competitive grant.",
  },
  {
    tag: "Event",
    date: "May 2025",
    title: "Workshop on Fish Tissue Sampling Methods Now Open for Registration",
    excerpt: "A two-day hands-on workshop covering standard protocols for tissue preservation and histological preparation.",
  },
  {
    tag: "Publication",
    date: "April 2025",
    title: "New Study on Mangrove Carbon Sequestration Published in Asian Fisheries Science",
    excerpt: "RRC researchers document carbon stock trends in rehabilitated mangrove sites along Iloilo's coastline.",
  },
];

// faqs section
export const FAQS = [
  {
    q: "Who can avail of RRC services?",
    a: "RRC services are open to UPV faculty, students, and researchers, as well as external researchers from partner institutions and government agencies upon endorsement.",
  },
  {
    q: "How do I reserve laboratory equipment or facilities?",
    a: "Reservations are made through a formal request letter or online form submitted at least five working days before the intended use date. Availability is confirmed by the RRC administrator.",
  },
  {
    q: "Are there fees for using RRC facilities?",
    a: "Fees vary depending on the service and the affiliation of the requesting party. UPV-affiliated researchers may be eligible for subsidized rates. A schedule of fees is available at the RRC office.",
  },
  {
    q: "Does the RRC accept collaboration with private institutions?",
    a: "Yes. The RRC welcomes collaborative arrangements with private entities, subject to a memorandum of agreement and review by the UPV administration.",
  },
  {
    q: "How can I access RRC publications?",
    a: "Publications are available through the UPV library system, the RRC office, and select open-access repositories. Contact us at rrc@upv.edu.ph for specific requests.",
  },
];