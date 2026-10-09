import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Student Projects & Portfolio | Nexify Institute",
  description:
    "Explore real-world projects built by Nexify learners across Web Development, Python, AI, Data Analytics, Java, and UI/UX Design.",
  openGraph: {
    title: "Student Projects & Portfolio | Nexify Institute",
    description: "See what learners build when theory turns into practice at Nexify Institute."
  }
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy) 100%)",
          borderBottom: "1px solid var(--color-border)"
        }}
        aria-labelledby="projects-page-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="Practical Outcomes"
            title="Student Projects &"
            titleHighlight="Portfolio"
            subtitle="See what learners build when theory turns into practice. All projects reflect practical implementation on real industry problems."
            id="projects-page-heading"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <ProjectsClient />
        </div>
      </section>
    </div>
  );
}
