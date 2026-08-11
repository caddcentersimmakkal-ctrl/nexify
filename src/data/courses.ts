export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: "programming" | "development" | "data" | "ai" | "design" | "productivity";
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  durationWeeks: number;
  hours: string;
  mode: string;
  batchOptions: string[];
  technologies: string[];
  projects: string[];
  careerPaths: string[];
  learningOutcomes: string[];
  prerequisites: string[];
  whoIsItFor: string[];
  syllabus: CourseModule[];
  faqs: { question: string; answer: string }[];
  featured: boolean;
  color: string;
  icon: string;
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "programming-fundamentals",
    name: "Programming Fundamentals",
    shortDescription: "Master the core concepts of programming and build a strong foundation for any technology career.",
    fullDescription: "A comprehensive introduction to programming that covers logic building, algorithms, and problem-solving using multiple programming languages. Perfect for complete beginners.",
    category: "programming",
    level: "beginner",
    duration: "2 Months",
    durationWeeks: 8,
    hours: "60+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["C", "C++", "Python", "Git"],
    projects: ["Calculator Application", "Student Grade System", "Basic To-Do App"],
    careerPaths: ["Software Developer", "Python Developer", "Full Stack Developer"],
    learningOutcomes: [
      "Understand core programming concepts and paradigms",
      "Write clean, structured code in C and C++",
      "Apply logic and algorithms to solve problems",
      "Understand OOP fundamentals",
      "Use Git for basic version control"
    ],
    prerequisites: ["No prior programming experience required", "Basic computer skills"],
    whoIsItFor: ["Complete beginners", "College students", "School leavers exploring tech", "Non-tech professionals curious about coding"],
    syllabus: [
      {
        title: "Module 1: Introduction to Programming",
        topics: ["What is programming?", "How computers work", "Setting up your environment", "Writing your first program"]
      },
      {
        title: "Module 2: Core Concepts with C",
        topics: ["Variables and data types", "Operators and expressions", "Control flow (if/else, loops)", "Functions and scope"]
      },
      {
        title: "Module 3: Object-Oriented Programming with C++",
        topics: ["Classes and objects", "Inheritance and polymorphism", "Encapsulation and abstraction", "Basic data structures"]
      },
      {
        title: "Module 4: Introduction to Python",
        topics: ["Python syntax and basics", "Lists, tuples, dictionaries", "File handling", "Introduction to modules"]
      },
      {
        title: "Module 5: Problem Solving & Projects",
        topics: ["Algorithm thinking", "Debugging techniques", "Mini project development", "Code review practices"]
      }
    ],
    faqs: [
      { question: "Do I need a laptop?", answer: "Yes, a laptop or desktop with at least 8GB RAM is recommended." },
      { question: "Will I get a certificate?", answer: "A course completion certificate will be provided upon successful completion." },
      { question: "Is this course suitable for school students?", answer: "Yes, this course is designed to be accessible from Class 11 onwards." }
    ],
    featured: true,
    color: "from-blue-600 to-blue-400",
    icon: "Code"
  },
  {
    id: "2",
    slug: "python-ai-automation",
    name: "Python for AI & Automation",
    shortDescription: "Learn Python deeply and apply it to AI, machine learning and automation workflows.",
    fullDescription: "A practical, project-driven Python course that takes you from fundamentals to advanced topics including AI APIs, automation with libraries, and building AI-powered tools.",
    category: "ai",
    level: "intermediate",
    duration: "3 Months",
    durationWeeks: 12,
    hours: "90+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["Python", "NumPy", "Pandas", "OpenAI API", "LangChain", "Selenium", "Git"],
    projects: ["AI Interview Simulator", "Automated Report Generator", "AI Productivity Assistant", "Data Scraper & Analyser"],
    careerPaths: ["Python Developer", "AI Developer", "Automation Specialist", "Data Analyst"],
    learningOutcomes: [
      "Write advanced Python code using modern patterns",
      "Build AI-powered applications using LLM APIs",
      "Automate workflows and processes",
      "Work with data using Pandas and NumPy",
      "Integrate external APIs and services"
    ],
    prerequisites: ["Basic programming knowledge", "Familiarity with any programming language is helpful"],
    whoIsItFor: ["Students with basic coding background", "Graduates looking to specialise in Python", "Working professionals wanting to automate their work", "Aspiring AI developers"],
    syllabus: [
      {
        title: "Module 1: Python Mastery",
        topics: ["Advanced data types", "List comprehensions", "Decorators and generators", "File I/O and error handling"]
      },
      {
        title: "Module 2: Data Processing",
        topics: ["NumPy arrays and operations", "Pandas DataFrames", "Data cleaning and transformation", "Visualisation basics"]
      },
      {
        title: "Module 3: AI & LLM Integration",
        topics: ["Introduction to AI APIs", "OpenAI & Gemini API", "Prompt engineering", "Building AI tools with LangChain"]
      },
      {
        title: "Module 4: Automation",
        topics: ["Web scraping with BeautifulSoup", "Browser automation with Selenium", "Task scheduling", "Email and file automation"]
      },
      {
        title: "Module 5: Projects",
        topics: ["AI Interview Simulator", "Automated Report Generator", "AI Productivity Assistant", "Final project review"]
      }
    ],
    faqs: [
      { question: "Can I take this if I only know basic Python?", answer: "Yes, the course begins with advanced Python before moving to AI and automation." },
      { question: "Will I build real projects?", answer: "Yes, you will build 4 complete projects included in the curriculum." }
    ],
    featured: true,
    color: "from-violet-600 to-violet-400",
    icon: "Bot"
  },
  {
    id: "3",
    slug: "data-analytics-power-bi",
    name: "Data Analytics with Power BI",
    shortDescription: "Transform raw data into actionable business insights using Excel, SQL and Power BI.",
    fullDescription: "A career-focused data analytics course designed to teach data cleaning, analysis, visualisation and dashboard creation. Learn the tools that real businesses use every day.",
    category: "data",
    level: "beginner",
    duration: "2 Months",
    durationWeeks: 8,
    hours: "70+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["Excel", "SQL", "Power BI", "Python Basics", "Power Query"],
    projects: ["Sales Analytics Dashboard", "Business Performance Report", "HR Analytics Dashboard"],
    careerPaths: ["Data Analyst", "Business Analyst", "Reporting Analyst", "BI Developer"],
    learningOutcomes: [
      "Clean and prepare data using Excel and Power Query",
      "Write SQL queries to extract insights from databases",
      "Build professional Power BI dashboards",
      "Use DAX for calculated measures and KPIs",
      "Present data stories to business stakeholders"
    ],
    prerequisites: ["Basic computer skills", "Familiarity with Excel is helpful but not required"],
    whoIsItFor: ["Commerce and business students", "Graduates seeking data roles", "Working professionals in operations, finance or marketing", "Anyone who works with data regularly"],
    syllabus: [
      {
        title: "Module 1: Data Fundamentals & Excel",
        topics: ["Data types and structures", "Excel formulas and functions", "Pivot tables and charts", "Data cleaning techniques"]
      },
      {
        title: "Module 2: SQL for Data Analysis",
        topics: ["Relational database concepts", "SELECT, WHERE, GROUP BY", "JOINs and subqueries", "Aggregate functions"]
      },
      {
        title: "Module 3: Power BI Essentials",
        topics: ["Power BI interface and workflow", "Importing and transforming data", "Creating visuals and reports", "Power Query editor"]
      },
      {
        title: "Module 4: Advanced Power BI",
        topics: ["DAX fundamentals", "Calculated columns and measures", "KPI cards and slicers", "Dashboard design best practices"]
      },
      {
        title: "Module 5: Projects & Presentation",
        topics: ["Sales Analytics Dashboard", "Business Performance Report", "HR Analytics Dashboard", "Presenting insights to stakeholders"]
      }
    ],
    faqs: [
      { question: "Do I need a statistics background?", answer: "No, this course teaches data analysis practically without requiring a statistics degree." },
      { question: "Is Power BI available for free?", answer: "Yes, Power BI Desktop is free to download and will be used throughout the course." }
    ],
    featured: true,
    color: "from-amber-500 to-orange-400",
    icon: "BarChart3"
  },
  {
    id: "4",
    slug: "full-stack-mern",
    name: "Full Stack MERN Development",
    shortDescription: "Build complete web applications using MongoDB, Express, React and Node.js.",
    fullDescription: "A comprehensive full stack development course covering the entire MERN stack. You will learn to build, deploy and manage production-ready web applications from scratch.",
    category: "development",
    level: "intermediate",
    duration: "5 Months",
    durationWeeks: 20,
    hours: "150+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "GitHub", "REST APIs"],
    projects: ["E-Commerce Application", "Social Media App", "Task Manager", "Blog Platform"],
    careerPaths: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "MERN Developer"],
    learningOutcomes: [
      "Build responsive frontends with React",
      "Create RESTful APIs with Node.js and Express",
      "Design and manage MongoDB databases",
      "Implement user authentication and authorisation",
      "Deploy applications to production"
    ],
    prerequisites: ["Basic HTML/CSS knowledge", "Basic understanding of JavaScript", "Familiarity with programming concepts"],
    whoIsItFor: ["CS/IT students", "Graduates looking for developer roles", "Professionals switching to web development", "Freelancers wanting to build complete web apps"],
    syllabus: [
      {
        title: "Module 1: Web Fundamentals",
        topics: ["HTML5 semantic structure", "CSS3 and Flexbox/Grid", "JavaScript ES6+", "DOM manipulation"]
      },
      {
        title: "Module 2: React.js",
        topics: ["Components and props", "State management and hooks", "React Router", "Context API and Redux basics"]
      },
      {
        title: "Module 3: Node.js & Express",
        topics: ["Node.js fundamentals", "Express routing and middleware", "Building RESTful APIs", "Error handling"]
      },
      {
        title: "Module 4: MongoDB & Authentication",
        topics: ["MongoDB CRUD operations", "Mongoose ODM", "JWT authentication", "Role-based access control"]
      },
      {
        title: "Module 5: Projects & Deployment",
        topics: ["E-Commerce Application", "Deployment to Vercel/Render", "Performance optimisation", "Portfolio preparation"]
      }
    ],
    faqs: [
      { question: "How much JavaScript do I need to know?", answer: "Basics are helpful but the course covers JavaScript thoroughly before moving to React." },
      { question: "Will I be able to build my own projects after this?", answer: "Yes, you will have the skills and 4 portfolio projects to demonstrate your abilities." }
    ],
    featured: true,
    color: "from-emerald-600 to-teal-400",
    icon: "Globe"
  },
  {
    id: "5",
    slug: "full-stack-python",
    name: "Full Stack Python Development",
    shortDescription: "Build scalable web applications with Python, Django and modern frontend technologies.",
    fullDescription: "Learn to build complete web applications using Python as the backbone. This course covers Django, REST APIs, database design and frontend integration.",
    category: "development",
    level: "intermediate",
    duration: "4 Months",
    durationWeeks: 16,
    hours: "120+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "React", "Git", "GitHub", "REST APIs"],
    projects: ["E-Commerce Platform", "Student Management System", "Blog Application", "API Service"],
    careerPaths: ["Full Stack Python Developer", "Django Developer", "Backend Developer", "Software Engineer"],
    learningOutcomes: [
      "Build web applications using Django framework",
      "Design relational databases with PostgreSQL",
      "Create REST APIs using Django REST Framework",
      "Integrate React frontends with Python backends",
      "Deploy Django applications"
    ],
    prerequisites: ["Basic Python knowledge", "Understanding of HTML/CSS", "Basic programming concepts"],
    whoIsItFor: ["Python enthusiasts", "CS/IT graduates", "Backend-focused developers", "Professionals wanting to build web applications with Python"],
    syllabus: [
      {
        title: "Module 1: Python Advanced Concepts",
        topics: ["Advanced OOP in Python", "File handling and modules", "Virtual environments", "Package management"]
      },
      {
        title: "Module 2: Django Framework",
        topics: ["MVT architecture", "URL routing and views", "Templates and static files", "Django ORM and models"]
      },
      {
        title: "Module 3: REST APIs",
        topics: ["Django REST Framework", "Serializers and viewsets", "API authentication", "API documentation"]
      },
      {
        title: "Module 4: Database & Frontend Integration",
        topics: ["PostgreSQL setup and operations", "Database migrations", "React integration", "Deployment basics"]
      },
      {
        title: "Module 5: Projects",
        topics: ["E-Commerce Platform", "Student Management System", "Final project", "Portfolio review"]
      }
    ],
    faqs: [
      { question: "Is this different from the Python for AI course?", answer: "Yes, this course focuses on web development with Django, while the AI course focuses on AI and automation." },
      { question: "Which databases are covered?", answer: "PostgreSQL is the primary database, with SQLite used for development." }
    ],
    featured: true,
    color: "from-blue-500 to-cyan-400",
    icon: "Server"
  },
  {
    id: "6",
    slug: "full-stack-java",
    name: "Full Stack Java Development",
    shortDescription: "Master enterprise-grade Java development with Spring Boot and modern web technologies.",
    fullDescription: "A rigorous full stack Java course covering Core Java, Spring Boot, REST APIs and frontend development. Designed for those targeting enterprise and large-scale development roles.",
    category: "development",
    level: "intermediate",
    duration: "5 Months",
    durationWeeks: 20,
    hours: "160+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "React", "Git", "Maven"],
    projects: ["Banking Application", "E-Commerce Backend", "Employee Management System", "REST API Service"],
    careerPaths: ["Java Developer", "Spring Boot Developer", "Full Stack Java Developer", "Backend Engineer"],
    learningOutcomes: [
      "Write robust Java applications using OOP principles",
      "Build enterprise APIs with Spring Boot",
      "Design relational databases with MySQL and Hibernate",
      "Understand the Spring ecosystem",
      "Build and integrate frontend applications"
    ],
    prerequisites: ["Basic programming knowledge in any language", "Understanding of OOP concepts is helpful"],
    whoIsItFor: ["CS/IT students", "Graduates targeting enterprise tech roles", "Developers switching to Java", "Professionals aiming for backend roles"],
    syllabus: [
      {
        title: "Module 1: Core Java",
        topics: ["Java syntax and OOP", "Collections framework", "Exception handling", "Multithreading basics"]
      },
      {
        title: "Module 2: Spring Framework",
        topics: ["Spring IoC and DI", "Spring MVC", "Spring Boot setup", "Spring Security basics"]
      },
      {
        title: "Module 3: REST APIs & Data",
        topics: ["Building RESTful APIs", "Hibernate ORM", "JPA and MySQL", "API testing with Postman"]
      },
      {
        title: "Module 4: Frontend & Integration",
        topics: ["React basics", "Connecting React to Spring Boot", "CORS handling", "Full stack project structure"]
      },
      {
        title: "Module 5: Projects & Deployment",
        topics: ["Banking Application", "E-Commerce Backend", "Maven build system", "Deployment to cloud"]
      }
    ],
    faqs: [
      { question: "Is Java a good career choice?", answer: "Java remains one of the most in-demand programming languages, especially in enterprise and backend development." },
      { question: "Do I need Java experience to start?", answer: "No, the course begins with Core Java fundamentals." }
    ],
    featured: true,
    color: "from-red-600 to-orange-500",
    icon: "Coffee"
  },
  {
    id: "7",
    slug: "ui-ux-design-figma",
    name: "UI/UX Design with Figma",
    shortDescription: "Learn user-centred design, create professional interfaces and build a strong design portfolio.",
    fullDescription: "A practical UI/UX design course covering the entire design process from user research to high-fidelity prototypes. Learn Figma, design systems and how to collaborate with development teams.",
    category: "design",
    level: "beginner",
    duration: "2 Months",
    durationWeeks: 8,
    hours: "65+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["Figma", "FigJam", "Adobe XD", "Canva Pro"],
    projects: ["Mobile App Design", "Website Redesign", "Design System", "Portfolio Website"],
    careerPaths: ["UI/UX Designer", "Product Designer", "Visual Designer", "Interaction Designer"],
    learningOutcomes: [
      "Apply user-centred design principles",
      "Create wireframes, mockups and prototypes in Figma",
      "Build design systems and component libraries",
      "Conduct user research and usability testing",
      "Present design decisions with confidence"
    ],
    prerequisites: ["No design experience required", "Basic computer skills", "Interest in visual design and user experience"],
    whoIsItFor: ["Creative individuals exploring design", "Developers wanting to improve design skills", "Students in creative or tech fields", "Professionals wanting to switch to design roles"],
    syllabus: [
      {
        title: "Module 1: Design Foundations",
        topics: ["Principles of design (colour, typography, spacing)", "Introduction to UX thinking", "Understanding users and their needs", "Design inspiration and research"]
      },
      {
        title: "Module 2: Figma Essentials",
        topics: ["Figma interface and tools", "Frames, shapes and components", "Auto layout and constraints", "Text styles and colour styles"]
      },
      {
        title: "Module 3: UX Process",
        topics: ["User research methods", "Information architecture", "Wireframing and low-fidelity design", "User flows and journeys"]
      },
      {
        title: "Module 4: High-Fidelity Design & Prototyping",
        topics: ["Creating design systems", "High-fidelity mockups", "Interactive prototypes", "Usability testing basics"]
      },
      {
        title: "Module 5: Portfolio & Handoff",
        topics: ["Design portfolio creation", "Developer handoff with Figma", "Presenting your work", "Industry best practices"]
      }
    ],
    faqs: [
      { question: "Do I need design software before starting?", answer: "Figma is free to use and will be used throughout the course. No other software is required initially." },
      { question: "Can I get design jobs without a degree?", answer: "Yes, UI/UX design is a portfolio-based field. Strong projects matter more than formal qualifications." }
    ],
    featured: true,
    color: "from-pink-600 to-rose-400",
    icon: "Palette"
  },
  {
    id: "8",
    slug: "ai-productivity-specialist",
    name: "AI Productivity Specialist",
    shortDescription: "Master modern AI tools to dramatically improve your productivity and professional output.",
    fullDescription: "A practical course focused on using AI tools in real-world work scenarios. Learn to leverage ChatGPT, Gemini, Copilot and other tools to work smarter and faster.",
    category: "productivity",
    level: "beginner",
    duration: "1 Month",
    durationWeeks: 4,
    hours: "40+ Hours",
    mode: "Online / Offline",
    batchOptions: ["Weekday Batch", "Weekend Batch"],
    technologies: ["ChatGPT", "Gemini", "Microsoft Copilot", "Notion AI", "Canva AI", "Midjourney"],
    projects: ["AI-Powered Presentation", "Automated Content Calendar", "AI Research Report"],
    careerPaths: ["AI Productivity Specialist", "Digital Content Creator", "Knowledge Worker", "Prompt Engineer"],
    learningOutcomes: [
      "Use AI tools effectively for professional tasks",
      "Write effective prompts to get quality outputs",
      "Automate repetitive work using AI",
      "Create content, reports and presentations with AI assistance",
      "Stay current with the rapidly evolving AI landscape"
    ],
    prerequisites: ["No technical background required", "Basic computer and internet skills"],
    whoIsItFor: ["Working professionals", "Students wanting to enhance productivity", "Entrepreneurs and freelancers", "Anyone who wants to work smarter with AI"],
    syllabus: [
      {
        title: "Module 1: Introduction to AI Tools",
        topics: ["The AI landscape in 2025", "ChatGPT, Gemini, Copilot overview", "AI safety and responsible use", "Setting up your AI workspace"]
      },
      {
        title: "Module 2: Prompt Engineering",
        topics: ["Writing effective prompts", "Prompt patterns and frameworks", "Context and role prompting", "Getting consistent results"]
      },
      {
        title: "Module 3: Productivity Applications",
        topics: ["Writing and editing with AI", "Research and summarisation", "Data analysis with AI", "Meeting notes and summaries"]
      },
      {
        title: "Module 4: Creative AI Tools",
        topics: ["AI image generation", "Presentation creation", "Content planning and scheduling", "AI for design and marketing"]
      }
    ],
    faqs: [
      { question: "Are AI tools free?", answer: "Many AI tools have free tiers. The course covers both free and premium options." },
      { question: "Is this useful for non-tech people?", answer: "Yes, this course is specifically designed for people without a technical background." }
    ],
    featured: true,
    color: "from-purple-600 to-indigo-500",
    icon: "Sparkles"
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(c => c.slug === slug);
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter(c => c.featured);
};

export const getCoursesByCategory = (category: Course["category"]): Course[] => {
  return courses.filter(c => c.category === category);
};
