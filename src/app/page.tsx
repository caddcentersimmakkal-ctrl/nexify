"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Brain,
  Palette,
  Users,
  Target,
  Layers,
  Rocket,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Wrench,
  ShieldCheck
} from "lucide-react";
import Stats from "@/components/Stats";
import CourseCard from "@/components/CourseCard";
import WorkshopCard from "@/components/WorkshopCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import TechnologyGrid from "@/components/TechnologyGrid";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { getFeaturedCourses } from "@/data/courses";
import { getFeaturedProjects } from "@/data/projects";
import { getUpcomingWorkshops } from "@/data/workshops";
import { testimonials } from "@/data/testimonials";

// ─── Hero Section ────────────────────────────────────────────────────────────

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--color-navy-bg) 0%, var(--color-navy-surface) 100%)",
      }}
    >
      {/* ───────────────── Background Grid ───────────────── */}

      <div
        className="absolute inset-0 pointer-events-none hero-grid"
        aria-hidden="true"
      />

      {/* ───────────────── Background Glow ───────────────── */}

      <div
        className="absolute pointer-events-none hero-glow hero-glow-one"
        aria-hidden="true"
      />

      <div
        className="absolute pointer-events-none hero-glow hero-glow-two"
        aria-hidden="true"
      />

      {/* ───────────────── Decorative Shapes ───────────────── */}

      <div
        className="absolute pointer-events-none hero-orb hero-orb-one"
        aria-hidden="true"
      />

      <div
        className="absolute pointer-events-none hero-orb hero-orb-two"
        aria-hidden="true"
      />

      {/* ───────────────── Main Content ───────────────── */}

      <div className="section-container relative z-10 py-32 md:py-40">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="lg:col-span-7 relative z-20">

            {/* Kicker */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="hero-kicker">
                <ShieldCheck size={14} />
                Training &amp; Placement Platform
              </span>
            </motion.div>


            {/* Headline */}

            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Build Skills.
              <br />

              <span className="gradient-text">
                Build Projects.
              </span>

              <br />

              Build Your Career.
            </motion.h1>


            {/* Description */}

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Industry-focused technology training, real-world projects, and
              career support designed to help students become job-ready.
            </motion.p>


            {/* CTA Buttons */}

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/courses"
                className="btn-primary hero-primary-btn"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary hero-secondary-btn"
              >
                Get Free Counselling
              </Link>
            </motion.div>


            {/* Trust Points */}

            <motion.div
              className="hero-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {[
                "Practical Technology Training",
                "Real Projects",
                "Career Preparation",
                "Placement Assistance",
              ].map((item) => (
                <div
                  key={item}
                  className="hero-trust-item"
                >
                  <CheckCircle size={15} />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

          </div>


          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}
 <motion.div
        className="lg:col-span-5 relative z-10 hidden lg:block"
      >
            <HeroVisualCard />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

function HeroVisualCard() {
  const cards = [
    {
      icon: Brain,
      label: "AI Powered Full Stack",
      sub: "Python · Java · MERN · MEAN",
      color: "from-[#1686A0] to-[#78C043]",
    },
    {
      icon: Database,
      label: "Data Science",
      sub: "Machine Learning · Deep Learning · AI",
      color: "from-[#202C48] to-[#1686A0]",
    },
    {
      icon: Layers,
      label: "Data Analytics",
      sub: "Power BI · SQL · Excel",
      color: "from-[#1686A0] to-[#286A3D]",
    },
    {
      icon: Code,
      label: "Software Development",
      sub: "C · C++ · Java · Python",
      color: "from-[#286A3D] to-[#78C043]",
    },
  ];

  return (
    <div className="hero-visual">

      {/* ───────────────── Student Glow ───────────────── */}

      <div className="hero-student-glow" />

      {/* ───────────────── Decorative Blob ───────────────── */}

      {/* <div className="hero-student-blob" /> */}


      {/* ───────────────── Student Image ───────────────── */}

      {/* ───────────────── Student Image ───────────────── */}
 <motion.div
    className="
      absolute
      bottom-[-80px]
      right-[33%]
      w-[650px] h-[685px]
      z-[0]
      pointer-events-none
    "
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/images/student.png"
      alt="Student building technology skills"
      fill
      priority
      className="object-contain object-bottom"
      sizes="500px"
    />
      </motion.div>


      {/* ───────────────── Handwritten Annotation ───────────────── */}

      <motion.div
        className="hero-note"
        initial={{ opacity: 0, y: 10, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -5 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span>
          Your Future
          <br />
          Starts Here
        </span>

        <svg
          className="hero-note-arrow"
          width="80"
          height="55"
          viewBox="0 0 80 55"
          fill="none"
        >
          <path
            d="M68 7C55 7 49 12 43 22C37 32 28 41 9 43"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M17 35L8 43L19 46"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>


      {/* ───────────────── Course Panel ───────────────── */}

      <motion.div
        className="hero-course-panel"
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.45,
        }}
      >

        {/* Panel Border Glow */}

        <div className="hero-panel-glow" />


        {/* Header */}

        <div className="hero-panel-header">

          <div className="hero-brand">

            <div className="hero-brand-logo">
              <Image
                src="/images/nexify-mark.svg"
                alt="Nexify"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <p className="hero-brand-name">
                THE NEXIFY
              </p>

              <p className="hero-brand-sub">
                Training &amp; Placement
              </p>
            </div>

          </div>


          <span className="hero-trending">
            Trending Courses
          </span>

        </div>


        {/* Courses */}

        <div className="hero-course-list">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (
              <motion.div
                key={card.label}
                className="hero-course-card"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.65 + index * 0.08,
                }}
              >

                <div className="hero-course-left">

                  <div
                    className={`hero-course-icon bg-gradient-to-br ${card.color}`}
                  >
                    <Icon size={19} />
                  </div>

                  <div className="hero-course-info">

                    <p className="hero-course-title">
                      {card.label}
                    </p>

                    <p className="hero-course-sub">
                      {card.sub}
                    </p>

                  </div>

                </div>


                <span className="hero-practical">
                  Practical
                </span>

              </motion.div>
            );

          })}

        </div>

      </motion.div>


      {/* ───────────────── Decorative Lines ───────────────── */}

      <div className="hero-tech-line hero-tech-line-one" />
      <div className="hero-tech-line hero-tech-line-two" />

    </div>
  );
}

