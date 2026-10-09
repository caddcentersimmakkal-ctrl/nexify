"use client";

import { technologies, techCategories } from "@/data/stats";
import { useState } from "react";

export default function TechnologyGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? technologies
    : technologies.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col gap-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeCategory === "all" ? "text-white" : ""
          }`}
          style={{
            background: activeCategory === "all"
              ? "var(--gradient-brand)"
              : "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: activeCategory === "all" ? "white" : "var(--color-text-secondary)"
          }}
          aria-pressed={activeCategory === "all"}
        >
          All
        </button>
        {techCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all`}
            style={{
              background: activeCategory === cat.id
                ? "var(--gradient-brand)"
                : "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: activeCategory === cat.id ? "white" : "var(--color-text-secondary)"
            }}
            aria-pressed={activeCategory === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-3">
        {filtered.map(tech => (
          <span
            key={tech.name}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-default hover:scale-105"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)"
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
