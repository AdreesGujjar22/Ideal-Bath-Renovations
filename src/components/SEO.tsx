import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = "https://idealbathrenovations.ca/",
  ogImage = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&h=630&q=80",
  ogType = "website",
  keywords = "Bathroom Remodeling, Bathroom Renovation, Tub to Shower Conversion, Langley Twp, BC",
  schema,
}) => {
  useEffect(() => {
    // 1. Set Document Title
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        if (isProperty) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Description & Keywords
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Open Graph
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", canonical, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:site_name", "Ideal Bath Renovations", true);
    setMetaTag("og:locale", "en_CA", true);

    // Twitter Cards
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // 3. Schema JSON-LD Injection
    if (schema) {
      const scriptId = `seo-schema-${title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
      let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = scriptId;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema, null, 2);

      return () => {
        const el = document.getElementById(scriptId);
        if (el) el.remove();
      };
    }
  }, [title, description, canonical, ogImage, ogType, keywords, schema]);

  return null;
};

export default SEO;
