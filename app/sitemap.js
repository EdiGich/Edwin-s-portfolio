const BASE_URL = "https://edwingichira.dev";

const routes = [
  {
    url: "/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1.0,
  },
  {
    url: "/work",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/resume",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "/contact",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
