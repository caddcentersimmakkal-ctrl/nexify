"use client";

import { useState, useMemo } from "react";
import { Course } from "@/data/courses";
import CourseCard from "./CourseCard";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

interface CourseGridProps {
  courses: Course[];
  showFilters?: boolean;
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "programming", label: "Programming" },
  { value: "development", label: "Development" },
  { value: "data", label: "Data Analytics" },
  { value: "ai", label: "AI" },
  { value: "design", label: "Design" },
  { value: "productivity", label: "Productivity" }
];

const levels = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" }
];

const durations = [
  { value: "all", label: "All Durations" },
  { value: "short", label: "Short (1 month)" },
  { value: "medium", label: "1–2 Months" },
  { value: "long", label: "3–5 Months" }
];

export default function CourseGrid({ courses, showFilters = true }: CourseGridProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch =
        search === "" ||
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.technologies.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
        course.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;

      const matchesDuration = (() => {
        if (selectedDuration === "all") return true;
        if (selectedDuration === "short") return course.durationWeeks <= 4;
        if (selectedDuration === "medium") return course.durationWeeks >= 4 && course.durationWeeks <= 8;
        if (selectedDuration === "long") return course.durationWeeks > 8;
        return true;
      })();

      return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
    });
  }, [courses, search, selectedCategory, selectedLevel, selectedDuration]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSelectedDuration("all");
  };

  const hasActiveFilters =
    search !== "" ||
    selectedCategory !== "all" ||
    selectedLevel !== "all" ||
    selectedDuration !== "all";

  return (
    <div className="flex flex-col gap-8">
      {showFilters && (
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "#0f1629" }}
            />
            <input
              type="text"
              placeholder="Search by course name, technology or category..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              id="course-search"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all"
              style={{
                background: "var(--color-surface)",
                border: "1px solid #0f1629",
                color: "#0f1629",
                fontFamily: "var(--font-body)",
                padding: "10px 50px"
              }}
              aria-label="Search courses"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--color-text-muted)" }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2" style={{ color: "#0f1629" }}>
              <SlidersHorizontal size={15} />
              <span className="text-sm">Filters:</span>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              id="category-filter"
              className="px-3 py-2 rounded-lg text-sm cursor-pointer outline-none"
              style={{
                background: "var(--color-surface)",
                border: "1px solid #0f1629",
                color: "#0f1629",
                padding: "7px 5px"
              }}
              aria-label="Filter by category"
            >
              {categories.map(c => (
                <option key={c.value} value={c.value} style={{ background: "white" }}>
                  {c.label}
                </option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={e => setSelectedLevel(e.target.value)}
              id="level-filter"
              className="px-3 py-2 rounded-lg text-sm cursor-pointer outline-none"
              style={{
                background: "var(--color-surface)",
                border: "1px solid #0f1629",
                color: "#0f1629",
                padding: "7px 5px"
              }}
              aria-label="Filter by level"
            >
              {levels.map(l => (
                <option key={l.value} value={l.value} style={{ background: "white" }}>
                  {l.label}
                </option>
              ))}
            </select>

            {/* Duration Filter */}
            <select
              value={selectedDuration}
              onChange={e => setSelectedDuration(e.target.value)}
              id="duration-filter"
              className="px-3 py-2 rounded-lg text-sm cursor-pointer outline-none"
              style={{
                background: "var(--color-surface)",
                border: "1px solid #0f1629",
                color: "#0f1629",
                padding: "7px 5px"
              }}
              aria-label="Filter by duration"
            >
              {durations.map(d => (
                <option key={d.value} value={d.value} style={{ background: "white" }}>
                  {d.label}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 rounded-lg text-sm flex items-center gap-1.5 transition-colors hover:text-white"
                style={{ color: "red" }}
              >
                <X size={14} />
                Clear all
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results Count */}
      {showFilters && (
        <p className="text-sm" style={{ color: "#0f1629" }}>
          Showing <span style={{ color: "green" }} className="font-semibold">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? "s" : ""}
        </p>
      )}

      {/* Grid */}
      {filteredCourses.length > 0 ? (
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {filteredCourses.map(course => (
            <StaggerItem key={course.id}>
              <CourseCard course={course} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div
          className="flex flex-col items-center justify-center py-24 gap-4 rounded-2xl"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)"
          }}
          role="status"
          aria-live="polite"
        >
          <Search size={40} style={{ color: "#0f1629" }} />
          <div className="text-center">
            <p className="text-lg font-semibold">No courses found</p>
            <p className="text-sm mt-1" style={{ color: "#0f1629" }}>
              Try changing your filters or search term.
            </p>
          </div>
          <button onClick={clearFilters} className="btn-secondary mt-2">
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
