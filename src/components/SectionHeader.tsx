interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className = "",
  id
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div id={id} className={`flex flex-col gap-4 ${alignClass} ${className}`} style={{ marginBottom: "30px" }}>
      {badge && (
        <span className="badge badge-green">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
