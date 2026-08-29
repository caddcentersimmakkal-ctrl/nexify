"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  type: "terms" | "privacy";
  title: string;
  description: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export default function LegalPage({
  type,
  title,
  description,
  effectiveDate,
  sections,
}: LegalPageProps) {
  const isPrivacy = type === "privacy";

  return (
    <main className="pt-24">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background:
            "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy) 100%)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        {/* Decorative background */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "var(--color-primary)",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "var(--color-secondary)",
          }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <AnimatedSection direction="up">
            <div className="max-w-4xl" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div className="badge badge-blue w-fit mb-5">
                {isPrivacy ? "Privacy & Data Protection" : "Legal Information"}
              </div>

              <h1
                className="text-4xl md:text-6xl font-black text-white"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                {title}
              </h1>

              <p className="mt-5 max-w-3xl text-base md:text-lg leading-8 text-white/70">
                {description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
                {isPrivacy ? (
                  <ShieldCheck size={16} />
                ) : (
                  <FileText size={16} />
                )}

                <span>
                  Effective Date: {effectiveDate}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)] gap-10">
            {/* =================================================
                DESKTOP SIDEBAR
            ================================================== */}
            <aside className="hidden lg:block">
              <div
                className="glass-card p-5 sticky top-28"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ fontSize: "16px", marginBottom: "10px" }}>
                  On This Page
                </p>

                <nav aria-label={`${title} sections`}>
                  <ul className="space-y-1">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="block rounded-lg px-3 py-2 text-sm transition-all duration-200 hover:bg-black/5 hover:translate-x-0.5"
                        >
                          <span className="mr-2 opacity-40" style={{ marginRight: "10px" }}>
                            {section.number}
                          </span>

                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* =================================================
                CONTENT
            ================================================== */}
            <div className="min-w-0 max-w-4xl">
              <div className="glass-card p-6 md:p-10 lg:p-12">
                {/* Intro notice */}
                <div
                  className="flex items-start gap-4 rounded-2xl p-5 mb-10"
                  style={{
                    background:
                      "var(--color-surface)",
                    border:
                      "1px solid var(--color-border)",
                    padding: "15px",
                    marginBottom: "15px"
                  }}
                >
                  <div
                    className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background:
                        "var(--gradient-brand)",
                    }}
                  >
                    {isPrivacy ? (
                      <ShieldCheck size={21} />
                    ) : (
                      <FileText size={21} />
                    )}
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">
                      {isPrivacy
                        ? "Your Privacy Matters"
                        : "Agreement to Our Terms"}
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                      {isPrivacy
                        ? "We are committed to handling your personal information responsibly and transparently."
                        : "By accessing or using the Nexify Institute website, enrolling in our courses, or submitting an enquiry, you agree to these Terms & Conditions."}
                    </p>
                  </div>
                </div>

                {/* Legal Sections */}
                <div className="space-y-12">
                  {sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-32"
                    >
                      <div className="flex gap-4 md:gap-5">
                        {/* Number */}
                        <div className="shrink-0">
                          <span
                            className="text-xs font-bold opacity-40"
                            style={{
                              fontFamily:
                                "var(--font-heading)",
                              fontSize: "22px"
                            }}
                          >
                            {section.number}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <h2
                            className="text-2xl md:text-3xl font-bold"
                            style={{
                              fontFamily:
                                "var(--font-heading)",
                            }}
                          >
                            {section.title}
                          </h2>

                          <div className="legal-content mt-4 text-sm md:text-base leading-8" style={{ padding: "20px" }}>
                            {section.content}
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>

                {/* Last Updated */}
                <div
                  className="mt-12 pt-6 text-sm text-[var(--color-text-muted)]"
                  style={{
                    borderTop:
                      "1px solid var(--color-border)",
                  }}
                >
                  Last Updated: {effectiveDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section
        className="section-padding"
        style={{background: "white"}}
      >
        <div className="section-container">
          <AnimatedSection direction="up">
            <div className="glass-card p-8 md:p-12 text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "1rem" }}>
              <div
                className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                style={{
                  background: "var(--gradient-brand)",
                }}
              >
                {isPrivacy ? (
                  <ShieldCheck size={22} />
                ) : (
                  <FileText size={22} />
                )}
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                {isPrivacy
                  ? "Questions about your privacy?"
                  : "Questions about our terms?"}
              </h2>

              <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base leading-7 text-[var(--color-text-secondary)]">
                {isPrivacy
                  ? "If you have questions about how Nexify handles your information, please contact our support team."
                  : "If you have questions about courses, enrollment, payments, or our policies, our team is happy to help."}
              </p>

              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 mt-6"
              >
                Contact Nexify
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
