import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TrainerCard from "@/components/TrainerCard";
import CTASection from "@/components/CTASection";
import { trainers } from "@/data/trainers";
import { Target, Compass, Award, CheckCircle2, BookOpen, Wrench, Layers, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Nexify Institute",
  description:
    "Learn about Nexify Institute's mission, learning philosophy, trainers and commitment to practical, project-based technology education.",
  openGraph: {
    title: "About Us | Nexify Institute",
    description: "Building the Next Generation of Technology Professionals through hands-on learning and career guidance."
  }
};

const philosophySteps = [
  {
    step: "01",
    title: "Learn",
    description: "Master modern tools, languages, and frameworks through structured interactive guidance.",
    icon: BookOpen
  },
  {
    step: "02",
    title: "Practice",
    description: "Reinforce concepts with daily exercises, quizzes, and live coding challenges.",
    icon: Wrench
  },
  {
    step: "03",
    title: "Build",
    description: "Construct portfolio-worthy projects that solve real industry problems.",
    icon: Layers
  },
  {
    step: "04",
    title: "Launch",
    description: "Prepare resumes, GitHub, portfolios, and interview strategies to step into tech roles.",
    icon: Rocket
  }
];

const differentiators = [
  {
    title: "Practical Learning",
    description: "No passive lecture watching. Every module requires hands-on execution in actual development environments."
  },
  {
    title: "Project-Based Education",
    description: "Curriculum centered around building real applications, analytics dashboards, and AI tools."
  },
  {
    title: "Industry-Focused Curriculum",
    description: "Updated continuously to reflect current tech stacks used by top tech companies and startups."
  },
  {
    title: "Career Support",
    description: "Comprehensive guidance covering resume optimization, portfolio reviews, and technical interview practice."
  },
  {
    title: "Interactive Workshops",
    description: "Regular specialized seminars and hackathons to broaden practical knowledge and emerging tech skills."
  },
  {
    title: "Expert Mentorship",
    description: "Guidance from experienced instructors who bring real-world development insights into the classroom."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy) 100%)",
          borderBottom: "1px solid var(--color-border)"
        }}
        aria-labelledby="about-hero-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="About Nexify"
            title="Building the Next Generation of"
            titleHighlight="Technology Professionals"
            subtitle="Nexify Institute helps learners acquire practical tech skills, build real projects, and launch rewarding technical careers."
            id="about-hero-heading"
          />
        </div>
      </section>

      {/* Our Story, Mission & Vision */}
      <section className="section-padding" aria-labelledby="story-heading" style={{ background: "white" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Story Card */}
            <AnimatedSection className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10 flex flex-col gap-4">
                <span className="badge badge-blue w-fit">Our Story</span>
                <h2 id="story-heading" className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Bridging the Gap Between Education and Industry
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  Nexify Institute was established with a singular focus: to replace passive theoretical coaching with active, project-driven technology training. We recognized that students and professionals needed more than standard syllabus completion—they required practical competency in modern tools like Python, React, AI integrations, Power BI, and Figma.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  By combining structured learning modules with real-world project portfolios and career guidance, Nexify empowers learners to bridge the gap between academic education and modern industry demands.
                </p>
              </div>
            </AnimatedSection>

            {/* Mission Card */}
            <AnimatedSection delay={0.1} className="lg:col-span-1">
              <div className="glass-card p-8 flex flex-col gap-4 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  &ldquo;To make industry-relevant technology education accessible, practical and career-focused.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            {/* Vision Card */}
            <AnimatedSection delay={0.2} className="lg:col-span-1">
              <div className="glass-card p-8 flex flex-col gap-4 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  &ldquo;To empower learners to become confident technology professionals who can solve real-world problems.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            {/* Quality Commitment Card */}
            <AnimatedSection delay={0.3} className="lg:col-span-1">
              <div className="glass-card p-8 flex flex-col gap-4 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Our Commitment
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  We prioritize quality over mass numbers. Every program ensures high instructor availability, practical code reviews, and tangible outcome-driven deliverables.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      {/* <section
        className="section-padding"
        style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
        aria-labelledby="philosophy-heading"
      >
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Methodology"
              title="Our Learning"
              titleHighlight="Philosophy"
              subtitle="How we structure your journey from foundational knowledge to professional execution."
              id="philosophy-heading"
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {philosophySteps.map(item => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="glass-card p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: "var(--gradient-brand)" }}>
                        <Icon size={20} />
                      </div>
                      <span className="text-3xl font-black opacity-20" style={{ fontFamily: "var(--font-heading)" }}>
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section> */}

      {/* What Makes Nexify Different */}
      <section className="section-padding" aria-labelledby="differentiators-heading">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="The Nexify Edge"
              title="What Makes Nexify"
              titleHighlight="Different?"
              subtitle="Designed specifically for learners who want actionable skills and real progress."
              id="differentiators-heading"
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {differentiators.map(diff => (
              <StaggerItem key={diff.title}>
                <div className="glass-card p-6 flex flex-col gap-3 h-full">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} style={{ color: "#4ade80" }} />
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {diff.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {diff.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trainers Section */}
      {/* <section
        className="section-padding"
        style={{ background: "var(--color-navy-800)", borderTop: "1px solid var(--color-border)" }}
        aria-labelledby="trainers-heading"
      >
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Mentorship"
              title="Meet Our"
              titleHighlight="Trainers"
              subtitle="Learn from experienced technology professionals dedicated to your growth."
              id="trainers-heading"
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trainers.map(trainer => (
              <StaggerItem key={trainer.id}>
                <TrainerCard trainer={trainer} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="section-padding" aria-labelledby="about-cta-heading" style={{background: "white"}}>
        <div className="section-container">
          <AnimatedSection>
            <CTASection
              badge="Get Started"
              title="Transform Your Technology Skills"
              titleHighlight="With Nexify"
              description="Speak with our career advisors to find the ideal course tailored to your background."
              primaryCta={{ label: "Get Free Counselling", href: "/contact" }}
              secondaryCta={{ label: "Explore Courses", href: "/courses" }}
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
