"use client";

import { useState } from "react";
import { CourseModule } from "@/data/courses";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SyllabusListProps {
  modules: CourseModule[];
}

export default function SyllabusList({ modules }: SyllabusListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4">
      {modules.map((module, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={module.title}
            className="rounded-xl overflow-hidden transition-all"
            style={{
              background: "var(--color-surface)",
              border: `1px solid ${isOpen ? "rgba(99, 102, 241, 0.35)" : "var(--color-border)"}`
            }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors"
              aria-expanded={isOpen}
              aria-controls={`syllabus-content-${index}`}
              id={`syllabus-btn-${index}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: isOpen ? "var(--gradient-brand)" : "rgba(255,255,255,0.08)" }}
                >
                  {index + 1}
                </span>
                <span className="text-base font-bold text-white tracking-tight" style={{ color: "#0f1629" }}>
                  {module.title}
                </span>
              </div>
              <ChevronDown
                size={18}
                className="flex-shrink-0 transition-transform duration-300"
                style={{
                  color: "var(--color-text-muted)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                }}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`syllabus-content-${index}`}
                  role="region"
                  aria-labelledby={`syllabus-btn-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="px-5 pb-5 pt-1 border-t"
                    style={{ borderColor: "var(--color-border)", padding: "15px" }}
                  >
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-3">
                      {module.topics.map(topic => (
                        <li
                          key={topic}
                          className="flex items-center gap-2.5 text-sm"
                          style={{ color: "#0f1629" }}
                        >
                          <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: "#60a5fa" }} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
