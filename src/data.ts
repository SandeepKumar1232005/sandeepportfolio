export interface Project {
  title: string;
  category: string;
  tags: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
  };
  period: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  details?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  iconName: string;
  category: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  description: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "KIT – Kalaignar Karunanidhi Institute of Technology",
    degree: "B.E. Computer Science Engineering (Lateral Entry)",
    period: "2024 – 2027",
    grade: "CGPA 7.92 / 10.0 (Final Year)",
    location: "Coimbatore, Tamil Nadu",
    details: ["Coursework: Machine Learning, Operating Systems, Database Management Systems"]
  },
  {
    institution: "Government Polytechnic College",
    degree: "Diploma in Computer Engineering",
    period: "2021 – 2024",
    grade: "73%",
    location: "Coimbatore, Tamil Nadu"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "AGNA Private Limited",
    location: "Coimbatore, Tamil Nadu (Offline)",
    period: "May – June 2023",
    highlights: [
      "Assisted in developing responsive webpages using HTML, CSS, and JavaScript.",
      "Supported UI/UX improvements for client-facing websites.",
      "Collaborated with the development team to implement and test web features."
    ]
  },
  {
    role: "Data Analytics Intern",
    company: "Paresha HR Private Limited",
    location: "Coimbatore, Tamil Nadu (Offline)",
    period: "May 2025",
    highlights: [
      "Analyzed campaign performance data to extract actionable insights and generate structured reports.",
      "Conducted keyword research and tracked engagement metrics across digital platforms.",
      "Assisted in interpreting data trends to support marketing decision-making."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Paperly",
    category: "AI-Powered Student Writer Marketplace",
    tags: ["React.js", "TypeScript", "Firebase", "Tailwind CSS"],
    highlights: [
      "Developed a student-writer marketplace platform with user-specific dashboards and organized content management for seamless collaboration.",
      "Implemented JWT-based authentication and a fully responsive React UI for smooth, cross-device accessibility.",
      "Built a real-time writer-student matching system with dynamic filtering and AI-based handwriting classification."
    ],
    links: {
      github: "https://github.com/SandeepKumar1232005/Paperly"
    },
    period: "Nov 2025"
  },
  {
    title: "Billing Software",
    category: "Inventory Billing Application",
    tags: ["Python", "Tkinter", "SQLite"],
    highlights: [
      "Built a desktop-based billing system supporting product entry, quantity updates, and automated invoice generation.",
      "Integrated SQLite to store product data and billing records, ensuring quick retrieval and smooth workflow.",
      "Designed a user-friendly Tkinter interface for easy item selection and real-time total calculation."
    ],
    links: {
      github: "https://github.com/SandeepKumar1232005/Billing-Software"
    },
    period: "Apr 2023"
  },
  {
    title: "Voice Assistant",
    category: "AI Desktop Assistant",
    tags: ["Python", "Speech Recognition", "pyttsx3", "Automation"],
    highlights: [
      "Built a Python-based voice assistant capable of handling desktop automation tasks through real-time voice command recognition.",
      "Integrated text-to-speech and speech-to-text engines to enable natural, hands-free interaction.",
      "Implemented command modules for opening applications, web search, and system-level control."
    ],
    links: {
      github: "https://github.com/SandeepKumar1232005/Voice-Assistant"
    },
    period: "Oct 2025"
  }
];

