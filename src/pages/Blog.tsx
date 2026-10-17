import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import { blogPosts } from "../data/BlogData";
import { buildMetaTitle, SITE_URL } from "../data/SeoContent";

const Blog: React.FC = () => (
  <>
    <SEO
      title={buildMetaTitle("Bathroom Renovation Blog")}
      description="Bathroom renovation guidance for homeowners in Langley and Surrey, BC, with practical advice on layouts, waterproofing, materials, lighting, and planning."
      canonical={`${SITE_URL}/blog`}
    />
    <Breadcrumbs currentLabel="Blog" />

    <Box sx={{ backgroundColor: "#0f172a", color: "#fff", py: { xs: 7, md: 9 } }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: { xs: "32px", md: "46px" }, fontWeight: 800, lineHeight: 1.15, mb: 2 }}
        >
          Bathroom Renovation Guides for Langley &amp; Surrey
        </Typography>
        <Typography sx={{ color: "#cbd5e1", fontSize: { xs: "16px", md: "18px" }, maxWidth: 720, mx: "auto" }}>
          Helpful bathroom renovation advice for homeowners in Langley and Surrey, from layout planning and waterproofing to materials, lighting, and project timelines.
        </Typography>
      </Container>
    </Box>

    <Box sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={post.slug}>
              <Box
                component={Link}
                to={`/blog/${post.slug}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all .25s ease",
                  "&:hover": { transform: "translateY(-4px)", borderColor: "#c29b38", boxShadow: "0 14px 32px rgba(15,23,42,.08)" },
                }}
              >
                <Box component="img" src={post.image} alt={post.title} loading="lazy" sx={{ width: "100%", height: 200, objectFit: "cover" }} />
                <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#c29b38", textTransform: "uppercase", letterSpacing: ".08em", mb: 1 }}>
                    {post.category}
                  </Typography>
                  <Typography component="h2" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "20px", fontWeight: 800, color: "#0f172a", lineHeight: 1.3, mb: 1.5 }}>
                    {post.title}
                  </Typography>
                  <Typography sx={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.65, mb: 2, flexGrow: 1 }}>{post.excerpt}</Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#64748b", fontSize: "13px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.7 }}>
                      <Clock size={14} /> {post.readTime}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#b45309", fontWeight: 700 }}>
                      Read article <ArrowRight size={15} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Blog;
