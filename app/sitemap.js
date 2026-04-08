import { SERVICES } from "@/lib/business";

const BASE = "https://roosgaragedoorscapetown.co.za";

export default function sitemap() {
  const now = new Date();
  const routes = ["", "/about", "/gallery", "/service-areas", "/contact"].map(r => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
  const services = SERVICES.map(s => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  return [...routes, ...services];
}
