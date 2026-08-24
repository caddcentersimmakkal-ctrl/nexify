import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/data/courses";
import {
  Clock,
  Signal,
  Monitor,
  Users,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Code,
  Briefcase
} from "lucide-react";
import FAQSection from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SyllabusList from "./SyllabusList";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map(course => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Nexify Institute"
    };
  }

  return {
    title: `${course.name} | Nexify Institute`,
    description: course.fullDescription,
    openGraph: {
      title: `${course.name} | Nexify Institute`,
      description: course.fullDescription
    }
  };
}

const levelBadge = {
  beginner: { label: "Beginner", color: "#4ade80" },
  intermediate: { label: "Intermediate", color: "#60a5fa" },
  advanced: { label: "Advanced", color: "#fbbf24" }
};

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const level = levelBadge[course.level];

  return (
    <div className="pt-20" style={{background: "white"}}>
      {/* Hero */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "#0f1629",
          borderBottom: "1px solid var(--color-border)",
          // marginTop: "100px"
        }}
        aria-labelledby="course-title"
      >
        {/* Accent bar */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${course.color}`}
          aria-hidden="true"
        />

        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left — Course Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                <Link href="/courses" className="hover:text-white transition-colors" style={{ color: "var(--color-text-secondary)" }}>Courses</Link>
                <span>/</span>
                <span style={{ color: "var(--color-text-secondary)" }}>{course.name}</span>
              </nav>

              {/* Category & Level */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="badge badge-blue capitalize">{course.category}</span>
                <span
                  className="text-sm font-medium"
                  style={{ color: level.color }}
                >
                  {level.label}
                </span>
              </div>

              <h1
                id="course-title"
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {course.name}
              </h1>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {course.fullDescription}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <Clock size={16} />
                  <span><strong className="text-white">{course.duration}</strong> Duration</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <Signal size={16} />
                  <span><strong className="text-white">{course.hours}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <Monitor size={16} />
                  <span>{course.mode}</span>
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <Users size={16} />
                  <span>{course.batchOptions.join(" · ")}</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {course.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                      padding: "6px 12px"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Enquiry Card */}
            <aside>
              <div
                className="glass-card p-6 flex flex-col gap-5 sticky top-24"
                aria-label="Course enquiry"
              >
                <div
                  className={`h-1 -mx-6 -mt-6 rounded-t-2xl bg-gradient-to-r ${course.color}`}
                  aria-hidden="true"
                />
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Interested in this course?
                </h2>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Get a free counselling session to understand if this course is the right fit for your goals.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    <Clock size={14} /> <span>{course.duration} · {course.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    <Monitor size={14} /> <span>{course.mode}</span>
                  </div>
                  {course.projects.length > 0 && (
                    <div className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                      <Code size={14} /> <span>{course.projects.length} included projects</span>
                    </div>
                  )}
                </div>

                <Link
                  href={`/contact?course=${encodeURIComponent(course.name)}`}
                  className="btn-primary justify-center"
                  aria-label={`Get free counselling for ${course.name}`}
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </Link>
                <p className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
                  Free, no-obligation counselling session
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Page Body */}
      <div className="section-container py-16" style={{color: "#0f1629"}}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-16">

            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)", marginBottom: "15px", color: "#0f1629" }}
              >
                Course Overview
              </h2>
              <p style={{ color: "#0f1629" }} className="leading-relaxed">
                {course.fullDescription} This course is designed to be practical and project-focused, ensuring you gain real, applicable skills rather than just theoretical knowledge.
              </p>
            </section>

            {/* Who Is It For */}
            <section aria-labelledby="who-heading">
              <h2
                id="who-heading"
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading)", marginBottom: "15px", color: "#0f1629" }}
              >
                Who Is This Course For?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.whoIsItFor.map(who => (
                  <div
                    key={who}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{
                      background: "#0f1629",
                      border: "1px solid var(--color-border)",
                      padding: "6px 12px",
                      color: "white"
                    }}
                  >
                    <CheckCircle size={16} style={{ color: "#4ade80" }} aria-hidden="true" />
                    <span className="text-sm font-medium">{who}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Prerequisites */}
            <section aria-labelledby="prereq-heading">
              <h2
                id="prereq-heading"
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)", marginBottom: "15px", color: "#0f1629" }}
              >
                Prerequisites
              </h2>
              <ul className="flex flex-col gap-2">
                {course.prerequisites.map(prereq => (
                  <li key={prereq} className="flex items-start gap-3 text-sm" style={{ color: "#0f1629", display: "flex", alignItems: "center" }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "green" }} aria-hidden="true" />
                    {prereq}
                  </li>
                ))}
              </ul>
            </section>

            {/* Learning Outcomes */}
            <section aria-labelledby="outcomes-heading">
              <h2
                id="outcomes-heading"
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading)", marginBottom: "15px", color: "#0f1629" }}
              >
                What You Will Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.learningOutcomes.map(outcome => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      background: "rgba(59,130,246,0.06)",
                      border: "1px solid rgba(59,130,246,0.12)",
                      padding: "6px 12px"
                    }}
                  >
                    <CheckCircle size={16} style={{ color: "#60a5fa", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    <span className="text-sm" style={{ color: "#0f1629" }}>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Syllabus */}
            <section aria-labelledby="syllabus-heading">
              <h2
                id="syllabus-heading"
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading)", marginBottom: "15px", color: "#0f1629" }}
              >
                Complete Syllabus
              </h2>
              <SyllabusList modules={course.syllabus} />
            </section>

            {/* Projects */}
            <section aria-labelledby="projects-heading">
              <h2
                id="projects-heading"
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading)", marginBottom: "15px", color: "#0f1629" }}
              >
                Projects in This Course
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.projects.map((project, index) => (
                  <div
                    key={project}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: "#0f1629",
                      border: "1px solid var(--color-border)",
                      padding: "5px",
                      color: "white"
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                      style={{ background: "var(--gradient-brand)" }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Paths */}
            <section aria-labelledby="careers-heading">
              <h2
                id="careers-heading"
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-heading)", marginBottom: "15px", color: "#0f1629" }}
              >
                Career Paths After This Course
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.careerPaths.map(path => (
                  <div
                    key={path}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
                    style={{
                      background: "var(--gradient-brand-subtle)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "#0f1629",
                      padding: "10px"
                    }}
                  >
                    <Briefcase size={14} style={{ color: "#0f1629" }} aria-hidden="true" />
                    {path}
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {course.faqs.length > 0 && (
              <section aria-labelledby="faq-heading" style={{marginBottom: "50px"}}>
                <FAQSection
                  faqs={course.faqs.map((f, i) => ({
                    id: `${course.slug}-faq-${i}`,
                    question: f.question,
                    answer: f.answer,
                    category: "courses" as const
                  }))}
                  title="Course FAQs"
                />
              </section>
            )}

            {/* Final CTA */}
            {/* <section aria-labelledby="course-cta-heading">
              <CTASection
                title="Interested in"
                titleHighlight={course.name + "?"}
                description="Get a free counselling session to understand the course, its fit for your goals, and how to get started."
                primaryCta={{
                  label: "Get Free Counselling",
                  href: `/contact?course=${encodeURIComponent(course.name)}`
                }}
                secondaryCta={{ label: "Browse All Courses", href: "/courses" }}
                variant="gradient"
              />
            </section> */}
          </div>

          {/* Right sidebar — sticky on desktop */}
          <aside className="hidden lg:block" aria-label="Course details sidebar">
            <div className="sticky top-24 flex flex-col gap-6">
              {/* Duration Card */}
              <div
                className="glass-card p-6 flex flex-col gap-4"
              >
                <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Course Details
                </h3>
                <div className="flex flex-col gap-3 text-sm">
                  {[
                    { label: "Duration", value: course.duration },
                    { label: "Total Hours", value: course.hours },
                    { label: "Mode", value: course.mode },
                    { label: "Level", value: level.label },
                    { label: "Projects", value: `${course.projects.length} projects` },
                    ...course.batchOptions.map((b, i) => ({ label: `Batch ${i + 1}`, value: b }))
                  ].map(item => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                      style={{ borderBottom: "1px solid white", paddingBottom: "12px" }}
                    >
                      <span style={{ color: "white" }}>{item.label}</span>
                      <span className="font-semibold" style={{ color: "white" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/contact?course=${encodeURIComponent(course.name)}`}
                className="btn-primary justify-center"
              >
                Enquire Now
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
