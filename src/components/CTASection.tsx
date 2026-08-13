import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "gradient" | "subtle";
  features?: string[];
}

export default function CTASection({
  badge,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  variant = "gradient",
  features
}: CTASectionProps) {
  const bgStyles = {
    default: {
      background: "var(--color-navy-surface)",
      border: "1px solid var(--color-border)"
    },
    gradient: {
      background: "linear-gradient(135deg, rgba(22, 134, 160, 0.12) 0%, rgba(120, 192, 67, 0.10) 100%)",
      border: "1px solid rgba(120, 192, 67, 0.2)"
    },
    subtle: {
      background: "var(--color-card-surface)",
      border: "1px solid var(--color-border)"
    }
  };

  return (
    <section
      className="rounded-2xl p-8 md:p-12 lg:p-16 text-center"
      style={{ ...bgStyles[variant], display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6" style={{ padding: "50px 16px" }}>
        {badge && (
          <span className="badge badge-green">{badge}</span>
        )}

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "black" }}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="gradient-text">{titleHighlight}</span>
          )}
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed max-w-lg"
          style={{ color: "black" }}
        >
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {features.map(feature => (
              <span
                key={feature}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                style={{
                  background: "rgba(120, 192, 67, 0.1)",
                  border: "1px solid rgba(120, 192, 67, 0.25)",
                  color: "#78C043",
                  padding: "5px 6px"
                }}
              >
                ✓ {feature}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
            <ArrowRight size={16} />
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
