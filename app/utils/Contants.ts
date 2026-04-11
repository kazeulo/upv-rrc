"use client";

import { FlaskConical, Microscope, Building2, GraduationCap } from "lucide-react";

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