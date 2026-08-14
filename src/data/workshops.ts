export interface Workshop {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  mode: "Online" | "Offline" | "Hybrid";
  location: string;
  description: string;
  category: "ai" | "python" | "data" | "fullstack" | "career" | "technology";
  image: string;
  status: "upcoming" | "past";
  featured: boolean;
  registrationLink?: string;
  highlights: string[];
  targetAudience: string;
}

export const workshops: Workshop[] = [
  {
    id: "1",
    slug: "intro-to-ai-tools-2025",
    title: "Introduction to AI Tools for Professionals",
    date: "2026-09-15",
    time: "10:00 AM – 1:00 PM",
    duration: "3 Hours",
    mode: "Online",
    location: "Online via Google Meet",
    description: "A hands-on workshop exploring the most powerful AI tools available today and how professionals can use them to accelerate their work. Covers ChatGPT, Gemini, Copilot and more.",
    category: "ai",
    image: "/images/workshops/ai-tools.jpg",
    status: "upcoming",
    featured: true,
    highlights: [
      "Live demonstrations of top AI tools",
      "Prompt engineering techniques",
      "Real-world use cases and workflows",
      "Q&A with expert"
    ],
    targetAudience: "Students, graduates and working professionals"
  },
  {
    id: "2",
    slug: "python-data-bootcamp",
    title: "Python & Data Science Bootcamp",
    date: "2026-09-28",
    time: "9:00 AM – 5:00 PM",
    duration: "Full Day",
    mode: "Offline",
    location: "Nexify Institute — [Address Placeholder]",
    description: "An intensive one-day bootcamp covering Python fundamentals and an introduction to data science. Participants will work on real datasets and build a mini project by the end of the day.",
    category: "python",
    image: "/images/workshops/python-bootcamp.jpg",
    status: "upcoming",
    featured: false,
    highlights: [
      "Python from scratch to data analysis",
      "Hands-on exercises with real data",
      "Build a mini analytics project",
      "Certificate of participation"
    ],
    targetAudience: "Beginners with no prior programming experience"
  },
  {
    id: "3",
    slug: "career-ready-seminar",
    title: "Career Ready: Tech Skills That Get You Hired",
    date: "2026-10-05",
    time: "2:00 PM – 5:00 PM",
    duration: "3 Hours",
    mode: "Hybrid",
    location: "Nexify Institute + Online",
    description: "A practical career seminar covering the skills that technology employers look for, how to build a strong portfolio, and how to approach job applications in the modern tech market.",
    category: "career",
    image: "/images/workshops/career-seminar.jpg",
    status: "upcoming",
    featured: true,
    highlights: [
      "What employers really want",
      "Building a portfolio that stands out",
      "Resume and LinkedIn tips",
      "Live Q&A with industry professionals"
    ],
    targetAudience: "Final year students and recent graduates"
  },
  {
    id: "4",
    slug: "web-dev-fundamentals-workshop",
    title: "Web Development Fundamentals Workshop",
    date: "2026-08-10",
    time: "10:00 AM – 1:00 PM",
    duration: "3 Hours",
    mode: "Online",
    location: "Online via Zoom",
    description: "An introductory workshop on web development covering HTML, CSS and JavaScript basics. Participants will build a simple webpage by the end of the session.",
    category: "fullstack",
    image: "/images/workshops/web-fundamentals.jpg",
    status: "past",
    featured: false,
    highlights: [
      "Build your first webpage from scratch",
      "Understanding HTML structure",
      "CSS styling basics",
      "JavaScript fundamentals"
    ],
    targetAudience: "Complete beginners interested in web development"
  },
  {
    id: "5",
    slug: "power-bi-dashboard-workshop",
    title: "Power BI Dashboard Workshop",
    date: "2026-07-20",
    time: "10:00 AM – 2:00 PM",
    duration: "4 Hours",
    mode: "Online",
    location: "Online via Google Meet",
    description: "A focused workshop on creating professional business dashboards using Microsoft Power BI. Participants worked with a real sales dataset to build an interactive dashboard.",
    category: "data",
    image: "/images/workshops/power-bi.jpg",
    status: "past",
    featured: false,
    highlights: [
      "Power BI interface walkthrough",
      "Data transformation with Power Query",
      "Creating interactive visuals",
      "Publishing and sharing dashboards"
    ],
    targetAudience: "Students and professionals working with business data"
  }
];

export const getUpcomingWorkshops = (): Workshop[] => {
  return workshops.filter(w => w.status === "upcoming");
};

export const getPastWorkshops = (): Workshop[] => {
  return workshops.filter(w => w.status === "past");
};

export const getFeaturedWorkshop = (): Workshop | undefined => {
  return workshops.find(w => w.featured && w.status === "upcoming");
};
