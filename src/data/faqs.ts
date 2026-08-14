export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "courses" | "payment" | "career" | "workshops";
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What makes Nexify different from other institutes?",
    answer: "Nexify focuses on practical, project-based learning rather than theory-only instruction. Every course includes real-world projects, industry-relevant tools and career guidance to help you become genuinely job-ready.",
    category: "general"
  },
  {
    id: "2",
    question: "Who are the courses designed for?",
    answer: "Our courses are designed for students, fresh graduates, career switchers and working professionals who want to build technology skills. Each course page specifies who it is best suited for.",
    category: "general"
  },
  {
    id: "3",
    question: "Are classes online or offline?",
    answer: "We offer both online and offline modes depending on the course and batch. Check the individual course page for available modes and batch options.",
    category: "courses"
  },
  {
    id: "4",
    question: "How long do courses typically last?",
    answer: "Course durations range from 1 month (short courses) to 5 months (comprehensive full stack programs). Each course page clearly displays the duration.",
    category: "courses"
  },
  {
    id: "5",
    question: "Will I receive a certificate?",
    answer: "A course completion certificate is provided upon successful completion of the course, including projects and assessments.",
    category: "courses"
  },
  {
    id: "6",
    question: "Do you offer placement guarantees?",
    answer: "We do not make guaranteed placement claims. We provide placement assistance and career guidance to eligible learners, including resume preparation, portfolio building, mock interviews and career counselling.",
    category: "career"
  },
  {
    id: "7",
    question: "What career support is included?",
    answer: "Career support includes resume building, portfolio development, mock interviews, technical practice sessions, LinkedIn profile guidance and career counselling.",
    category: "career"
  },
  {
    id: "8",
    question: "How can I enrol in a course?",
    answer: "You can enquire about a course by clicking 'Get Free Counselling' on any course page or the contact page. Our team will help you choose the right program and explain the enrollment process.",
    category: "courses"
  },
  {
    id: "9",
    question: "Can I attend a workshop without enrolling in a course?",
    answer: "Yes, workshops and seminars are open to all and can be attended independently without enrolling in a full course.",
    category: "workshops"
  },
  {
    id: "10",
    question: "Can Nexify conduct workshops at our college or organisation?",
    answer: "Yes, Nexify conducts workshops and seminars at colleges, universities and organisations. Please contact us through the enquiry form or call us directly to discuss your requirements.",
    category: "workshops"
  }
];

export const getFaqsByCategory = (category: FAQ["category"]): FAQ[] => {
  return faqs.filter(f => f.category === category);
};
