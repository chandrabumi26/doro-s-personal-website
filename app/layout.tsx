import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dorojatun Chandrabumi | Frontend Developer",
  description:
    "Frontend Developer with 4+ years of experience in React, Next.js, Vue.js, TypeScript, and Tailwind CSS. Creating beautiful, responsive web experiences.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Indonesia",
  ],
  authors: [{ name: "Dorojatun Chandrabumi" }],
  openGraph: {
    title: "Dorojatun Chandrabumi | Frontend Developer",
    description:
      "Frontend Developer with 4+ years of experience crafting beautiful web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
