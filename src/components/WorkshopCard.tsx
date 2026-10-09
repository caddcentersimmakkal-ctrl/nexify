import Link from "next/link";
import { Workshop } from "@/data/workshops";
import { Calendar, Clock, MapPin, Wifi, Building2, Users } from "lucide-react";

interface WorkshopCardProps {
  workshop: Workshop;
  featured?: boolean;
}

const modeIcons = {
  Online: Wifi,
  Offline: Building2,
  Hybrid: Users
};

const categoryColors: Record<string, string> = {
  ai: "badge-violet",
  python: "badge-blue",
  data: "badge-amber",
  fullstack: "badge-green",
  career: "badge-blue",
  technology: "badge-blue"
};

const categoryLabels: Record<string, string> = {
  ai: "AI",
  python: "Python",
  data: "Data Analytics",
  fullstack: "Full Stack",
  career: "Career",
  technology: "Technology"
};

export default function WorkshopCard({ workshop, featured = false }: WorkshopCardProps) {
  const ModeIcon = modeIcons[workshop.mode];

  const formattedDate = new Date(workshop.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <article
      className={`glass-card flex flex-col ${featured ? "p-8" : "p-6"} gap-4 h-full`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <span className={`badge ${categoryColors[workshop.category]}`}>
          {categoryLabels[workshop.category]}
        </span>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: workshop.status === "upcoming"
              ? "rgba(74, 222, 128, 0.1)"
              : "rgba(100, 116, 139, 0.1)",
            color: workshop.status === "upcoming" ? "#4ade80" : "var(--color-text-muted)",
            border: `1px solid ${workshop.status === "upcoming" ? "rgba(74, 222, 128, 0.2)" : "var(--color-border)"}`
          }}
        >
          {workshop.status === "upcoming" ? "Upcoming" : "Past Event"}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-bold leading-snug tracking-tight ${featured ? "text-2xl" : "text-lg"}`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {workshop.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {workshop.description}
      </p>

      {/* Meta */}
      <div
        className="flex flex-col gap-2 pt-4 text-sm"
        style={{
          borderTop: "1px solid var(--color-border)",
          color: "var(--color-text-muted)"
        }}
      >
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>{formattedDate}</span>
          {workshop.time && (
            <>
              <span>·</span>
              <Clock size={14} />
              <span>{workshop.time}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <ModeIcon size={14} />
          <span>{workshop.mode}</span>
          <span>·</span>
          <MapPin size={14} />
          <span className="truncate">{workshop.location}</span>
        </div>
      </div>

      {/* CTA */}
      {workshop.status === "upcoming" && (
        <Link
          href={workshop.registrationLink || "/contact"}
          className="btn-primary justify-center mt-2"
          aria-label={`Register for ${workshop.title}`}
        >
          Register Now
        </Link>
      )}
    </article>
  );
}
