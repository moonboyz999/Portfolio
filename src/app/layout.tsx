import type { Metadata } from "next";
import { Exo_2, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

/** Techy display font for the cyberpunk brand / headings. */
const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/** Readable body font that still feels futuristic. */
const exo2 = Exo_2({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khairul Izwan Bin Haziz | Software Engineer",
  description:
    "Portfolio of Khairul Izwan Bin Haziz — full-stack developer with experience in Angular, React, Node.js, Spring Boot, and Flutter. Based in Cyberjaya, Selangor.",
  keywords: [
    "Khairul Izwan",
    "Software Engineer",
    "Portfolio",
    "React",
    "Angular",
    "Spring Boot",
    "Flutter",
    "Cyberjaya",
  ],
  authors: [{ name: "Khairul Izwan Bin Haziz" }],
  openGraph: {
    title: "Khairul Izwan Bin Haziz | Software Engineer",
    description:
      "Full-stack developer building scalable web and IoT solutions with Angular, React, Node.js, and Spring Boot.",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
