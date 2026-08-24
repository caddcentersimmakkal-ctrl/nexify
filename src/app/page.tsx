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

function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--color-navy-bg) 0%, var(--color-navy-surface) 100%)"
      }}
      aria-label="Hero"
    >
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(22, 134, 160, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 192, 67, 0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
        aria-hidden="true"
      />

      {/* Radial Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(120,192,67,0.08) 0%, rgba(22,134,160,0.06) 50%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Brand Kicker / Hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="badge badge-green">
                <ShieldCheck size={13} />
                Training &amp; Placement Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build Skills.{" "}
              <span className="gradient-text">Build Projects.</span>{" "}
              Build Your Career.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              className="text-lg leading-relaxed max-w-2xl"
              style={{ color: "var(--color-text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Industry-focused technology training, real-world projects, and career support designed to help students become job-ready.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/courses" className="btn-primary text-base px-8 py-4">
                Explore Courses
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-4">
                Get Free Counselling
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4 border-t"
              style={{ borderColor: "var(--color-border)", paddingTop: "25px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                "Practical Technology Training",
                "Real Projects",
                "Career Preparation",
                "Placement Support"
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <CheckCircle size={14} style={{ color: "#78C043" }} />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
    // { icon: Code, label: "Programming", sub: "Python · Java · C++", color: "from-[#1686A0] to-[#78C043]" },
    // { icon: Database, label: "Data Analytics", sub: "SQL · Power BI · Excel", color: "from-[#202C48] to-[#1686A0]" },
    // { icon: Layers, label: "Full Stack Dev", sub: "MERN · Django · Spring", color: "from-[#1686A0] to-[#286A3D]" },
    // { icon: Brain, label: "AI & Automation", sub: "LangChain · Python", color: "from-[#286A3D] to-[#78C043]" },
    // { icon: Palette, label: "UI/UX Design", sub: "Figma · Design Systems", color: "from-[#1686A0] to-[#78C043]" }
    { icon: Brain, label: "AI Powered Full Stack", sub: "Python · Java · MERN · MEAN", color: "from-[#1686A0] to-[#78C043]" },
    { icon: Database, label: "Data Science", sub: "Machine Learning · Deep Learning · AI", color: "from-[#202C48] to-[#1686A0]" },
    { icon: Layers, label: "Data Analytics", sub: "Power BI · SQL · Excel", color: "from-[#1686A0] to-[#286A3D]" },
    { icon: Code, label: "Software Development", sub: "C · C++ · Java · Python", color: "from-[#286A3D] to-[#78C043]" },
  ];

  return (
    <div className="glass-card p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden" style={{ background: "var(--color-card-surface)" }}>
      {/* Official Nexify Mark Header */}
      <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9">
            <Image src="/images/nexify-mark.svg" alt="Nexify Mark" fill className="object-contain" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-[#78C043]">THE NEXIFY</p>
            <p className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>Training &amp; Placement</p>
          </div>
        </div>
        <span className="badge badge-green text-[10px]">Trending Courses</span>
      </div>

      {/* Program Cards */}
      <div className="flex flex-col gap-2.5">
        {cards.map(card => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="p-3 rounded-xl flex items-center justify-between transition-all hover:translate-x-1"
              style={{ background: "var(--color-navy-surface)", border: "1px solid var(--color-border)", padding: "20px 15px" }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-r ${card.color} text-white`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{card.label}</p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{card.sub}</p>
                </div>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-md" style={{ background: "rgba(120, 192, 67, 0.1)", color: "#78C043" }}>
                Practical
              </span>
            </div>
          );
        })}
      </div>
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
    title: "Career Support",
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
      <section className="section-padding" aria-labelledby="why-nexify-heading">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Why Nexify?"
              title="Why Learn"
              titleHighlight="With Nexify?"
              subtitle="More than courses. A complete learning-to-career journey."
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
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {card.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Courses */}
      <section
        className="section-padding"
        style={{ background: "white", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
        aria-labelledby="courses-heading"
      >
        <div className="section-container">
          <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <SectionHeader
              badge="Programs"
              title=""
              titleHighlight="Explore Our Career-Focused Courses"
              // subtitle="Choose the learning path that matches your career goals."
              align="left"
              id="courses-heading"
            />
            <Link href="/courses" className="btn-secondary flex-shrink-0" style={{ marginBottom: "15px" }}>
              View All Courses
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            staggerDelay={0.07}
          >
            {featuredCourses.map(course => (
              <StaggerItem key={course.id}>
                <CourseCard course={course} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="section-padding" aria-labelledby="journey-heading">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Your Roadmap"
              title="Learn → Practice → Build →"
              titleHighlight="Launch"
              subtitle="A structured pathway from learning to career-ready."
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
        style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "white" }}
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
