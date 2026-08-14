import type { Metadata } from "next";
import { courses } from "@/data/courses";
import CourseGrid from "@/components/CourseGrid";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Courses | Nexify Institute",
  description:
    "Explore Nexify's career-focused technology courses in programming, full stack development, data analytics, AI, UI/UX design and more. Filter by category, level and duration.",
  openGraph: {
    title: "Courses | Nexify Institute",
    description: "Browse our complete course catalogue — from programming fundamentals to AI and full stack development."
  }
};

export default function CoursesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy) 100%)",
          borderBottom: "1px solid var(--color-border)"
        }}
        aria-labelledby="courses-page-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="Course Catalogue"
            title="Explore Our Courses"
            subtitle="Choose the learning path that matches your career goals. Filter by category, level or duration to find the right course for you."
            id="courses-page-heading"
          />
        </div>
      </section>

      {/* Course Grid with Filters */}
      <section className="section-padding">
        <div className="section-container">
          <CourseGrid courses={courses} showFilters={true} />
        </div>
      </section>
    </div>
  );
}
