import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center">
      <div className="section-container text-center max-w-lg mx-auto flex flex-col items-center gap-6">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center"
          style={{ background: "var(--gradient-brand-subtle)", border: "1px solid rgba(99, 102, 241, 0.3)" }}
        >
          <Search size={36} style={{ color: "var(--color-indigo)" }} />
        </div>

        <h1 className="text-6xl font-black gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
          404
        </h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Page Not Found
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link href="/courses" className="btn-secondary">
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
