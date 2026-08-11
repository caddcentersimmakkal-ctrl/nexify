"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

export default function Stats() {
  return (
    <section
      className="py-12 border-y"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)"
      }}
    >
      <div className="section-container">
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {stats.map(stat => (
            <StaggerItem key={stat.id}>
              <div className="flex flex-col items-center text-center gap-1 py-4">
                <motion.span
                  className="text-4xl md:text-5xl font-black tracking-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {stat.value}
                </motion.span>
                <span
                  className="text-base font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {stat.label}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {stat.description}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
