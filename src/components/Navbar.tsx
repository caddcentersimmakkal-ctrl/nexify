"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Workshops", href: "/workshops" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 backdrop-blur-xl border-b"
            : "py-5"
        }`}
        style={{
          background: isScrolled ? "rgba(16, 24, 39, 0.92)" : "transparent",
          borderColor: isScrolled ? "var(--color-border)" : "transparent"
        }}
      >
        <div className="section-container flex items-center justify-between">
          {/* Official Nexify Logo */}
          <Link href="/" className="flex items-center group" aria-label="Nexify Institute Home">
            <div className="relative w-[140px] sm:w-[165px] h-[40px] sm:h-[45px]">
              <Image
                src="/images/nexify-logo.svg"
                alt="THE NEXIFY - Training & Placement"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-white"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Free Counselling
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--color-text-secondary)" }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ paddingTop: "76px" }}
          >
            <div
              className="absolute inset-0 backdrop-blur-xl"
              style={{ background: "rgba(16, 24, 39, 0.98)" }}
              onClick={() => setIsMobileOpen(false)}
            />

            <div className="relative z-10 section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 rounded-xl text-lg font-bold transition-all"
                    style={{
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-heading)"
                    }}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1 }}
                className="mt-4 pt-4 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-base py-3.5"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Get Free Counselling
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
