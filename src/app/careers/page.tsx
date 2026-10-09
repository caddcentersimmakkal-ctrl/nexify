import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { careerPaths } from "@/data/stats";
import {
  FileText,
  Briefcase,
  MessagesSquare,
  Code2,
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career Support & Placement Guidance | Nexify Institute",
  description:
    "Learn Skills. Become Career-Ready. Nexify provides comprehensive career preparation including resume building, portfolio creation, mock interviews, and placement assistance.",
  openGraph: {
    title: "Career Support & Placement Guidance | Nexify Institute",
    description: "Practical career preparation helping students transition into software engineering, data analytics, AI, and design roles."
  }
};

const supportServices = [
  {
    icon: FileText,
    title: "Resume Building",
    description: "Structure tech resumes that highlight projects, technical stack, problem-solving skills, and key contributions clearly."
  },
  {
    icon: Briefcase,
    title: "Portfolio Development",
    description: "Organize your code repositories and live applications into clean, professional portfolios that impress recruiters."
  },
  {
    icon: MessagesSquare,
    title: "Interview Preparation",
    description: "Behavioral and technical interview guidance covering standard HR questions, past project explanations, and communication tips."
  },
  {
    icon: Code2,
    title: "Technical Mock Interviews",
    description: "Practice real coding challenges, data structures, system queries, and live troubleshooting with experienced instructors."
  },
  {
    icon: Award,
    title: "Communication Skills",
    description: "Enhance your technical articulation, project presentation techniques, and confidence during team interactions."
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description: "One-on-one sessions to help you evaluate career options, select the right tech track, and set actionable growth goals."
  }
];

const preparationSteps = [
  { step: "01", title: "Build Technical Skills", desc: "Master core technologies through hands-on practice and guided learning modules." },
  { step: "02", title: "Complete Projects", desc: "Build functional applications, data dashboards, and AI tools to prove your abilities." },
  { step: "03", title: "Build Portfolio", desc: "Showcase your best work on GitHub, personal websites, and interactive demos." },
  { step: "04", title: "Prepare Resume", desc: "Craft an optimized, industry-ready tech resume that highlights practical skillsets." },
  { step: "05", title: "Practice Interviews", desc: "Participate in mock technical interviews and project walkthrough practice." },
  { step: "06", title: "Apply for Opportunities", desc: "Leverage career guidance and partner networks to apply with confidence." }
];

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy) 100%)",
          borderBottom: "1px solid var(--color-border)"
        }}
        aria-labelledby="careers-hero-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="Career Readiness"
            title="Learn Skills."
            titleHighlight="Become Career-Ready."
            subtitle="Nexify supports learners beyond the classroom with practical career preparation, portfolio development, and placement guidance."
            id="careers-hero-heading"
          />
        </div>
      </section>

      {/* Honest Placement Policy Banner */}
      <section className="py-10" style={{ background: "rgba(99, 102, 241, 0.08)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="section-container">
          <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
              style={{ background: "var(--gradient-brand)" }}
            >
              <ShieldCheck size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Transparent & Honest Career Support
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Placement assistance and career guidance are provided to help eligible learners prepare thoroughly for hiring opportunities. We focus on building genuine skills, strong portfolios, and interview readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Support Services */}
      <section className="section-padding" aria-labelledby="support-heading">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Comprehensive Support"
              title="How We Help You Become"
              titleHighlight="Career-Ready"
              subtitle="Targeted preparation covering every aspect of technical hiring."
              id="support-heading"
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {supportServices.map(service => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <div className="glass-card p-6 flex flex-col gap-4 h-full">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Career Preparation Journey */}
      <section
        className="section-padding"
        style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
        aria-labelledby="prep-heading"
      >
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="6-Step Roadmap"
              title="Career Preparation"
              titleHighlight="Journey"
              subtitle="A step-by-step path designed to convert learning into employment opportunities."
              id="prep-heading"
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {preparationSteps.map(step => (
              <StaggerItem key={step.step}>
                <div className="glass-card p-6 flex flex-col gap-3 h-full relative">
                  <span className="text-4xl font-black opacity-20 absolute top-4 right-4" style={{ fontFamily: "var(--font-heading)" }}>
                    {step.step}
                  </span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} style={{ color: "#4ade80" }} />
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Career Paths Grid */}
      <section className="section-padding" aria-labelledby="paths-heading">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeader
              badge="Target Roles"
              title="Explore Tech"
              titleHighlight="Career Paths"
              subtitle="Prepare for high-demand roles across software engineering, data analytics, and design."
              id="paths-heading"
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {careerPaths.map(path => (
              <StaggerItem key={path.title}>
                <div className="glass-card p-6 flex flex-col gap-4 h-full">
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    {path.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-secondary)" }}>
                    {path.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2" style={{ borderTop: "1px solid var(--color-border)" }}>
                    {path.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {path.courseSlug && (
                    <Link
                      href={`/courses/${path.courseSlug}`}
                      className="text-xs font-semibold flex items-center gap-1 mt-2 hover:text-white transition-colors"
                      style={{ color: "var(--color-blue-light)" }}
                    >
                      View Related Course <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final Career CTA */}
      <section className="section-padding" aria-labelledby="careers-cta-heading">
        <div className="section-container">
          <AnimatedSection>
            <CTASection
              badge="Career Guidance"
              title="Unsure Which Path Fits Your"
              titleHighlight="Background?"
              description="Speak with our career advisors to evaluate your current skills and build a tailored learning plan."
              primaryCta={{ label: "Talk to a Career Advisor", href: "/contact" }}
              secondaryCta={{ label: "Explore Courses", href: "/courses" }}
              variant="gradient"
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
