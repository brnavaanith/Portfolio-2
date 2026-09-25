import {
  PersonalInfo,
  SkillCategory,
  ProjectItem,
  EducationItem,
  CertificationItem,
  TableTennisAchievement,
  FideAchievement,
  PassionItem,
  ContactInfo
} from '../types.ts';

export const personalInfo: PersonalInfo = {
  name: 'NAVAANITH B R',
  professionalTitle: 'Engineering Student | Software Developer',
  heroTagline: 'Building projects, learning continuously, and turning ideas into practical solutions.',
  careerDirection: 'Aspiring Software Developer',
  primaryInterests: ['Software Development', 'Web Development'],
  locationAndGraduation: 'Based at SRMIST · Expected graduation 2029',
  cgpa: '9.47 / 10',
  aboutParagraph:
    'I am an engineering student and aspiring software developer with a strong interest in software and web development. I enjoy turning ideas into practical projects, learning new technologies, and using technology to approach problems thoughtfully. Beyond academics and development, I enjoy sports, exploring, creativity, and continuous learning.',
  profilePhotoPlaceholderLabel: 'Profile Photo Placeholder'
};

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

// Skills data structure: Add additional skills to the arrays below or add new categories
export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    category: 'Programming',
    skills: ['Python', 'C', 'C++']
  },
  {
    id: 'web-development',
    category: 'Web Development',
    skills: ['HTML', 'CSS']
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'sharehope',
    title: 'ShareHope',
    description:
      'A donation and NGO platform designed to connect donors with NGOs and make donating useful resources easier.',
    isFeatured: true,
    categoryTag: 'Web Application / Platform',
    knownFunctionality: [
      'Donor registration/login',
      'NGO registration/login',
      'Admin functionality',
      'Donation management',
      'Database integration',
      'Responsive user interface'
    ],
    imagePlaceholderLabel: 'ShareHope Project Image Placeholder',
    imageUrl: '/images/projects/sharehope-placeholder.svg',
    githubUrl: null, // Ready but disabled
    liveDemoUrl: null // Ready but disabled
  },
  {
    id: 'search-rescue-rover',
    title: 'Smart Search & Rescue Rover',
    description:
      'A basic hardware prototype designed to assist rescue operations in difficult or hazardous environments.',
    isFeatured: false,
    categoryTag: 'Engineering Prototype',
    features: [
      '4-wheel mobile rover platform',
      'Ultrasonic-based obstacle detection',
      'Environmental temperature monitoring',
      'Gas/smoke detection',
      'Buzzer-based alert system',
      'Battery-powered operation',
      'Integrated sensors, motor driver and controller'
    ],
    learningExperience: [
      'Sensor interfacing',
      'Motor control',
      'Embedded programming',
      'Circuit connections and troubleshooting',
      'Hardware prototyping',
      'Robotics system integration'
    ],
    futureScope: [
      'Camera-based monitoring',
      'Wireless control',
      'Live video streaming',
      'Intelligent victim/hazard detection'
    ],
    imagePlaceholderLabel: 'Smart Search & Rescue Rover Image Placeholder',
    imageUrl: '/images/projects/rover-placeholder.svg',
    githubUrl: null,
    liveDemoUrl: null
  },
  {
    id: 'real-madrid-website',
    title: 'Real Madrid Website',
    description:
      'A modern football club website inspired by Real Madrid, focused on frontend design and user experience.',
    isFeatured: false,
    categoryTag: 'Frontend Design',
    // Note: Strictly NO programming languages or technologies listed
    imagePlaceholderLabel: 'Real Madrid Website Image Placeholder',
    imageUrl: '/images/projects/realmadrid-placeholder.svg',
    githubUrl: null, // Unlinked/disabled
    liveDemoUrl: 'https://brnavaanith.github.io/RealMadrid-Website/'
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-btech',
    degree: 'B.Tech – Computer Science and Engineering',
    institution: 'SRM Institute of Science and Technology (SRMIST)',
    timelineOrGraduation: 'Expected Graduation: 2029',
    grade: 'CGPA: 9.47 / 10'
  },
  {
    id: 'edu-class-12',
    degree: 'CBSE Class XII',
    institution: 'Springdays School, Vellore',
    timelineOrGraduation: 'Senior Secondary Education',
    grade: '72%'
  },
  {
    id: 'edu-class-10',
    degree: 'CBSE Class X',
    institution: 'Bharath International Senior Secondary School, Krishnagiri',
    timelineOrGraduation: 'Secondary Education',
    grade: '85%'
  }
];

