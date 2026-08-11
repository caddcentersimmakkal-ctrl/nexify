import { Project } from "@/data/projects";
import { ExternalLink, Github, Layers } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const difficultyColors = {
  Beginner: { bg: "rgba(120, 192, 67, 0.15)", text: "#78C043", border: "rgba(120, 192, 67, 0.3)" },
  Intermediate: { bg: "rgba(22, 134, 160, 0.15)", text: "#1686A0", border: "rgba(22, 134, 160, 0.3)" },
  Advanced: { bg: "rgba(245, 158, 11, 0.15)", text: "#fbbf24", border: "rgba(245, 158, 11, 0.3)" }
};

const categoryLabels: Record<string, string> = {
  python: "Python",
  java: "Java",
  web: "Web",
  ai: "AI",
  data: "Data",
  uiux: "UI/UX"
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const diffColor = difficultyColors[project.difficulty];

  return (
    <article className="glass-card flex flex-col h-full overflow-hidden group">
      {/* Project Image Placeholder */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{
          background: "var(--gradient-brand-subtle)"
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
          style={{ background: "var(--gradient-brand)" }}
        >
          <Layers size={28} />
        </div>
        <span className="absolute top-3 left-3 badge badge-blue text-xs">
          {categoryLabels[project.category]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title & Difficulty */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-lg font-bold leading-snug tracking-tight group-hover:text-[#78C043] transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
            style={{
              background: diffColor.bg,
              color: diffColor.text,
              border: `1px solid ${diffColor.border}`
            }}
          >
            {project.difficulty}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-2 flex-1"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "var(--color-navy-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)"
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "var(--color-navy-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)"
              }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer actions */}
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {project.courseSlug && (
            <Link
              href={`/courses/${project.courseSlug}`}
              className="text-sm font-semibold flex items-center gap-1.5 hover:text-white transition-colors"
              style={{ color: "#78C043" }}
            >
              <ExternalLink size={14} />
              View Course
            </Link>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold flex items-center gap-1.5 hover:text-white transition-colors ml-auto"
              style={{ color: "var(--color-text-muted)" }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
