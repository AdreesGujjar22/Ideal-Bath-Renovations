import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
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
import {
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Award,
  Hammer,
  Bath,
  Home,
  Navigation,
} from "lucide-react";
import { getServiceAreaBySlug, serviceAreasData } from "../data/ServiceAreasData";
import SEO from "../components/SEO";
import PrimaryButton from "../components/UI/PrimaryButton";
import GoogleMapEmbed from "../components/UI/GoogleMapEmbed";
import EstimateForm from "../components/Home/EstimateForm";

const ServiceAreaDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getServiceAreaBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) {
    return <Navigate to="/service-areas" replace />;
  }

  const otherAreas = serviceAreasData.filter((a) => a.id !== area.id);

  // Schema for LocalBusiness and BreadcrumbList
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `https://idealbathrenovations.ca/service-areas/${area.slug}#business`,
        name: `Ideal Bath Renovations - ${area.name}`,
        url: `https://idealbathrenovations.ca/service-areas/${area.slug}`,
        logo: "https://idealbathrenovations.ca/vite.svg",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
        description: area.metaDescription,
        telephone: "+1-672-273-0434",
        email: "info@idealbathrenovations.ca",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "20819 78B Avenue",
          addressLocality: "Langley Twp",
          addressRegion: "BC",
          postalCode: "V2Y 0A1",
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
            item: "https://idealbathrenovations.ca/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: "https://idealbathrenovations.ca/service-areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.name,
            item: `https://idealbathrenovations.ca/service-areas/${area.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: area.localFaqs.map((faq) => ({
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
        title={area.metaTitle}
        description={area.metaDescription}
        canonical={`https://idealbathrenovations.ca/service-areas/${area.slug}`}
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
                <span>{area.badge} • Fraser Valley, BC</span>
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
                {area.headline}
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
                {area.subheadline}
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

              {/* Trust checklist */}
              <Grid container spacing={2}>
                {[
                  "Schluter® Certified Waterproofing",
                  "100% BC Code Compliant",
                  "Itemized Written Proposals",
                  "5.0 Google Star Rating",
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircle2 size={18} color="#dfba5a" />
                      <Typography sx={{ fontSize: "14px", color: "#e2e8f0", fontWeight: 600 }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
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

      {/* Neighborhoods Served Section */}
      <Box sx={{ py: 4, backgroundColor: "#f1f5f9", borderBottom: "1px solid #e2e8f0" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1.5 }}>
            <Typography sx={{ fontSize: "13px", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em", mr: 1 }}>
              {area.shortName} Neighborhoods We Serve:
            </Typography>
            {area.neighborhoods.map((n, idx) => (
              <Chip
                key={idx}
                label={n}
                size="small"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#334155",
                  fontWeight: 600,
                  fontSize: "12.5px",
                  border: "1px solid #cbd5e1",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Local Overview & Benefits Section */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  backgroundColor: "rgba(194, 155, 56, 0.12)",
                  color: "#b45309",
                  px: 1.8,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                <Sparkles size={14} color="#c29b38" />
                <span>Local Remodeling Excellence</span>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "28px", sm: "36px", md: "40px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Why {area.shortName} Homeowners Trust Ideal Bath
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, mb: 3 }}>
                {area.description}
              </Typography>

              <Typography sx={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, mb: 4 }}>
                {area.overviewText}
              </Typography>

              {/* Highlights 2x2 grid */}
              <Grid container spacing={3}>
                {area.localHighlights.map((hl, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box
                      sx={{
                        p: 2.5,
                        backgroundColor: "#f8fafc",
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                        height: "100%",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", mb: 0.8 }}>
                        {hl.title}
                      </Typography>
                      <Typography sx={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6 }}>
                        {hl.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Right: Full interactive map embed for this area */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                  backgroundColor: "#f8fafc",
                  borderRadius: "20px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                }}
              >
                <Box sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>
                    {area.name} Google Map & Service Dispatch
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>
                    {area.populationServed}
                  </Typography>
                </Box>

                <GoogleMapEmbed
                  businessName={`IDEAL BATH RENOVATIONS - ${area.shortName.toUpperCase()}`}
                  address={area.addressDisplay}
                  rating={5.0}
                  reviewsCount="28+"
                  mapQuery={area.mapQuery}
                  googleMapsLink={area.googleMapsLink}
                  directionsQuery={area.mapQuery}
                  bottomLabel={`IDEAL BATH • ${area.name}`}
                  height={440}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services available in this area */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "26px", sm: "34px", md: "38px" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Bathroom Remodeling Services Offered in {area.shortName}
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "700px", mx: "auto" }}>
              Every service is carried out by licensed tradespeople using premium Schluter waterproofing membranes, custom glass, and designer fixtures.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                title: "Full Master Bathroom Remodeling",
                desc: "Complete tear-out and luxury reconfiguration with freestanding tubs, double quartz vanities, and spa showers.",
                link: "/services/bathroom-remodeling",
                icon: Bath,
              },
              {
                title: "Tub-to-Shower Conversions",
                desc: "Convert dated, unused acrylic tubs into spacious, modern walk-in showers with frameless glass doors.",
                link: "/services/shower-remodeling",
                icon: Hammer,
              },
              {
                title: "Curbless & Barrier-Free Walk-In Suites",
                desc: "Zero-threshold showers engineered with Schluter linear drains for aging-in-place safety and contemporary elegance.",
                link: "/services/shower-remodeling",
                icon: ShieldCheck,
              },
              {
                title: "Custom Vanities & Storage Solutions",
                desc: "Handcrafted solid wood and moisture-resistant vanities with quartz countertops, soft-close drawers, and LED mirrors.",
                link: "/services/bathroom-vanity-installation",
                icon: Home,
              },
              {
                title: "Custom Tile & Schluter® Waterproofing",
                desc: "Expertly installed large-format porcelain, marble mosaics, custom shower niches, and 24-hr flood tested membranes.",
                link: "/services/bathroom-tile-installation",
                icon: Award,
              },
              {
                title: "Radiant In-Floor Heating Installation",
                desc: "Schluter® DITRA-HEAT electric floor warming with programmable Wi-Fi thermostats for cozy mornings.",
                link: "/services/bathroom-tile-installation",
                icon: Sparkles,
              },
            ].map((srv, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box
                  component={Link}
                  to={srv.link}
                  sx={{
                    textDecoration: "none",
                    p: 3.5,
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#c29b38",
                      boxShadow: "0 12px 28px rgba(15,23,42,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      backgroundColor: "rgba(194, 155, 56, 0.12)",
                      color: "#c29b38",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <srv.icon size={22} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#0f172a",
                      mb: 1.2,
                    }}
                  >
                    {srv.title}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#64748b", lineHeight: 1.65, mb: 2.5, flex: 1 }}>
                    {srv.desc}
                  </Typography>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.8,
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#c29b38",
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects in this area */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "26px", sm: "34px", md: "38px" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Recent Transformations in {area.shortName}
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "700px", mx: "auto" }}>
              Take a look at completed bathroom remodels, tub-to-shower conversions, and master ensuites throughout {area.name}.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {area.localProjects.map((proj, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="img"
                    src={proj.image}
                    alt={`${proj.title} in ${proj.neighborhood}`}
                    sx={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                  <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, color: "#b45309", mb: 1 }}>
                      <MapPin size={14} />
                      <Typography sx={{ fontSize: "12px", fontWeight: 700 }}>
                        {proj.neighborhood}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#0f172a",
                        mb: 1.2,
                        lineHeight: 1.3,
                      }}
                    >
                      {proj.title}
                    </Typography>
                    <Typography sx={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6, mb: 2, flex: 1 }}>
                      {proj.description}
                    </Typography>
                    <Box sx={{ pt: 1.5, borderTop: "1px solid #f1f5f9" }}>
                      <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>
                        Scope of Work:
                      </Typography>
                      <Typography sx={{ fontSize: "12.5px", color: "#334155", fontWeight: 600 }}>
                        {proj.scope}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 5, textAlign: "center" }}>
            <PrimaryButton
              content="View All Before & After Galleries"
              variant="outlined"
              btnpadding="12px 28px"
              fontsize={14}
              to="/before-after"
            />
          </Box>
        </Container>
      </Box>

      {/* Local Testimonial Quote */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#fffdfa", borderTop: "1px solid #fef3c7", borderBottom: "1px solid #fef3c7" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, color: "#eab308", mb: 2 }}>
              {[...Array(area.testimonial.rating)].map((_, i) => (
                <Star key={i} size={22} fill="#eab308" />
              ))}
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "17px", md: "20px" },
                fontWeight: 600,
                color: "#1e293b",
                lineHeight: 1.7,
                fontStyle: "italic",
                mb: 2.5,
              }}
            >
              "{area.testimonial.quote}"
            </Typography>
            <Typography sx={{ fontSize: "15px", fontWeight: 800, color: "#0f172a" }}>
              {area.testimonial.author}
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#64748b" }}>
              {area.testimonial.neighborhood} • {area.testimonial.projectType}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Localized FAQ Section */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "26px", sm: "34px", md: "38px" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Frequently Asked Questions for {area.shortName} Homeowners
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#64748b" }}>
              Get quick answers about renovation permits, scheduling, and project timelines in {area.name}.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            {area.localFaqs.map((faq, idx) => (
              <Accordion
                key={idx}
                defaultExpanded={idx === 0}
                elevation={0}
                sx={{
                  mb: 2,
                  borderRadius: "12px !important",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#f8fafc",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary expandIcon={<ChevronDown color="#c29b38" />} sx={{ px: 3, py: 1 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#0f172a" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 2.5, pt: 0 }}>
                  <Typography sx={{ fontSize: "14.5px", color: "#475569", lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Explore Other Service Areas */}
      <Box sx={{ py: 6, backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 800,
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textAlign: "center",
              mb: 3,
            }}
          >
            Explore Other Communities We Serve Across Fraser Valley:
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {otherAreas.map((other) => (
              <Grid size={{ xs: 12, sm: 4 }} key={other.id}>
                <Box
                  component={Link}
                  to={`/service-areas/${other.slug}`}
                  sx={{
                    p: 2.5,
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    color: "#0f172a",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#c29b38",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Navigation size={18} color="#c29b38" />
                    <Box>
                      <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>
                        {other.name}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "#64748b" }}>
                        {other.badge}
                      </Typography>
                    </Box>
                  </Box>
                  <ArrowRight size={16} color="#c29b38" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Free Quote Form Section */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "28px", sm: "36px", md: "40px" },
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Get Your Free In-Home Estimate in {area.shortName}
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "#64748b", maxWidth: "700px", mx: "auto" }}>
              Fill out the form below or call (672) 273-0434 to schedule a no-obligation consultation with our renovation specialists.
            </Typography>
          </Box>
          <EstimateForm />
        </Container>
      </Box>
    </>
  );
};

export default ServiceAreaDetail;
