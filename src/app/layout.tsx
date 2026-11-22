import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tanisha Jain | Developer Portfolio",
    template: "%s | Tanisha Jain",
  },
  description:
    "The personal portfolio of Tanisha Jain, a Computer Science and Engineering student exploring software development, artificial intelligence and machine learning through projects and experimentation.",
  applicationName: "Tanisha Jain Portfolio",
  authors: [{ name: "Tanisha Jain" }],
  creator: "Tanisha Jain",
  keywords: [
    "Tanisha Jain",
    "Tanisha Jain portfolio",
    "Computer Science student",
    "AI and Machine Learning",
    "Software development",
    "Web development",
    "Student projects",
  ],
  openGraph: {
    title: "Tanisha Jain | Developer Portfolio",
    description:
      "Computer Science student exploring software development, AI and machine learning. A collection of projects, ideas and ongoing learning.",
    type: "website",
    locale: "en_IN",
    siteName: "Tanisha Jain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanisha Jain | Developer Portfolio",
    description:
      "Computer Science student exploring software development, AI and machine learning through hands-on projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