// ─── Why Nexify ──────────────────────────────────────────────────────────────

const whyCards = [
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Learn through hands-on exercises, real tools and practical implementation — not just slides and theory.",
    color: "from-[#1686A0] to-[#78C043]"
  },
  {
    icon: Layers,
    title: "Real-World Projects",
    description: "Build complete projects that strengthen your portfolio and demonstrate your capabilities to employers.",
    color: "from-[#202C48] to-[#1686A0]"
  },
  {
    icon: Target,
    title: "Industry-Relevant Curriculum",
    description: "Learn the technologies, tools and practices used in modern workplaces and tech teams.",
    color: "from-[#286A3D] to-[#78C043]"
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
    description: "Get guidance on resumes, portfolios, interview preparation and career planning beyond the classroom.",
    color: "from-[#1686A0] to-[#286A3D]"
  }
];

// ─── Learning Journey ─────────────────────────────────────────────────────────

const journeySteps = [
  { number: "01", title: "Learn", description: "Engage with structured, practical instruction on real industry tools and technologies.", icon: BookOpen },
  { number: "02", title: "Practice", description: "Apply what you learn through exercises, challenges and guided practice sessions.", icon: Wrench },
  { number: "03", title: "Build", description: "Create real-world projects that demonstrate your skills and build your portfolio.", icon: Layers },
  { number: "04", title: "Launch", description: "Take the next step with career guidance, portfolio review and interview preparation.", icon: Rocket }
];

