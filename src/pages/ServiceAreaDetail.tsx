import React, { useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { getServiceAreaBySlug, getServiceAreaPath } from "../data/ServiceAreasData";
import { areaSeo, buildMetaTitle } from "../data/SeoContent";
import SEO from "../components/SEO";
import PrimaryButton from "../components/UI/PrimaryButton";
import GoogleMapEmbed from "../components/UI/GoogleMapEmbed";

const ServiceAreaDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const area = getServiceAreaBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) {
    return <Navigate to="/service-areas" replace />;
  }

  const content = areaSeo[area.slug];

  // Schema for LocalBusiness and BreadcrumbList
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `https://www.idealbathrenovations.ca${getServiceAreaPath(area)}#business`,
        name: "Ideal Bath Renovations",
        url: `https://www.idealbathrenovations.ca${getServiceAreaPath(area)}`,
        logo: "https://www.idealbathrenovations.ca/logo.png",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
        description: content.metaDescription,
        telephone: "+1-672-273-0434",
        email: "info@idealbathrenovations.ca",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",

          addressLocality: "Langley Township",
          addressRegion: "BC",

          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: area.coordinates.lat,
          longitude: area.coordinates.lng,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: area.name,
          },
          ...area.neighborhoods.map((n) => ({
            "@type": "Place",
            name: `${n}, ${area.name}`,
          })),
        ],
        hasMap: area.googleMapsLink,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "28",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.idealbathrenovations.ca/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: "https://www.idealbathrenovations.ca/service-areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.name,
            item: `https://www.idealbathrenovations.ca${getServiceAreaPath(area)}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title={buildMetaTitle(content.titleKeyword)}
        description={content.metaDescription}
        canonical={`https://www.idealbathrenovations.ca${getServiceAreaPath(area)}`}
        keywords={area.keywords}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 10 },
          background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background glow */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(194, 155, 56, 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl">
          {/* Breadcrumb row */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3, fontSize: "13px", color: "#94a3b8" }}>
            <Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link to="/service-areas" style={{ color: "#94a3b8", textDecoration: "none" }}>
              Service Areas
            </Link>
            <span>/</span>
            <Typography component="span" sx={{ color: "#dfba5a", fontSize: "13px", fontWeight: 600 }}>
              {area.name}
            </Typography>
          </Box>

          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  backgroundColor: "rgba(194, 155, 56, 0.2)",
                  color: "#dfba5a",
                  px: 2,
                  py: 0.6,
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  mb: 2.5,
                  border: "1px solid rgba(194, 155, 56, 0.3)",
                }}
              >
                <MapPin size={15} />
                <span>Bathroom Remodeler • {area.name}</span>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "32px", sm: "42px", md: "48px" },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  mb: 2.5,
                  letterSpacing: "-0.02em",
                }}
              >
                {content.h1}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#cbd5e1",
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: "680px",
                }}
              >
                {content.intro}
              </Typography>

              {/* Action buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
                <PrimaryButton
                  content={`Get Free ${area.shortName} Quote`}
                  variant="gold"
                  btnpadding="14px 32px"
                  fontsize={15}
                  to="/contact"
                />
                <Box
                  component="a"
                  href="tel:6722730434"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 3,
                    py: "14px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.16)",
                      borderColor: "#dfba5a",
                      color: "#dfba5a",
                    },
                  }}
                >
                  <Phone size={18} />
                  <span>(672) 273-0434</span>
                </Box>
              </Box>
            </Grid>

            {/* Right Column: Local Map Card Embed Preview */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  p: 2,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                }}
              >
                <GoogleMapEmbed
                  businessName={`IDEAL BATH - ${area.shortName.toUpperCase()}`}
                  address={area.addressDisplay}
                  rating={5.0}
                  reviewsCount="28+"
                  mapQuery={area.mapQuery}
                  googleMapsLink={area.googleMapsLink}
                  directionsQuery={area.mapQuery}
                  bottomLabel={`IDEAL BATH • Serving ${area.name}`}
                  height={380}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Area description */}
      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "26px", md: "36px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            {content.overviewHeading}
          </Typography>
          {content.paragraphs.map((paragraph, idx) => (
            <Typography key={idx} sx={{ fontSize: "16px", color: "#334155", lineHeight: 1.8, mb: 2.5 }}>
              {paragraph}
            </Typography>
          ))}

          <Typography
            variant="h3"
            sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "20px", fontWeight: 800, color: "#0f172a", mt: 4, mb: 2 }}
          >
            {content.neighborhoodsHeading}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
            {area.neighborhoods.map((n) => (
              <Chip
                key={n}
                label={n}
                size="small"
                sx={{ backgroundColor: "#f8fafc", color: "#334155", fontWeight: 600, fontSize: "12.5px", border: "1px solid #cbd5e1" }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* FAQs written for this area only */}
      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: { xs: "24px", md: "30px" }, fontWeight: 800, color: "#0f172a", mb: 3 }}
          >
            {content.faqHeading}
          </Typography>
          {content.faqs.map((faq, idx) => (
            <Accordion
              key={idx}
              defaultExpanded={false}
              elevation={0}
              sx={{ mb: 1.5, borderRadius: "12px !important", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", "&:before": { display: "none" } }}
            >
              <AccordionSummary expandIcon={<ChevronDown color="#c29b38" />} sx={{ px: 3, py: 1 }}>
                <Typography sx={{ fontSize: "15.5px", fontWeight: 700, color: "#0f172a" }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 2.5, pt: 0 }}>
                <Typography sx={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default ServiceAreaDetail;
