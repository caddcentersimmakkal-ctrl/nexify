import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const footerLinks = {
  courses: [
    { label: "Programming", href: "/courses/certificate-programming-foundations-c-cpp" },
    { label: "Python & AI", href: "/courses/python-developer-ai-automation" },
    { label: "Data Analytics", href: "/courses/data-analytics-professional" },
    { label: "Full Stack MERN", href: "/courses/mern-stack-developer-generative-ai-agentic-applications" },
    { label: "Full Stack MEAN", href: "/courses/mean-stack-developer-generative-ai-agentic-applications" },
    { label: "Data Science", href: "/courses/ai-powered-data-science-professional" }
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
                <span>+91 00000 00000</span>
              </a>
              <a
                href="mailto:example@nexifyinstitute.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Mail size={15} style={{ color: "var(--color-tech-teal)" }} />
                <span>example@nexifyinstitute.com</span>
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                <MapPin size={15} className="flex-shrink-0" style={{ color: "var(--color-tech-teal)" }} />
                <span>Simmakkal, Madurai, Tamil Nadu</span>
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
          {/* <div>
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
          </div> */}

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

          {/* Google Maps Placeholder */}
          <div className="p-6 flex flex-col gap-3">
            <h4 className="text-base font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Visit Our Campus
            </h4>
            <div
              className="h-48 rounded-xl flex items-center justify-center text-center"
              style={{
                background: "var(--gradient-brand-subtle)",
                border: "1px solid rgba(99, 102, 241, 0.2)"
              }}
              aria-label="Google Maps location placeholder"
            >
              <div className="flex flex-col items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.087330655679!2d78.12145335!3d9.9266848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58f8da053f3%3A0xa71e778a1a26c696!2sSimmakkal%2C%20Madurai%20Main%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1787554522660!5m2!1sen!2sin" style={{ border: "0;", width: "100%", height: "100%" }} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
              </div>
            </div>
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
