import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cgi-bin/"]
    },
    sitemap: "https://shikshanation.com/sitemap.xml",
    host: "https://shikshanation.com",
  };
}
