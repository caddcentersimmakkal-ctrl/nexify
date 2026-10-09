export interface Testimonial {
  id: string;
  name: string;
  course: string;
  courseSlug: string;
  testimonial: string;
  rating: number;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arjun Mehta",
    course: "Full Stack MERN Development",
    courseSlug: "full-stack-mern",
    testimonial: "The MERN course at Nexify was extremely hands-on. I built 4 real projects that I was able to put on my portfolio immediately. The instruction quality and project-based approach made a huge difference in how I understood web development.",
    rating: 5,
    role: "Computer Science Student",
    avatar: "/images/testimonials/placeholder-1.jpg"
  },
  {
    id: "2",
    name: "Priya Sharma",
    course: "Data Analytics with Power BI",
    courseSlug: "data-analytics-power-bi",
    testimonial: "I had no data background before this course. The way complex topics are broken down into practical exercises made it approachable. The Power BI dashboards I built during the course gave me the confidence to tackle real business data problems.",
    rating: 5,
    role: "Commerce Graduate",
    avatar: "/images/testimonials/placeholder-2.jpg"
  },
  {
    id: "3",
    name: "Rahul Verma",
    course: "Python for AI & Automation",
    courseSlug: "python-ai-automation",
    testimonial: "The Python AI course genuinely changed how I approach my work. Learning to build tools with OpenAI APIs and automating repetitive tasks gave me skills that I immediately applied in practical scenarios. The projects were challenging and rewarding.",
    rating: 5,
    role: "Working Professional",
    avatar: "/images/testimonials/placeholder-3.jpg"
  },
  {
    id: "4",
    name: "Sneha Patel",
    course: "UI/UX Design with Figma",
    courseSlug: "ui-ux-design-figma",
    testimonial: "Nexify's UI/UX course was exactly what I needed to transition into design. The structured curriculum covering user research to high-fidelity prototypes gave me a complete understanding of the design process. My portfolio is now something I'm genuinely proud of.",
    rating: 5,
    role: "Career Switcher",
    avatar: "/images/testimonials/placeholder-4.jpg"
  }
];

// Note: Testimonials shown are representative placeholder content.
// They are not verified claims and should be replaced with actual student feedback.
