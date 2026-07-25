import type { Resume } from "@/types/resume";

/**
 * Single source of truth for every piece of text on the site.
 * Edit this file to update the portfolio — components just read from here.
 */
export const resume: Resume = {
  name: "Khairul Izwan Bin Haziz",
  role: "Software Engineer",
  location: "Cyberjaya, Selangor",
  email: "khairul.izwan98@gmail.com",
  phone: "+60 1121521899",
  linkedin: "https://www.linkedin.com/in/khairul-izwan-haziz-493319238/",
  tagline:
    "Full-stack developer building scalable web and IoT solutions with Angular, React, Node.js, and Spring Boot.",
  about:
    "Driven developer with hands-on experience using Angular, React, Node.js, and Spring Boot. Open-minded and highly adaptable, with a strong focus on continuous learning, improving engineering practices, and working collaboratively to deliver scalable, high-performance software solutions. Comfortable contributing across the stack and learning new frameworks and tools to solve complex problems.",
  resumePdfPath: "/Khairul-Izwan-Haziz-Resume.pdf",
  headshotPath: "/khairul-headshot.jpg",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  skillGroups: [
    {
      title: "Languages",
      skills: ["Java", "Python"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Angular", "React", "Spring Boot", "Flutter"],
    },
    {
      title: "Other",
      skills: ["RESTful API", "Node.js"],
    },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Malay", level: "Native" },
    { name: "Mandarin", level: "Professional" },
  ],
  certifications: [{ name: "CompTIA Data+", year: "2026" }],
  experience: [
    {
      company: "Digital Webplus",
      title: "Software Engineer Intern",
      period: "March 2026 – August 2026",
      bullets: [
        "Built responsive, high-fidelity UI pages based on Figma designs for an enterprise domain management platform.",
        "Addressed critical bug fixes and shipped feature updates to keep platform operations running smoothly.",
        "Contributed across Domain Platform & Services, collaborating with the team on production-ready web interfaces.",
      ],
    },
    {
      company: "Zus Coffee",
      title: "Barista (Part-time)",
      period: "October 2023 – Aug 2026",
      bullets: [
        "Provided excellent customer service — greeting customers, taking orders, and addressing inquiries or concerns.",
        "Stayed flexible in a fast-paced environment and quickly learned new skills and procedures as needed.",
      ],
    },
    {
      company: "Golden Screen Cinema",
      title: "Steward (Part-time)",
      period: "April 2023 – September 2023",
      bullets: [
        "Greeted and assisted patrons with a friendly attitude, answering inquiries and sharing movie schedules and facility information.",
        "Processed ticket sales accurately, validated tickets, and kept entry into cinema auditoriums running smoothly.",
      ],
    },
    {
      company: "PC Image · Kota Kinabalu, Sabah",
      title: "Sales Assistant",
      period: "Jun 2021 – Dec 2021",
      bullets: [
        "Provided strong customer service by greeting clients and building relationships with key customers.",
        "Maintained product knowledge to make informed recommendations and answer client questions.",
        "Networked with clients via phone and email about promotions and events.",
        "Assisted with item returns, payment refunds, and escalating larger issues to managers.",
        "Kept store aisles clean and organized to improve the customer experience.",
      ],
    },
    {
      company: "Inti Deras · Kota Kinabalu, Sabah",
      title: "Junior IT Web Developer (Intern)",
      period: "Jun 2019 – Dec 2019",
      bullets: [
        "Completed a diploma internship focused on junior IT and web development.",
        "Assisted with building and updating web pages and digital content for the company.",
        "Supported day-to-day IT tasks and learned professional web development workflows in a team setting.",
      ],
    },
  ],
  education: [
    {
      degree: "Software Engineering",
      school:
        "University Malaysia of Computer Science & Engineering (UNIMY)",
      year: "2023 – Present (finishing 2026)",
      gpa: "3.4",
      bullets: [
        "Applied core software engineering principles through coursework and assignments, emphasizing system design, testing, and maintainable code.",
        "Built web application prototypes using Angular, React, Node.js, and Spring Boot as part of academic work, demonstrating full-stack development and collaboration.",
        "Maintained a cumulative GPA of 3.4 while delivering final-year academic deliverables and balancing coursework deadlines.",
      ],
    },
    {
      degree: "Diploma in Computer Science",
      school:
        "Kolej Teknikal Yayasan Sabah in Collaboration with Universiti Teknologi Malaysia",
      year: "2016 – 2019",
      bullets: [
        "Completed a diploma programme covering foundational computing, programming, and IT systems.",
        "Built academic projects that strengthened problem-solving and practical software skills.",
      ],
    },
    {
      degree: "Sijil Pelajaran Malaysia (SPM)",
      school: "Maktab Sabah",
      year: "2011 – 2015",
      bullets: [
        "Completed secondary education and SPM examinations at Maktab Sabah.",
      ],
    },
  ],
  projects: [
    {
      title: "IoT-Based Hostel Monitoring System",
      description:
        "Designed and built an IoT platform tailored for monitoring hostel facilities and environments.",
      highlights: [
        "Awarded the Gold Medal for Best Presentation at the Innoverse Showcase for its design, functionality, and practical execution.",
      ],
      tech: ["IoT", "Sensors", "Web Dashboard"],
      award: "Gold Medal — Best Presentation, Innoverse Showcase",
    },
    {
      title: "IoT Smart TechBand",
      description:
        "Assistive wearable device integrating smart hardware with software interfaces.",
      highlights: [
        "Real-time speech-to-text processing designed to help deliver accessibility-focused reminders for users.",
      ],
      tech: ["IoT", "Wearable", "Speech-to-Text"],
    },
    {
      title: "Domain Platform & Services",
      description:
        "Enterprise-level domain management platform services at Digital Webplus.",
      highlights: [
        "Built responsive, high-fidelity UI pages from Figma designs.",
        "Handled critical bug fixes and feature updates for smooth operations.",
      ],
      tech: ["Angular", "React", "Figma", "RESTful API"],
    },
    {
      title: "Snooker & Pool Management Application",
      description:
        "Freelance project — custom management suite and Point of Sale (POS) system for a local snooker/pool venue.",
      highlights: [
        "Built as a freelance engagement for a local venue.",
        "Real-time table timer tracking, dynamic pricing, order management, and financial reporting dashboards.",
      ],
      tech: ["Freelance", "POS", "Real-time", "Dashboards"],
      award: "Freelance",
    },
  ],
};
