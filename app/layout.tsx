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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dorojatunchandrabumi.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dorojatun Chandrabumi | Frontend Developer",
    template: "%s | Dorojatun Chandrabumi"
  },
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
    "Dorojatun Chandrabumi",
    "Software Engineer"
  ],
  authors: [{ name: "Dorojatun Chandrabumi", url: baseUrl }],
  creator: "Dorojatun Chandrabumi",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dorojatun Chandrabumi | Frontend Developer",
    description:
      "Frontend Developer with 4+ years of experience crafting beautiful web experiences.",
    url: baseUrl,
    siteName: "Dorojatun Chandrabumi Portfolio",
    locale: "en_US",
    type: "website",
    /*
    images: [
      {
        url: '/og-image.jpg', // Add a nice Open Graph image here later
        width: 1200,
        height: 630,
        alt: 'Dorojatun Chandrabumi - Frontend Developer',
      },
    ],
    */
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dorojatun Chandrabumi | Frontend Developer",
    description: "Frontend Developer with 4+ years of experience crafting beautiful web experiences.",
    creator: "@jondoe", // Replace with your actual twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dorojatun Chandrabumi',
    jobTitle: 'Frontend Developer',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dorojatunchandrabumi.com',
    sameAs: [
      'https://github.com/chandrabumi26',
      'https://linkedin.com/in/dorojatun-chandrabumi'
    ],
    knowsAbout: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Frontend Development']
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
