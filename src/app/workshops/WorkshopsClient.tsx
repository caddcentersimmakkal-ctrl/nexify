"use client";

import { useState } from "react";
import Link from "next/link";
import { workshops, Workshop } from "@/data/workshops";
import WorkshopCard from "@/components/WorkshopCard";
import CTASection from "@/components/CTASection";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Calendar, Layers, Sparkles } from "lucide-react";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "ai", label: "AI" },
  { value: "python", label: "Python" },
  { value: "data", label: "Data Analytics" },
  { value: "fullstack", label: "Full Stack" },
  { value: "career", label: "Career" },
  { value: "technology", label: "Technology" }
];

export default function WorkshopsClient() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const featuredWorkshop = workshops.find(w => w.featured && w.status === "upcoming");

  const filteredWorkshops = workshops.filter(w => {
    const matchesTab = w.status === activeTab;
    const matchesCategory = selectedCategory === "all" || w.category === selectedCategory;
    return matchesTab && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-12">
      {/* Featured Workshop Banner */}
      {featuredWorkshop && activeTab === "upcoming" && (
        <section aria-labelledby="featured-workshop-heading">
          <div
            className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)",
              border: "1px solid rgba(99, 102, 241, 0.3)"
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col gap-3 max-w-2xl">
                <span className="badge badge-violet w-fit flex items-center gap-1">
                  <Sparkles size={12} /> Featured Workshop
                </span>
                <h2
                  id="featured-workshop-heading"
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {featuredWorkshop.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {featuredWorkshop.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold pt-2" style={{ color: "var(--color-text-muted)" }}>
                  <span>📅 {featuredWorkshop.date}</span>
                  <span>⏰ {featuredWorkshop.time}</span>
                  <span>📍 {featuredWorkshop.mode} ({featuredWorkshop.location})</span>
                </div>
              </div>
              <Link
                href={featuredWorkshop.registrationLink || "/contact"}
                className="btn-primary flex-shrink-0 text-sm px-6 py-3.5"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Tabs & Category Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Upcoming vs Past Tabs */}
        <div
          className="flex p-1 rounded-xl"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
          role="tablist"
          aria-label="Workshop event status"
        >
          <button
            role="tab"
            aria-selected={activeTab === "upcoming"}
            onClick={() => setActiveTab("upcoming")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "upcoming" ? "text-white" : ""
            }`}
            style={{
              background: activeTab === "upcoming" ? "var(--gradient-brand)" : "transparent",
              color: activeTab === "upcoming" ? "white" : "var(--color-text-secondary)"
            }}
          >
            Upcoming Workshops
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "past"}
            onClick={() => setActiveTab("past")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "past" ? "text-white" : ""
            }`}
            style={{
              background: activeTab === "past" ? "var(--gradient-brand)" : "transparent",
              color: activeTab === "past" ? "white" : "var(--color-text-secondary)"
            }}
          >
            Past Events
          </button>
        </div>

        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm outline-none cursor-pointer"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-secondary)"
          }}
          aria-label="Filter workshops by category"
        >
          {categories.map(cat => (
            <option key={cat.value} value={cat.value} style={{ background: "#0f1629" }}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      {filteredWorkshops.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map(workshop => (
            <StaggerItem key={workshop.id}>
              <WorkshopCard workshop={workshop} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div
          className="glass-card p-12 text-center flex flex-col items-center gap-3"
          role="status"
          aria-live="polite"
        >
          <Calendar size={40} style={{ color: "var(--color-text-muted)" }} />
          <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            No {activeTab} workshops found
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Try changing the category filter or check back later for new event announcements.
          </p>
        </div>
      )}

      {/* Request Workshop at College CTA */}
      <CTASection
        badge="Institutional Seminars"
        title="Want a Workshop at"
        titleHighlight="Your College?"
        description="Nexify conducts expert-led hands-on technology workshops and career orientation seminars for colleges, universities, and student chapters."
        primaryCta={{ label: "Request a Workshop", href: "/contact?type=workshop" }}
        secondaryCta={{ label: "Explore Careers", href: "/careers" }}
        features={[
          "Hands-On Hands-On Coding",
          "Industry Speaker Sessions",
          "Certificate Distribution",
          "Custom Curriculum Available"
        ]}
      />
    </div>
  );
}
