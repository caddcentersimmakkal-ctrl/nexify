export interface Trainer {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  experience: string;
  bio: string;
  avatar: string;
  linkedin?: string;
}

export const trainers: Trainer[] = [
  {
    id: "1",
    name: "Trainer Name Placeholder",
    role: "Lead Instructor — Full Stack Development",
    expertise: ["JavaScript", "React", "Node.js", "MongoDB", "System Design"],
    experience: "5+ Years of Industry Experience",
    bio: "An experienced full stack developer who has worked on large-scale web applications. Passionate about teaching practical, project-based development skills. [Trainer bio to be updated with actual profile.]",
    avatar: "/images/trainers/placeholder-1.jpg",
    linkedin: "#"
  },
  {
    id: "2",
    name: "Trainer Name Placeholder",
    role: "Senior Instructor — Python & AI",
    expertise: ["Python", "Machine Learning", "AI APIs", "Data Science", "Automation"],
    experience: "6+ Years of Industry Experience",
    bio: "A Python specialist with deep expertise in AI applications and data engineering. Has delivered training sessions and corporate workshops on Python and AI technologies. [Trainer bio to be updated with actual profile.]",
    avatar: "/images/trainers/placeholder-2.jpg",
    linkedin: "#"
  },
  {
    id: "3",
    name: "Trainer Name Placeholder",
    role: "Instructor — Data Analytics",
    expertise: ["Power BI", "SQL", "Excel", "Data Visualisation", "Business Intelligence"],
    experience: "4+ Years of Industry Experience",
    bio: "A data professional with experience in business intelligence and analytics. Specialises in making data accessible and actionable for businesses and learners alike. [Trainer bio to be updated with actual profile.]",
    avatar: "/images/trainers/placeholder-3.jpg",
    linkedin: "#"
  },
  {
    id: "4",
    name: "Trainer Name Placeholder",
    role: "Instructor — UI/UX Design",
    expertise: ["Figma", "User Research", "Design Systems", "Prototyping", "Visual Design"],
    experience: "4+ Years of Industry Experience",
    bio: "A professional UI/UX designer who has worked with startups and established companies to create user-centred digital products. Brings real industry design experience into every session. [Trainer bio to be updated with actual profile.]",
    avatar: "/images/trainers/placeholder-4.jpg",
    linkedin: "#"
  }
];
