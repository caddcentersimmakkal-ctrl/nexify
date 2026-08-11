import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import EnquiryForm from "@/components/EnquiryForm";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Youtube, Facebook, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Free Counselling | Nexify Institute",
  description:
    "Get in touch with Nexify Institute. Request a free career counselling session, enquire about technology courses, or request a campus workshop.",
  openGraph: {
    title: "Contact & Free Counselling | Nexify Institute",
    description: "Start your tech learning journey. Speak with a career advisor at Nexify Institute."
  }
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" }
];

interface ContactPageProps {
  searchParams: Promise<{ course?: string; type?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { course } = await searchParams;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy) 100%)",
          borderBottom: "1px solid var(--color-border)"
        }}
        aria-labelledby="contact-page-heading"
      >
        <div className="section-container">
          <SectionHeader
            badge="Get In Touch"
            title="Let's Start Your"
            titleHighlight="Learning Journey"
            subtitle="Tell us what you want to learn and our career advisors will help you choose the right program."
            id="contact-page-heading"
          />
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column (7 cols) */}
            <AnimatedSection className="lg:col-span-7">
              <div className="glass-card p-8 md:p-10 flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    Request Free Counselling
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
                    Fill in your details below and our team will get back to you within 24 hours.
                  </p>
                </div>
                <EnquiryForm preselectedCourse={course} />
              </div>
            </AnimatedSection>

            {/* Info & Map Column (5 cols) */}
            <AnimatedSection delay={0.15} className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Contact Details Card */}
              <div className="glass-card p-8 flex flex-col gap-6">
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Contact Information
                </h3>

                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p style={{ color: "var(--color-text-secondary)" }}>+91 00000 00000 (Placeholder)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p style={{ color: "var(--color-text-secondary)" }}>info@nexifyinstitute.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <p style={{ color: "var(--color-text-secondary)" }}>[Nexify Campus Address Placeholder]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-brand)" }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Working Hours</p>
                      <p style={{ color: "var(--color-text-secondary)" }}>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                  <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: "var(--color-text-secondary)" }}>
                    Connect With Us
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        style={{
                          background: "var(--color-surface)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-text-secondary)"
                        }}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="glass-card p-6 flex flex-col gap-3">
                <h4 className="text-base font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Visit Our Campus
                </h4>
                <div
                  className="h-48 rounded-xl flex items-center justify-center text-center p-4"
                  style={{
                    background: "var(--gradient-brand-subtle)",
                    border: "1px solid rgba(99, 102, 241, 0.2)"
                  }}
                  aria-label="Google Maps location placeholder"
                >
                  <div className="flex flex-col items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
                    <MapPin size={28} style={{ color: "var(--color-indigo)" }} />
                    <span className="text-sm font-semibold text-white">Interactive Map Location</span>
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>[Google Maps Embed Placeholder]</span>
                  </div>
                </div>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
