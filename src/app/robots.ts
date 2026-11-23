import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tanishajain.cv/sitemap.xml",
    host: "https://tanishajain.cv",
  };
}
