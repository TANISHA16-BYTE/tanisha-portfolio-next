import type { MetadataRoute } from "next";

const siteUrl = "https://tanishajain.cv";

const projectSlugs = [
  "the-red-pen",
  "truevoice",
  "student-task-manager",
  "quizforge",
  "weather-dashboard",
  "expense-tracker",
  "developer-portfolio",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectSlugs.map((slug) => ({
      url: `${siteUrl}/work/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
