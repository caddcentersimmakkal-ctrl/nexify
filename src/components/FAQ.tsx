"use client";

import { useState } from "react";
import { FAQ } from "@/data/faqs";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-6">
      {title && (
        <h2
          className="text-2xl md:text-3xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>
      )}

      <div className="flex flex-col gap-3">
        {faqs.map(faq => (
          <div
            key={faq.id}
            className="rounded-xl overflow-hidden transition-all"
            style={{
              background: "var(--color-surface)",
              border: `1px solid ${openId === faq.id ? "rgba(99, 102, 241, 0.3)" : "var(--color-border)"}`
            }}
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={openId === faq.id}
              id={`faq-btn-${faq.id}`}
              aria-controls={`faq-panel-${faq.id}`}
            >
              <span className="text-sm font-semibold text-white leading-snug">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className="flex-shrink-0 transition-transform duration-300"
                style={{
                  color: "var(--color-text-muted)",
                  transform: openId === faq.id ? "rotate(180deg)" : "rotate(0deg)"
                }}
              />
            </button>

            <AnimatePresence initial={false}>
              {openId === faq.id && (
                <motion.div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
