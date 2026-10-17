import React from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Clock } from "lucide-react";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import PrimaryButton from "../components/UI/PrimaryButton";
import { blogPosts, getBlogPost } from "../data/BlogData";
import { SITE_URL } from "../data/SeoContent";

const renderLinkedText = (text: string, links: { text: string; to: string }[] = []) => {
  const parts: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let nextLink: { text: string; to: string; index: number } | undefined;
    for (const link of links) {
      const index = text.indexOf(link.text, cursor);
      if (index !== -1 && (!nextLink || index < nextLink.index)) {
        nextLink = { ...link, index };
      }
    }

    if (!nextLink) {
      parts.push(text.slice(cursor));
      break;
    }

    if (nextLink.index > cursor) parts.push(text.slice(cursor, nextLink.index));
    parts.push(
      <Link key={`${nextLink.to}-${nextLink.index}`} to={nextLink.to} style={{ color: "#b45309", fontWeight: 600 }}>
        {nextLink.text}
      </Link>
    );
    cursor = nextLink.index + nextLink.text.length;
  }

  return parts;
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    ...(post.date ? { datePublished: post.date, dateModified: post.date } : {}),
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Ideal Bath Renovations" },
    publisher: { "@type": "Organization", name: "Ideal Bath Renovations" },
  };
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const heading = "'Plus Jakarta Sans', sans-serif";

  return (
    <>
      <SEO title={post.metaTitle} description={post.metaDescription} canonical={url} ogImage={post.image} ogType="article" schema={schema} />
      <Breadcrumbs currentLabel={post.title} parentLabel="Blog" parentPath="/blog" />

      <Box component="article" sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#fff" }}>
        <Container maxWidth="md">
          <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#c29b38", textTransform: "uppercase", letterSpacing: ".08em", mb: 1.5 }}>
            {post.category}
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: heading, fontSize: { xs: "30px", md: "42px" }, fontWeight: 800, color: "#0f172a", lineHeight: 1.2, mb: 2 }}>
            {post.title}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", color: "#64748b", fontSize: "14px", mb: 4 }}>
            {post.date && <span>{new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</span>}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <Clock size={14} /> {post.readTime}
            </Box>
          </Box>
          <Box component="img" src={post.image} alt={post.title} sx={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: "16px", mb: 4 }} />
          {post.intro.map((paragraph, index) => (
            <Typography key={index} sx={{ fontSize: "18px", color: "#334155", lineHeight: 1.8, mb: 2 }}>
              {renderLinkedText(paragraph, post.internalLinks)}
            </Typography>
          ))}

          {post.sections.map((section) => (
            <Box key={section.heading} sx={{ mb: 4 }}>
              <Typography variant="h2" sx={{ fontFamily: heading, fontSize: { xs: "22px", md: "28px" }, fontWeight: 800, color: "#0f172a", mb: 1.5 }}>
                {section.heading}
              </Typography>
              {section.paragraphs.map((para, i) => (
                <Typography key={i} sx={{ fontSize: "16px", color: "#334155", lineHeight: 1.8, mb: 2 }}>
                  {renderLinkedText(para, post.internalLinks)}
                </Typography>
              ))}
            </Box>
          ))}

          <Box sx={{ mt: 5, p: 4, borderRadius: "16px", backgroundColor: "#0f172a", color: "#fff", textAlign: "center" }}>
            <Typography variant="h2" sx={{ fontFamily: heading, fontSize: "24px", fontWeight: 800, mb: 1 }}>
              Planning a Bathroom Renovation?
            </Typography>
            <Typography sx={{ color: "#cbd5e1", mb: 3 }}>Book a free in-home estimate with Ideal Bath Renovations.</Typography>
            <PrimaryButton content="Request a Free Quote" variant="gold" btnpadding="14px 30px" fontsize={15} to="/contact" />
          </Box>

          <Typography variant="h2" sx={{ fontFamily: heading, fontSize: "22px", fontWeight: 800, color: "#0f172a", mt: 6, mb: 2 }}>
            More from the blog
          </Typography>
          {more.map((p) => (
            <Box key={p.slug} sx={{ mb: 1.2 }}>
              <Link to={`/blog/${p.slug}`} style={{ color: "#b45309", fontWeight: 700, textDecoration: "none" }}>
                {p.title}
              </Link>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default BlogPost;
