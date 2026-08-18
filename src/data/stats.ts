export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    id: "1",
    value: "5+",
    label: "Career Programs",
    description: "Industry-focused technology courses"
  },
  {
    id: "2",
    value: "10+",
    label: "Projects & Assignments",
    description: "Real-world portfolio projects"
  },
  {
    id: "3",
    value: "50+",
    label: "Learners",
    description: "Students and professionals trained"
  },
  {
    id: "4",
    value: "100%",
    label: "Practical Learning",
    description: "Industry-relevant curriculum"
  }
];

export interface Technology {
  name: string;
  category: "programming" | "web" | "data" | "ai" | "design" | "tools" | "career";
}

export const technologies: Technology[] = [
  { name: "Python", category: "programming" },
  { name: "Java", category: "programming" },
  { name: "C", category: "programming" },
  { name: "C++", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "HTML5", category: "web" },
  { name: "CSS3", category: "web" },
  { name: "React", category: "web" },
  { name: "Node.js", category: "web" },
  { name: "Django", category: "web" },
  { name: "Spring Boot", category: "web" },
  { name: "MongoDB", category: "data" },
  { name: "SQL", category: "data" },
  { name: "PostgreSQL", category: "data" },
  { name: "Power BI", category: "data" },
  { name: "Excel", category: "data" },
  { name: "Generative AI", category: "ai" },
  { name: "OpenAI API", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "Figma", category: "design" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Communication", category: "career" },
  { name: "Resume Building", category: "career" },
  { name: "LinkedIn Optimization", category: "career" },
  { name: "Quantitative Aptitude", category: "career" },
  { name: "Logical Reasoning", category: "career" },
  { name: "Verbal Ability", category: "career" },
  { name: "Interview Techniques", category: "career" },
  { name: "Personal Branding", category: "career" },
  { name: "Mock Interviews", category: "career" }
];

export const techCategories = [
  { id: "programming", label: "Programming" },
  { id: "web", label: "Web Development" },
  { id: "data", label: "Data" },
  { id: "ai", label: "AI" },
  { id: "design", label: "Design" },
  { id: "tools", label: "Tools" },
  { id: "career", label: "Career Readiness" }
];

export interface CareerPath {
  title: string;
  description: string;
  skills: string[];
  icon: string;
  courseSlug?: string;
}

export const careerPaths: CareerPath[] = [
  {
    title: "Software Developer",
    description: "Build applications and software for businesses and consumers.",
    skills: ["Python", "Java", "JavaScript", "Git"],
    icon: "Code",
    courseSlug: "programming-fundamentals"
  },
  {
    title: "Full Stack Developer",
    description: "Work on both frontend and backend to deliver complete web applications.",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
    icon: "Globe",
    courseSlug: "full-stack-mern"
  },
  {
    title: "Python Developer",
    description: "Specialise in Python for web development, automation and AI applications.",
    skills: ["Python", "Django", "FastAPI", "Automation"],
    icon: "Terminal",
    courseSlug: "python-ai-automation"
  },
  {
    title: "Data Analyst",
    description: "Transform raw data into actionable business insights and reports.",
    skills: ["Excel", "SQL", "Power BI", "Data Visualisation"],
    icon: "BarChart3",
    courseSlug: "data-analytics-power-bi"
  },
  {
    title: "UI/UX Designer",
    description: "Design intuitive and beautiful digital experiences for users.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    icon: "Palette",
    courseSlug: "ui-ux-design-figma"
  },
  {
    title: "AI Developer",
    description: "Build AI-powered tools and applications using modern LLM frameworks.",
    skills: ["Python", "OpenAI API", "LangChain", "Prompt Engineering"],
    icon: "Bot",
    courseSlug: "python-ai-automation"
  },
  {
    title: "Java Developer",
    description: "Build enterprise-grade applications using the Java ecosystem.",
    skills: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    icon: "Coffee",
    courseSlug: "full-stack-java"
  },
  {
    title: "Automation Specialist",
    description: "Automate workflows, processes and tasks to increase efficiency.",
    skills: ["Python", "Selenium", "APIs", "Task Scheduling"],
    icon: "Zap",
    courseSlug: "python-ai-automation"
  }
];
