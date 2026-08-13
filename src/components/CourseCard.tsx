import Link from "next/link";
import { Course } from "@/data/courses";
import { Clock, Signal, ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const categoryColors: Record<Course["category"], string> = {
  programming: "badge-blue",
  development: "badge-green",
  data: "badge-amber",
  ai: "badge-violet",
  design: "badge-blue",
  productivity: "badge-green"
};

const categoryLabels: Record<Course["category"], string> = {
  programming: "Programming",
  development: "Development",
  data: "Data Analytics",
  ai: "AI",
  design: "Design",
  productivity: "Productivity"
};

const levelColors: Record<Course["level"], string> = {
  beginner: "#78C043",
  intermediate: "#1686A0",
  advanced: "#f59e0b"
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="glass-card flex flex-col h-full overflow-hidden group">
      {/* Gradient Top Line */}
      <div
        className="h-1.5 w-full"
        style={{ background: "var(--gradient-brand)", marginBottom: "20px" }}
      />

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <span className={`badge ${categoryColors[course.category]}`}>
            {categoryLabels[course.category]}
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: levelColors[course.level] }}
          >
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="text-lg font-bold leading-snug tracking-tight group-hover:text-[#78C043] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {course.name}
          </h3>
          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--color-text-secondary)" }}>
            {course.shortDescription}
          </p>
        </div>

        {/* Meta: Duration */}
        <div
          className="flex items-center gap-4 text-xs pt-2"
          style={{
            borderTop: "1px solid var(--color-border)",
            color: "var(--color-text-muted)"
          }}
        >
          <div className="flex items-center gap-1.5">
            <Clock size={13} style={{ color: "var(--color-tech-teal)" }} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Signal size={13} style={{ color: "var(--color-tech-teal)" }} />
            <span>{course.hours}</span>
          </div>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5">
          {course.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "var(--color-navy-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                padding: "2px 6px"
              }}
            >
              {tech}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "var(--color-navy-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)"
              }}
            >
              +{course.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/courses/${course.slug}`}
          className="flex items-center justify-between mt-auto pt-4 group/link"
          style={{
            borderTop: "1px solid var(--color-border)",
            color: "#78C043"
          }}
          aria-label={`View ${course.name} course details`}
        >
          <span className="text-sm font-semibold" style={{marginTop: "20px"}}>View Course</span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
