import { Testimonial } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="glass-card p-6 flex flex-col gap-5 h-full">
      {/* Quote Icon & Rating */}
      <div className="flex items-start justify-between">
        <Quote
          size={28}
          className="opacity-40"
          style={{ color: "var(--color-tech-teal)" }}
        />
        <div className="flex items-center gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-current" style={{ color: "#fbbf24" }} />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p
        className="text-sm leading-relaxed flex-1 italic"
        style={{ color: "var(--color-text-secondary)" }}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-4 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
          style={{ background: "var(--gradient-brand)" }}
          aria-hidden="true"
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{testimonial.name}</p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {testimonial.role} · {testimonial.course}
          </p>
        </div>
      </div>
    </article>
  );
}
