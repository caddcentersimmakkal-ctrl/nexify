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
  },
  {
    id: "4",
    slug: "excel-professional",
    name: "Certificate in Excel Professional",

    shortDescription:
      "Master Microsoft Excel from basic formulas to PivotTables, dashboards, automation, and business reporting.",

    fullDescription:
      "A complete Excel certification program designed for students, professionals, and job seekers. Learn data entry, formulas, logical and lookup functions, PivotTables, charts, dashboards, data analysis, and basic VBA automation through real-world business projects.",

    category: "productivity",
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
      "Microsoft Excel",
      "PivotTables",
      "Charts",
      "Dashboards",
      "VBA"
    ],

    projects: [
      "Interactive Sales Dashboard",
      "Professional Excel Report",
      "Data Cleaning & Analysis",
      "Formula-Based Business Report",
      "Basic Macro Automation"
    ],

    careerPaths: [
      "MIS Executive",
      "Data Analyst (Entry Level)",
      "Business Analyst",
      "Operations Executive",
      "Office Administrator"
    ],

    learningOutcomes: [
      "Navigate Excel efficiently using professional tools",
      "Create formulas using arithmetic, logical, and lookup functions",
      "Manage and analyze large datasets with sorting and filtering",
      "Build PivotTables, PivotCharts, and interactive dashboards",
      "Perform What-If Analysis using Goal Seek and Scenario Manager",
      "Clean and manipulate text using advanced text functions",
      "Automate repetitive tasks with basic VBA macros",
      "Develop professional business reports and visualizations"
    ],

    prerequisites: [
      "No prior Excel experience required",
      "Basic computer skills",
      "Laptop with Microsoft Excel recommended"
    ],

    whoIsItFor: [
      "College students",
      "Engineering graduates",
      "Office professionals",
      "Accounts & MIS executives",
      "Anyone wanting advanced Excel skills"
    ],

    syllabus: [
      {
        title: "Module 1: Basic Excel",
        topics: [
          "Excel Interface & Navigation",
          "Ribbon & Quick Access Toolbar",
          "Rows, Columns & Cells",
          "Data Entry & AutoFill",
          "Date Formatting",
          "Basic Formulas",
          "SUM(), AVERAGE(), COUNT()",
          "MIN(), MAX()",
          "Relative, Absolute & Mixed References"
        ]
      },
      {
        title: "Module 2: Intermediate Excel",
        topics: [
          "Data Management",
          "Sorting & Advanced Filters",
          "Conditional Formatting",
          "Data Bars & Color Scales",
          "IF(), AND(), OR()",
          "VLOOKUP(), HLOOKUP()",
          "INDEX() & MATCH()",
          "Excel Tables",
          "Bar, Line & Pie Charts"
        ]
      },
      {
        title: "Module 3: Advanced Excel",
        topics: [
          "PivotTables & PivotCharts",
          "Slicers",
          "Advanced Data Analysis",
          "What-If Analysis",
          "Goal Seek",
          "Scenario Manager",
          "CONCATENATE(), LEN(), TRIM()",
          "LEFT(), RIGHT(), MID()",
          "Macro Recording",
          "Introduction to VBA",
          "Workbook & Worksheet Protection",
          "Password Security"
        ]
      },
      {
        title: "Practical Project & Dashboard",
        topics: [
          "Professional Excel Report",
          "Data Cleaning & Analysis",
          "Interactive Dashboard",
          "PivotTable-Based Analysis",
          "Charts & Visualization",
          "Formula-Based Business Report",
          "Basic Macro Automation"
        ]
      }
    ],

    faqs: [
      {
        question: "Do I need prior Excel knowledge?",
        answer:
          "No. This course starts from the basics and gradually progresses to advanced Excel concepts."
      },
      {
        question: "Will I learn PivotTables and Dashboards?",
        answer:
          "Yes. PivotTables, PivotCharts, slicers, and interactive dashboard creation are core parts of the course."
      },
      {
        question: "Does this course include VBA?",
        answer:
          "Yes. You'll learn macro recording and basic VBA concepts for simple automation tasks."
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. You'll receive the Nexify Certificate in Excel Professional upon successful completion."
      }
    ],

    featured: true,
    color: "from-green-700 to-emerald-500",
    icon: "Sheet"
  },
  {
    id: "5",
    slug: "web-designer",
    name: "Certificate in Web Designer",

    shortDescription:
      "Design and build responsive websites using Figma, HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, and GitHub.",

    fullDescription:
      "A complete web design program that combines UI/UX design principles with front-end web development. Learn wireframing, prototyping, responsive layouts, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, GitHub, and website deployment while building a professional web design portfolio.",

    category: "development",
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
      "Figma",
      "Adobe XD",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "GitHub"
    ],

    projects: [
      "Responsive Multi-Page Website",
      "UI/UX Wireframe & Prototype",
      "Business Landing Page",
      "Interactive Portfolio Website",
      "Live Deployed Website"
    ],

    careerPaths: [
      "Web Designer",
      "Frontend Developer",
      "UI Designer",
      "Website Creator",
      "Freelance Web Designer"
    ],

    learningOutcomes: [
      "Understand modern UI/UX design principles",
      "Create wireframes, mockups, and interactive prototypes",
      "Build responsive websites using HTML5 and CSS3",
      "Master Flexbox, CSS Grid, and media queries",
      "Add interactivity using JavaScript and DOM manipulation",
      "Develop mobile-first websites with Bootstrap and Tailwind CSS",
      "Manage projects using GitHub repositories",
      "Deploy professional websites and build an online portfolio"
    ],

    prerequisites: [
      "No prior coding experience required",
      "Basic computer skills",
      "Laptop recommended"
    ],

    whoIsItFor: [
      "College students",
      "Creative designers",
      "Beginners in web development",
      "Freelancers",
      "Anyone interested in UI/UX and websites"
    ],

    syllabus: [
      {
        title: "Module 1: Core Design & UI/UX Principles",
        topics: [
          "Visual Design Fundamentals",
          "Color Theory",
          "Typography",
          "Layout & Grid Systems",
          "UI/UX Fundamentals",
          "Wireframing & User Flows",
          "Mockups & Prototyping",
          "Figma & Adobe XD",
          "Design Assets & Screen Layout"
        ]
      },
      {
        title: "Module 2: Front-End Coding Languages",
        topics: [
          "HTML5 & Semantic Elements",
          "Forms & Page Structure",
          "CSS3 & Selectors",
          "Box Model",
          "Flexbox & CSS Grid",
          "Animations & Transitions",
          "Responsive Design",
          "Media Queries",
          "Bootstrap",
          "Tailwind CSS",
          "JavaScript Basics",
          "DOM Manipulation & Events"
        ]
      },
      {
        title: "Module 3: Tools & Website Deployment",
        topics: [
          "Behance Portfolio",
          "GitHub Repository Management",
          "Version Control Basics",
          "GitHub Pages",
          "Website Deployment",
          "Portfolio Publishing"
        ]
      },
      {
        title: "Practical Projects",
        topics: [
          "Responsive Multi-Page Website",
          "UI/UX Wireframe & Prototype",
          "HTML/CSS Website Development",
          "Bootstrap Responsive Design",
          "JavaScript Interactivity",
          "GitHub Repository Setup",
          "Live Website Deployment",
          "Professional Web Design Portfolio"
        ]
      }
    ],

    faqs: [
      {
        question: "Do I need coding knowledge before joining?",
        answer:
          "No. This course starts from design fundamentals and teaches HTML, CSS, and JavaScript from scratch."
      },
      {
        question: "Will I learn both UI/UX and website development?",
        answer:
          "Yes. You'll learn Figma for UI/UX design and front-end coding for building responsive websites."
      },
      {
        question: "Will my website be hosted online?",
        answer:
          "Yes. You'll deploy your project using GitHub Pages and create a live portfolio website."
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. You'll receive the Nexify Certificate in Web Designer after successful completion."
      }
    ],

    featured: true,
    color: "from-sky-600 to-cyan-500",
    icon: "Globe"
  },
  {
    id: "6",
    slug: "ai-prompt-engineering-professional",
    name: "Certificate in AI & Prompt Engineering Professional",

    shortDescription:
      "Master Generative AI, ChatGPT, Gemini, Claude, prompt engineering, AI automation, and real-world AI workflows.",

    fullDescription:
      "A comprehensive professional certification designed to help students and professionals effectively use Generative AI and Large Language Models. Learn prompt engineering, structured prompting, AI-assisted research, content generation, coding assistance, business productivity, AI ethics, and build your own specialized AI assistant through hands-on projects.",

    category: "ai",
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
      "ChatGPT",
      "Claude",
      "Gemini",
      "LLMs",
      "Markdown",
      "JSON"
    ],

    projects: [
      "AI Customer Support Assistant",
      "AI Research Analyst",
      "Prompt Library Development",
      "AI Content Generation Workflow",
      "AI Productivity Assistant"
    ],

    careerPaths: [
      "AI Prompt Engineer",
      "Generative AI Specialist",
      "AI Content Strategist",
      "Research Analyst",
      "AI Productivity Consultant"
    ],

    learningOutcomes: [
      "Understand how Large Language Models (LLMs) work",
      "Design effective prompts using proven prompting frameworks",
      "Create structured outputs in JSON, Markdown, and tables",
      "Use AI for writing, research, coding, and business productivity",
      "Apply prompt chaining and iterative refinement techniques",
      "Evaluate AI responses for accuracy and reliability",
      "Understand AI ethics, privacy, bias, and security risks",
      "Build complete end-to-end AI workflow solutions"
    ],

    prerequisites: [
      "No programming experience required",
      "Basic computer and internet skills",
      "Suitable for students, professionals, and entrepreneurs"
    ],

    whoIsItFor: [
      "College students",
      "Content creators",
      "Software developers",
      "Business professionals",
      "Anyone interested in Generative AI"
    ],

    syllabus: [
      {
        title: "Module 1: Foundations of AI & Large Language Models",
        topics: [
          "History of Artificial Intelligence",
          "Machine Learning & Deep Learning",
          "Generative AI",
          "Large Language Models (LLMs)",
          "ChatGPT, Claude & Gemini",
          "Tokens & Context Windows",
          "Parameters & Temperature",
          "Model Limitations & Hallucinations"
        ]
      },
      {
        title: "Module 2: Core Prompt Design Principles",
        topics: [
          "Prompt Engineering Fundamentals",
          "Role, Task & Context",
          "Output Format Design",
          "Clear Instructions & Constraints",
          "Tone Specification",
          "Zero-Shot Prompting",
          "Few-Shot Prompting",
          "Prompt Templates"
        ]
      },
      {
        title: "Module 3: Prompt Patterns & Frameworks",
        topics: [
          "Persona-Based Prompting",
          "Role-Based Prompting",
          "Instruction Prompting",
          "JSON & Markdown Outputs",
          "Tables & Lists",
          "Prompt Chaining",
          "Iterative Prompt Refinement",
          "Reusable Prompt Frameworks"
        ]
      },
      {
        title: "Module 4: Practical AI Applications",
        topics: [
          "AI Content Generation",
          "Creative Writing",
          "Text Summarization",
          "Document Generation",
          "Code Generation",
          "Code Debugging & Refactoring",
          "AI Research",
          "Data Extraction & Analysis",
          "Multimodal Prompting",
          "Marketing, Education & Productivity"
        ]
      },
      {
        title: "Module 5: AI Safety, Ethics & Evaluation",
        topics: [
          "Responsible AI",
          "Algorithmic Bias",
          "Privacy & Data Protection",
          "Prompt Injection",
          "Data Leakage",
          "AI Security Risks",
          "Guardrails",
          "Human Oversight",
          "Prompt Performance Testing",
          "A/B Testing & Evaluation Metrics"
        ]
      },
      {
        title: "Module 6: Capstone Project",
        topics: [
          "End-to-End AI Workflow",
          "Specialized AI Assistant",
          "Customer Support Bot",
          "Research Analyst Assistant",
          "Content Generation Pipeline",
          "Prompt Library",
          "Workflow Testing",
          "Project Documentation",
          "Final Presentation"
        ]
      }
    ],

    faqs: [
      {
        question: "Do I need coding knowledge for this course?",
        answer:
          "No. The course is designed for both technical and non-technical learners, with optional AI coding use cases included."
      },
      {
        question: "Which AI tools will I learn?",
        answer:
          "You'll work with ChatGPT, Claude, Gemini, and learn universal prompt engineering techniques applicable across modern LLMs."
      },
      {
        question: "Will I build real AI assistants?",
        answer:
          "Yes. The capstone project includes designing specialized AI assistants and complete productivity workflows."
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "Yes. You'll receive the Nexify Certificate in AI & Prompt Engineering Professional upon successful completion."
      }
    ],

    featured: true,
    color: "from-purple-700 to-fuchsia-500",
    icon: "Sparkles"
  },
  // {
  //   id: "7",
  //   slug: "graphic-designer",
  //   name: "Certificate in Graphic Designer",

  //   shortDescription:
  //     "Master Photoshop, Illustrator, InDesign, Figma, branding, social media design, and professional portfolio creation.",

  //   fullDescription:
  //     "A complete graphic design certification program that teaches visual design principles, typography, color theory, Adobe Creative Suite, branding, print design, digital marketing creatives, packaging, and portfolio development through real-world client projects.",

  //   category: "design",
  //   level: "beginner",
  //   duration: "1.5 Months",
  //   durationWeeks: 6,
  //   hours: "60 Hours",

  //   mode: "Online / Offline",

  //   batchOptions: [
  //     "Weekday Batch",
  //     "Weekend Batch",
  //     "Fast Track Batch"
  //   ],

  //   technologies: [
  //     "Adobe Photoshop",
  //     "Adobe Illustrator",
  //     "Adobe InDesign",
  //     "Figma"
  //   ],

  //   projects: [
  //     "Brand Identity Design",
  //     "Professional Logo Design",
  //     "Social Media Campaign",
  //     "Marketing Poster & Flyer",
  //     "Packaging Design",
  //     "Brochure & Magazine Layout",
  //     "Digital Advertisement Creative",
  //     "Portfolio Development"
  //   ],

  //   careerPaths: [
  //     "Graphic Designer",
  //     "Brand Designer",
  //     "Visual Designer",
  //     "Social Media Designer",
  //     "Freelance Creative Designer"
  //   ],

  //   learningOutcomes: [
  //     "Understand professional design principles and visual hierarchy",
  //     "Apply color theory and typography in modern designs",
  //     "Create logos, icons, and vector illustrations using Illustrator",
  //     "Edit, retouch, and manipulate images in Photoshop",
  //     "Design brochures, magazines, and print-ready layouts in InDesign",
  //     "Build branding systems and visual identity guidelines",
  //     "Create social media creatives, web banners, and marketing assets",
  //     "Develop a professional portfolio for freelance and job opportunities"
  //   ],

  //   prerequisites: [
  //     "No prior design experience required",
  //     "Basic computer skills",
  //     "Laptop recommended for Adobe software"
  //   ],

  //   whoIsItFor: [
  //     "College students",
  //     "Creative professionals",
  //     "Marketing enthusiasts",
  //     "Aspiring graphic designers",
  //     "Freelancers and entrepreneurs"
  //   ],

  //   syllabus: [
  //     {
  //       title: "Module 1: Core Design Principles",
  //       topics: [
  //         "Elements of Design",
  //         "Line, Shape, Form & Texture",
  //         "Space & Composition",
  //         "Balance & Contrast",
  //         "Emphasis & Movement",
  //         "Proportion & Visual Hierarchy",
  //         "Color Theory & Psychology",
  //         "RGB & CMYK",
  //         "Typography",
  //         "Font Pairing & Spacing"
  //       ]
  //     },
  //     {
  //       title: "Module 2: Software & Technical Skills",
  //       topics: [
  //         "Adobe Photoshop",
  //         "Raster Image Editing",
  //         "Retouching & Manipulation",
  //         "Layers & Masking",
  //         "Image Compositing",
  //         "Adobe Illustrator",
  //         "Vector Graphics",
  //         "Logo & Icon Design",
  //         "Adobe InDesign",
  //         "Magazine & Brochure Design",
  //         "Print Production",
  //         "Figma Digital Layouts"
  //       ]
  //     },
  //     {
  //       title: "Module 3: Applied Projects & Specialization",
  //       topics: [
  //         "Branding & Visual Identity",
  //         "Logo Suites",
  //         "Brand Guidelines",
  //         "Packaging Design",
  //         "Social Media Creatives",
  //         "Marketing Assets",
  //         "Web Banner Design",
  //         "Advertisement Design",
  //         "Pre-Press Setup",
  //         "Print-Ready File Formats",
  //         "Client Briefs",
  //         "Freelancing Basics"
  //       ]
  //     },
  //     {
  //       title: "Final Portfolio Project",
  //       topics: [
  //         "Brand Identity Design",
  //         "Professional Logo",
  //         "Social Media Campaign",
  //         "Marketing Poster & Flyer",
  //         "Brochure or Magazine",
  //         "Packaging Design",
  //         "Print-Ready Artwork",
  //         "Digital Advertisement",
  //         "AI-Assisted Design Workflow",
  //         "Portfolio Presentation"
  //       ]
  //     }
  //   ],

  //   faqs: [
  //     {
  //       question: "Do I need drawing skills to become a graphic designer?",
  //       answer:
  //         "No. The course focuses on digital design using professional software, so drawing skills are not mandatory."
  //     },
  //     {
  //       question: "Which Adobe software will I learn?",
  //       answer:
  //         "You'll learn Adobe Photoshop, Illustrator, InDesign, and Figma for complete graphic design workflows."
  //     },
  //     {
  //       question: "Will I build a professional portfolio?",
  //       answer:
  //         "Yes. You'll complete multiple branding and marketing projects to create an industry-ready design portfolio."
  //     },
  //     {
  //       question: "Is this course suitable for freelancing?",
  //       answer:
  //         "Absolutely. The course includes client briefs, presentation skills, and freelancing fundamentals."
  //     }
  //   ],

  //   featured: true,
  //   color: "from-pink-600 to-rose-500",
  //   icon: "Palette"
  // },
  {
    id: "8",
    slug: "power-bi-business-intelligence-professional",
    name: "Certificate in Power BI Business Intelligence Professional",

    shortDescription:
      "Master Power BI, Power Query, DAX, data modeling, interactive dashboards, and business intelligence analytics.",

    fullDescription:
      "A comprehensive Business Intelligence certification designed to transform raw data into meaningful insights. Learn Power BI Desktop, Power Query ETL, data modeling, DAX, interactive dashboards, Power BI Service, AI-powered analytics, and build enterprise-level BI portfolio projects aligned with Microsoft PL-300 skills.",

    category: "data",
    level: "beginner",
    duration: "6 Weeks",
    durationWeeks: 6,
    hours: "60 Hours",

    mode: "Online / Offline",

    batchOptions: [
      "Weekday Batch",
      "Weekend Batch",
      "Fast Track Batch"
    ],

    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      "SQL Server",
      "Excel",
      "Power BI Service"
    ],

    projects: [
      "Sales Performance Dashboard",
      "HR Analytics Dashboard",
      "Financial KPI Dashboard",
      "Executive Business Intelligence Report",
      "End-to-End BI Portfolio Project"
    ],

    careerPaths: [
      "Power BI Developer",
      "Business Intelligence Analyst",
      "Data Analyst",
      "MIS Executive",
      "Reporting Analyst"
    ],

    learningOutcomes: [
      "Understand Business Intelligence concepts and Power BI architecture",
      "Connect, clean, and transform data using Power Query",
      "Build optimized star schema data models",
      "Create calculated columns and advanced DAX measures",
      "Design professional interactive dashboards and KPI reports",
      "Publish and share reports using Power BI Service",
      "Implement Row-Level Security and report governance",
      "Develop an industry-ready Business Intelligence portfolio"
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Microsoft Excel fundamentals recommended",
      "No prior Power BI experience required"
    ],

    whoIsItFor: [
      "Engineering students",
      "Commerce & MBA students",
      "Data analytics beginners",
      "Business professionals",
      "Working professionals seeking BI skills"
    ],

    syllabus: [
      {
        title: "Module 1: Introduction to Business Intelligence & Power BI",
        topics: [
          "Business Intelligence Fundamentals",
          "Business Analytics Overview",
          "Power BI Ecosystem",
          "Power BI Architecture",
          "Power BI Desktop",
          "Interface & Navigation",
          "Installation & Setup"
        ]
      },
      {
        title: "Module 2: Data Extraction & Transformation (Power Query)",
        topics: [
          "Connecting Excel, SQL & Web Data",
          "CSV & JSON Import",
          "Data Cleaning",
          "Data Shaping",
          "ETL Process",
          "Handling Missing Values",
          "Conditional Columns",
          "Merge & Transform Data",
          "Power Query Editor"
        ]
      },
      {
        title: "Module 3: Data Modeling",
        topics: [
          "Star Schema",
          "Snowflake Schema",
          "Fact & Dimension Tables",
          "Table Relationships",
          "One-to-Many & Many-to-Many",
          "Active & Inactive Relationships",
          "Filter Propagation",
          "Model Optimization"
        ]
      },
      {
        title: "Module 4: DAX for Business Analysis",
        topics: [
          "Calculated Columns",
          "Measures",
          "Logical & Text Functions",
          "Date Functions",
          "Time Intelligence (YTD, QTD, MTD)",
          "Filter & Row Context",
          "SUMX()",
          "CALCULATE()",
          "Business Calculations"
        ]
      },
      {
        title: "Module 5: Visualization & Dashboard Design",
        topics: [
          "Visualization Principles",
          "Bar, Line & Pie Charts",
          "Tables & Matrices",
          "Maps & Treemaps",
          "Conditional Formatting",
          "Slicers & Bookmarks",
          "Drill-Through",
          "Tooltips",
          "Professional Dashboard Design"
        ]
      },
      {
        title: "Module 6: Power BI Service & Publishing",
        topics: [
          "Power BI Service",
          "Publishing Reports",
          "Workspaces",
          "Scheduled Refresh",
          "Data Gateways",
          "Report Sharing",
          "User Permissions",
          "Mobile Views",
          "Collaboration"
        ]
      },
      {
        title: "Module 7: Advanced Power BI & AI Analytics",
        topics: [
          "Row-Level Security (RLS)",
          "Security Roles",
          "AI Visuals",
          "Key Influencers",
          "Decomposition Tree",
          "Forecasting",
          "Trend Analysis",
          "Performance Optimization",
          "PL-300 Exam Alignment"
        ]
      },
      {
        title: "Final Portfolio Project",
        topics: [
          "End-to-End BI Project",
          "Power Query ETL",
          "Data Modeling",
          "DAX Measures",
          "Interactive Dashboard",
          "KPI Analysis",
          "Business Insights",
          "Power BI Service Publishing",
          "Dashboard Presentation",
          "Portfolio Documentation"
        ]
      }
    ],

    faqs: [
      {
        question: "Do I need Excel knowledge before learning Power BI?",
        answer:
          "Basic Excel knowledge is recommended, but the course teaches all essential data analysis concepts from the beginning."
      },
      {
        question: "Will I learn DAX and Power Query?",
        answer:
          "Yes. DAX calculations, Power Query ETL, and data modeling are core components of this program."
      },
      {
        question: "Does this course include dashboard projects?",
        answer:
          "Absolutely. You'll build multiple interactive dashboards and complete an end-to-end Business Intelligence portfolio project."
      },
      {
        question: "Is this aligned with Microsoft PL-300?",
        answer:
          "Yes. The syllabus covers the practical skills required for the Microsoft PL-300 Power BI Data Analyst certification."
      }
    ],

    featured: true,
    color: "from-yellow-500 to-amber-600",
    icon: "BarChart3"
  },
  {
    id: "9",
    slug: "python-developer-ai-automation",
    name: "Professional Certificate in Python Developer (AI & Automation)",

    shortDescription:
      "Become a Python developer by mastering automation, APIs, data analysis, machine learning, and Generative AI.",

    fullDescription:
      "A comprehensive professional Python program designed for aspiring developers and automation engineers. Learn Python programming, file handling, web scraping, REST APIs, Excel automation, data analysis with NumPy and Pandas, machine learning with Scikit-learn, and build AI-powered applications using modern LLM APIs.",

    category: "programming",
    level: "intermediate",
    duration: "2 Months",
    durationWeeks: 8,
    hours: "80 Hours",

    mode: "Online / Offline",

    batchOptions: [
      "Weekday Batch",
      "Weekend Batch",
      "Fast Track Batch"
    ],

    technologies: [
      "Python",
      "VS Code",
      "Jupyter Notebook",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "OpenAI API",
      "Claude API",
      "Git & GitHub"
    ],

    projects: [
      "Python Automation Application",
      "REST API-Based Application",
      "Data Analysis Dashboard",
      "AI-Powered Chatbot",
      "Excel & Google Sheets Automation"
    ],

    careerPaths: [
      "Python Developer",
      "Automation Engineer",
      "AI Application Developer",
      "Data Analyst",
      "Backend Python Developer"
    ],

    learningOutcomes: [
      "Write clean and reusable Python programs from scratch",
      "Automate repetitive tasks using Python scripts",
      "Work with CSV, JSON, Excel, and Google Sheets",
      "Consume REST APIs and process JSON data",
      "Perform web scraping with BeautifulSoup",
      "Analyze and visualize data using NumPy, Pandas, and Matplotlib",
      "Build machine learning models with Scikit-learn",
      "Create AI-powered tools and chatbots using LLM APIs",
      "Manage projects using Git and GitHub"
    ],

    prerequisites: [
      "No prior programming experience required",
      "Basic computer skills",
      "Laptop recommended"
    ],

    whoIsItFor: [
      "Engineering students",
      "Diploma graduates",
      "Aspiring Python developers",
      "Automation enthusiasts",
      "Beginners entering AI and Data Science"
    ],

    syllabus: [
      {
        title: "Module 1: Core Python & Environment Setup",
        topics: [
          "Python Installation",
          "VS Code & Jupyter Notebook",
          "pip Package Management",
          "Variables & Data Types",
          "Strings & Numbers",
          "Operators",
          "Input & Output",
          "if/elif/else",
          "for & while Loops",
          "Lists, Tuples, Dictionaries & Sets",
          "List Comprehensions",
          "Functions & Lambda",
          "Built-in & Custom Modules"
        ]
      },
      {
        title: "Module 2: Python for Task Automation",
        topics: [
          "File Handling",
          "Text, CSV & JSON Files",
          "Reading & Writing Data",
          "os & shutil Modules",
          "Folder Management",
          "REST APIs",
          "requests Library",
          "JSON Processing",
          "Web Scraping with BeautifulSoup",
          "Workflow Automation",
          "Email Automation",
          "Excel & Google Sheets Automation"
        ]
      },
      {
        title: "Module 3: AI & Machine Learning Foundations",
        topics: [
          "NumPy Arrays",
          "Pandas DataFrames",
          "Data Cleaning",
          "Data Manipulation",
          "Data Analysis",
          "Matplotlib & Seaborn",
          "Data Visualization",
          "Scikit-learn",
          "Supervised & Unsupervised Learning",
          "Linear Regression",
          "Classification Models",
          "Generative AI & LLMs",
          "OpenAI & Claude APIs",
          "Prompt Engineering",
          "AI-Powered Chatbots"
        ]
      },
      {
        title: "Final Practical Project",
        topics: [
          "Python Automation Tool",
          "API-Based Application",
          "Data Analysis Project",
          "AI Chatbot Development",
          "File Processing Automation",
          "Git & GitHub Integration",
          "Project Documentation",
          "Final Demonstration"
        ]
      }
    ],

    faqs: [
      {
        question: "Is this course suitable for complete beginners?",
        answer:
          "Yes. The course starts with Python fundamentals and gradually progresses to AI and automation."
      },
      {
        question: "Will I learn machine learning and Generative AI?",
        answer:
          "Yes. You'll learn NumPy, Pandas, Scikit-learn, prompt engineering, and integrate modern LLM APIs."
      },
      {
        question: "Are real-world projects included?",
        answer:
          "Absolutely. You'll build automation tools, API applications, data analysis projects, and an AI-powered chatbot."
      },
      {
        question: "Will I receive a professional certificate?",
        answer:
          "Yes. Upon successful completion, you'll receive the Nexify Professional Certificate in Python Developer (AI & Automation)."
      }
    ],

    featured: true,
    color: "from-blue-600 to-yellow-500",
    icon: "Bot"
  },
  {
  id: "10",
  slug: "java-developer",
  name: "Professional Certificate in Java Developer",

  shortDescription:
    "Master Core Java, OOP, Collections, Multithreading, JDBC, MySQL, and modern Java development practices.",

  fullDescription:
    "A comprehensive professional Java development program designed to build strong programming and object-oriented design skills. Learn Core Java, advanced language features, collections, multithreading, file handling, JDBC, MySQL integration, Git, GitHub, and AI-assisted development while building real-world applications.",

  category: "programming",
  level: "intermediate",
  duration: "2 Months",
  durationWeeks: 8,
  hours: "80 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Fast Track Batch"
  ],

  technologies: [
    "Java",
    "JDK",
    "Eclipse",
    "IntelliJ IDEA",
    "MySQL",
    "JDBC",
    "Git",
    "GitHub"
  ],

  projects: [
    "Student Management System",
    "Banking Application",
    "Employee Management System",
    "Inventory Management System",
    "JDBC CRUD Application"
  ],

  careerPaths: [
    "Java Developer",
    "Backend Developer",
    "Software Engineer",
    "Application Developer",
    "Full Stack Java Developer"
  ],

  learningOutcomes: [
    "Build robust Java applications using object-oriented principles",
    "Master classes, objects, inheritance, abstraction, and polymorphism",
    "Handle exceptions and memory management effectively",
    "Work with Collections Framework and Stream API",
    "Develop multithreaded applications",
    "Perform file handling and data processing",
    "Connect Java applications with MySQL using JDBC",
    "Manage source code using Git and GitHub",
    "Build industry-ready Java projects"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "Logical thinking and problem-solving skills",
    "No prior Java experience required"
  ],

  whoIsItFor: [
    "Engineering students",
    "Diploma students",
    "Aspiring software developers",
    "Programming beginners",
    "Anyone interested in Java development"
  ],

  syllabus: [
    {
      title: "Module 1: Java Basics & Environment",
      topics: [
        "JDK, JRE & JVM Architecture",
        "Java Installation & Setup",
        "Eclipse & IntelliJ IDEA",
        "Variables & Data Types",
        "Literals & Operators",
        "Expressions",
        "if-else & switch",
        "Loops",
        "Arrays",
        "Command-Line Arguments"
      ]
    },
    {
      title: "Module 2: Object-Oriented Programming (OOP)",
      topics: [
        "Classes & Objects",
        "Methods",
        "Constructors",
        "Constructor Overloading",
        "Method Overloading",
        "this & super Keywords",
        "Inheritance",
        "Method Overriding",
        "Encapsulation",
        "Abstraction",
        "Polymorphism",
        "Interfaces",
        "Abstract Classes"
      ]
    },
    {
      title: "Module 3: Advanced Core Java Concepts",
      topics: [
        "String, StringBuilder & StringBuffer",
        "Exception Handling",
        "try, catch & finally",
        "throw & throws",
        "Custom Exceptions",
        "Wrapper Classes",
        "Autoboxing & Unboxing",
        "Memory Management",
        "Stack & Heap",
        "Garbage Collection",
        "Packages",
        "Access Modifiers"
      ]
    },
    {
      title: "Module 4: Collections, Concurrency & Modern Java",
      topics: [
        "Collections Framework",
        "List, Set, Map & Queue",
        "ArrayList",
        "HashMap",
        "HashSet",
        "Iterators",
        "Comparable & Comparator",
        "Multithreading",
        "Thread Lifecycle",
        "Runnable Interface",
        "Synchronization",
        "Deadlocks",
        "File Handling",
        "Lambda Expressions",
        "Functional Interfaces",
        "Stream API"
      ]
    },
    {
      title: "Module 5: Database Connectivity & Professional Development",
      topics: [
        "JDBC Fundamentals",
        "JDBC Drivers",
        "Database Connections",
        "Statements",
        "Prepared Statements",
        "Result Sets",
        "MySQL Integration",
        "CRUD Operations",
        "Modular Development",
        "Git & GitHub",
        "Version Control",
        "Repository Management",
        "AI-Assisted Java Development"
      ]
    },
    {
      title: "Final Practical Project",
      topics: [
        "Java Console Application",
        "OOP-Based Application",
        "File Handling Project",
        "JDBC & MySQL Integration",
        "CRUD Operations",
        "Exception Handling",
        "Collections & Streams",
        "GitHub Project Management",
        "AI-Assisted Development",
        "Final Demonstration"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need prior programming knowledge?",
      answer:
        "No. The course starts with Java fundamentals and gradually progresses to advanced development concepts."
    },
    {
      question: "Will I learn database connectivity?",
      answer:
        "Yes. You'll learn JDBC, MySQL integration, prepared statements, and CRUD operations."
    },
    {
      question: "Does the course cover modern Java features?",
      answer:
        "Yes. The curriculum includes Lambda Expressions, Functional Interfaces, Stream API, and modern Java development practices."
    },
    {
      question: "Will I build real-world projects?",
      answer:
        "Absolutely. You'll complete practical Java applications and a final industry-oriented project."
    }
  ],

  featured: true,
  color: "from-orange-600 to-red-500",
  icon: "Coffee"
  },
  {
  id: "11",
  slug: "react-frontend-developer",
  name: "Professional Certificate in React Frontend Developer",

  shortDescription:
    "Master React.js, modern JavaScript, Hooks, Redux, API integration, and build production-ready frontend applications.",

  fullDescription:
    "A comprehensive frontend development program that teaches modern web technologies and React.js from the ground up. Learn HTML, CSS, JavaScript ES6+, React Hooks, routing, state management, REST APIs, testing, deployment, and build industry-ready responsive web applications.",

  category: "development",
  level: "intermediate",
  duration: "2 Months",
  durationWeeks: 8,
  hours: "80 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Fast Track Batch"
  ],

  technologies: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React Router",
    "Redux Toolkit",
    "Axios",
    "Vite",
    "Git & GitHub"
  ],

  projects: [
    "E-Commerce Web Application",
    "Admin Dashboard",
    "Interactive Chat Application",
    "Portfolio Website",
    "Task Management SPA"
  ],

  careerPaths: [
    "React Frontend Developer",
    "Frontend Web Developer",
    "UI Developer",
    "JavaScript Developer",
    "Full Stack React Developer"
  ],

  learningOutcomes: [
    "Build responsive websites using HTML5, CSS3, and modern JavaScript",
    "Develop reusable React components with JSX and Props",
    "Manage state using useState, Context API, and Redux Toolkit",
    "Create dynamic Single Page Applications with React Router",
    "Consume REST APIs using Fetch and Axios",
    "Optimize performance with React.memo, useMemo, and useCallback",
    "Write unit and integration tests using Jest and React Testing Library",
    "Deploy production-ready applications on Netlify and Vercel"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "No prior React experience required",
    "Laptop recommended for development"
  ],

  whoIsItFor: [
    "Engineering students",
    "Aspiring frontend developers",
    "JavaScript learners",
    "UI/UX developers",
    "Fresh graduates entering web development"
  ],

  syllabus: [
    {
      title: "Module 1: Frontend Prerequisites & Web Foundations",
      topics: [
        "HTML5 & Semantic HTML",
        "CSS3 & Box Model",
        "Flexbox & CSS Grid",
        "Responsive Web Design",
        "Modern JavaScript (ES6+)",
        "let & const",
        "Arrow Functions",
        "Destructuring",
        "Rest & Spread",
        "Promises & async/await",
        "JSON & Fetch API",
        "Git & GitHub"
      ]
    },
    {
      title: "Module 2: Core React Fundamentals",
      topics: [
        "React Architecture",
        "Vite Environment Setup",
        "Project Initialization",
        "JSX Syntax",
        "Functional Components",
        "Reusable Components",
        "Props",
        "Component Composition",
        "Virtual DOM",
        "Reconciliation",
        "Rendering Process"
      ]
    },
    {
      title: "Module 3: State & Interactive Interfaces",
      topics: [
        "Component State",
        "useState",
        "Event Handling",
        "Conditional Rendering",
        "Lists & Keys",
        "Array Mapping",
        "Forms",
        "Controlled Components",
        "Client-Side Validation"
      ]
    },
    {
      title: "Module 4: Advanced Hooks & Side Effects",
      topics: [
        "useEffect",
        "Side Effects",
        "Data Fetching",
        "Cleanup Functions",
        "useRef",
        "Persistent Values",
        "Custom Hooks",
        "Reusable Business Logic"
      ]
    },
    {
      title: "Module 5: Application Architecture & Routing",
      topics: [
        "Single Page Applications",
        "React Router",
        "Dynamic & Nested Routes",
        "URL Parameters",
        "Navigation",
        "Context API",
        "Redux Toolkit",
        "CSS Modules",
        "Styled Components",
        "Tailwind CSS"
      ]
    },
    {
      title: "Module 6: API Integration, Testing & Optimization",
      topics: [
        "REST API Integration",
        "Fetch API & Axios",
        "Loading & Error States",
        "Error Boundaries",
        "React.memo",
        "useMemo",
        "useCallback",
        "Lazy Loading",
        "Code Splitting",
        "Jest",
        "React Testing Library"
      ]
    },
    {
      title: "Module 7: Deployment & Capstone Projects",
      topics: [
        "Production Build",
        "Netlify Deployment",
        "Vercel Deployment",
        "Environment Configuration",
        "Frontend Optimization",
        "E-Commerce Application",
        "Dashboard Project",
        "Interactive Chat App",
        "GitHub Project Management",
        "Portfolio Development",
        "Final Presentation"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need JavaScript before learning React?",
      answer:
        "Basic JavaScript is helpful, but this course includes modern ES6+ JavaScript fundamentals before React."
    },
    {
      question: "Will I build real React applications?",
      answer:
        "Yes. You'll build an e-commerce app, dashboard, chat application, and other portfolio-ready projects."
    },
    {
      question: "Does this course include Redux and React Router?",
      answer:
        "Absolutely. You'll learn Context API, Redux Toolkit, React Router, and professional state management."
    },
    {
      question: "How will I publish my React projects?",
      answer:
        "You'll deploy production-ready applications using Netlify and Vercel with GitHub integration."
    }
  ],

  featured: true,
  color: "from-cyan-500 to-blue-600",
  icon: "Atom"
  },
  {
  id: "12",
  slug: "angular-frontend-developer",
  name: "Professional Certificate in Angular Frontend Developer",

  shortDescription:
    "Master Angular, TypeScript, RxJS, Reactive Forms, REST APIs, and build enterprise-grade Single Page Applications.",

  fullDescription:
    "A comprehensive professional Angular development program designed for aspiring frontend engineers. Learn TypeScript, Angular architecture, dependency injection, signals, routing, RxJS, HTTP client, testing, deployment, and develop enterprise-style web applications using modern Angular best practices.",

  category: "development",
  level: "intermediate",
  duration: "2 Months",
  durationWeeks: 8,
  hours: "80 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Fast Track Batch"
  ],

  technologies: [
    "Angular",
    "TypeScript",
    "RxJS",
    "Angular CLI",
    "HTML5",
    "CSS3",
    "Firebase",
    "Vercel",
    "Git & GitHub"
  ],

  projects: [
    "Enterprise Dashboard Application",
    "Authentication-Based SPA",
    "Task Management System",
    "Reactive Forms Application",
    "Cloud Deployed Angular Project"
  ],

  careerPaths: [
    "Angular Frontend Developer",
    "Frontend Engineer",
    "TypeScript Developer",
    "SPA Application Developer",
    "Full Stack Angular Developer"
  ],

  learningOutcomes: [
    "Build responsive web interfaces using HTML5, CSS3, and Angular",
    "Develop scalable applications with TypeScript and Angular CLI",
    "Create reusable components and modern Angular architecture",
    "Implement dependency injection and signal-based state management",
    "Build robust forms with Reactive Forms and custom validators",
    "Consume REST APIs using HttpClient and RxJS Observables",
    "Secure applications using route guards and authentication",
    "Test, optimize, and deploy production-ready Angular applications"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "No prior Angular experience required",
    "Laptop recommended for development"
  ],

  whoIsItFor: [
    "Engineering students",
    "Frontend development beginners",
    "JavaScript developers",
    "Aspiring Angular developers",
    "Fresh graduates entering web development"
  ],

  syllabus: [
    {
      title: "Module 1: Web Development Fundamentals",
      topics: [
        "HTML5 & Semantic HTML",
        "CSS3",
        "Flexbox & CSS Grid",
        "Responsive Web Design",
        "Modern JavaScript (ES6+)",
        "Promises & async/await",
        "Arrow Functions",
        "SPA vs Multi-Page Applications"
      ]
    },
    {
      title: "Module 2: TypeScript Essentials",
      topics: [
        "Static Typing",
        "Interfaces",
        "Classes",
        "Namespaces",
        "Generics",
        "Enums",
        "Type Aliases",
        "Decorators",
        "tsconfig.json",
        "TypeScript Compilation"
      ]
    },
    {
      title: "Module 3: Core Angular Architecture",
      topics: [
        "Angular Fundamentals",
        "Angular CLI",
        "Project Creation",
        "Components",
        "Component Styling",
        "Lifecycle Hooks",
        "Templates",
        "Interpolation",
        "Property & Event Binding",
        "Two-Way Binding",
        "@if, @for & @switch",
        "Custom Directives"
      ]
    },
    {
      title: "Module 4: Services & State Management",
      topics: [
        "Dependency Injection",
        "Providers",
        "Hierarchical Injectors",
        "@Injectable",
        "Angular Services",
        "Shared & Singleton Services",
        "Component State",
        "Angular Signals",
        "Reactive State Management"
      ]
    },
    {
      title: "Module 5: Angular Forms",
      topics: [
        "Template-Driven Forms",
        "ngModel",
        "Reactive Forms",
        "FormBuilder",
        "FormGroup",
        "Built-in Validators",
        "Custom Validators",
        "Async Validators",
        "Form Error Handling"
      ]
    },
    {
      title: "Module 6: RxJS & HTTP Client",
      topics: [
        "Observables & Observers",
        "RxJS Operators",
        "map, filter & switchMap",
        "Reactive Data Streams",
        "Angular HttpClient",
        "REST API Integration",
        "GET, POST, PUT & DELETE",
        "HTTP Interceptors",
        "Authentication Tokens",
        "Global Error Handling"
      ]
    },
    {
      title: "Module 7: Routing & Navigation",
      topics: [
        "Angular Router",
        "Route Configuration",
        "Nested & Child Routes",
        "Route Parameters",
        "Route Guards",
        "CanActivate & CanDeactivate",
        "Authentication Routing",
        "Lazy Loading",
        "Performance Optimization"
      ]
    },
    {
      title: "Module 8: Testing & Deployment",
      topics: [
        "Unit Testing",
        "Component & Service Testing",
        "Jasmine & Karma",
        "Production Builds",
        "Tree Shaking",
        "AOT Compilation",
        "Firebase Hosting",
        "AWS & Vercel Deployment",
        "Production Configuration"
      ]
    },
    {
      title: "Final Practical Project",
      topics: [
        "Enterprise Angular SPA",
        "Reusable Components",
        "Dependency Injection",
        "Reactive Forms",
        "REST API Integration",
        "Authentication & Route Guards",
        "Dashboard Development",
        "State Management",
        "Unit Testing",
        "Cloud Deployment",
        "GitHub Integration",
        "AI-Assisted Development"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need JavaScript before learning Angular?",
      answer:
        "Basic JavaScript is recommended, and the course includes modern ES6+ and TypeScript fundamentals before Angular."
    },
    {
      question: "Will I learn the latest Angular features?",
      answer:
        "Yes. The curriculum includes Angular Signals, modern control flow (@if, @for, @switch), standalone architecture, and current best practices."
    },
    {
      question: "Does this course include REST API integration?",
      answer:
        "Absolutely. You'll work with HttpClient, RxJS, authentication tokens, interceptors, and real backend APIs."
    },
    {
      question: "Will I deploy my Angular application?",
      answer:
        "Yes. You'll optimize, build, and deploy your project using Firebase, Vercel, or cloud hosting platforms."
    }
  ],

  featured: true,
  color: "from-red-600 to-rose-500",
  icon: "Triangle"
  },
  // {
  // id: "13",
  // slug: "ui-ux-designer",
  // name: "Professional Certificate in UI/UX Designer",

  // shortDescription:
  //   "Master user research, wireframing, Figma, design systems, prototyping, usability testing, and portfolio-ready UX case studies.",

  // fullDescription:
  //   "A comprehensive UI/UX design program that teaches design thinking, user research, information architecture, wireframing, visual design, interactive prototyping, accessibility, usability testing, and developer handoff. Build complete end-to-end UX case studies and a professional design portfolio using industry-standard tools.",

  // category: "design",
  // level: "intermediate",
  // duration: "2 Months",
  // durationWeeks: 8,
  // hours: "80 Hours",

  // mode: "Online / Offline",

  // batchOptions: [
  //   "Weekday Batch",
  //   "Weekend Batch",
  //   "Fast Track Batch"
  // ],

  // technologies: [
  //   "Figma",
  //   "Adobe XD",
  //   "Auto Layout",
  //   "Design Systems",
  //   "WCAG",
  //   "Prototyping"
  // ],

  // projects: [
  //   "Mobile App UI/UX Design",
  //   "Responsive Website Redesign",
  //   "E-Commerce UX Case Study",
  //   "Design System Creation",
  //   "Interactive High-Fidelity Prototype"
  // ],

  // careerPaths: [
  //   "UI Designer",
  //   "UX Designer",
  //   "Product Designer",
  //   "Interaction Designer",
  //   "UX Researcher"
  // ],

  // learningOutcomes: [
  //   "Apply the complete Design Thinking process to digital products",
  //   "Conduct user research using interviews, surveys, and journey mapping",
  //   "Create user personas, empathy maps, and information architecture",
  //   "Design low and high-fidelity wireframes in Figma",
  //   "Build interactive prototypes with Auto Layout and component libraries",
  //   "Develop accessible, responsive interfaces using design systems",
  //   "Perform usability testing and iterate designs using user feedback",
  //   "Create professional UX case studies and portfolio presentations"
  // ],

  // prerequisites: [
  //   "No prior design experience required",
  //   "Basic computer skills",
  //   "Laptop recommended"
  // ],

  // whoIsItFor: [
  //   "Creative students",
  //   "Aspiring UI/UX designers",
  //   "Frontend developers",
  //   "Graphic designers transitioning to UX",
  //   "Product design beginners"
  // ],

  // syllabus: [
  //   {
  //     title: "Module 1: Foundations & Design Thinking",
  //     topics: [
  //       "UI vs UX",
  //       "User Interface Fundamentals",
  //       "User Experience Fundamentals",
  //       "Design Thinking",
  //       "Empathize, Define & Ideate",
  //       "Prototype & Test",
  //       "Hick's, Fitts's, Jacob's & Miller's Laws",
  //       "Accessibility (WCAG)",
  //       "Inclusive Design"
  //     ]
  //   },
  //   {
  //     title: "Module 2: User Research & Strategy",
  //     topics: [
  //       "User Interviews",
  //       "Surveys",
  //       "Contextual Inquiry",
  //       "Qualitative & Quantitative Research",
  //       "User Personas",
  //       "Empathy Maps",
  //       "User Journey Maps",
  //       "Information Architecture",
  //       "Site Maps",
  //       "Card Sorting",
  //       "User Flows",
  //       "Competitive Analysis"
  //     ]
  //   },
  //   {
  //     title: "Module 3: Wireframing & Prototyping",
  //     topics: [
  //       "Low-Fidelity Wireframes",
  //       "Paper Sketches",
  //       "High-Fidelity Wireframes",
  //       "Layout Grids",
  //       "Interactive Prototypes",
  //       "Clickable Prototypes",
  //       "Transition States",
  //       "Figma",
  //       "Adobe XD",
  //       "Component Libraries",
  //       "Auto Layout"
  //     ]
  //   },
  //   {
  //     title: "Module 4: User Interface Visual Design",
  //     topics: [
  //       "Color Theory",
  //       "Typography",
  //       "Iconography",
  //       "Visual Hierarchy",
  //       "Alignment & Spacing",
  //       "Grid Systems",
  //       "UI Components",
  //       "Design Systems",
  //       "Reusable Components",
  //       "Design Tokens",
  //       "Style Guides",
  //       "Responsive Design",
  //       "Mobile, Tablet & Desktop UI"
  //     ]
  //   },
  //   {
  //     title: "Module 5: Testing, Iteration & Professional Skills",
  //     topics: [
  //       "Usability Testing",
  //       "Moderated & Unmoderated Testing",
  //       "User Feedback Collection",
  //       "A/B Testing",
  //       "Usability Metrics",
  //       "Design Iteration",
  //       "Developer Handoff",
  //       "Design Specifications",
  //       "AI-Assisted UI/UX Workflows",
  //       "Portfolio Development",
  //       "Presentation Skills"
  //     ]
  //   },
  //   {
  //     title: "Final Portfolio Project",
  //     topics: [
  //       "End-to-End UI/UX Project",
  //       "User Research",
  //       "Competitor Analysis",
  //       "Personas & Empathy Maps",
  //       "Journey Map & IA",
  //       "User Flow",
  //       "Wireframes",
  //       "High-Fidelity UI",
  //       "Interactive Prototype",
  //       "Responsive Design",
  //       "Design System",
  //       "Usability Testing",
  //       "Developer Handoff",
  //       "Complete UX Case Study",
  //       "Portfolio Presentation"
  //     ]
  //   }
  // ],

  // faqs: [
  //   {
  //     question: "Do I need coding knowledge for UI/UX Design?",
  //     answer:
  //       "No. This course focuses on design thinking, user experience, visual design, and prototyping without requiring programming."
  //   },
  //   {
  //     question: "Which design tools will I learn?",
  //     answer:
  //       "You'll primarily use Figma and Adobe XD for wireframing, prototyping, component libraries, and responsive interface design."
  //   },
  //   {
  //     question: "Will I build a professional portfolio?",
  //     answer:
  //       "Yes. You'll complete multiple UX case studies and an end-to-end portfolio project suitable for job applications."
  //   },
  //   {
  //     question: "Does the course include usability testing?",
  //     answer:
  //       "Absolutely. You'll conduct usability testing, analyze feedback, iterate designs, and prepare developer handoff documentation."
  //   }
  // ],

  // featured: true,
  // color: "from-violet-600 to-purple-500",
  // icon: "PenTool"
  // },
  {
  id: "14",
  slug: "python-developer",
  name: "Professional Certificate in Python Developer",

  shortDescription:
    "Master Python programming, OOP, databases, Flask, Django, REST APIs, Git, and build full-stack Python applications.",

  fullDescription:
    "A comprehensive professional Python development program designed to take learners from programming fundamentals to backend web development. Learn Python, object-oriented programming, databases, Flask, Django, REST APIs, version control, deployment, and develop industry-ready applications with real-world projects.",

  category: "programming",
  level: "intermediate",
  duration: "2 Months",
  durationWeeks: 8,
  hours: "80 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Fast Track Batch"
  ],

  technologies: [
    "Python",
    "Flask",
    "Django",
    "MySQL",
    "SQLite",
    "REST API",
    "Git",
    "GitHub"
  ],

  projects: [
    "Student Management System",
    "Flask CRUD Web Application",
    "Django REST API Project",
    "Python Automation Tool",
    "Professional Portfolio Website"
  ],

  careerPaths: [
    "Python Developer",
    "Backend Developer",
    "Web Application Developer",
    "API Developer",
    "Software Engineer"
  ],

  learningOutcomes: [
    "Write efficient Python programs using modern programming practices",
    "Apply object-oriented programming for scalable applications",
    "Work with files, exceptions, generators, decorators, and regex",
    "Design and manage relational databases using MySQL and SQLite",
    "Build web applications using Flask and Django",
    "Develop and consume RESTful APIs with JSON",
    "Manage projects using Git, GitHub, and virtual environments",
    "Deploy complete Python applications to the cloud"
  ],

  prerequisites: [
    "No prior Python experience required",
    "Basic computer knowledge",
    "Laptop recommended"
  ],

  whoIsItFor: [
    "Engineering students",
    "Aspiring Python developers",
    "Backend development beginners",
    "College graduates",
    "Anyone starting a software development career"
  ],

  syllabus: [
    {
      title: "Module 1: Core Python Foundations",
      topics: [
        "Python Syntax",
        "Variables & Data Types",
        "Type Casting",
        "Input & Output",
        "if, elif & else",
        "for & while Loops",
        "Lists, Tuples, Sets & Dictionaries",
        "Functions",
        "*args & **kwargs",
        "Lambda Functions",
        "Recursion"
      ]
    },
    {
      title: "Module 2: Advanced Python Programming",
      topics: [
        "Object-Oriented Programming",
        "Classes & Objects",
        "Constructors",
        "Inheritance & Polymorphism",
        "Error Handling",
        "Custom Exceptions",
        "Assertions",
        "File Handling",
        "CSV & Binary Files",
        "Generators & Iterators",
        "Decorators",
        "Regular Expressions (Regex)"
      ]
    },
    {
      title: "Module 3: Databases & Web Development",
      topics: [
        "SQL Fundamentals",
        "Database Concepts",
        "CRUD Operations",
        "Python Database Connectivity",
        "MySQL & SQLite",
        "Flask Framework",
        "Django Framework",
        "Server-Side Development",
        "RESTful APIs",
        "API Creation & Consumption",
        "JSON Data Handling"
      ]
    },
    {
      title: "Module 4: Developer Tools, Deployment & Capstone",
      topics: [
        "Git & GitHub",
        "Version Control Workflow",
        "Virtual Environments",
        "pip & Dependency Management",
        "Python Packaging",
        "Debugging & Testing",
        "Cloud Hosting Fundamentals",
        "Application Deployment",
        "Full-Stack Web Development",
        "Python Automation Tool"
      ]
    },
    {
      title: "Final Practical Project",
      topics: [
        "End-to-End Python Application",
        "Database Integration",
        "REST API Integration",
        "OOP Implementation",
        "Exception Handling",
        "GitHub Workflow",
        "Testing & Debugging",
        "Deployment",
        "Project Documentation",
        "Professional Portfolio"
      ]
    }
  ],

  faqs: [
    {
      question: "Is this different from the AI & Automation Python course?",
      answer:
        "Yes. This course focuses on backend development using Flask, Django, databases, REST APIs, and full-stack Python applications."
    },
    {
      question: "Will I learn both Flask and Django?",
      answer:
        "Yes. You'll build server-side applications using both Flask and Django frameworks."
    },
    {
      question: "Does this course include databases?",
      answer:
        "Absolutely. You'll learn SQL, MySQL, SQLite, CRUD operations, and Python database connectivity."
    },
    {
      question: "Will I deploy my Python application?",
      answer:
        "Yes. The capstone includes deployment, GitHub workflow, testing, and professional project documentation."
    }
  ],

  featured: true,
  color: "from-indigo-600 to-blue-500",
  icon: "Code2"
  },
  // {
  // id: "15",
  // slug: "qa-automation-engineer",
  // name: "Master Certificate in QA Automation Engineer",

  // shortDescription:
  //   "Master Manual Testing, Selenium, Playwright, API Testing, Appium, CI/CD, and AI-powered QA automation.",

  // fullDescription:
  //   "An industry-focused master certification that prepares you for Software Testing and QA Automation careers. Learn manual testing, SQL, Java/Python for automation, Selenium, Playwright, REST API testing, Appium, Jenkins, Docker, and build enterprise-grade automation frameworks with AI-assisted testing techniques.",

  // category: "productivity",
  // level: "advanced",
  // duration: "4 Months",
  // durationWeeks: 16,
  // hours: "160 Hours",

  // mode: "Online / Offline",

  // batchOptions: [
  //   "Weekday Batch",
  //   "Weekend Batch",
  //   "Corporate Fast Track"
  // ],

  // technologies: [
  //   "Selenium",
  //   "Playwright",
  //   "Java",
  //   "Python",
  //   "SQL",
  //   "Postman",
  //   "REST Assured",
  //   "Appium",
  //   "Jenkins",
  //   "Docker",
  //   "Git & GitHub",
  //   "JIRA"
  // ],

  // projects: [
  //   "Enterprise QA Automation Framework",
  //   "E-Commerce Web Automation",
  //   "REST API Automation Suite",
  //   "Mobile App Automation with Appium",
  //   "CI/CD Test Pipeline Project"
  // ],

  // careerPaths: [
  //   "QA Automation Engineer",
  //   "Software Test Engineer",
  //   "SDET (Software Development Engineer in Test)",
  //   "API Test Automation Engineer",
  //   "Mobile Test Automation Engineer"
  // ],

  // learningOutcomes: [
  //   "Understand SDLC, STLC, and professional QA processes",
  //   "Design effective test cases and manage defects using JIRA",
  //   "Write automation scripts with Selenium and Playwright",
  //   "Build scalable Page Object Model and data-driven frameworks",
  //   "Perform API testing using Postman and REST Assured",
  //   "Automate Android and iOS testing with Appium",
  //   "Integrate automated testing into Jenkins CI/CD pipelines",
  //   "Execute containerized test suites using Docker",
  //   "Apply AI-assisted techniques for test generation and maintenance"
  // ],

  // prerequisites: [
  //   "Basic computer knowledge",
  //   "No prior testing experience required",
  //   "Laptop recommended for development"
  // ],

  // whoIsItFor: [
  //   "Engineering students",
  //   "Fresh graduates",
  //   "Manual testers transitioning to automation",
  //   "Software professionals",
  //   "Aspiring QA engineers"
  // ],

  // syllabus: [
  //   {
  //     title: "Module 1: Manual Testing & QA Foundations",
  //     topics: [
  //       "SDLC & STLC",
  //       "Testing Fundamentals",
  //       "Test Levels & Test Types",
  //       "Test Planning",
  //       "Test Scenarios & Test Cases",
  //       "Functional, Regression, Smoke & Sanity Testing",
  //       "Defect Life Cycle",
  //       "Bug Reporting",
  //       "JIRA Defect Tracking"
  //     ]
  //   },
  //   {
  //     title: "Module 2: Programming & Database Fundamentals",
  //     topics: [
  //       "Programming Basics",
  //       "Variables & Data Types",
  //       "Operators & Loops",
  //       "Functions",
  //       "Object-Oriented Programming",
  //       "Java / Python / JavaScript for Testing",
  //       "SQL Fundamentals",
  //       "CRUD Operations",
  //       "Joins & Aggregations",
  //       "Database Validation"
  //     ]
  //   },
  //   {
  //     title: "Module 3: Web Automation & Test Frameworks",
  //     topics: [
  //       "Selenium WebDriver",
  //       "Playwright",
  //       "Browser Configuration",
  //       "XPath & CSS Selectors",
  //       "Web Element Interaction",
  //       "Waits, Alerts & Frames",
  //       "Windows & Tabs",
  //       "TestNG, JUnit & Pytest",
  //       "Assertions",
  //       "Page Object Model",
  //       "Data-Driven & Hybrid Frameworks"
  //     ]
  //   },
  //   {
  //     title: "Module 4: API & Mobile Testing",
  //     topics: [
  //       "REST API Fundamentals",
  //       "HTTP Methods (GET, POST, PUT, DELETE)",
  //       "Status Codes & Headers",
  //       "JSON Validation",
  //       "Postman",
  //       "REST Assured",
  //       "Authentication Testing",
  //       "Appium",
  //       "Device & Emulator Configuration",
  //       "Mobile Automation"
  //     ]
  //   },
  //   {
  //     title: "Module 5: CI/CD, Version Control & DevOps Testing",
  //     topics: [
  //       "Git & GitHub",
  //       "Branching & Merging",
  //       "Maven",
  //       "Jenkins",
  //       "Continuous Integration",
  //       "Continuous Testing",
  //       "Automated Pipelines",
  //       "Test Reports",
  //       "Docker",
  //       "Containerized Test Execution"
  //     ]
  //   },
  //   {
  //     title: "Module 6: Advanced Automation & AI-Assisted Testing",
  //     topics: [
  //       "Parallel Test Execution",
  //       "Cross-Browser Testing",
  //       "Framework Optimization",
  //       "Advanced Reporting",
  //       "Test Data Management",
  //       "AI Test Case Generation",
  //       "AI Test Script Creation",
  //       "Self-Healing Testing",
  //       "Intelligent Defect Analysis"
  //     ]
  //   },
  //   {
  //     title: "Final Enterprise Automation Project",
  //     topics: [
  //       "End-to-End QA Framework",
  //       "Manual Test Planning",
  //       "Selenium/Playwright Automation",
  //       "Page Object Model",
  //       "REST Assured API Testing",
  //       "Database Validation",
  //       "GitHub Integration",
  //       "Jenkins CI/CD Pipeline",
  //       "Docker Execution",
  //       "AI-Assisted Testing",
  //       "Final Demonstration"
  //     ]
  //   }
  // ],

  // faqs: [
  //   {
  //     question: "Do I need programming knowledge before joining?",
  //     answer:
  //       "No. The course teaches Java/Python programming fundamentals required for automation testing."
  //   },
  //   {
  //     question: "Will I learn both Selenium and Playwright?",
  //     answer:
  //       "Yes. You'll build automation frameworks using both Selenium WebDriver and Microsoft Playwright."
  //   },
  //   {
  //     question: "Does the course include API and mobile testing?",
  //     answer:
  //       "Absolutely. You'll learn Postman, REST Assured, and Appium for complete QA automation."
  //   },
  //   {
  //     question: "Will I work on an enterprise automation project?",
  //     answer:
  //       "Yes. The capstone includes web, API, database, CI/CD, Docker, and AI-assisted testing in a real-world framework."
  //   }
  // ],

  // featured: true,
  // color: "from-emerald-600 to-cyan-600",
  // icon: "Bug"
  // },
  {
  id: "16",
  slug: "data-analytics-professional",
  name: "Master Certificate in Data Analytics Professional",

  shortDescription:
    "Master Excel, SQL, Python, Statistics, Power BI, AI-powered analytics, and build industry-ready business intelligence dashboards.",

  fullDescription:
    "A comprehensive master-level data analytics program that prepares you for modern analytics and business intelligence careers. Learn advanced Excel, SQL, Python, statistics, Power BI, Tableau fundamentals, AI-assisted analytics, and solve real business problems through end-to-end capstone projects using industry datasets.",

  category: "data",
  level: "advanced",
  duration: "4 Months",
  durationWeeks: 16,
  hours: "160 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Excel",
    "SQL",
    "MySQL",
    "Python",
    "NumPy",
    "Pandas",
    "Power BI",
    "Tableau",
    "DAX"
  ],

  projects: [
    "Sales Analytics Dashboard",
    "HR Attrition Analysis",
    "Financial KPI Dashboard",
    "Customer Behavior Analysis",
    "End-to-End Industry Data Analytics Project"
  ],

  careerPaths: [
    "Data Analyst",
    "Business Intelligence Analyst",
    "MIS Analyst",
    "Reporting Analyst",
    "Junior Data Scientist"
  ],

  learningOutcomes: [
    "Master advanced Excel for business reporting and automation",
    "Write complex SQL queries for business data analysis",
    "Clean, transform, and analyze data using Python and Pandas",
    "Apply statistics and probability for data-driven decision making",
    "Build interactive dashboards using Power BI and DAX",
    "Generate business KPIs and executive reports",
    "Leverage Generative AI for analytics workflows and insights",
    "Create a professional data analytics portfolio with real datasets"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "No prior analytics experience required",
    "Laptop recommended"
  ],

  whoIsItFor: [
    "Engineering students",
    "Commerce & MBA graduates",
    "Business professionals",
    "Aspiring Data Analysts",
    "Working professionals transitioning into analytics"
  ],

  syllabus: [
    {
      title: "Module 1: Data Foundations & Advanced Excel",
      topics: [
        "Advanced Excel",
        "Data Management",
        "PivotTables",
        "VLOOKUP & XLOOKUP",
        "Data Cleaning",
        "Conditional Formatting",
        "Data Validation",
        "MIS Reporting",
        "Power Query Fundamentals"
      ]
    },
    {
      title: "Module 2: SQL & Relational Databases",
      topics: [
        "RDBMS Concepts",
        "Database Design",
        "Tables & Relationships",
        "SQL Fundamentals",
        "Filtering & Sorting",
        "Joins",
        "Subqueries",
        "Aggregate Functions",
        "GROUP BY & HAVING",
        "CTEs",
        "Window Functions",
        "Business SQL Analysis"
      ]
    },
    {
      title: "Module 3: Python for Data Analytics",
      topics: [
        "Python Fundamentals",
        "NumPy Arrays",
        "Pandas DataFrames",
        "Data Cleaning",
        "Data Transformation",
        "Data Wrangling",
        "Missing Data Handling",
        "Exploratory Data Analysis",
        "Statistical Analysis",
        "Automation with Python"
      ]
    },
    {
      title: "Module 4: Statistics & Probability",
      topics: [
        "Descriptive Statistics",
        "Mean, Median & Mode",
        "Variance & Standard Deviation",
        "Percentiles",
        "Probability Rules",
        "Distributions",
        "Sampling",
        "Confidence Intervals",
        "Hypothesis Testing",
        "A/B Testing",
        "Business Metrics"
      ]
    },
    {
      title: "Module 5: Data Visualization & Business Intelligence",
      topics: [
        "Power BI",
        "Tableau Overview",
        "Data Modeling",
        "Table Relationships",
        "DAX Measures",
        "KPIs",
        "Interactive Dashboards",
        "Charts & Visualizations",
        "Filters & Slicers",
        "Drill-Through",
        "Executive Reporting"
      ]
    },
    {
      title: "Module 6: AI-Assisted Analytics & Business Intelligence",
      topics: [
        "Generative AI for Analytics",
        "AI Data Cleaning",
        "AI SQL Generation",
        "AI Python Analysis",
        "Automated Report Generation",
        "Prompt Engineering",
        "AI-Powered Insights",
        "Responsible AI",
        "Business Intelligence Workflows"
      ]
    },
    {
      title: "Final Capstone Project & Case Studies",
      topics: [
        "Industry Dataset Analysis",
        "Data Collection",
        "Data Cleaning",
        "SQL Analysis",
        "Python EDA",
        "Statistical Analysis",
        "Power BI Dashboard",
        "Business KPI Analysis",
        "Executive Reporting",
        "AI-Assisted Insights",
        "Portfolio Development",
        "Final Presentation"
      ]
    }
  ],

  faqs: [
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes. The program starts with Excel and SQL fundamentals before progressing to Python, statistics, and Power BI."
    },
    {
      question: "Will I build real dashboards?",
      answer:
        "Absolutely. You'll create multiple interactive Power BI dashboards and executive business reports."
    },
    {
      question: "Does this course include AI for data analytics?",
      answer:
        "Yes. You'll learn Generative AI for SQL, Python analysis, automated reporting, and business insight generation."
    },
    {
      question: "Will I receive a master certificate?",
      answer:
        "Yes. Upon successful completion of the capstone project, you'll receive the Nexify Master Certificate in Data Analytics Professional."
    }
  ],

  featured: true,
  color: "from-indigo-700 to-sky-500",
  icon: "BarChart3"
  },
  // {
  // id: "17",
  // slug: "flutter-mobile-application-developer",
  // name: "Master Certificate in Flutter Mobile Application Developer",

  // shortDescription:
  //   "Build cross-platform Android & iOS apps using Flutter, Dart, Firebase, REST APIs, state management, and AI integration.",

  // fullDescription:
  //   "A comprehensive master-level Flutter development program designed to create production-ready mobile applications. Learn Dart programming, Flutter widgets, responsive UI, Provider, Riverpod, BLoC, REST APIs, Firebase, local databases, AI integration, testing, performance optimization, and deploy apps to Google Play Store and the Apple App Store.",

  // category: "programming",
  // level: "advanced",
  // duration: "4 Months",
  // durationWeeks: 16,
  // hours: "160 Hours",

  // mode: "Online / Offline",

  // batchOptions: [
  //   "Weekday Batch",
  //   "Weekend Batch",
  //   "Corporate Fast Track"
  // ],

  // technologies: [
  //   "Flutter",
  //   "Dart",
  //   "Firebase",
  //   "Firestore",
  //   "Provider",
  //   "Riverpod",
  //   "BLoC",
  //   "SQLite",
  //   "Dio",
  //   "Git & GitHub"
  // ],

  // projects: [
  //   "E-Commerce Mobile App",
  //   "Food Delivery Application",
  //   "Expense Tracker",
  //   "AI Chat Mobile App",
  //   "Production-Ready Flutter Capstone"
  // ],

  // careerPaths: [
  //   "Flutter Developer",
  //   "Mobile Application Developer",
  //   "Cross-Platform App Developer",
  //   "Firebase Developer",
  //   "Full Stack Mobile Engineer"
  // ],

  // learningOutcomes: [
  //   "Master Dart programming and object-oriented application development",
  //   "Design responsive Android and iOS interfaces using Flutter widgets",
  //   "Build scalable applications with Provider, Riverpod, and BLoC",
  //   "Integrate REST APIs and handle asynchronous networking",
  //   "Implement Firebase Authentication, Firestore, and Cloud Storage",
  //   "Store offline data using SQLite, Isar, and Shared Preferences",
  //   "Optimize mobile apps using Flutter DevTools and performance profiling",
  //   "Deploy production-ready apps to Google Play Store and App Store"
  // ],

  // prerequisites: [
  //   "Basic programming knowledge is helpful",
  //   "Laptop with Windows, macOS, or Linux",
  //   "No prior Flutter experience required"
  // ],

  // whoIsItFor: [
  //   "Engineering students",
  //   "Aspiring mobile app developers",
  //   "Frontend developers moving to mobile",
  //   "Entrepreneurs building apps",
  //   "Software professionals"
  // ],

  // syllabus: [
  //   {
  //     title: "Module 1: Introduction to Dart Programming",
  //     topics: [
  //       "Dart Syntax",
  //       "Variables & Data Types",
  //       "final & const",
  //       "Operators & Loops",
  //       "Functions & Lexical Scope",
  //       "Arrow Functions",
  //       "Lists, Maps & Sets",
  //       "Classes & OOP",
  //       "Inheritance & Mixins",
  //       "Interfaces & Polymorphism",
  //       "Futures, Streams & async/await"
  //     ]
  //   },
  //   {
  //     title: "Module 2: Flutter Setup & Architecture",
  //     topics: [
  //       "Flutter SDK Installation",
  //       "Android Studio & VS Code",
  //       "Emulators & Simulators",
  //       "Flutter CLI",
  //       "Project Structure",
  //       "Widget Tree",
  //       "Rendering Pipeline",
  //       "Application Architecture"
  //     ]
  //   },
  //   {
  //     title: "Module 3: Core UI Design – Widgets & Layouts",
  //     topics: [
  //       "Text & Container",
  //       "Row, Column & Stack",
  //       "Image Assets",
  //       "Stateless & Stateful Widgets",
  //       "Widget Lifecycle",
  //       "ListView & GridView",
  //       "Padding & Alignment",
  //       "Responsive Layouts",
  //       "Material & Cupertino Design"
  //     ]
  //   },
  //   {
  //     title: "Module 4: User Interaction, Forms & Navigation",
  //     topics: [
  //       "GestureDetector & InkWell",
  //       "Tap, Swipe & Drag",
  //       "TextFields",
  //       "Form Controls",
  //       "Validation",
  //       "Controllers",
  //       "Multi-Screen Navigation",
  //       "Named Routes",
  //       "Navigator",
  //       "Modern Routing"
  //     ]
  //   },
  //   {
  //     title: "Module 5: State Management & Architecture",
  //     topics: [
  //       "setState()",
  //       "Provider",
  //       "Riverpod",
  //       "BLoC Pattern",
  //       "Reactive State",
  //       "Business Logic Separation",
  //       "Dependency Injection",
  //       "Service Locator",
  //       "get_it",
  //       "Scalable Architecture"
  //     ]
  //   },
  //   {
  //     title: "Module 6: Networking, APIs & Local Storage",
  //     topics: [
  //       "REST API Fundamentals",
  //       "GET, POST, PUT & DELETE",
  //       "http & Dio",
  //       "JSON Parsing",
  //       "Model Classes",
  //       "Error Handling",
  //       "SQLite",
  //       "sqflite",
  //       "Isar",
  //       "Shared Preferences",
  //       "Offline Caching"
  //     ]
  //   },
  //   {
  //     title: "Module 7: Firebase Backend Integration",
  //     topics: [
  //       "Firebase Setup",
  //       "Authentication",
  //       "Email & Google Login",
  //       "Cloud Firestore",
  //       "Real-Time Data",
  //       "CRUD Operations",
  //       "Cloud Storage",
  //       "Media Uploads",
  //       "Firebase Cloud Messaging",
  //       "Push Notifications"
  //     ]
  //   },
  //   {
  //     title: "Module 8: AI Integration, Testing & Deployment",
  //     topics: [
  //       "AI APIs & Services",
  //       "AI Mobile Features",
  //       "Unit & Widget Testing",
  //       "Integration Testing",
  //       "Flutter DevTools",
  //       "Performance Profiling",
  //       "CPU & Memory Monitoring",
  //       "App Optimization",
  //       "App Icons & Splash Screen",
  //       "Android AAB Build",
  //       "Play Store & App Store Deployment"
  //     ]
  //   },
  //   {
  //     title: "Final Capstone Project",
  //     topics: [
  //       "Production Flutter Application",
  //       "Responsive UI",
  //       "State Management",
  //       "REST API Integration",
  //       "Firebase Authentication",
  //       "Firestore Database",
  //       "Local Storage",
  //       "Push Notifications",
  //       "AI Feature Integration",
  //       "Performance Optimization",
  //       "GitHub Version Control",
  //       "Android & iOS Release",
  //       "Final Presentation"
  //     ]
  //   }
  // ],

  // faqs: [
  //   {
  //     question: "Do I need prior Flutter knowledge?",
  //     answer:
  //       "No. The course begins with Dart programming and gradually progresses to advanced Flutter application development."
  //   },
  //   {
  //     question: "Will I build apps for both Android and iOS?",
  //     answer:
  //       "Yes. Flutter allows you to develop a single codebase that runs on both Android and iOS platforms."
  //   },
  //   {
  //     question: "Does this course include Firebase?",
  //     answer:
  //       "Absolutely. You'll implement authentication, Firestore, cloud storage, and push notifications using Firebase."
  //   },
  //   {
  //     question: "Will I publish my mobile app?",
  //     answer:
  //       "Yes. The capstone includes generating Android App Bundles (.aab) and deploying applications to the Google Play Store, with iOS deployment guidance included."
  //   }
  // ],

  // featured: true,
  // color: "from-sky-500 to-blue-700",
  // icon: "Smartphone"
  // },
  {
  id: "18",
  slug: "machine-learning-professional",
  name: "Master Certificate in Machine Learning Professional",

  shortDescription:
    "Master Python, Machine Learning, Deep Learning, TensorFlow, model deployment, and build production-ready AI applications.",

  fullDescription:
    "A comprehensive master-level Machine Learning program that takes learners from mathematical foundations to real-world AI model deployment. Learn supervised and unsupervised learning, feature engineering, model evaluation, TensorFlow, Keras, Streamlit, Flask, MLOps fundamentals, and build end-to-end machine learning solutions for business problems.",

  category: "ai",
  level: "advanced",
  duration: "4 Months",
  durationWeeks: 16,
  hours: "160 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Python",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "Streamlit",
    "Flask",
    "Git & GitHub"
  ],

  projects: [
    "Customer Churn Prediction",
    "House Price Prediction",
    "Sales Forecasting Model",
    "Image Classification Prototype",
    "End-to-End Machine Learning Deployment"
  ],

  careerPaths: [
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Scientist",
    "ML Research Associate",
    "Applied AI Developer"
  ],

  learningOutcomes: [
    "Understand the complete machine learning lifecycle",
    "Apply mathematics, probability, and statistics in ML",
    "Build regression, classification, clustering, and ensemble models",
    "Evaluate and optimize models using cross-validation and hyperparameter tuning",
    "Develop neural networks using TensorFlow and Keras",
    "Create explainable and production-ready machine learning solutions",
    "Deploy ML models using Streamlit and Flask APIs",
    "Implement foundational MLOps and model monitoring practices"
  ],

  prerequisites: [
    "Basic Python programming knowledge recommended",
    "Familiarity with high school mathematics is helpful",
    "Laptop with Python development environment"
  ],

  whoIsItFor: [
    "Engineering students",
    "Aspiring Data Scientists",
    "Python developers",
    "AI enthusiasts",
    "Working professionals entering ML"
  ],

  syllabus: [
    {
      title: "Module 1: ML Foundations & Development Setup",
      topics: [
        "Machine Learning Workflow",
        "Linear Algebra",
        "Vectors & Matrices",
        "Eigenvalues",
        "Basic Calculus",
        "Gradients",
        "Probability & Bayes' Theorem",
        "NumPy & Pandas",
        "Matplotlib & Seaborn",
        "Data Cleaning",
        "Missing Values",
        "Feature Scaling & Selection"
      ]
    },
    {
      title: "Module 2: Core Machine Learning Algorithms",
      topics: [
        "Linear & Polynomial Regression",
        "Ridge & Lasso Regression",
        "Logistic Regression",
        "Decision Trees",
        "Support Vector Machines",
        "KNN",
        "Naive Bayes",
        "Random Forest",
        "Bagging & Boosting",
        "AdaBoost & XGBoost",
        "K-Means",
        "Hierarchical Clustering",
        "DBSCAN",
        "PCA"
      ]
    },
    {
      title: "Module 3: Model Evaluation & Advanced ML",
      topics: [
        "Train-Test Split",
        "Cross Validation",
        "Evaluation Metrics",
        "Bias-Variance Tradeoff",
        "Overfitting & Underfitting",
        "Regularization",
        "Grid Search",
        "Feature Engineering",
        "Neural Networks",
        "CNN Introduction",
        "TensorFlow",
        "Keras",
        "AI-Assisted ML Workflows"
      ]
    },
    {
      title: "Module 4: Model Deployment & MLOps",
      topics: [
        "Model Serialization",
        "Saving & Loading Models",
        "Streamlit Applications",
        "Flask ML APIs",
        "REST API Integration",
        "Prediction Services",
        "Model Monitoring",
        "Performance Tracking",
        "MLOps Fundamentals",
        "Deployment Best Practices"
      ]
    },
    {
      title: "Final Capstone Project",
      topics: [
        "Business Problem Definition",
        "Dataset Preparation",
        "Exploratory Data Analysis",
        "Feature Engineering",
        "Model Development",
        "Algorithm Comparison",
        "Hyperparameter Tuning",
        "Prediction & Visualization",
        "Explainable AI",
        "Streamlit/Flask Deployment",
        "GitHub Integration",
        "Final Presentation"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need prior machine learning experience?",
      answer:
        "Basic Python knowledge is recommended, but the course teaches machine learning concepts from the ground up."
    },
    {
      question: "Will I learn TensorFlow and Deep Learning?",
      answer:
        "Yes. The curriculum includes neural networks, TensorFlow, Keras, and an introduction to CNNs."
    },
    {
      question: "Does this course include deployment?",
      answer:
        "Absolutely. You'll deploy machine learning models using Streamlit and Flask with REST API integration."
    },
    {
      question: "Will I build an industry-level ML project?",
      answer:
        "Yes. The capstone covers the complete ML lifecycle from business problem definition to deployment and presentation."
    }
  ],

  featured: true,
  color: "from-purple-700 to-indigo-600",
  icon: "Brain"
  },
  {
  id: "19",
  slug: "java-backend-developer",
  name: "Master Certificate in Java Backend Developer",

  shortDescription:
    "Master Java, Spring Boot, REST APIs, Hibernate, Microservices, Docker, Kafka, and build enterprise backend applications.",

  fullDescription:
    "A comprehensive master-level backend development program focused on enterprise Java technologies. Learn Core Java, Spring Boot, Hibernate, JPA, Spring Security, JWT, OAuth2, Microservices, Kafka, Redis, Docker, CI/CD, and AI-assisted backend development while building production-grade scalable applications.",

  category: "programming",
  level: "advanced",
  duration: "4 Months",
  durationWeeks: 16,
  hours: "160 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Hibernate",
    "JPA",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Apache Kafka",
    "Docker",
    "GitHub Actions"
  ],

  projects: [
    "E-Commerce Backend API",
    "Banking Management System",
    "JWT Authentication Service",
    "Microservices Event Platform",
    "Enterprise Spring Boot Capstone"
  ],

  careerPaths: [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Backend Software Engineer",
    "Microservices Developer",
    "Enterprise Application Developer"
  ],

  learningOutcomes: [
    "Build enterprise applications using modern Java and Spring Boot",
    "Design layered architectures with Spring Data JPA and Hibernate",
    "Develop secure REST APIs using JWT and OAuth2",
    "Implement caching with Redis and messaging with Kafka",
    "Create scalable microservices with API gateway concepts",
    "Write unit and integration tests using JUnit and Mockito",
    "Containerize applications using Docker and Docker Compose",
    "Automate deployment with GitHub Actions and CI/CD pipelines",
    "Leverage AI tools for backend productivity and code quality"
  ],

  prerequisites: [
    "Basic Java programming knowledge recommended",
    "Understanding of OOP concepts",
    "Laptop with Java development environment"
  ],

  whoIsItFor: [
    "Java developers",
    "Engineering students",
    "Backend development aspirants",
    "Software professionals",
    "Full Stack developers focusing on backend"
  ],

  syllabus: [
    {
      title: "Module 1: Core & Advanced Java",
      topics: [
        "Object-Oriented Programming",
        "Classes & Objects",
        "Encapsulation & Inheritance",
        "Polymorphism & Abstraction",
        "Collections Framework",
        "List, Set, Map & Queue",
        "Generics",
        "Exception Handling",
        "Custom Exceptions",
        "Debugging Techniques",
        "Multithreading & Concurrency",
        "Synchronization",
        "Functional Interfaces",
        "Lambda Expressions",
        "Stream API",
        "Modern Java Features"
      ]
    },
    {
      title: "Module 2: Development Tools, Databases & Persistence",
      topics: [
        "Maven & Gradle",
        "Project & Dependency Management",
        "Git & GitHub Workflow",
        "MySQL & PostgreSQL",
        "SQL Integration & JDBC",
        "Hibernate ORM",
        "JPA & Spring Data JPA",
        "Entity Mapping & Relationships",
        "CRUD Operations",
        "Transactions & Query Methods",
        "Redis Caching"
      ]
    },
    {
      title: "Module 3: Spring Framework & RESTful Web Services",
      topics: [
        "Spring IoC & Dependency Injection",
        "Spring Beans & Spring Boot",
        "Project Configuration",
        "REST API Development",
        "Controllers, Services & Repositories",
        "Request Mapping & Validation",
        "DTOs",
        "Global Exception Handling",
        "Spring Security",
        "JWT Authentication",
        "OAuth 2.0",
        "Role-Based Access Control",
        "Swagger/OpenAPI Documentation"
      ]
    },
    {
      title: "Module 4: Advanced Architecture, Microservices & Testing",
      topics: [
        "Microservices Architecture",
        "Monolithic vs Microservices",
        "Service Discovery",
        "Inter-Service Communication",
        "API Gateway Concepts",
        "Apache Kafka",
        "Event-Driven Architecture",
        "Message Producers & Consumers",
        "JUnit",
        "Mockito",
        "Integration Testing",
        "Application Logging",
        "Performance & Scalability"
      ]
    },
    {
      title: "Module 5: DevOps, Containerization & CI/CD",
      topics: [
        "Docker Fundamentals",
        "Dockerfiles",
        "Docker Images & Containers",
        "Docker Compose",
        "Containerizing Spring Boot",
        "Environment Configuration",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Automated Build & Testing",
        "Deployment Workflows",
        "Cloud Deployment Concepts"
      ]
    },
    {
      title: "Module 6: AI-Assisted Backend Development",
      topics: [
        "AI-Powered Code Generation",
        "Debugging with AI",
        "Test Case Generation",
        "API Documentation Assistance",
        "SQL Query Assistance",
        "Code Refactoring",
        "AI-Assisted Code Review",
        "Developer Productivity",
        "Responsible AI Usage"
      ]
    },
    {
      title: "Final Enterprise Capstone Project",
      topics: [
        "Production Spring Boot Backend",
        "RESTful API Development",
        "Layered Architecture",
        "MySQL/PostgreSQL Integration",
        "JPA & Hibernate",
        "Spring Security",
        "JWT/OAuth2 Authentication",
        "Redis Caching",
        "Kafka Event Processing",
        "Microservices Architecture",
        "Docker Containerization",
        "JUnit & Mockito Testing",
        "GitHub Actions CI/CD",
        "Swagger Documentation",
        "Deployment & Final Presentation"
      ]
    }
  ],

  faqs: [
    {
      question: "Is this course suitable after Core Java?",
      answer:
        "Yes. It's designed for learners with basic Java knowledge who want to become enterprise backend developers."
    },
    {
      question: "Will I learn Spring Boot and Microservices?",
      answer:
        "Yes. The curriculum covers Spring Boot, Spring Security, REST APIs, Kafka, Redis, and Microservices architecture."
    },
    {
      question: "Does this course include DevOps practices?",
      answer:
        "Absolutely. You'll learn Docker, GitHub Actions, CI/CD pipelines, and deployment workflows."
    },
    {
      question: "Will I build an enterprise-level backend project?",
      answer:
        "Yes. The capstone includes authentication, databases, caching, messaging, testing, Docker, CI/CD, and production deployment."
    }
  ],

  featured: true,
  color: "from-teal-600 to-emerald-600",
  icon: "Server"
  },
  {
  id: "20",
  slug: "python-backend-developer",
  name: "Master Certificate in Python Backend Developer",

  shortDescription:
    "Master Python, FastAPI, Django, PostgreSQL, Redis, Docker, CI/CD, and build enterprise-grade backend applications.",

  fullDescription:
    "A comprehensive master-level backend development program focused on modern Python technologies. Learn Core Python, Object-Oriented Programming, SQL, FastAPI, Django, REST APIs, authentication, Redis, Celery, MongoDB, Docker, GitHub Actions, and AI-assisted development while building scalable production-ready backend services.",

  category: "programming",
  level: "advanced",
  duration: "4 Months",
  durationWeeks: 16,
  hours: "160 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Python",
    "FastAPI",
    "Django",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQLAlchemy",
    "Redis",
    "Celery",
    "Docker",
    "GitHub Actions"
  ],

  projects: [
    "E-Commerce Backend API",
    "Hospital Management Backend",
    "JWT Authentication Service",
    "Task Management REST API",
    "Enterprise Python Backend Capstone"
  ],

  careerPaths: [
    "Python Backend Developer",
    "FastAPI Developer",
    "Django Developer",
    "Backend Software Engineer",
    "API Developer"
  ],

  learningOutcomes: [
    "Build scalable backend applications using Python and OOP",
    "Design RESTful APIs with FastAPI and Django",
    "Work with PostgreSQL, MySQL, MongoDB, and ORMs",
    "Implement JWT authentication and role-based authorization",
    "Optimize applications using Redis caching and Celery",
    "Containerize and deploy applications with Docker",
    "Automate testing and CI/CD using GitHub Actions",
    "Develop AI-enabled backend services with modern APIs"
  ],

  prerequisites: [
    "Basic Python programming knowledge recommended",
    "Understanding of programming fundamentals",
    "Laptop with Python development environment"
  ],

  whoIsItFor: [
    "Python developers",
    "Engineering students",
    "Backend development aspirants",
    "Software professionals",
    "Full Stack developers focusing on backend"
  ],

  syllabus: [
    {
      title: "Module 1: Core Python & Object-Oriented Programming",
      topics: [
        "Python Syntax & Data Types",
        "Variables & Operators",
        "Conditional Statements & Loops",
        "Lists, Tuples, Dictionaries & Sets",
        "Functions",
        "Generators & Iterators",
        "Decorators",
        "Exception Handling",
        "Custom Exceptions",
        "Classes & Objects",
        "Inheritance & Polymorphism",
        "Advanced OOP"
      ]
    },
    {
      title: "Module 2: Databases, SQL & ORM",
      topics: [
        "MySQL & PostgreSQL",
        "SQL Queries",
        "CRUD Operations",
        "Filtering & Sorting",
        "Joins & Aggregations",
        "Transactions",
        "Database Relationships",
        "SQLAlchemy",
        "Django ORM",
        "Models & QuerySets"
      ]
    },
    {
      title: "Module 3: Backend Frameworks & RESTful APIs",
      topics: [
        "HTTP/HTTPS Fundamentals",
        "Request-Response Lifecycle",
        "FastAPI",
        "Flask Fundamentals",
        "Django Framework",
        "Routing & Views",
        "Templates",
        "Django Admin",
        "Asynchronous Programming",
        "REST API Development",
        "API Versioning",
        "Swagger/OpenAPI"
      ]
    },
    {
      title: "Module 4: Security, Testing & Deployment",
      topics: [
        "JWT Authentication",
        "Session Management",
        "bcrypt Password Hashing",
        "CORS",
        "RBAC",
        "Data Validation",
        "API Security",
        "pytest & unittest",
        "Git & GitHub",
        "Docker",
        "Render Deployment"
      ]
    },
    {
      title: "Module 5: Advanced Backend Development",
      topics: [
        "Redis Caching",
        "Celery",
        "Background Jobs",
        "Task Queues",
        "Scheduled Tasks",
        "MongoDB",
        "NoSQL Integration",
        "Database Optimization",
        "API Performance",
        "Logging & Monitoring",
        "Scalable Architecture",
        "AI API Integration"
      ]
    },
    {
      title: "Module 6: AI-Assisted Backend Development & DevOps",
      topics: [
        "AI Code Generation",
        "Debugging with AI",
        "API Development Assistance",
        "Automated Test Generation",
        "AI Documentation",
        "Code Refactoring",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Docker Workflows",
        "Production Deployment"
      ]
    },
    {
      title: "Final Enterprise Capstone Project",
      topics: [
        "Production Python Backend",
        "FastAPI/Django REST API",
        "PostgreSQL & MongoDB",
        "SQLAlchemy/Django ORM",
        "JWT Authentication",
        "RBAC",
        "Redis Cache",
        "Celery Background Tasks",
        "Automated Testing",
        "Docker Deployment",
        "GitHub Actions CI/CD",
        "Cloud Deployment",
        "Final Presentation"
      ]
    }
  ],

  faqs: [
    {
      question: "Will I learn both FastAPI and Django?",
      answer:
        "Yes. The course covers FastAPI for high-performance APIs and Django for enterprise web applications."
    },
    {
      question: "Does this course include databases and caching?",
      answer:
        "Absolutely. You'll work with PostgreSQL, MySQL, MongoDB, SQLAlchemy, Django ORM, and Redis caching."
    },
    {
      question: "Will I deploy production-ready backend applications?",
      answer:
        "Yes. You'll containerize applications with Docker, implement CI/CD using GitHub Actions, and deploy to cloud platforms."
    },
    {
      question: "Is AI integrated into backend development?",
      answer:
        "Yes. The curriculum includes AI-assisted coding, debugging, documentation, testing, and backend productivity workflows."
    }
  ],

  featured: true,
  color: "from-green-600 to-emerald-500",
  icon: "Server"
  },
  {
  id: "21",
  slug: "data-science-professional",
  name: "Master Certificate in Data Science Professional",

  shortDescription:
    "Master Python, SQL, Statistics, Machine Learning, Deep Learning, Big Data, and deploy end-to-end AI solutions.",

  fullDescription:
    "A comprehensive master-level Data Science program that prepares learners for careers in AI and data-driven decision making. Learn Python, SQL, mathematics, exploratory data analysis, machine learning, deep learning, NLP, big data technologies, cloud platforms, and MLOps while building industry-ready end-to-end data science projects.",

  category: "ai",
  level: "advanced",
  duration: "4 Months",
  durationWeeks: 16,
  hours: "160 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "SQL",
    "Power BI",
    "Tableau",
    "Scikit-learn",
    "TensorFlow",
    "Apache Spark",
    "AWS"
  ],

  projects: [
    "Customer Churn Prediction",
    "Sales Forecasting Dashboard",
    "Sentiment Analysis System",
    "Deep Learning Image Classifier",
    "End-to-End Data Science Capstone"
  ],

  careerPaths: [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Business Intelligence Analyst",
    "Research Data Analyst"
  ],

  learningOutcomes: [
    "Program efficiently using Python for data science workflows",
    "Manage structured and unstructured databases using SQL and NoSQL",
    "Apply mathematics, probability, and statistics to real-world datasets",
    "Perform exploratory data analysis and advanced visualization",
    "Build machine learning and deep learning models",
    "Develop NLP applications including sentiment analysis",
    "Process large-scale datasets using Spark and Big Data concepts",
    "Deploy production-ready AI models using cloud and MLOps practices"
  ],

  prerequisites: [
    "Basic programming knowledge is helpful",
    "High school mathematics recommended",
    "Laptop with Python development environment"
  ],

  whoIsItFor: [
    "Engineering students",
    "Aspiring Data Scientists",
    "Python developers",
    "AI & Analytics enthusiasts",
    "Working professionals transitioning into Data Science"
  ],

  syllabus: [
    {
      title: "Module 1: Programming & Databases",
      topics: [
        "Python Programming",
        "Syntax & Functions",
        "Loops & OOP",
        "Pandas & NumPy",
        "SQL",
        "NoSQL Databases",
        "Large Dataset Management",
        "Git & GitHub"
      ]
    },
    {
      title: "Module 2: Mathematics & Statistics",
      topics: [
        "Linear Algebra",
        "Matrices & Vectors",
        "Eigenvalues",
        "Calculus & Derivatives",
        "Optimization",
        "Probability",
        "Distributions",
        "Random Variables",
        "Conditional Probability",
        "Hypothesis Testing",
        "P-Values",
        "Confidence Intervals"
      ]
    },
    {
      title: "Module 3: Data Analysis & Visualization",
      topics: [
        "Exploratory Data Analysis",
        "Pattern Detection",
        "Anomaly Detection",
        "Data Cleaning",
        "Missing Values",
        "Outlier Detection",
        "Data Transformation",
        "Matplotlib",
        "Seaborn",
        "Tableau",
        "Power BI"
      ]
    },
    {
      title: "Module 4: Machine Learning & AI",
      topics: [
        "Supervised Learning",
        "Regression & Classification",
        "Decision Trees",
        "Random Forest",
        "K-Means Clustering",
        "PCA",
        "Artificial Neural Networks",
        "CNN",
        "RNN",
        "Natural Language Processing",
        "Sentiment Analysis"
      ]
    },
    {
      title: "Module 5: Big Data & Deployment",
      topics: [
        "Big Data Concepts",
        "Hadoop",
        "Apache Spark",
        "Large-Scale Processing",
        "AWS",
        "Google Cloud",
        "Microsoft Azure",
        "Cloud Computing",
        "MLOps",
        "Model Deployment",
        "APIs",
        "Containerization",
        "Production Deployment"
      ]
    },
    {
      title: "Final Capstone Project",
      topics: [
        "Business Problem Definition",
        "Data Collection",
        "Data Cleaning",
        "EDA",
        "Feature Engineering",
        "Machine Learning Model",
        "Deep Learning Implementation",
        "Visualization Dashboard",
        "Cloud Deployment",
        "Project Documentation",
        "Portfolio Presentation"
      ]
    }
  ],

  faqs: [
    {
      question: "Is this suitable for beginners in Data Science?",
      answer:
        "Yes. The course starts with Python, SQL, and mathematics before progressing into machine learning and deep learning."
    },
    {
      question: "Will I learn both Machine Learning and Deep Learning?",
      answer:
        "Absolutely. The curriculum includes regression, classification, clustering, ANN, CNN, RNN, and NLP."
    },
    {
      question: "Does the course include cloud and Big Data technologies?",
      answer:
        "Yes. You'll learn Hadoop, Apache Spark, AWS, Google Cloud, Azure, and MLOps deployment fundamentals."
    },
    {
      question: "Will I build an industry-ready portfolio?",
      answer:
        "Yes. The capstone project includes an end-to-end data science workflow suitable for professional portfolios and interviews."
    }
  ],

  featured: true,
  color: "from-blue-700 to-purple-600",
  icon: "Brain"
  },
  // {
  // id: "22",
  // slug: "ai-digital-marketing-specialist",
  // name: "Master Certificate in AI Digital Marketing Specialist",

  // shortDescription:
  //   "Master AI-powered SEO, content marketing, paid ads, social media automation, GA4, and performance marketing.",

  // fullDescription:
  //   "A comprehensive master-level digital marketing program that combines modern AI tools with professional marketing strategies. Learn SEO, AEO, GEO, AI content creation, PPC advertising, social media automation, Google Analytics 4, conversion optimization, and build real-world marketing campaigns with industry-ready portfolios.",

  // category: "ai",
  // level: "advanced",
  // duration: "4 Months",
  // durationWeeks: 16,
  // hours: "160 Hours",

  // mode: "Online / Offline",

  // batchOptions: [
  //   "Weekday Batch",
  //   "Weekend Batch",
  //   "Corporate Fast Track"
  // ],

  // technologies: [
  //   "ChatGPT",
  //   "Claude",
  //   "Gemini",
  //   "Google Analytics 4",
  //   "Looker Studio",
  //   "Google Ads",
  //   "SurferSEO",
  //   "Midjourney"
  // ],

  // projects: [
  //   "AI SEO Strategy Project",
  //   "Performance Marketing Campaign",
  //   "Social Media Automation System",
  //   "GA4 Analytics Dashboard",
  //   "Complete Digital Marketing Capstone"
  // ],

  // careerPaths: [
  //   "AI Digital Marketing Specialist",
  //   "SEO Specialist",
  //   "Performance Marketing Analyst",
  //   "Content Marketing Strategist",
  //   "Growth Marketing Executive"
  // ],

  // learningOutcomes: [
  //   "Leverage Generative AI tools for modern marketing workflows",
  //   "Create SEO-optimized content using AI and keyword research",
  //   "Run AI-powered Google Ads and Performance Max campaigns",
  //   "Automate social media publishing and audience engagement",
  //   "Analyze campaign performance using GA4 and Looker Studio",
  //   "Improve conversions through CRO and A/B testing",
  //   "Develop AI-assisted marketing strategies for businesses",
  //   "Build a professional digital marketing portfolio with live campaigns"
  // ],

  // prerequisites: [
  //   "No prior marketing experience required",
  //   "Basic computer and internet skills",
  //   "Suitable for students, entrepreneurs, and professionals"
  // ],

  // whoIsItFor: [
  //   "Marketing students",
  //   "Business owners",
  //   "Content creators",
  //   "Freelancers",
  //   "Aspiring digital marketing professionals"
  // ],

  // syllabus: [
  //   {
  //     title: "Module 1: Foundations & AI Core",
  //     topics: [
  //       "AI & Machine Learning in Marketing",
  //       "AI Marketing Applications",
  //       "Prompt Engineering",
  //       "AI Marketing Strategy",
  //       "Consumer Behavior",
  //       "Data Privacy & GDPR",
  //       "Generative AI Ecosystem",
  //       "ChatGPT, Claude & Gemini"
  //     ]
  //   },
  //   {
  //     title: "Module 2: AI in Content & SEO",
  //     topics: [
  //       "AI Keyword Research",
  //       "Topic Clustering",
  //       "AI Content Generation",
  //       "Content Scaling",
  //       "Jasper & Copy.ai",
  //       "Technical SEO",
  //       "On-Page SEO",
  //       "SEO Optimization",
  //       "SurferSEO",
  //       "AEO & GEO",
  //       "AI Content Strategy"
  //     ]
  //   },
  //   {
  //     title: "Module 3: Paid Ads & Social Media Automation",
  //     topics: [
  //       "Google Performance Max",
  //       "Smart Bidding",
  //       "PPC Campaigns",
  //       "Social Media Marketing",
  //       "Scheduling Automation",
  //       "Social Listening",
  //       "Sentiment Analysis",
  //       "AI Audience Targeting",
  //       "Visual Asset Creation",
  //       "Midjourney",
  //       "AI Chatbots",
  //       "Marketing Automation"
  //     ]
  //   },
  //   {
  //     title: "Module 4: Analytics, Testing & Capstone",
  //     topics: [
  //       "Google Analytics 4",
  //       "Marketing Data Analysis",
  //       "Looker Studio",
  //       "Campaign Tracking",
  //       "Conversion Rate Optimization",
  //       "Automated A/B Testing",
  //       "Performance Measurement",
  //       "Campaign Optimization",
  //       "Portfolio Development",
  //       "Final Marketing Campaign"
  //     ]
  //   },
  //   {
  //     title: "Final Capstone Project",
  //     topics: [
  //       "End-to-End Marketing Strategy",
  //       "SEO & Content Plan",
  //       "AI Campaign Creation",
  //       "Google Ads Optimization",
  //       "Social Media Automation",
  //       "GA4 Analytics Dashboard",
  //       "Conversion Optimization",
  //       "Performance Reporting",
  //       "Portfolio Presentation"
  //     ]
  //   }
  // ],

  // faqs: [
  //   {
  //     question: "Do I need prior marketing experience?",
  //     answer:
  //       "No. The course starts from digital marketing fundamentals and gradually introduces AI-powered marketing workflows."
  //   },
  //   {
  //     question: "Will I learn modern SEO including AEO and GEO?",
  //     answer:
  //       "Yes. The curriculum includes Technical SEO, On-Page SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO)."
  //   },
  //   {
  //     question: "Does this course include Google Analytics 4 and paid advertising?",
  //     answer:
  //       "Absolutely. You'll work with GA4, Looker Studio, Google Performance Max, Smart Bidding, and campaign optimization."
  //   },
  //   {
  //     question: "Will I build a professional marketing portfolio?",
  //     answer:
  //       "Yes. You'll complete real-world SEO, content, paid ads, analytics, and automation projects suitable for client work and job interviews."
  //   }
  // ],

  // featured: true,
  // color: "from-orange-500 to-pink-600",
  // icon: "Megaphone"
  // },
  {
  id: "23",
  slug: "full-stack-python-developer-generative-ai-llms",
  name: "Professional Certificate in Full Stack Python Developer (Generative AI & LLMs)",

  shortDescription:
    "Become a full-stack AI developer by mastering Python, React, FastAPI, PostgreSQL, LLMs, RAG, LangChain, LangGraph, and Agentic AI.",

  fullDescription:
    "A comprehensive professional program that combines modern full-stack web development with Generative AI and Large Language Models. Learn Python, React, FastAPI, PostgreSQL, MongoDB, JWT authentication, LangChain, ChromaDB, RAG, AI Agents, Ollama, Docker, CI/CD, and build production-ready AI SaaS applications and autonomous agentic workflows.",

  category: "programming",
  level: "advanced",
  duration: "6 Months",
  durationWeeks: 24,
  hours: "240 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Python",
    "React",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "LangChain",
    "LangGraph",
    "ChromaDB",
    "Gemini API",
    "Docker",
    "Ollama",
    "GitHub Actions"
  ],

  projects: [
    "Intelligent AI SaaS Platform",
    "PDF Knowledge Chatbot (RAG)",
    "Agentic AI Automation System",
    "LLM-Powered Data Analysis Tool",
    "Production Full Stack AI Web Application"
  ],

  careerPaths: [
    "Full Stack Python Developer",
    "Generative AI Engineer",
    "LLM Application Developer",
    "AI Backend Developer",
    "AI Solutions Engineer"
  ],

  learningOutcomes: [
    "Master Python programming with advanced OOP and modular development",
    "Build responsive React applications with modern JavaScript and Tailwind CSS",
    "Develop secure REST APIs using FastAPI, JWT, and OAuth2",
    "Design relational and NoSQL databases using PostgreSQL and MongoDB",
    "Create LLM applications with Gemini, LangChain, and structured outputs",
    "Implement RAG systems using embeddings, ChromaDB, and semantic search",
    "Build autonomous AI agents using LangGraph and CrewAI",
    "Deploy production-ready AI SaaS applications using Docker and Render",
    "Manage collaborative development using Git, GitHub, CI/CD, and automated testing"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "No prior full-stack experience required",
    "Laptop with Windows, macOS, or Linux"
  ],

  whoIsItFor: [
    "Engineering students",
    "Aspiring Full Stack Developers",
    "Python developers entering AI",
    "Software professionals",
    "Entrepreneurs building AI products"
  ],

  syllabus: [
    {
      title: "Module 1: Core Python Programming & Data Structures",
      topics: [
        "Python Syntax & Variables",
        "Data Types & Operators",
        "Conditional Statements & Loops",
        "Functions, Lambda, *args & **kwargs",
        "Lists, Tuples, Sets & Dictionaries",
        "Comprehensions",
        "Modules & Packages",
        "Object-Oriented Programming",
        "Inheritance & Polymorphism",
        "File Handling",
        "Regular Expressions",
        "Exception Handling",
        "Virtual Environment & pip"
      ]
    },
    {
      title: "Module 2: Frontend Web Development (React)",
      topics: [
        "HTML5 & Semantic HTML",
        "CSS3, Flexbox & Grid",
        "Responsive Design",
        "Tailwind CSS",
        "JavaScript ES6+",
        "DOM Manipulation",
        "Promises & Async/Await",
        "Fetch API",
        "React Components & JSX",
        "Props & State",
        "React Hooks",
        "React Router",
        "Backend API Integration"
      ]
    },
    {
      title: "Module 3: Backend Development & Database Management",
      topics: [
        "FastAPI Fundamentals",
        "REST API Development",
        "Pydantic Validation",
        "Dependency Injection",
        "JWT Authentication",
        "OAuth2 Authorization",
        "PostgreSQL & MySQL",
        "SQL Queries & Indexing",
        "MongoDB",
        "CRUD Operations",
        "File Upload APIs",
        "Backend Security",
        "Swagger Documentation"
      ]
    },
    {
      title: "Module 4: Artificial Intelligence, LLMs & Agentic AI",
      topics: [
        "NumPy & Pandas",
        "Data Cleaning",
        "Machine Learning Basics",
        "Regression & Classification",
        "Large Language Models",
        "Prompt Engineering",
        "Gemini API Integration",
        "Structured Output with Pydantic",
        "LangChain",
        "Prompt Templates",
        "Output Parsers",
        "ChromaDB",
        "Embeddings",
        "Document Chunking",
        "Semantic Search",
        "Retrieval-Augmented Generation",
        "PDF Knowledge Chatbot",
        "LangGraph",
        "CrewAI",
        "Agentic AI Workflows"
      ]
    },
    {
      title: "Module 5: Deployment, Testing & Professional Development",
      topics: [
        "Git & GitHub",
        "Branching & Pull Requests",
        "Docker & Docker Compose",
        "Environment Variables",
        "Full Stack Containerization",
        "Ollama",
        "Local Gemma & Llama Models",
        "FastAPI + Ollama Integration",
        "Render Deployment",
        "React Deployment",
        "PostgreSQL on Render",
        "PyTest",
        "API Testing",
        "GitHub Actions",
        "Continuous Integration",
        "Portfolio Publishing"
      ]
    },
    {
      title: "Capstone Project 1: Intelligent AI SaaS Platform",
      topics: [
        "React Frontend",
        "FastAPI Backend",
        "PostgreSQL Database",
        "JWT Authentication",
        "Gemini AI Chatbot",
        "Documentation Knowledge Base",
        "ChromaDB Vector Search",
        "RAG Implementation",
        "Render Deployment",
        "GitHub Portfolio"
      ]
    },
    {
      title: "Capstone Project 2: Agentic AI Automation System",
      topics: [
        "LangGraph AI Agent",
        "CrewAI Multi-Agent Workflow",
        "User Request Processing",
        "Python File Automation",
        "LLM Data Analysis",
        "Database Automation",
        "Local LLM with Ollama",
        "Autonomous AI Workflow",
        "Production Deployment"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need prior programming knowledge?",
      answer:
        "No. The course begins with Python fundamentals and gradually progresses to full-stack development and Generative AI."
    },
    {
      question: "Will I build real AI applications?",
      answer:
        "Yes. You'll develop AI SaaS platforms, RAG chatbots, autonomous AI agents, and production-ready full-stack applications."
    },
    {
      question: "Does this course include LangChain, LangGraph, and CrewAI?",
      answer:
        "Absolutely. The curriculum covers LangChain, ChromaDB, LangGraph, CrewAI, embeddings, RAG, and Agentic AI workflows."
    },
    {
      question: "Will I deploy my projects to the cloud?",
      answer:
        "Yes. You'll deploy React, FastAPI, PostgreSQL, and AI applications using Docker, Render, Ollama, and GitHub Actions CI/CD."
    }
  ],

  featured: true,
  color: "from-violet-700 to-cyan-500",
  icon: "Sparkles"
  },
  {
  id: "24",
  slug: "full-stack-java-developer-generative-ai-spring-ai",
  name: "Professional Certificate in Full Stack Java Developer (Generative AI & Spring AI)",

  shortDescription:
    "Master React, Spring Boot, PostgreSQL, Microservices, Spring AI, RAG, Ollama, Docker, and build enterprise AI applications.",

  fullDescription:
    "A comprehensive professional program that combines enterprise Java backend development with modern React frontend and Generative AI. Learn Spring Boot, Spring Security, PostgreSQL, MongoDB, Microservices, Spring AI, LangChain4j, ChromaDB, Retrieval-Augmented Generation (RAG), Ollama, Docker, CI/CD, and build production-ready AI-powered enterprise applications.",

  category: "programming",
  level: "advanced",
  duration: "6 Months",
  durationWeeks: 24,
  hours: "240 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Java",
    "React",
    "Spring Boot",
    "Spring Security",
    "Spring AI",
    "PostgreSQL",
    "MongoDB",
    "ChromaDB",
    "Ollama",
    "LangChain4j",
    "Docker",
    "GitHub Actions"
  ],

  projects: [
    "AI Enterprise SaaS Platform",
    "RAG Document Knowledge System",
    "Spring AI Chat Assistant",
    "Microservices Business Application",
    "Production Full Stack AI Enterprise Project"
  ],

  careerPaths: [
    "Full Stack Java Developer",
    "Spring Boot Developer",
    "Enterprise Backend Engineer",
    "Generative AI Java Developer",
    "AI Solutions Engineer"
  ],

  learningOutcomes: [
    "Develop responsive frontend applications using React and Bootstrap",
    "Build enterprise REST APIs using Spring Boot and Spring Security",
    "Design scalable relational and NoSQL databases",
    "Implement JWT authentication and microservices architecture",
    "Integrate Large Language Models using Spring AI and Gemini",
    "Build Retrieval-Augmented Generation (RAG) systems with ChromaDB",
    "Deploy local and cloud AI models using Ollama and Docker",
    "Create production-ready AI-powered enterprise applications with CI/CD"
  ],

  prerequisites: [
    "Basic programming knowledge is helpful",
    "No prior Spring Boot experience required",
    "Laptop with Java development environment"
  ],

  whoIsItFor: [
    "Engineering students",
    "Java developers",
    "Full Stack development aspirants",
    "Software professionals",
    "Developers transitioning into Generative AI"
  ],

  syllabus: [
    {
      title: "Module 1: Frontend & Web Foundation",
      topics: [
        "HTML5 & Semantic HTML",
        "CSS3, Flexbox & Grid",
        "Responsive Web Design",
        "Bootstrap 5",
        "Modern JavaScript (ES6+)",
        "DOM Manipulation",
        "Promises & Async/Await",
        "Fetch API",
        "React Fundamentals",
        "JSX & Components",
        "Props & State",
        "React Hooks",
        "React Router",
        "Backend API Integration"
      ]
    },
    {
      title: "Module 2: Core & Advanced Java",
      topics: [
        "Java Fundamentals",
        "Object-Oriented Programming",
        "Classes & Inheritance",
        "Polymorphism & Interfaces",
        "Exception Handling",
        "File Handling",
        "Collections Framework",
        "Generics",
        "Lambda Expressions",
        "Functional Interfaces",
        "Stream API",
        "Records (Java 17/21)",
        "Date & Time API",
        "Multithreading",
        "JDBC",
        "Servlets & JSP"
      ]
    },
    {
      title: "Module 3: Backend Frameworks & Enterprise Development",
      topics: [
        "Spring Framework",
        "Spring Boot",
        "Maven",
        "Dependency Injection",
        "Spring Beans",
        "REST API Architecture",
        "Validation",
        "Spring Data JPA",
        "Hibernate ORM",
        "Entity Relationships",
        "CRUD Development",
        "JWT Security",
        "Authentication & Authorization",
        "Microservices",
        "Spring Cloud",
        "Eureka",
        "API Gateway"
      ]
    },
    {
      title: "Module 4: Database Management",
      topics: [
        "Database Design",
        "ER Diagrams",
        "MySQL & PostgreSQL",
        "SQL Fundamentals",
        "Joins & Aggregations",
        "Stored Procedures",
        "Query Optimization",
        "Indexing",
        "Transactions",
        "MongoDB",
        "Document Collections",
        "Spring Boot Database Integration"
      ]
    },
    {
      title: "Module 5: Artificial Intelligence, LLMs & Spring AI",
      topics: [
        "AI Fundamentals",
        "Large Language Models",
        "Prompt Engineering",
        "Zero-shot & Few-shot Prompting",
        "Spring AI",
        "Gemini Integration",
        "OpenAI Concepts",
        "Ollama",
        "Structured AI Responses",
        "Embeddings",
        "ChromaDB",
        "Vector Databases",
        "Document Chunking",
        "Semantic Search",
        "RAG",
        "LangChain4j",
        "AI Agent Concepts"
      ]
    },
    {
      title: "Module 6: Professional Development, Deployment & Testing",
      topics: [
        "Git & GitHub",
        "Branching & Pull Requests",
        "Docker",
        "Docker Compose",
        "Spring Boot Containerization",
        "React Containerization",
        "Ollama Local Deployment",
        "Render Deployment",
        "Environment Variables",
        "JUnit Testing",
        "API Testing",
        "GitHub Actions",
        "Continuous Integration",
        "Portfolio Publishing"
      ]
    },
    {
      title: "Capstone Project: Industry Portfolio Builder",
      topics: [
        "AI Enterprise Application",
        "React Frontend",
        "Spring Boot REST Backend",
        "PostgreSQL Database",
        "JWT Authentication",
        "Spring AI Chat Assistant",
        "RAG Knowledge System",
        "ChromaDB Vector Search",
        "Ollama Local LLM",
        "Dockerized Deployment",
        "Render Hosting",
        "GitHub CI Pipeline"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need prior Spring Boot knowledge?",
      answer:
        "No. The course starts with Java fundamentals and gradually progresses into Spring Boot, Microservices, and Spring AI."
    },
    {
      question: "Will I learn both React and Spring Boot?",
      answer:
        "Yes. This is a complete full-stack program covering React frontend, Spring Boot backend, databases, authentication, and deployment."
    },
    {
      question: "Does this course include Generative AI and RAG?",
      answer:
        "Absolutely. You'll build AI chat applications using Spring AI, Gemini, LangChain4j, ChromaDB, embeddings, and Retrieval-Augmented Generation."
    },
    {
      question: "Will I deploy enterprise AI applications?",
      answer:
        "Yes. You'll containerize applications with Docker, integrate local LLMs using Ollama, deploy on Render, and automate CI/CD with GitHub Actions."
    }
  ],

  featured: true,
  color: "from-emerald-600 to-teal-500",
  icon: "Layers"
  },
  {
  id: "25",
  slug: "mern-stack-developer-generative-ai-agentic-applications",
  name: "AI-Powered Master Certificate in MERN Stack Developer (Generative AI & Agentic Applications)",

  shortDescription:
    "Master React, Node.js, Express, MongoDB, LLMs, RAG, LangChain.js, Ollama, and build production-ready AI-powered MERN applications.",

  fullDescription:
    "A comprehensive master-level MERN Stack program that combines modern full-stack JavaScript development with Generative AI and Agentic Applications. Learn React, Express, MongoDB, JWT authentication, LangChain.js, ChromaDB, Gemini API, RAG, AI agents, Docker, CI/CD, and deploy enterprise-grade intelligent SaaS platforms.",

  category: "development",
  level: "advanced",
  duration: "6 Months",
  durationWeeks: 24,
  hours: "240 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Tailwind CSS",
    "LangChain.js",
    "ChromaDB",
    "Gemini API",
    "Ollama",
    "Docker",
    "GitHub Actions"
  ],

  projects: [
    "AI-Powered SaaS Platform",
    "RAG Documentation Chatbot",
    "Intelligent Search Engine",
    "Agentic Business Automation System",
    "Production MERN AI Enterprise Application"
  ],

  careerPaths: [
    "MERN Stack Developer",
    "Full Stack JavaScript Developer",
    "AI Web Application Developer",
    "Generative AI Engineer",
    "Frontend & Backend Engineer"
  ],

  learningOutcomes: [
    "Build responsive web applications using React and Tailwind CSS",
    "Develop scalable REST APIs with Node.js and Express",
    "Design NoSQL databases using MongoDB and Mongoose",
    "Implement secure authentication using JWT",
    "Integrate Gemini and Hugging Face APIs into MERN applications",
    "Build RAG systems using LangChain.js and ChromaDB",
    "Create autonomous AI agents and intelligent business workflows",
    "Deploy production-ready MERN applications using Docker and Render",
    "Manage collaborative development using Git, GitHub, and CI/CD pipelines"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "No prior MERN experience required",
    "Laptop with Windows, macOS, or Linux"
  ],

  whoIsItFor: [
    "Engineering students",
    "Aspiring Full Stack Developers",
    "JavaScript developers",
    "AI enthusiasts",
    "Software professionals building intelligent web applications"
  ],

  syllabus: [
    {
      title: "Module 1: Frontend & UI Development",
      topics: [
        "HTML5 & Semantic HTML",
        "CSS3, Flexbox & Grid",
        "Responsive Web Design",
        "Tailwind CSS & Bootstrap 5",
        "Modern JavaScript (ES6+)",
        "DOM Manipulation",
        "Promises & Async/Await",
        "Fetch API",
        "React Components & JSX",
        "Props & State",
        "React Hooks",
        "React Router",
        "Backend API Integration",
        "GitHub Copilot",
        "ChatGPT UI Development",
        "AI Component Generation"
      ]
    },
    {
      title: "Module 2: Backend & REST API Development",
      topics: [
        "Node.js Fundamentals",
        "Event Loop",
        "NPM Ecosystem",
        "Express Framework",
        "Routing & Middleware",
        "Request & Response Handling",
        "Error Handling",
        "REST API Architecture",
        "CRUD API Development",
        "JWT Authentication",
        "OAuth Concepts",
        "Secure Sessions",
        "File Upload APIs",
        "API Documentation",
        "Environment Variables",
        "Backend Security"
      ]
    },
    {
      title: "Module 3: Database & Full Stack Data Management",
      topics: [
        "MongoDB Fundamentals",
        "Collections & Documents",
        "CRUD Operations",
        "Mongoose ODM",
        "Schema Design",
        "Relationships & Validation",
        "Aggregation Pipelines",
        "Indexing",
        "Pagination",
        "Database Optimization",
        "MongoDB Atlas",
        "File Storage Strategy",
        "Data Integration"
      ]
    },
    {
      title: "Module 4: Artificial Intelligence, LLMs & Agentic AI",
      topics: [
        "AI Fundamentals",
        "Large Language Models",
        "Prompt Engineering",
        "Zero-shot & Few-shot Prompting",
        "Gemini API",
        "OpenAI Concepts",
        "Hugging Face APIs",
        "LangChain.js",
        "Prompt Templates",
        "Output Parsers",
        "Embeddings",
        "ChromaDB",
        "Semantic Search",
        "Document Chunking",
        "Retrieval-Augmented Generation",
        "AI Chatbots",
        "Recommendation Engines",
        "AI Agents",
        "Agentic Applications"
      ]
    },
    {
      title: "Module 5: Professional Development, Deployment & Testing",
      topics: [
        "Git & GitHub",
        "Branching & Pull Requests",
        "Docker & Docker Compose",
        "MERN Containerization",
        "Ollama Setup",
        "Local Gemma & Llama Models",
        "Node.js + Ollama Integration",
        "Render Deployment",
        "MongoDB Atlas",
        "Environment Variables",
        "Jest Testing",
        "API Testing",
        "GitHub Actions",
        "Continuous Integration",
        "Production Configuration",
        "Portfolio Publishing"
      ]
    },
    {
      title: "Capstone Project 1: AI-Powered SaaS Platform",
      topics: [
        "React Frontend",
        "Express Backend",
        "MongoDB Database",
        "JWT Authentication",
        "Gemini AI Assistant",
        "Documentation Knowledge Base",
        "ChromaDB Vector Search",
        "RAG Implementation",
        "Render Deployment",
        "GitHub Portfolio"
      ]
    },
    {
      title: "Capstone Project 2: Agentic Business Automation System",
      topics: [
        "LangChain.js Workflow",
        "Multi-Step AI Agent",
        "User Request Processing",
        "Document Intelligence",
        "LLM Data Analysis",
        "Database Automation",
        "Local LLM with Ollama",
        "Autonomous AI Workflow",
        "Production Deployment"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need prior JavaScript knowledge?",
      answer:
        "No. The course starts with HTML, CSS, and JavaScript fundamentals before progressing into React, Node.js, and AI applications."
    },
    {
      question: "Will I learn both MERN Stack and Generative AI?",
      answer:
        "Yes. The curriculum combines React, Express, MongoDB, JWT, LangChain.js, Gemini, ChromaDB, and Agentic AI in one integrated program."
    },
    {
      question: "Does this course include RAG and AI agents?",
      answer:
        "Absolutely. You'll build Retrieval-Augmented Generation systems, semantic search, vector databases, and autonomous AI workflows using LangChain.js."
    },
    {
      question: "Will I deploy production-ready AI applications?",
      answer:
        "Yes. You'll containerize applications with Docker, integrate Ollama, deploy on Render, connect MongoDB Atlas, and automate CI/CD using GitHub Actions."
    }
  ],

  featured: true,
  color: "from-emerald-600 to-cyan-500",
  icon: "Globe"
  },
  {
  id: "26",
  slug: "mean-stack-developer-generative-ai-agentic-applications",
  name: "AI-Powered Master Certificate in MEAN Stack Developer (Generative AI & Agentic Applications)",

  shortDescription:
    "Master Angular, Node.js, Express, MongoDB, LLMs, RAG, LangChain.js, Ollama, and build enterprise AI-powered MEAN applications.",

  fullDescription:
    "A comprehensive master-level MEAN Stack program that combines modern Angular development with enterprise Node.js backend engineering and Generative AI. Learn TypeScript, Angular, Express, MongoDB, JWT authentication, NgRx, LangChain.js, ChromaDB, Gemini API, RAG, AI Agents, Docker, CI/CD, and deploy production-ready intelligent SaaS applications.",

  category: "development",
  level: "advanced",
  duration: "6 Months",
  durationWeeks: 24,
  hours: "240 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Angular",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "NgRx",
    "Tailwind CSS",
    "LangChain.js",
    "ChromaDB",
    "Gemini API",
    "Ollama",
    "Docker"
  ],

  projects: [
    "AI-Enhanced SaaS Platform",
    "RAG Enterprise Knowledge Base",
    "Intelligent CRM with Agentic AI",
    "AI E-Commerce Analytics Dashboard",
    "Production MEAN Enterprise Application"
  ],

  careerPaths: [
    "MEAN Stack Developer",
    "Angular Developer",
    "Full Stack JavaScript Engineer",
    "AI Application Developer",
    "Enterprise Software Developer"
  ],

  learningOutcomes: [
    "Build enterprise Angular applications with TypeScript and RxJS",
    "Develop secure REST APIs using Node.js and Express",
    "Design scalable NoSQL databases using MongoDB and Mongoose",
    "Implement JWT authentication and NgRx state management",
    "Integrate Gemini and open-source LLMs into web applications",
    "Build Retrieval-Augmented Generation systems using ChromaDB",
    "Create intelligent enterprise search and AI agent workflows",
    "Deploy Dockerized MEAN applications with CI/CD and Render",
    "Leverage AI coding assistants for modern software development"
  ],

  prerequisites: [
    "Basic programming knowledge is helpful",
    "No prior Angular experience required",
    "Laptop with Windows, macOS, or Linux"
  ],

  whoIsItFor: [
    "Engineering students",
    "Aspiring Full Stack Developers",
    "Angular developers",
    "Software professionals",
    "Developers interested in Generative AI"
  ],

  syllabus: [
    {
      title: "Module 1: Frontend Development (Angular & TypeScript)",
      topics: [
        "TypeScript Fundamentals",
        "Interfaces, Classes & Generics",
        "Decorators",
        "Angular Components & Templates",
        "Data Binding",
        "Directives & Pipes",
        "Reactive & Template Forms",
        "Angular Routing",
        "Services & Dependency Injection",
        "HTTP Client",
        "RxJS Observables",
        "NgRx State Management",
        "Tailwind CSS & Bootstrap",
        "Responsive UI Development",
        "Backend API Integration"
      ]
    },
    {
      title: "Module 2: Backend Development (Node.js & Express.js)",
      topics: [
        "Node.js Fundamentals",
        "Event Loop",
        "File System, Streams & Buffers",
        "Asynchronous Programming",
        "Express Framework",
        "Routing & Middleware",
        "REST API Development",
        "CRUD APIs",
        "JWT Authentication",
        "OAuth Concepts",
        "bcrypt Password Hashing",
        "CORS",
        "Environment Variables",
        "Backend Security",
        "File Upload APIs"
      ]
    },
    {
      title: "Module 3: Database Layer (MongoDB)",
      topics: [
        "MongoDB Fundamentals",
        "Collections & Documents",
        "CRUD Operations",
        "Schema Validation",
        "Mongoose ODM",
        "Database Connections",
        "Schema Definition",
        "Data Models",
        "Relationships",
        "Aggregation Pipelines",
        "Indexing",
        "Pagination",
        "Database Optimization",
        "Full Stack Data Integration"
      ]
    },
    {
      title: "Module 4: Artificial Intelligence, LLMs & Agentic AI",
      topics: [
        "AI Coding Assistants",
        "GitHub Copilot & Cursor AI",
        "Prompt Engineering",
        "Zero-shot & Few-shot Prompting",
        "Gemini API Integration",
        "OpenAI Concepts",
        "Open-Source LLMs",
        "LangChain.js",
        "Embeddings",
        "ChromaDB",
        "Vector Databases",
        "Document Chunking",
        "Semantic Search",
        "RAG",
        "MongoDB Vector Search",
        "AI Chat Applications",
        "AI Agents",
        "Agentic Applications"
      ]
    },
    {
      title: "Module 5: Professional Development, Testing & Deployment",
      topics: [
        "Git & GitHub",
        "Branching & Pull Requests",
        "Angular Testing (Jasmine & Karma)",
        "Jest & API Testing",
        "Docker & Docker Compose",
        "MEAN Containerization",
        "Ollama Setup",
        "Express + Ollama Integration",
        "Render Deployment",
        "MongoDB Atlas",
        "Environment Variables",
        "GitHub Actions",
        "Continuous Integration",
        "Portfolio Publishing"
      ]
    },
    {
      title: "Capstone Project 1: AI-Enhanced Full Stack SaaS Platform",
      topics: [
        "Angular Frontend",
        "Express Backend",
        "MongoDB Database",
        "JWT Authentication",
        "Gemini AI Assistant",
        "RAG Knowledge Base",
        "ChromaDB Vector Search",
        "Render Deployment",
        "GitHub Portfolio"
      ]
    },
    {
      title: "Capstone Project 2: Intelligent CRM with Agentic AI",
      topics: [
        "Customer Workflow Automation",
        "AI Document Summarizer",
        "LangChain.js Workflow",
        "Multi-Step AI Agent",
        "Database Intelligence",
        "Local LLM with Ollama",
        "AI E-Commerce Analytics Dashboard",
        "Production Deployment"
      ]
    }
  ],

  faqs: [
    {
      question: "Do I need prior Angular knowledge?",
      answer:
        "No. The course starts with TypeScript fundamentals before progressing into Angular and enterprise full-stack development."
    },
    {
      question: "Will I learn both Angular and Generative AI?",
      answer:
        "Yes. The curriculum combines Angular, Node.js, MongoDB, LangChain.js, Gemini, ChromaDB, and Agentic AI into one integrated program."
    },
    {
      question: "Does this course include RAG and AI agents?",
      answer:
        "Absolutely. You'll build enterprise knowledge bases, semantic search, vector databases, and autonomous AI workflows."
    },
    {
      question: "Will I deploy production-ready applications?",
      answer:
        "Yes. You'll Dockerize MEAN applications, integrate MongoDB Atlas, deploy on Render, and automate CI/CD using GitHub Actions."
    }
  ],

  featured: true,
  color: "from-red-600 to-orange-500",
  icon: "Layers"
  },
  {
  id: "27",
  slug: "ai-powered-data-analytics-professional",
  name: "AI-Powered Master Certificate in Data Analytics Professional",

  shortDescription:
    "Master Excel, SQL, Python, Power BI, Generative AI, and Decision Intelligence to build enterprise-ready analytics solutions.",

  fullDescription:
    "An industry-focused AI-powered master program designed for future Data Analysts and Business Intelligence professionals. Learn advanced Excel, SQL, Python analytics, Power BI, Generative AI, dashboard development, automated reporting, predictive forecasting, and enterprise decision intelligence while building production-ready analytics portfolios.",

  category: "data",
  level: "advanced",
  duration: "5 Months",
  durationWeeks: 20,
  hours: "200 Hours",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Excel 365",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Python",
    "Pandas",
    "NumPy",
    "Power BI",
    "Plotly",
    "ChatGPT",
    "Gemini",
    "Claude",
    "Microsoft Copilot",
    "Git & GitHub"
  ],

  projects: [
    "Retail Sales Analytics Dashboard",
    "HR Workforce Analytics",
    "Hospital Performance Dashboard",
    "Financial KPI Intelligence Platform",
    "E-Commerce Customer Intelligence",
    "AI Business Insights Generator",
    "Executive BI & Decision Intelligence Platform"
  ],

  careerPaths: [
    "Data Analyst",
    "Business Intelligence Analyst",
    "Power BI Developer",
    "Analytics Consultant",
    "Decision Intelligence Specialist"
  ],

  learningOutcomes: [
    "Master Excel for advanced business analytics and dashboarding",
    "Write complex SQL queries for enterprise reporting and data warehousing",
    "Analyze and transform datasets using Python, Pandas, and NumPy",
    "Build interactive Power BI dashboards using DAX and Power Query",
    "Leverage Generative AI for SQL generation, reporting, and analytics automation",
    "Develop executive dashboards with KPI tracking and predictive forecasting",
    "Create automated ETL and reporting workflows for business intelligence",
    "Build a professional analytics portfolio with real-world enterprise projects"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "No prior analytics experience required",
    "Laptop with Windows or macOS recommended"
  ],

  whoIsItFor: [
    "Engineering & Commerce students",
    "MBA graduates",
    "Working professionals",
    "Aspiring Data Analysts",
    "Business Intelligence enthusiasts"
  ],

  syllabus: [
    {
      title: "Module 1: Excel & Data Literacy",
      topics: [
        "Data Analytics Fundamentals",
        "Business KPIs & Metrics",
        "Advanced Excel Functions",
        "XLOOKUP, INDEX & MATCH",
        "Dynamic Arrays",
        "Pivot Tables & Charts",
        "Power Query",
        "Power Pivot",
        "Excel Dashboard Design",
        "Business Forecasting"
      ]
    },
    {
      title: "Module 2: SQL & Database Analytics",
      topics: [
        "Relational Databases",
        "SQL Query Writing",
        "Filtering & Aggregation",
        "GROUP BY & HAVING",
        "Joins",
        "Subqueries",
        "CTEs",
        "Window Functions",
        "Views & Stored Procedures",
        "SQL Performance Optimization",
        "Analytical Reporting"
      ]
    },
    {
      title: "Module 3: Python Analytics & Data Processing",
      topics: [
        "Python for Analytics",
        "NumPy",
        "Pandas",
        "CSV, Excel & JSON",
        "Data Cleaning",
        "Feature Engineering",
        "Grouping & Merging",
        "Exploratory Data Analysis",
        "Matplotlib",
        "Plotly",
        "Automated Reporting",
        "Jupyter Notebook"
      ]
    },
    {
      title: "Module 4: Power BI & Data Visualization",
      topics: [
        "Power BI Desktop",
        "Data Import",
        "Data Modeling",
        "Star & Snowflake Schema",
        "Power Query Editor",
        "DAX",
        "Calculated Measures",
        "Time Intelligence",
        "KPI Dashboards",
        "Drill-through Reports",
        "Row-Level Security",
        "Power BI Service"
      ]
    },
    {
      title: "Module 5: Generative AI & Analytics Automation",
      topics: [
        "Generative AI for Analytics",
        "Prompt Engineering",
        "ChatGPT for SQL",
        "Gemini Business Insights",
        "Claude Report Summaries",
        "Microsoft Copilot",
        "AI Data Cleaning",
        "AI Dashboard Generation",
        "Natural Language Queries",
        "Automated Insights",
        "AI Report Writing",
        "Workflow Automation"
      ]
    },
    {
      title: "Module 6: Business Intelligence & Decision Intelligence",
      topics: [
        "BI Framework",
        "Executive Dashboards",
        "Customer Segmentation",
        "Sales Analytics",
        "Financial KPI Tracking",
        "HR Analytics",
        "Marketing Analytics",
        "Supply Chain Analytics",
        "Predictive Forecasting",
        "Decision Intelligence",
        "Storytelling with Data",
        "Executive Recommendations"
      ]
    },
    {
      title: "Module 7: Enterprise Projects & Portfolio Development",
      topics: [
        "Git & GitHub",
        "Project Documentation",
        "Retail Sales Dashboard",
        "HR Analytics",
        "Hospital Dashboard",
        "Financial KPI Analytics",
        "E-Commerce Intelligence",
        "AI Business Insights Generator",
        "Executive BI Platform",
        "Resume & LinkedIn",
        "Mock Interviews",
        "Capstone Deployment"
      ]
    },
    {
      title: "Capstone Project: AI-Powered Business Intelligence Platform",
      topics: [
        "Multi-source Data Integration",
        "Automated ETL Pipeline",
        "SQL Data Warehouse",
        "Python Analytics Engine",
        "Power BI Executive Dashboard",
        "AI Insight Generator",
        "Natural Language Business Queries",
        "Automated KPI Reports",
        "Sales Forecasting",
        "Customer Segmentation",
        "Executive Decision Dashboard",
        "GitHub Portfolio"
      ]
    }
  ],

  faqs: [
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes. The program starts with Excel and SQL fundamentals before progressing to Python, Power BI, and AI-powered analytics."
    },
    {
      question: "Will I learn both Power BI and Python?",
      answer:
        "Absolutely. You'll master Power BI for business intelligence and Python for data processing, visualization, and automation."
    },
    {
      question: "How is Generative AI used in this course?",
      answer:
        "You'll use ChatGPT, Gemini, Claude, and Microsoft Copilot for SQL generation, automated reporting, dashboard creation, and business insight generation."
    },
    {
      question: "Will I build real enterprise projects?",
      answer:
        "Yes. You'll complete multiple industry projects including retail, HR, finance, healthcare, e-commerce, and an AI-powered Decision Intelligence capstone."
    }
  ],

  featured: true,
  color: "from-indigo-700 to-cyan-500",
  icon: "BarChart3"
  },
  {
  id: "29",
  slug: "ai-powered-data-science-professional",
  name: "AI-Powered Master Certificate in Data Science Professional",

  shortDescription:
    "Master Python, SQL, data engineering, statistics, machine learning, Generative AI, LLMs, cloud deployment, and MLOps to build enterprise-grade data science solutions.",

  fullDescription:
    "An industry-focused AI-powered master program designed to develop end-to-end Data Science professionals. Learn Python, SQL, data engineering, mathematics and statistics, exploratory data analysis, machine learning, Generative AI, LLMs, RAG, AI agents, cloud deployment, and MLOps while building real-world analytics and AI applications.",

  category: "ai",
  level: "advanced",
  duration: "5 Months",
  durationWeeks: 20,
  hours: "200 Hours",
  // courseCode: "NEX-DSAI-507",

  mode: "Online / Offline",

  batchOptions: [
    "Weekday Batch",
    "Weekend Batch",
    "Corporate Fast Track"
  ],

  technologies: [
    "Python",
    "Jupyter Notebook",
    "Anaconda",
    "NumPy",
    "Pandas",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Power BI",
    "Scikit-learn",
    "OpenAI API",
    "Gemini API",
    "Claude",
    "LangChain",
    "ChromaDB",
    "FAISS",
    "FastAPI",
    "Streamlit",
    "Docker",
    "AWS",
    "Git",
    "GitHub"
  ],

  projects: [
    "Sales Data Processing System",
    "Retail Data Warehouse",
    "Executive Analytics Dashboard",
    "Customer Churn Prediction System",
    "AI Business Intelligence Assistant",
    "ML Prediction API",
    "AI-Powered Decision Intelligence Platform"
  ],

  careerPaths: [
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "AI Engineer",
    "Data Engineer",
    "ML Operations Engineer"
  ],

  learningOutcomes: [
    "Develop strong Python programming and data processing skills",
    "Work with relational databases and advanced SQL analytics",
    "Build ETL pipelines and analytical data marts",
    "Apply mathematics and statistics to real-world data science problems",
    "Perform EDA, feature engineering, and business data visualization",
    "Develop and evaluate machine learning models using Scikit-learn",
    "Build LLM, RAG, semantic search, and AI-agent applications",
    "Deploy machine learning and AI applications using FastAPI, Streamlit, Docker, and cloud platforms",
    "Build enterprise-level data science projects for a professional portfolio"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "Basic mathematics recommended",
    "No prior data science experience required",
    "Laptop with Python development environment recommended"
  ],

  whoIsItFor: [
    "Engineering students",
    "Computer Science & IT graduates",
    "Statistics & Mathematics students",
    "Aspiring Data Scientists",
    "Working professionals",
    "Data Analysts transitioning into AI/ML"
  ],

  syllabus: [
    {
      title: "Module 1: Python Programming for Data Science",
      topics: [
        "Python Environment Setup",
        "VS Code, Jupyter & Anaconda",
        "Variables & Data Types",
        "Operators",
        "Control Statements",
        "Functions",
        "Object-Oriented Programming",
        "Modules & Packages",
        "NumPy Fundamentals",
        "Pandas DataFrames & Series",
        "Data Cleaning",
        "Missing Value Handling",
        "CSV, Excel & JSON Files",
        "Exploratory Data Processing",
        "Exception Handling",
        "Logging",
        "Mini Project: Sales Data Processing System"
      ]
    },
    {
      title: "Module 2: SQL & Data Engineering",
      topics: [
        "Database Fundamentals",
        "MySQL & PostgreSQL",
        "Advanced SQL Queries",
        "Joins",
        "Subqueries",
        "Common Table Expressions",
        "Window Functions",
        "Data Warehousing",
        "ETL Pipeline Fundamentals",
        "Data Modeling",
        "Star Schema",
        "Data Validation & Quality",
        "SQL Optimization",
        "Analytical Data Marts",
        "Mini Project: Retail Data Warehouse"
      ]
    },
    {
      title: "Module 3: Mathematics & Statistics for AI",
      topics: [
        "Linear Algebra",
        "Vectors & Matrices",
        "Probability Theory",
        "Descriptive Statistics",
        "Inferential Statistics",
        "Correlation & Covariance",
        "Hypothesis Testing",
        "Normal Distribution",
        "Confidence Intervals",
        "Regression Mathematics",
        "Statistical Decision Making",
        "Mini Lab: Business Statistics Analysis"
      ]
    },
    {
      title: "Module 4: Data Analysis & Visualization",
      topics: [
        "Exploratory Data Analysis",
        "Feature Engineering",
        "Data Transformation",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Power BI Integration",
        "KPI Dashboard Design",
        "Business Storytelling",
        "Customer Segmentation",
        "Time-Series Visualization",
        "Mini Project: Executive Analytics Dashboard"
      ]
    },
    {
      title: "Module 5: Machine Learning & Predictive Analytics",
      topics: [
        "Machine Learning Workflow",
        "Scikit-learn",
        "Regression Algorithms",
        "Classification Algorithms",
        "Decision Trees",
        "Random Forest",
        "Support Vector Machines",
        "K-Means Clustering",
        "PCA",
        "Model Evaluation Metrics",
        "Cross-Validation",
        "Hyperparameter Tuning",
        "Customer Churn Prediction Project"
      ]
    },
    {
      title: "Module 6: Generative AI, LLMs & AI Engineering",
      topics: [
        "Generative AI Fundamentals",
        "Prompt Engineering",
        "Large Language Models",
        "OpenAI API",
        "Gemini API",
        "Claude & AI Research Tools",
        "Embeddings",
        "Semantic Search",
        "ChromaDB",
        "FAISS",
        "Retrieval-Augmented Generation",
        "LangChain",
        "AI Agents",
        "MCP Concepts",
        "Mini Project: AI Business Intelligence Assistant"
      ]
    },
    {
      title: "Module 7: Cloud Deployment & MLOps",
      topics: [
        "Git & GitHub Workflow",
        "Docker for Data Science",
        "FastAPI Model Serving",
        "Streamlit Deployment",
        "ML Model Serialization",
        "CI/CD for ML Projects",
        "Cloud Storage Concepts",
        "AWS Fundamentals",
        "ML Application Monitoring",
        "Model Versioning",
        "AI Project Documentation",
        "Mini Project: ML Prediction API Deployment"
      ]
    },
    {
      title: "Enterprise Capstone: AI-Powered Decision Intelligence Platform",
      topics: [
        "Multi-source Data Collection",
        "SQL Data Warehouse",
        "Automated ETL Pipeline",
        "Python Analytics Engine",
        "Machine Learning Prediction Service",
        "Power BI Executive Dashboard",
        "AI Business Intelligence Chatbot",
        "RAG Knowledge Search System",
        "Streamlit Web Application",
        "FastAPI Prediction API",
        "Dockerized Deployment",
        "GitHub CI/CD Pipeline"
      ]
    }
  ],

  faqs: [
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes. The program begins with Python and data fundamentals before progressing into SQL, statistics, machine learning, Generative AI, and deployment."
    },
    {
      question: "Will I learn both Data Science and Generative AI?",
      answer:
        "Yes. The curriculum combines traditional data science and machine learning with LLMs, embeddings, RAG, semantic search, and AI agents."
    },
    {
      question: "Will I learn how to deploy ML models?",
      answer:
        "Yes. You will learn FastAPI model serving, Streamlit applications, Docker, CI/CD, cloud fundamentals, and ML application monitoring."
    },
    {
      question: "What is the final project?",
      answer:
        "The final 40-hour capstone is an AI-Powered Decision Intelligence Platform combining data engineering, analytics, machine learning, Power BI, LLMs, RAG, APIs, and cloud-ready deployment."
    }
  ],

  featured: true,
  color: "from-purple-700 to-indigo-600",
  icon: "BrainCircuit"
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