export const SKILLS_DATA = {
  languages: [
    { name: "C++", rating: 80 },
    { name: "Python", rating: 85 },
    { name: "SQL", rating: 75 },
    { name: "TypeScript", rating: 70 }
  ],
  web: [
    { name: "HTML5", rating: 90 },
    { name: "CSS3", rating: 85 },
    { name: "React JS (Basics)", rating: 75 },
    { name: "Django", rating: 70 },
    { name: "REST APIs", rating: 75 }
  ],
  dataBackend: [
    { name: "Node.js", rating: 65 },
    { name: "MongoDB", rating: 70 },
    { name: "SQLite", rating: 80 },
    { name: "Firebase", rating: 75 }
  ],
  tools: [
    { name: "Git", rating: 80 },
    { name: "GitHub", rating: 85 },
    { name: "Linux", rating: 75 }
  ]
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  // Cloud & Security (11 items)
  {
    title: "Salesforce Certified – Agentforce Specialist",
    issuer: "Salesforce",
    year: "2025",
    iconName: "ShieldCheck",
    category: "Cloud & AI"
  },
  {
    title: "Certified Cloud Practitioner",
    issuer: "AWS",
    year: "2026",
    iconName: "Cloud",
    category: "Cloud & AI"
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS",
    year: "2025",
    iconName: "Cloud",
    category: "Cloud & AI"
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2025",
    iconName: "Cloud",
    category: "Cloud & AI"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2025",
    iconName: "Cloud",
    category: "Cloud & AI"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    iconName: "ShieldCheck",
    category: "Cloud & AI"
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
    iconName: "ShieldCheck",
    category: "Cloud & AI"
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google on Coursera",
    year: "2025",
    iconName: "ShieldCheck",
    category: "Cloud & AI"
  },
  {
    title: "Fortinet Certified Associate - Cybersecurity",
    issuer: "Fortinet",
    year: "2025",
    iconName: "ShieldCheck",
    category: "Cloud & AI"
  },
  {
    title: "Salesforce Associate Certification",
    issuer: "Salesforce",
    year: "2025",
    iconName: "ShieldCheck",
    category: "Cloud & AI"
  },
  {
    title: "Introduction to AWS EC2 & S3 Services",
    issuer: "Coursera",
    year: "2024",
    iconName: "Cloud",
    category: "Cloud & AI"
  },

  // Networks & Systems (10 items)
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    year: "2026",
    iconName: "Network",
    category: "Networks & Systems"
  },
  {
    title: "Linux Fundamentals Certification",
    issuer: "Red Hat",
    year: "2024",
    iconName: "Terminal",
    category: "Networks & Systems"
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA) prep",
    issuer: "Red Hat Academy",
    year: "2025",
    iconName: "Terminal",
    category: "Networks & Systems"
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco",
    year: "2024",
    iconName: "Network",
    category: "Networks & Systems"
  },
  {
    title: "Linux Unhatched",
    issuer: "NDG via Cisco Academy",
    year: "2023",
    iconName: "Terminal",
    category: "Networks & Systems"
  },
  {
    title: "NDG Linux Essentials",
    issuer: "NDG via Cisco Academy",
    year: "2024",
    iconName: "Terminal",
    category: "Networks & Systems"
  },
  {
    title: "Computer Networks & Internet Protocol",
    issuer: "NPTEL (IIT Kharagpur)",
    year: "2024",
    iconName: "Network",
    category: "Networks & Systems"
  },
  {
    title: "Operating Systems Fundamentals",
    issuer: "Coursera",
    year: "2024",
    iconName: "Terminal",
    category: "Networks & Systems"
  },
  {
    title: "Wireshark Network Analysis",
    issuer: "Coursera Project Network",
    year: "2024",
    iconName: "Network",
    category: "Networks & Systems"
  },
  {
    title: "Command Line in Linux",
    issuer: "Coursera",
    year: "2023",
    iconName: "Terminal",
    category: "Networks & Systems"
  },

  // Web & Software Engineering (11 items)
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    year: "2024",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "React.js Developer Assessment",
    issuer: "HackerRank",
    year: "2024",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "TypeScript Essential Training",
    issuer: "LinkedIn Learning",
    year: "2025",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "Django for Beginners Certificate",
    issuer: "Coursera",
    year: "2024",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "Git and GitHub Version Control",
    issuer: "Google",
    year: "2024",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    year: "2025",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "PostgreSQL Database Administration",
    issuer: "Coursera",
    year: "2024",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Goldman Sachs via Forage",
    year: "2025",
    iconName: "Award",
    category: "Web & Software"
  },
  {
    title: "REST APIs Developer Certificate",
    issuer: "HackerRank",
    year: "2024",
    iconName: "Award",
    category: "Web & Software"
  },

  // Data & Machine Learning (10 items)
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online & DeepLearning.AI",
    year: "2025",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI",
    year: "2025",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM on Coursera",
    year: "2024",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    year: "2025",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "SQL Intermediate Certificate",
    issuer: "HackerRank",
    year: "2024",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Advanced Data Analytics with Python",
    issuer: "Google",
    year: "2025",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Deep Learning Foundations",
    issuer: "NVIDIA Deep Learning Institute",
    year: "2025",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    year: "2024",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Database Management Systems Certification",
    issuer: "NPTEL (IIT Madras)",
    year: "2024",
    iconName: "Award",
    category: "Data & ML"
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    year: "2025",
    iconName: "Award",
    category: "Data & ML"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "2nd Place – Paper Presentation Competition",
    subtitle: "Hindustan College of Engineering and Technology",
    description: "Presented research paper on emerging computer science concepts, recognized for clarity, depth, and innovation."
  },
  {
    title: "Finalist – Code Debugging Competition",
    subtitle: "Ranganathan Institute of Technology",
    description: "Qualified for the final rounds, solving multiple high-complexity programming and debugging challenges under strict time constraints."
  },
  {
    title: "Industry-Recognized Scholar",
    subtitle: "AI, Cloud & Web Specializations",
    description: "Successfully earned multiple professional certifications validation from global leaders (AWS, Salesforce, Red Hat, Cisco)."
  }
];

export const PROFILE_STATS = [
  { value: "7.92", label: "Current CGPA" },
  { value: "Final Year", label: "B.E. Student" },
  { value: "3+", label: "Real-World Projects" },
  { value: "42", label: "Global Certifications" }
];

export const CONTACT_INFO = {
  email: "kit27.cse306@gmail.com",
  phone: "+91 9363499428",
  location: "Coimbatore, Tamil Nadu",
  linkedin: "https://linkedin.com/in/sandeep-kumar-j", // actual url or profile
  linkedinUser: "sandeep-kumar-j",
  github: "https://github.com/SandeepKumar1232005", // actual url
  githubUser: "SandeepKumar1232005"
};
