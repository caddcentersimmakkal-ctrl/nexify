export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: "python" | "java" | "web" | "ai" | "data" | "uiux";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  courseSlug?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ai-interview-simulator",
    title: "AI Interview Simulator",
    description: "An AI-powered interview practice application that generates role-specific questions, evaluates answers and provides detailed feedback to help users prepare for technical interviews.",
    technologies: ["Python", "OpenAI API", "LangChain", "FastAPI", "React"],
    category: "ai",
    difficulty: "Advanced",
    image: "/images/projects/ai-interview.jpg",
    featured: true,
    courseSlug: "python-ai-automation"
  },
  {
    id: "2",
    slug: "sales-analytics-dashboard",
    title: "Sales Analytics Dashboard",
    description: "An interactive business intelligence dashboard built with Power BI that visualises sales performance, regional trends, and product metrics from a real-world sales dataset.",
    technologies: ["Power BI", "Excel", "SQL", "Power Query", "DAX"],
    category: "data",
    difficulty: "Intermediate",
    image: "/images/projects/sales-dashboard.jpg",
    featured: true,
    courseSlug: "data-analytics-power-bi"
  },
  {
    id: "3",
    slug: "ecommerce-application",
    title: "E-Commerce Application",
    description: "A full-stack e-commerce platform with product listings, shopping cart, user authentication, payment integration and an admin panel for managing products and orders.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "web",
    difficulty: "Advanced",
    image: "/images/projects/ecommerce.jpg",
    featured: true,
    courseSlug: "full-stack-mern"
  },
  {
    id: "4",
    slug: "student-management-system",
    title: "Student Management System",
    description: "A comprehensive web application for managing student records, attendance, grades and course enrollments. Built with Django and featuring a clean admin interface.",
    technologies: ["Python", "Django", "PostgreSQL", "React", "Bootstrap"],
    category: "python",
    difficulty: "Intermediate",
    image: "/images/projects/student-management.jpg",
    featured: true,
    courseSlug: "full-stack-python"
  },
  {
    id: "5",
    slug: "ai-productivity-assistant",
    title: "AI Productivity Assistant",
    description: "A personal productivity tool that uses AI to help users manage tasks, summarise documents, draft emails and plan their day more effectively.",
    technologies: ["Python", "OpenAI API", "Streamlit", "LangChain"],
    category: "ai",
    difficulty: "Intermediate",
    image: "/images/projects/ai-assistant.jpg",
    featured: true,
    courseSlug: "python-ai-automation"
  },
  {
    id: "6",
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills and experience. Features smooth animations, dark mode and a contact form.",
    technologies: ["React", "CSS", "Framer Motion", "EmailJS"],
    category: "web",
    difficulty: "Beginner",
    image: "/images/projects/portfolio.jpg",
    featured: false,
    courseSlug: "full-stack-mern"
  },
  {
    id: "7",
    slug: "banking-application",
    title: "Banking Application",
    description: "A secure Java-based banking application with account management, fund transfers, transaction history and role-based access for customers and bank staff.",
    technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "React"],
    category: "java",
    difficulty: "Advanced",
    image: "/images/projects/banking-app.jpg",
    featured: false,
    courseSlug: "full-stack-java"
  },
  {
    id: "8",
    slug: "mobile-app-design",
    title: "Mobile App UI Design",
    description: "A complete UI/UX design for a fitness tracking mobile application including user research, wireframes, high-fidelity mockups and interactive prototypes.",
    technologies: ["Figma", "FigJam", "Principle"],
    category: "uiux",
    difficulty: "Intermediate",
    image: "/images/projects/mobile-design.jpg",
    featured: false,
    courseSlug: "ui-ux-design-figma"
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectsByCategory = (category: Project["category"] | "all"): Project[] => {
  if (category === "all") return projects;
  return projects.filter(p => p.category === category);
};