// Certifications data structure: Add additional CertificateItem entries to this list
export const certificationsList: CertificationItem[] = [
  {
    id: 'cert-infosys',
    issuer: 'Infosys',
    title: 'Basics of Python',
    imagePlaceholderLabel: 'Original Infosys Certificate',
    imageUrl: '/images/certificates/navaanith - 2026-09-20 05.53.11.jpg'
  },
  {
    id: 'cert-be10x',
    issuer: 'be10x',
    title: 'AI Tools & ChatGPT Workshop',
    imagePlaceholderLabel: 'Original be10x Certificate',
    imageUrl: '/images/certificates/navaanith - 2026-09-20 05.53.09.jpg'
  },
  {
    id: 'cert-udemy',
    issuer: 'Udemy',
    title: 'Object Oriented Programming in C++',
    imagePlaceholderLabel: 'Original Udemy Certificate',
    imageUrl: '/images/certificates/navaanith - 2026-09-20 05.53.07.jpg'
  },
  {
    id: 'cert-simplilearn',
    issuer: 'Simplilearn SkillUp',
    title: 'Introduction to C++',
    imagePlaceholderLabel: 'Original Simplilearn Certificate',
    imageUrl: '/images/certificates/certificate.png'
  }
];

export const tableTennisAchievements: TableTennisAchievement[] = [
  {
    id: 'tt-srm-pl',
    title: 'Represented SRM Ramapuram in SRM Premier League',
    subtitle: 'Inter-collegiate / Campus Championship',
    highlight: 'Won Bronze Medal'
  },
  {
    id: 'tt-cbse-clusters',
    title: 'Represented Springdays School in CBSE Clusters',
    subtitle: 'CBSE Inter-School Cluster Tournament',
    highlight: 'School Representation'
  },
  {
    id: 'tt-cm-trophy',
    title: 'CM Trophy',
    subtitle: 'State / District Sports Championship',
    highlight: 'Reached Quarter-Finals'
  },
  {
    id: 'tt-krishnagiri',
    title: 'Krishnagiri District tournament/match',
    subtitle: 'District Level Table Tennis Competition',
    highlight: 'Reached Quarter-Finals'
  }
];

export const fideAchievement: FideAchievement = {
  title: 'FIDE Arena Candidate Master (ACM)',
  organization: 'Federation Internationale des Échecs (FIDE)',
  awardedYear: '2025',
  imagePlaceholderLabel: 'Original FIDE ACM Certificate',
  imageUrl: '/images/certificates/1781935771720.jpg'
};

export const passionsAndInterests: PassionItem[] = [
  { id: 'p-tech', title: 'Technology & Software', iconName: 'Code2' },
  { id: 'p-explore', title: 'Exploring', iconName: 'Compass' },
  { id: 'p-football', title: 'Football', iconName: 'ShieldCheck' },
  { id: 'p-cricket', title: 'Cricket', iconName: 'Activity' },
  { id: 'p-tt', title: 'Table Tennis', iconName: 'Zap' },
  { id: 'p-chess', title: 'Chess', iconName: 'Crown' },
  { id: 'p-design', title: 'Design & Creativity', iconName: 'Palette' },
  { id: 'p-learning', title: 'Continuous Learning', iconName: 'BookOpen' }
];

export const contactInfo: ContactInfo = {
  name: 'NAVAANITH B R',
  email: 'brnavaanith@gmail.com',
  githubUrl: 'https://github.com/brnavaanith',
  linkedinUrl: 'https://www.linkedin.com/in/navaanith-b-r-264a21366/'
};
