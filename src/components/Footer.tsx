import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const footerLinks = {
  courses: [
    { label: "Programming", href: "/courses/programming-fundamentals" },
    { label: "Python & AI", href: "/courses/python-ai-automation" },
    { label: "Data Analytics", href: "/courses/data-analytics-power-bi" },
    { label: "Full Stack MERN", href: "/courses/full-stack-mern" },
    { label: "UI/UX Design", href: "/courses/ui-ux-design-figma" },
    { label: "AI Productivity", href: "/courses/ai-productivity-specialist" }
  ],
  explore: [
    { label: "Workshops", href: "/workshops" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "About Us", href: "/about" }
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Free Counselling", href: "/contact" }
  ]
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{
        background: "var(--color-navy-surface)",
        borderTop: "1px solid var(--color-border)"
      }}
    >
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <Link href="/" className="flex items-center w-fit" aria-label="Nexify Institute Home">
                <div className="relative w-[180px] h-[50px]">
                  <Image
                    src="/images/nexify-logo.jpg"
                    alt="THE NEXIFY - Training & Placement"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p
                className="mt-2 text-sm font-semibold tracking-wide"
                style={{ color: "var(--color-primary-green)" }}
              >
                Build Skills. Build Projects. Build Your Career.
              </p>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Nexify Institute provides practical, industry-focused technology training, real-world project portfolios, and career placement support to help students and professionals succeed in tech.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Phone size={15} style={{ color: "var(--color-tech-teal)" }} />
                <span>+91 00000 00000 (Placeholder)</span>
              </a>
              <a
                href="mailto:info@nexifyinstitute.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Mail size={15} style={{ color: "var(--color-tech-teal)" }} />
                <span>info@nexifyinstitute.com</span>
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                <MapPin size={15} className="flex-shrink-0" style={{ color: "var(--color-tech-teal)" }} />
                <span>[Nexify Campus Address Placeholder]</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "var(--color-card-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)"
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Courses Column */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-primary-green)", paddingTop: "15px", paddingBottom: "15px" }}
            >
              Courses
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.courses.map(link => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-primary-green)", paddingTop: "15px", paddingBottom: "15px" }}
            >
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.explore.map(link => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-primary-green)", paddingTop: "15px", paddingBottom: "15px" }}
            >
              Support
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map(link => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <div className="mt-8 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
              <p
                className="text-xs uppercase tracking-widest mb-1 font-bold"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Working Hours
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                Mon–Sat: 9:00 AM – 7:00 PM
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--color-border)", paddingTop: "15px", marginTop: "15px" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © {currentYear} Nexify Institute (Training &amp; Placement). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "var(--color-text-muted)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "var(--color-text-muted)" }}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
