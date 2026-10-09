"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Layers } from "lucide-react";

const categories = [
  { value: "all", label: "All Projects" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "web", label: "Web Dev" },
  { value: "ai", label: "AI & ML" },
  { value: "data", label: "Data Analytics" },
  { value: "uiux", label: "UI/UX Design" }
];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter(p => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="flex flex-col gap-12">
      {/* Category Pills Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              selectedCategory === cat.value ? "text-white" : ""
            }`}
            style={{
              background: selectedCategory === cat.value ? "var(--gradient-brand)" : "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: selectedCategory === cat.value ? "white" : "var(--color-text-secondary)"
            }}
            aria-pressed={selectedCategory === cat.value}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div
          className="glass-card p-12 text-center flex flex-col items-center gap-3"
          role="status"
          aria-live="polite"
        >
          <Layers size={40} style={{ color: "var(--color-text-muted)" }} />
          <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            No projects found in this category
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Try selecting a different technology category filter above.
          </p>
        </div>
      )}

      {/* Build Your Own Portfolio CTA */}
      <CTASection
        badge="Build Your Portfolio"
        title="Ready to Build Projects"
        titleHighlight="Like These?"
        description="Every Nexify course includes hands-on projects designed to enrich your resume and GitHub profile."
        primaryCta={{ label: "Explore Courses", href: "/courses" }}
        secondaryCta={{ label: "Get Free Counselling", href: "/contact" }}
      />
    </div>
  );
}
