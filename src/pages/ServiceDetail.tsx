import React from "react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "../data/ReviewsData";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { getServiceBySlug, ServiceDetailItem } from "../data/ServicesDetailData";
import { serviceSeo, buildMetaTitle, SITE_URL } from "../data/SeoContent";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import PrimaryButton from "../components/UI/PrimaryButton";
import GoogleMapEmbed from "../components/UI/GoogleMapEmbed";
import Grid from "@mui/material/Grid2";
import { ChevronDown, Phone, HelpCircle } from "lucide-react";

interface ServiceDetailProps {
  forcedSlug?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ forcedSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = forcedSlug || slug || "bathroom-remodeling";
  const service: ServiceDetailItem | undefined = getServiceBySlug(activeSlug);

  // If service not found, show directory
  if (!service) {
    return (
      <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#f8fafc", minHeight: "60vh" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>
            Service Not Found
          </Typography>
          <Typography sx={{ color: "#64748b", mb: 4 }}>
            The requested service could not be located. Please choose from the services below.
          </Typography>
          <PrimaryButton content="View All 12 Renovation Services" to="/services" variant="gold" />
        </Container>
      </Box>
    );
  }

  const content = serviceSeo[activeSlug];
  if (!content) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const headingFont = "'Plus Jakarta Sans', sans-serif";

  return (
    <>
      <SEO
        title={buildMetaTitle(content.titleKeyword)}
        description={content.metaDescription}
        canonical={`${SITE_URL}/services/${service.slug}`}
        schema={faqSchema}
      />

      <Breadcrumbs currentLabel={service.title} parentLabel="Services" parentPath="/services" />

      {/* Hero: H1 + keyword description */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          py: { xs: 7, md: 10 },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={service.heroImage}
          alt={`${service.title} in Langley, BC`}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: "100%", md: "55%" },
            height: "100%",
            objectFit: "cover",
            opacity: { xs: 0.18, md: 0.3 },
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: { xs: "100%", md: "720px" } }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: headingFont,
                fontSize: { xs: "32px", sm: "42px", md: "50px" },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              {content.h1}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "16px", md: "19px" }, color: "#cbd5e1", lineHeight: 1.6, mb: 4 }}
            >
              {content.intro}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <PrimaryButton
                content="Request In-Home Quote"
                variant="gold"
                btnpadding="14px 30px"
                fontsize={15}
                to={`/contact?service=${encodeURIComponent(service.title)}`}
              />
              <Box
                component="a"
                href="tel:6722730434"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 3,
                  py: 1.6,
                  borderRadius: "8px",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "15px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Phone size={18} color="#dfba5a" />
                <span>Call (672) 273-0434</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Description + map */}
      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 7 }} alignItems="flex-start">
            <Grid size={{ xs: 12, lg: 7 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: headingFont,
                  fontSize: { xs: "26px", md: "34px" },
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
            </Grid>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  p: { xs: 2, md: 2.5 },
                  backgroundColor: "#f8fafc",
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontFamily: headingFont, fontSize: "17px", fontWeight: 800, color: "#0f172a", mb: 1.5 }}
                >
                  {service.title} Service Area in Langley, BC
                </Typography>
                <GoogleMapEmbed
                  businessName="IDEAL BATH RENOVATIONS"
                  address="Serving Langley Township, BC"
                  rating={GOOGLE_RATING}
                  reviewsCount={GOOGLE_REVIEW_COUNT}
                  mapQuery="Langley+Township,+BC"
                  googleMapsLink="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
                  directionsQuery="Langley+Township,+BC"
                  bottomLabel={`IDEAL BATH • ${service.title} in Langley, BC`}
                  height={380}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQs written for this page only */}
      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
            <HelpCircle size={18} color="#c29b38" />
            <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#c29b38", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              FAQs
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{ fontFamily: headingFont, fontSize: { xs: "24px", md: "30px" }, fontWeight: 800, color: "#0f172a", mb: 3 }}
          >
            {content.faqHeading}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {content.faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                elevation={0}
                defaultExpanded={false}
                sx={{ border: "1px solid #e2e8f0", borderRadius: "10px !important", "&:before": { display: "none" }, backgroundColor: "#ffffff" }}
              >
                <AccordionSummary expandIcon={<ChevronDown size={18} color="#c29b38" />} sx={{ px: 3, py: 1 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#0f172a" }}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography sx={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7 }}>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ServiceDetail;
