export interface PersonalInfo {
  name: string;
  professionalTitle: string;
  heroTagline: string;
  careerDirection: string;
  primaryInterests: string[];
  locationAndGraduation: string;
  cgpa: string;
  aboutParagraph: string;
  profilePhotoPlaceholderLabel: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  knownFunctionality?: string[];
  features?: string[];
  learningExperience?: string[];
  futureScope?: string[];
  imagePlaceholderLabel: string;
  imageUrl?: string;
  githubUrl?: string | null;
  liveDemoUrl?: string | null;
  categoryTag?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timelineOrGraduation: string;
  grade: string;
}

export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
  imagePlaceholderLabel: string;
  imageUrl?: string;
}

export interface TableTennisAchievement {
  id: string;
  title: string;
  subtitle: string;
  highlight?: string;
}

export interface FideAchievement {
  title: string;
  organization: string;
  awardedYear: string;
  imagePlaceholderLabel: string;
  imageUrl?: string;
}

export interface PassionItem {
  id: string;
  title: string;
  iconName: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}
