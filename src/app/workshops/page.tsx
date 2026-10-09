import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import WorkshopsClient from "./WorkshopsClient";

export const metadata: Metadata = {
  title: "Workshops & Seminars | Nexify Institute",
  description:
    "Attend Nexify's upcoming technology workshops, AI seminars, and hands-on developer bootcamps. Request a workshop for your college or university.",
  openGraph: {
    title: "Workshops & Seminars | Nexify Institute",
    description: "Accelerate your tech skills with targeted workshops in AI, Python, Data Analytics, and Full Stack Development."
  }
};

export default function WorkshopsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy) 100%)",
          borderBottom: "1px solid var(--color-border)"
        }}
        aria-labelledby="workshops-page-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="Events & Learning Sessions"
            title="Workshops & Seminars"
            subtitle="Participate in hands-on workshops, technology seminars, and career bootcamps led by industry instructors."
            id="workshops-page-heading"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="section-container">
          <WorkshopsClient />
        </div>
      </section>
    </div>
  );
}
