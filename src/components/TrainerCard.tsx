import { Trainer } from "@/data/trainers";
import { Linkedin, Briefcase } from "lucide-react";

interface TrainerCardProps {
  trainer: Trainer;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <article className="glass-card p-6 flex flex-col gap-4 text-center group">
      {/* Avatar */}
      <div className="flex justify-center">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-md"
          style={{ background: "var(--gradient-brand)" }}
          aria-hidden="true"
        >
          {trainer.name.charAt(0)}
        </div>
      </div>

      {/* Name & Role */}
      <div>
        <h3
          className="text-lg font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {trainer.name}
        </h3>
        <p
          className="text-xs mt-1 font-semibold tracking-wide"
          style={{ color: "#78C043" }}
        >
          {trainer.role}
        </p>
      </div>

      {/* Experience */}
      <div
        className="flex items-center justify-center gap-2 text-xs font-medium"
        style={{ color: "var(--color-text-muted)" }}
      >
        <Briefcase size={13} style={{ color: "var(--color-tech-teal)" }} />
        <span>{trainer.experience}</span>
      </div>

      {/* Bio */}
      <p
        className="text-sm leading-relaxed text-left"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {trainer.bio}
      </p>

      {/* Expertise Tags */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {trainer.expertise.slice(0, 4).map(skill => (
          <span
            key={skill}
            className="px-2 py-1 rounded-md text-xs font-medium"
            style={{
              background: "var(--color-navy-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-muted)"
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* LinkedIn */}
      {trainer.linkedin && (
        <a
          href={trainer.linkedin}
          className="flex items-center justify-center gap-2 text-xs font-semibold transition-colors hover:text-white mt-auto pt-2"
          style={{ color: "var(--color-tech-teal)" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${trainer.name} LinkedIn profile`}
        >
          <Linkedin size={14} />
          <span>LinkedIn Profile</span>
        </a>
      )}
    </article>
  );
}