// ─── Homepage Component ───────────────────────────────────────────────────────

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const featuredProjects = getFeaturedProjects().slice(0, 6);
  const upcomingWorkshops = getUpcomingWorkshops().slice(0, 3);

  return (
    <>
      <HeroSection />
      <Stats />

      {/* Why Nexify */}
      <section className="section-padding" aria-labelledby="why-nexify-heading" style={{padding: "15px 0px"}}>
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Why Nexify?"
              title=""
              titleHighlight=""
              subtitle=""
              id="why-nexify-heading"
            />
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14"
            staggerDelay={0.1}
          >
            {whyCards.map(card => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <div className="glass-card p-6 flex flex-col gap-4 h-full">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.color} text-white`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {card.title}
                    </h3>
                    {/* <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {card.description}
                    </p> */}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Courses */}
     {/* ───────────────── Featured Courses ───────────────── */}
<section
  className="featured-programs-section"
  aria-labelledby="courses-heading"
>
  <div className="section-container">

    {/* ───────────── Section Header ───────────── */}
    <AnimatedSection>
      <div className="featured-programs-header">

        <div className="featured-programs-heading">
          <SectionHeader
            badge="Programs"
            title=""
            titleHighlight="Explore Our Career-Focused Courses"
            align="left"
            id="courses-heading"
          />

          <p className="featured-programs-description">
            Learn practical technologies through industry-focused courses,
            hands-on projects, and career-ready training.
          </p>
        </div>

        <Link
          href="/courses"
          className="featured-view-all"
        >
          <span>View All Courses</span>
          <ArrowRight size={17} />
        </Link>

      </div>
    </AnimatedSection>


    {/* ───────────── Course Categories ───────────── */}
    <div className="featured-categories">

      {[
        {
          name: "Programming & Development",
          category: "programming",
          number: "01",
          accent: "teal",
          description: "Build strong programming and software development skills."
        },
        {
          name: "Data & Analytics",
          category: "data",
          number: "02",
          accent: "green",
          description: "Turn data into insights using modern analytics tools."
        },
        {
          name: "AI & Machine Learning",
          category: "ai",
          number: "03",
          accent: "cyan",
          description: "Learn AI, machine learning and intelligent technologies."
        },
        {
          name: "Design & Creativity",
          category: "design",
          number: "04",
          accent: "purple",
          description: "Create modern digital experiences and visual designs."
        },
        {
          name: "Productivity & Tools",
          category: "productivity",
          number: "05",
          accent: "orange",
          description: "Master essential professional productivity tools."
        },
      ].map((category) => {

        const courses = featuredCourses
          .filter(
            (course) =>
              course.category?.toLowerCase() ===
              category.category.toLowerCase()
          )
          .slice(0, 2);

        if (courses.length === 0) return null;

        return (
          <AnimatedSection key={category.category}>

            <div
              className={`featured-category featured-category-${category.accent}`}
            >

              {/* Category Header */}
              <div className="featured-category-header">

                <div className="featured-category-title">

                  <span className="featured-category-number">
                    {category.number}
                  </span>

                  <div>
                    <div className="featured-category-name">
                      <span className="featured-category-dot" />
                      {category.name}
                    </div>

                    <p className="featured-category-description">
                      {category.description}
                    </p>
                  </div>

                </div>

                {/* <Link
                  href={`/courses?category=${category.category}`}
                  className="featured-category-link"
                >
                  <span>View Category</span>
                  <ArrowRight size={15} />
                </Link> */}

              </div>


              {/* Courses */}
              <div className="featured-course-list">

                {courses.map((course, index) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.slug}`}
                    className="featured-course-item"
                  >

                    {/* Course Number */}
                    <span className="featured-course-number">
                      COURSE {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="featured-course-main">

                      {/* Icon */}
                      <div className="featured-course-icon">
                        <BookOpen
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>


                      {/* Course Content */}
                      <div className="featured-course-content">

                        <h3>
                          {course.name}
                        </h3>

                        <div className="featured-course-meta">

                          <span className="featured-duration">
                            {course.duration}
                          </span>

                          <span className="meta-divider">
                            •
                          </span>

                          <span>
                            Online / Offline
                          </span>

                        </div>

                      </div>


                      {/* Arrow */}
                      <div className="featured-course-arrow">
                        <ArrowRight size={18} />
                      </div>

                    </div>

                  </Link>
                ))}

              </div>

            </div>

          </AnimatedSection>
        );
      })}

    </div>

  </div>
