import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";

// Content typeface — "sans is meaning"
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

// Metadata typeface — "mono is structure"
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jb",
  display: "swap",
});

// Serif accent — elegant italic flourish for select hero words
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-eb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hypit — AI Creative Workflow Agent",
  description:
    "AI-powered content systems for scaling and testing short-form video.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${ebGaramond.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
