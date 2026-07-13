import type { MetadataRoute } from "next";
import { SITE_URL, PROFILE } from "@/lib/data";

const languages = {
  en: `${SITE_URL}/`,
  fr: `${SITE_URL}/fr`,
  he: `${SITE_URL}/he`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/he`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}${PROFILE.resume}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
