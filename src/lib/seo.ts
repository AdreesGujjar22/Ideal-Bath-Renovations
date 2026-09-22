export const SITE_URL = "https://idealbathrenovations.ca";

export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&h=630&q=80";

export function buildHead(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  ogType?: string;
  schema?: object | object[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image ?? DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      ...(opts.keywords ? [{ name: "keywords", content: opts.keywords }] : []),
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: opts.ogType ?? "website" },
      { property: "og:image", content: image },
      { property: "og:site_name", content: "Ideal Bath Renovations" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(opts.schema
      ? {
          scripts: [
            {
              type: "application/ld+json",
              children: JSON.stringify(opts.schema),
            },
          ],
        }
      : {}),
  };
}
