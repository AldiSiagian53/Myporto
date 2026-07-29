import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
// @ts-ignore: Allow global CSS import in Next.js layout
import "./globals.css";

// Display face — used for headings only, keeps a strong developer/portfolio voice
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

// Body face — neutral, highly readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

// Mono face — used for tags, labels, code-like accents (fits developer subject)
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nama Anda — Full-Stack Developer",
  description:
    "Portofolio pribadi Nama Anda, Full-Stack / Frontend Developer. Lihat proyek, keahlian, dan cara menghubungi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sora.variable} ${inter.variable} ${jbmono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