</section>


      {/* Learning Journey */}
      <section className="section-padding" aria-labelledby="journey-heading" style={{padding: "15px 0px"}}>
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Learning Roadmap"
              title=""
              titleHighlight=""
              subtitle=""
              id="journey-heading"
            />
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 relative"
            staggerDelay={0.12}
          >
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <div className="relative glass-card p-6 flex flex-col gap-4 text-center">
                    <span
                      className="text-5xl font-black opacity-15 absolute top-4 right-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto text-white"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--color-text-secondary)" }}>
                        {step.description}
                      </p>
                    </div>

                    {index < journeySteps.length - 1 && (
                      <div
                        className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                        aria-hidden="true"
                      >
                        <ArrowRight size={20} style={{ color: "#78C043" }} />
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Section */}
      {/* <section
        className="section-padding"
        style={{ background: "var(--color-navy-surface)", borderTop: "1px solid var(--color-border)" }}
        aria-labelledby="tech-heading"
      >
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Stack & Tools"
              title="Learn the Technologies That"
              titleHighlight="Power the Industry"
              subtitle="Work with the tools and frameworks that modern companies use every day."
              id="tech-heading"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12">
            <TechnologyGrid />
          </AnimatedSection>
        </div>
      </section> */}

      {/* Projects Preview */}
      {/* <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--color-border)" }}
        aria-labelledby="projects-heading"
      >
        <div className="section-container">
          <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <SectionHeader
              badge="Portfolio"
              title="Don't Just Learn."
              titleHighlight="Build."
              subtitle="See the real-world applications students create during their courses."
              align="left"
              id="projects-heading"
            />
            <Link href="/projects" className="btn-secondary flex-shrink-0">
              Explore Student Projects
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            staggerDelay={0.08}
          >
            {featuredProjects.map(project => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Workshop Preview */}
      {/* {upcomingWorkshops.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--color-navy-surface)", borderTop: "1px solid var(--color-border)" }}
          aria-labelledby="workshops-heading"
        >
          <div className="section-container">
            <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <SectionHeader
                badge="Seminars & Events"
                title="Workshops &"
                titleHighlight="Seminars"
                subtitle="Accelerate your learning with focused workshops and expert-led sessions."
                align="left"
                id="workshops-heading"
              />
              <Link href="/workshops" className="btn-secondary flex-shrink-0">
                View All Workshops
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
              staggerDelay={0.1}
            >
              {upcomingWorkshops.map(workshop => (
                <StaggerItem key={workshop.id}>
                  <WorkshopCard workshop={workshop} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )} */}

      {/* Career CTA */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "white", paddingTop: "15px 0px" }}
        aria-labelledby="career-cta-heading"
      >
        <div className="section-container">
          <AnimatedSection>
            <CTASection
              badge="Placement Support"
              title="Your Course Should Lead"
              titleHighlight="Somewhere."
              description="Build skills that translate into projects, portfolios and career opportunities."
              primaryCta={{ label: "Talk to a Career Advisor", href: "/contact" }}
              // secondaryCta={{ label: "Explore Careers", href: "/careers" }}
              features={[
                "Portfolio Development",
                "Resume Guidance",
                "Interview Preparation",
                "Technical Practice",
                "Career Guidance"
              ]}
              variant="gradient"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section
        className="section-padding"
        style={{ background: "var(--color-navy-surface)", borderTop: "1px solid var(--color-border)" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Learner Stories"
              title="What Our"
              titleHighlight="Learners Say"
              subtitle="Feedback from students who have completed our programs."
              id="testimonials-heading"
            />
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            staggerDelay={0.08}
          >
            {testimonials.map(t => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Final CTA */}
      {/* <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--color-border)" }}
        aria-labelledby="final-cta-heading"
      >
        <div className="section-container">
          <AnimatedSection>
            <CTASection
              title="Ready to Start Your"
              titleHighlight="Learning Journey?"
              description="Choose a skill. Build a project. Take the next step toward your career."
              primaryCta={{ label: "Explore Courses", href: "/courses" }}
              secondaryCta={{ label: "Get Free Counselling", href: "/contact" }}
              variant="gradient"
            />
          </AnimatedSection>
        </div>
      </section> */}
    </>
  );
}
