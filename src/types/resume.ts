/** A single navigation link that scrolls to a page section. */
export type NavLink = {
  label: string;
  href: string;
};

/** Contact and social links shown in Hero / Contact / Footer. */
export type SocialLink = {
  label: string;
  href: string;
  /** Which icon to render from the shared icons map. */
  icon: "mail" | "phone" | "linkedin" | "location" | "external";
};

/** One skill group (e.g. Languages, Frameworks). */
export type SkillGroup = {
  title: string;
  skills: string[];
};

/** A spoken language with proficiency level. */
export type SpokenLanguage = {
  name: string;
  level: string;
};

/** A certification entry. */
export type Certification = {
  name: string;
  year: string;
  /** Credly share badge ID — used by the official embed widget. */
  credlyBadgeId?: string;
  /** Public Credly page so visitors can verify the badge. */
  credlyUrl?: string;
};

/** Work / internship experience. */
export type ExperienceItem = {
  company: string;
  title: string;
  /** Free-form date range, e.g. "Mar 2025 – Aug 2025". */
  period: string;
  bullets: string[];
};

/** Education entry. */
export type EducationItem = {
  degree: string;
  school: string;
  year: string;
  gpa?: string;
  bullets: string[];
};

/** Demo login shown on a project card for try-it-yourself UAT links. */
export type DemoLogin = {
  role: string;
  email: string;
  password: string;
};

/** A portfolio project card. */
export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  /** Optional badge like "Gold Medal". */
  award?: string;
  liveUrl?: string;
  repoUrl?: string;
  /** Optional demo accounts visitors can use on the live site. */
  demoLogins?: DemoLogin[];
};

/** The full resume shape — everything the site renders. */
export type Resume = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  /** Short tagline under the name in the Hero. */
  tagline: string;
  about: string;
  resumePdfPath: string;
  headshotPath: string;
  navLinks: NavLink[];
  skillGroups: SkillGroup[];
  languages: SpokenLanguage[];
  certifications: Certification[];
  softwareEngineeringExperience: ExperienceItem[];
  additionalExperience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
};
