import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.tanishajain.cv";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tanisha Jain | B.Tech CSE Student & Developer",
    template: "%s | Tanisha Jain",
  },
  description:
    "Tanisha Jain's developer portfolio. B.Tech Computer Science student specialising in AI and Machine Learning, showcasing software, web development and personal projects.",
  applicationName: "Tanisha Jain Portfolio",
  authors: [{ name: "Tanisha Jain", url: siteUrl }],
  creator: "Tanisha Jain",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Tanisha Jain",
    "Tanisha Jain developer",
    "Tanisha Jain portfolio",
    "B.Tech CSE student",
    "AI and Machine Learning student",
    "Computer Science student portfolio",
    "Web development projects",
    "Student developer India",
  ],
  openGraph: {
    title: "Tanisha Jain | Developer Portfolio",
    description:
      "Explore Tanisha Jain's software development projects, technical interests and learning journey in Computer Science, AI and Machine Learning.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Tanisha Jain",
  },
  twitter: {
    card: "summary",
    title: "Tanisha Jain | Developer Portfolio",
    description:
      "Computer Science student exploring software development, AI and Machine Learning through hands-on projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f0",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanisha Jain",
    url: siteUrl,
    description:
      "B.Tech Computer Science student specialising in AI and Machine Learning, interested in software development and building digital projects.",
    knowsAbout: [
      "Computer Science",
      "Artificial Intelligence",
      "Machine Learning",
      "C++",
      "Python",
      "JavaScript",
      "Web Development",
      "Next.js",
    ],
    sameAs: ["https://github.com/TANISHA16-BYTE"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tanisha Jain | Developer Portfolio",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: "Tanisha Jain",
    },
    inLanguage: "en-IN",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {structuredData.map((data) => (
          <script
            key={data["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
          />
        ))}
      </body>
    </html>
  );
}
