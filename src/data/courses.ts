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
  category: "programming" | "development" | "data" | "ai" | "design" | "productivity" | "career";
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
    slug: "certificate-programming-foundations-c-cpp",
    name: "Certificate in Programming Foundations: C & C++",
    shortDescription:
      "Build a strong programming foundation by mastering C programming, problem-solving, and object-oriented programming with C++.",

    fullDescription:
      "This beginner-friendly professional certificate is designed for students who want to start their software development journey. Learn structured programming in C, memory management, data structures, file handling, and transition into modern C++ with object-oriented programming, STL, templates, and exception handling through hands-on projects.",

    category: "programming",
    level: "beginner",
    duration: "1 Month",
    durationWeeks: 4,
    hours: "40 Hours",

    mode: "Online / Offline",

    batchOptions: [
      "Weekday Batch",
      "Weekend Batch"
      // "Fast Track Batch"
    ],

    technologies: [
      "C",
      "C++",
      "GCC",
      "Code::Blocks",
      "Visual Studio Code"
    ],

    projects: [
      "Scientific Calculator",
      "Student Management System",
      "Banking Management Application",
      "Text-Based Adventure Game",
      "Inventory Management System"
    ],

    careerPaths: [
      "C Programmer",
      "C++ Developer",
      "Software Developer",
      "Embedded Systems Programmer",
      "Game Development Beginner"
    ],

    learningOutcomes: [
      "Write structured programs using C programming",
      "Apply loops, conditions, functions, and recursion effectively",
      "Work with arrays, strings, pointers, and dynamic memory",
      "Create file-based applications using text and binary files",
      "Develop object-oriented applications with C++",
      "Implement inheritance, polymorphism, and abstraction",
      "Use STL containers, templates, and exception handling",
      "Build real-world console applications from scratch"
    ],

    prerequisites: [
      "No prior programming knowledge required",
      "Basic computer operating skills",
      "Laptop or desktop recommended"
    ],

    whoIsItFor: [
      "Engineering students",
      "Diploma students",
      "Computer science beginners",
      "School graduates entering IT",
      "Anyone starting a programming career"
    ],

    syllabus: [
      {
        title: "Module 1: Introduction to C Basics",
        topics: [
          "Evolution of C",
          "IDE Setup",
          "Structure of C Program",
          "Header Files & Tokens",
          "Keywords & Identifiers",
          "Data Types & Variables",
          "Operators"
        ]
      },
      {
        title: "Module 2: Control Flow & Decision Making",
        topics: [
          "if & if-else",
          "switch-case",
          "for Loop",
          "while Loop",
          "do-while Loop",
          "break, continue & goto"
        ]
      },
      {
        title: "Module 3: Functions & Modular Programming",
        topics: [
          "Function Declaration & Definition",
          "Function Prototypes",
          "Parameters",
          "Call by Value & Reference",
          "Scope Rules",
          "Recursion"
        ]
      },
      {
        title: "Module 4: Arrays & String Handling",
        topics: [
          "1D & 2D Arrays",
          "Array Operations",
          "Strings",
          "String Manipulation",
          "Standard String Library Functions"
        ]
      },
      {
        title: "Module 5: Pointers & Dynamic Memory",
        topics: [
          "Pointers & Memory Address",
          "Pointer Arithmetic",
          "Pointers to Arrays",
          "malloc(), calloc()",
          "realloc() & free()"
        ]
      },
      {
        title: "Module 6: Structures & File Handling",
        topics: [
          "Structures & Unions",
          "Nested Structures",
          "Arrays of Structures",
          "Text Files",
          "Binary Files",
          "File Read & Write"
        ]
      },
      {
        title: "Module 7: C++ & Object-Oriented Programming",
        topics: [
          "C vs C++",
          "cin & cout",
          "Classes & Objects",
          "Abstraction",
          "Encapsulation",
          "Inheritance",
          "Polymorphism"
        ]
      },
      {
        title: "Module 8: Constructors & Destructors",
        topics: [
          "Default Constructor",
          "Parameterized Constructor",
          "Copy Constructor",
          "Constructor Overloading",
          "Destructors",
          "Object Lifecycle"
        ]
      },
      {
        title: "Module 9: Inheritance & Polymorphism",
        topics: [
          "Single & Multiple Inheritance",
          "Multilevel & Hierarchical",
          "Function Overloading",
          "Operator Overloading",
          "Virtual Functions",
          "Abstract Classes"
        ]
      },
      {
        title: "Module 10: Templates & Exception Handling",
        topics: [
          "Function Templates",
          "Class Templates",
          "Generic Programming",
          "try, catch & throw",
          "Error Handling"
        ]
      },
      {
        title: "Module 11: STL & Modern C++",
        topics: [
          "vector",
          "list",
          "map",
          "set",
          "Iterators",
          "STL Algorithms",
          "unique_ptr & shared_ptr"
        ]
      },
      {
        title: "Practical Lab & Capstone Project",
        topics: [
          "30 Programming Exercises",
          "10 Debugging Challenges",
          "5 Algorithm Problems",
          "Banking Application",
          "Student Management System",
          "Text-Based Game Development"
        ]
      }
    ],

    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer:
          "No. This course starts from the fundamentals and is designed for complete beginners."
      },
      {
        question: "Will I learn both C and C++?",
        answer:
          "Yes. You'll begin with C programming and gradually transition into object-oriented programming using C++."
      },
      {
        question: "Are projects included?",
        answer:
          "Yes. The course includes multiple mini projects and one capstone project to build your portfolio."
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. You'll receive the Nexify Certificate in Programming Foundations: C & C++ after successful completion."
      }
    ],

    featured: true,
    color: "from-blue-700 to-cyan-500",
    icon: "Code2"
  },
  {
    id: "2",
    slug: "career-readiness-program",
    name: "Certificate in Career Readiness Program",
    shortDescription:
      "Become job-ready with communication, aptitude, interview preparation, personal branding, and placement-focused skills.",

    fullDescription:
      "A comprehensive career development program designed to prepare students for campus placements and professional careers. Master communication, resume building, LinkedIn optimization, quantitative aptitude, logical reasoning, verbal ability, interview techniques, and personal branding through practical assessments and mock interviews.",

    category: "career",
    level: "beginner",
    duration: "1 Month",
    durationWeeks: 4,
    hours: "40 Hours",

    mode: "Online / Offline",

    batchOptions: [
      "Weekday Batch",
      "Weekend Batch"
      // "Placement Fast Track"
    ],

    technologies: [
      "LinkedIn",
      "Naukri",
      "Indeed",
      "ATS Resume Tools"
    ],

    projects: [
      "ATS-Friendly Resume",
      "LinkedIn Profile Optimization",
      "Career Portfolio",
      "Mock Interview Performance",
      "Group Discussion Presentation"
    ],

    careerPaths: [
      // "Campus Placement Preparation",
      "Graduate Trainee",
      "Software & IT Jobs",
      "Core Engineering Jobs",
      "Corporate Professional"
    ],

    learningOutcomes: [
      "Communicate confidently in professional environments",
      "Create ATS-friendly resumes and compelling cover letters",
      "Optimize LinkedIn profiles for recruiters",
      "Crack HR and technical interviews using the STAR method",
      "Improve aptitude, reasoning, and verbal ability",
      "Develop analytical thinking and problem-solving skills",
      "Build a professional personal brand and career portfolio",
      "Gain confidence through mock interviews and assessments"
    ],

    prerequisites: [
      "No prior experience required",
      "Basic English reading and writing skills",
      "Suitable for students and fresh graduates"
    ],

    whoIsItFor: [
      "Engineering students",
      "Diploma students",
      "Final-year college students",
      "Fresh graduates",
      "Job seekers preparing for placements"
    ],

    syllabus: [
      {
        title: "Module 1: Communication & Professional Etiquette",
        topics: [
          "Verbal & Non-Verbal Communication",
          "Active Listening",
          "Public Speaking",
          "Digital Communication",
          "Email Etiquette",
          "Workplace Ethics",
          "Professional Behavior",
          "Cultural Awareness"
        ]
      },
      {
        title: "Module 2: Job Search & Personal Branding",
        topics: [
          "Resume Writing",
          "ATS-Friendly Resume",
          "Cover Letter",
          "LinkedIn Optimization",
          "Personal Branding",
          "Networking Strategies",
          "Portfolio Development",
          "Work Sample Collection"
        ]
      },
      {
        title: "Module 3: Interview Preparation",
        topics: [
          "Interview Fundamentals",
          "Behavioral Interviews",
          "STAR Method",
          "Technical & HR Interviews",
          "Mock Interviews",
          "Handling Difficult Questions",
          "Salary Negotiation",
          "Interview Confidence"
        ]
      },
      {
        title: "Module 4: Critical Thinking & Problem Solving",
        topics: [
          "Analytical Reasoning",
          "Critical Thinking",
          "Decision Making",
          "Time Management",
          "Priority Setting",
          "Conflict Resolution",
          "Teamwork & Collaboration",
          "Digital & Financial Literacy"
        ]
      },
      {
        title: "Module 5: Quantitative Aptitude",
        topics: [
          "Number System",
          "LCM & HCF",
          "Percentages",
          "Profit & Loss",
          "Ratio & Average",
          "Simple & Compound Interest",
          "Time & Work",
          "Time-Speed-Distance",
          "Equations",
          "Geometry",
          "Probability"
        ]
      },
      {
        title: "Module 6: Logical Reasoning",
        topics: [
          "Blood Relations",
          "Direction Sense",
          "Coding-Decoding",
          "Syllogism",
          "Series & Patterns",
          "Seating Arrangements",
          "Cube & Dice",
          "Scheduling Puzzles",
          "Statement & Assumption"
        ]
      },
      {
        title: "Module 7: Verbal Ability",
        topics: [
          "Grammar",
          "Error Spotting",
          "Sentence Correction",
          "Voice Change",
          "Synonyms & Antonyms",
          "Idioms & Phrases",
          "Reading Comprehension",
          "Para Jumbles",
          "Sentence Completion"
        ]
      },
      {
        title: "Module 8: Data Interpretation",
        topics: [
          "Tables",
          "Bar Graphs",
          "Pie Charts",
          "Line Graphs",
          "Comparative Analysis",
          "Percentage Interpretation",
          "Data Sufficiency",
          "Data Adequacy"
        ]
      },
      {
        title: "Final Career Readiness Assessment",
        topics: [
          "Aptitude Test",
          "Logical Reasoning Test",
          "Verbal Ability Test",
          "Resume Review",
          "LinkedIn Review",
          "Group Discussion",
          "Mock Technical Interview",
          "Mock HR Interview",
          "Career Portfolio Presentation"
        ]
      }
    ],

    faqs: [
      {
        question: "Is this course useful for campus placements?",
        answer:
          "Yes. It is specifically designed to prepare students for campus drives, aptitude tests, HR interviews, and technical interviews."
      },
      {
        question: "Will I create my own resume and LinkedIn profile?",
        answer:
          "Yes. You'll build an ATS-friendly resume, optimize your LinkedIn profile, and develop a professional career portfolio."
      },
      {
        question: "Are mock interviews included?",
        answer:
          "Yes. The course includes HR and technical mock interviews, peer reviews, and personalized feedback."
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. Upon successfully completing the assessments, you'll receive the Nexify Certificate in Career Readiness Program."
      }
    ],

    featured: true,
    color: "from-emerald-600 to-teal-500",
    icon: "BriefcaseBusiness"
  },
  {
    id: "3",
    slug: "sql-database-associate",
    name: "Certificate in SQL Database Associate",

    shortDescription:
      "Learn SQL, relational databases, data analysis, joins, stored procedures, and database administration from scratch.",

    fullDescription:
      "A comprehensive beginner-to-intermediate SQL program that teaches relational database design, data modeling, querying, joins, subqueries, window functions, database optimization, security, and administration using industry-standard database systems including MySQL, PostgreSQL, and SQL Server.",

    category: "programming",
    level: "beginner",
    duration: "1 Month",
    durationWeeks: 4,
    hours: "40 Hours",

    mode: "Online / Offline",

    batchOptions: [
      "Weekday Batch",
      "Weekend Batch",
      "Fast Track Batch"
    ],

    technologies: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "SQL Server"
    ],

    projects: [
      "Student Database Management System",
      "Library Management Database",
      "E-Commerce Sales Analysis",
      "Employee Payroll Database",
      "Hospital Database System"
    ],

    careerPaths: [
      "SQL Developer",
      "Database Associate",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Backend Developer"
    ],

    learningOutcomes: [
      "Understand DBMS and relational database architecture",
      "Design normalized databases using ER models",
      "Write DDL, DML, DQL, TCL, and DCL commands",
      "Retrieve and analyze data using SQL queries",
      "Master joins, subqueries, CTEs, and window functions",
      "Create views, indexes, triggers, and stored procedures",
      "Manage transactions, permissions, backup, and recovery",
      "Build real-world database-driven applications"
    ],

    prerequisites: [
      "No prior SQL knowledge required",
      "Basic computer skills",
      "Laptop or desktop recommended"
    ],

    whoIsItFor: [
      "Engineering students",
      "Diploma students",
      "Aspiring Data Analysts",
      "Backend development beginners",
      "Anyone interested in databases"
    ],

    syllabus: [
      {
        title: "Module 1: Database Fundamentals & Architecture",
        topics: [
          "DBMS & RDBMS",
          "Tables, Rows & Columns",
          "Relational Concepts",
          "ER Diagrams",
          "Entities & Relationships",
          "Database Modeling",
          "Normalization (1NF, 2NF, 3NF)",
          "MySQL, PostgreSQL & SQL Server"
        ]
      },
      {
        title: "Module 2: Core SQL Commands",
        topics: [
          "CREATE",
          "ALTER",
          "DROP",
          "INSERT",
          "UPDATE",
          "DELETE",
          "Primary Key",
          "Foreign Key",
          "UNIQUE & NOT NULL Constraints"
        ]
      },
      {
        title: "Module 3: Data Retrieval with SQL",
        topics: [
          "SELECT Statement",
          "WHERE Clause",
          "LIKE, IN & BETWEEN",
          "AND / OR Conditions",
          "ORDER BY",
          "LIMIT & TOP",
          "Filtering & Sorting Results"
        ]
      },
      {
        title: "Module 4: Aggregation & Grouping",
        topics: [
          "SUM(), AVG(), COUNT()",
          "MIN() & MAX()",
          "GROUP BY",
          "HAVING Clause",
          "Business Data Analysis"
        ]
      },
      {
        title: "Module 5: Joins & Advanced Queries",
        topics: [
          "INNER JOIN",
          "LEFT & RIGHT JOIN",
          "FULL OUTER JOIN",
          "SELF & CROSS JOIN",
          "Subqueries",
          "Correlated Queries",
          "EXISTS",
          "Common Table Expressions (CTEs)"
        ]
      },
      {
        title: "Module 6: Advanced SQL Programming",
        topics: [
          "String Functions",
          "Date & Time Functions",
          "CASE WHEN",
          "Window Functions",
          "ROW_NUMBER()",
          "RANK() & DENSE_RANK()",
          "LEAD() & LAG()",
          "Indexes",
          "Views",
          "Triggers",
          "Stored Procedures"
        ]
      },
      {
        title: "Module 7: Database Administration & Security",
        topics: [
          "COMMIT",
          "ROLLBACK",
          "SAVEPOINT",
          "Transaction Management",
          "GRANT & REVOKE",
          "User Permissions",
          "Database Security",
          "Backup & Recovery",
          "Maintenance & Integrity"
        ]
      },
      {
        title: "Practical Lab & Capstone",
        topics: [
          "25 SQL Query Exercises",
          "10 Join Challenges",
          "5 Database Design Problems",
          "Performance Optimization Lab",
          "Real-World Database Project"
        ]
      }
    ],

    faqs: [
      {
        question: "Do I need programming knowledge before learning SQL?",
        answer:
          "No. This course starts from database fundamentals and is suitable for complete beginners."
      },
      {
        question: "Which database software will I learn?",
        answer:
          "You'll primarily practice with MySQL while also understanding PostgreSQL and Microsoft SQL Server concepts."
      },
      {
        question: "Will I work on real database projects?",
        answer:
          "Yes. The course includes database design, SQL analysis tasks, and a complete capstone project."
      },
      {
        question: "Is this course useful for Data Analytics?",
        answer:
          "Absolutely. SQL is one of the most important skills for Data Analysts, BI Developers, and Backend Developers."
      }
    ],

    featured: true,
    color: "from-indigo-700 to-violet-500",
    icon: "Database"
  }
  ,
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
