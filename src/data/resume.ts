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
    "Fresh Software Engineering graduate (2026) seeking Junior / Graduate Software Engineer roles — fullstack with Java, Spring Boot, React, Angular, and Node.js.",
  about:
    "Fresh Software Engineering graduate (2026) seeking Junior / Graduate Software Engineer roles. Hands-on experience building fullstack web applications with Java, Spring Boot, React, Angular, and Node.js through academic projects and a backend development internship. CompTIA Data+ certified. Adaptable, fast learner, and comfortable collaborating in cross-functional engineering teams.",
  resumePdfPath: "/docs/Khairul-Izwan-Haziz-Resume.pdf",
  headshotPath: "/images/khairul-headshot.jpg",
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
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Angular", "React", "Spring Boot", "Flutter"],
    },
    {
      title: "Other",
      skills: ["RESTful API", "Node.js", "Figma"],
    },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Malay", level: "Native" },
    { name: "Mandarin", level: "Professional" },
  ],
  certifications: [
    {
      name: "CompTIA Data+",
      year: "2026",
      credlyBadgeId: "a22749bf-0e97-4a05-911a-1716ade73056",
      credlyUrl:
        "https://www.credly.com/badges/a22749bf-0e97-4a05-911a-1716ade73056",
    },
  ],
  softwareEngineeringExperience: [
    {
      company: "Web.Plus",
      title: "Software Developer",
      period: "March 2026 – August 2026",
      bullets: [
        "Implemented responsive UI components and integrated them with backend services using React and RESTful APIs.",
        "Collaborated with cross-functional team members to triage defects and established unit and integration tests to improve application stability.",
        "Contributed to backend business logic and endpoints using Java and Spring Boot for internal services.",
      ],
    },
    {
      company: "Inti Deras",
      title: "Software Developer",
      period: "April 2019 – September 2019",
      bullets: [
        "Converted Figma designs into responsive, high-fidelity UI pages for an enterprise domain management platform.",
        "Diagnosed and resolved critical bugs and delivered feature updates to maintain platform operations.",
        "Worked with platform and services teams to hand off production-ready web interface components to QA.",
      ],
    },
  ],
  additionalExperience: [
    {
      company: "Zus Coffee",
      title: "Barista (Part-time)",
      period: "October 2023 – August 2026",
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
      period: "June 2021 – December 2021",
      bullets: [
        "Provided strong customer service by greeting clients and building relationships with key customers.",
        "Maintained product knowledge to make informed recommendations and answer client questions.",
        "Networked with clients via phone and email about promotions and events.",
        "Assisted with item returns, payment refunds, and escalating larger issues to managers.",
        "Kept store aisles clean and organized to improve the customer experience.",
      ],
    },
  ],
  education: [
    {
      degree: "Software Engineering",
      school:
        "University of Computer Science And Engineering Malaysia (UNIMY)",
      year: "2026",
      gpa: "3.4",
      bullets: [
        "Applied core software engineering principles through coursework and assignments, emphasizing system design, testing, and maintainable code.",
        "Built web application prototypes using Angular, React, Node.js, and Spring Boot as part of academic work, demonstrating full-stack development and collaboration.",
        "Maintained a cumulative GPA of 3.4 while delivering final-year academic deliverables and balancing coursework deadlines.",
      ],
    },
    {
      degree: "Diploma in Computer Science",
      school: "Universiti Teknologi Malaysia",
      year: "2024",
      gpa: "2.5",
      bullets: [
        "Completed a diploma programme covering foundational computing, programming, and IT systems.",
        "Built academic projects that strengthened problem-solving and practical software skills.",
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
        "Enterprise-level domain management platform services at Web.Plus.",
      highlights: [
        "Built responsive, high-fidelity UI pages from Figma designs.",
        "Handled critical bug fixes and feature updates for smooth operations.",
      ],
      tech: ["Angular", "React", "Figma", "RESTful API"],
    },
    {
      title: "Palm Pool — Snooker & Pool Management",
      description:
        "Freelance project — custom management suite and Point of Sale (POS) system for a local snooker/pool venue (Palm Pool).",
      highlights: [
        "Built as a freelance engagement for a local venue.",
        "Real-time table timer tracking, dynamic pricing, order management, and financial reporting dashboards.",
        "Live UAT demo available — use the accounts below to try admin and staff roles.",
      ],
      tech: ["Freelance", "POS", "Real-time", "Dashboards"],
      award: "Freelance",
      liveUrl: "https://palm-pool-uat.web.app/",
      demoLogins: [
        {
          role: "Admin",
          email: "user@test.com",
          password: "test123",
        },
        {
          role: "Staff",
          email: "user2@test.com",
          password: "test123",
        },
      ],
    },
  ],
};
