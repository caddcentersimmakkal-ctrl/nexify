import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Nexify Institute | Build Skills. Build Projects. Build Your Career.",
  description:
    "Learn programming, AI, data analytics, full stack development, UI/UX and modern technology skills with practical, project-based training at Nexify Institute.",
  keywords: [
    "technology courses",
    "programming courses",
    "data analytics",
    "AI courses",
    "full stack development",
    "UI/UX design",
    "IT training institute",
    "career guidance"
  ],
  openGraph: {
    title: "Nexify Institute | Build Skills. Build Projects. Build Your Career.",
    description:
      "Practical technology training for students and professionals. Learn programming, AI, data analytics, full stack development and more.",
    type: "website",
    locale: "en_IN",
    siteName: "Nexify Institute"
  },
  icons: {
    icon: "/images/nexify-mark.svg",
    shortcut: "/images/nexify-mark.svg",
    apple: "/images/nexify-mark.svg"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
        <Navbar />
        <main className="flex-1 flex flex-col" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
