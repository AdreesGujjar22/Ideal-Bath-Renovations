import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  servicesDetailList,
  getServiceBySlug,
  ServiceDetailItem,
} from "../data/ServicesDetailData";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import PrimaryButton from "../components/UI/PrimaryButton";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Phone,
  ArrowRight,
  Calculator,
  Hammer,
  HelpCircle,
  Layers,
  Wrench,
} from "lucide-react";

interface ServiceDetailProps {
  forcedSlug?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ forcedSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
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
            The requested bathroom renovation service could not be located. Please choose from our premier services below.
          </Typography>
          <PrimaryButton content="View All 12 Renovation Services" to="/services" variant="gold" />
        </Container>
      </Box>
    );
  }

  const relatedServices = service.relatedServiceSlugs
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter((item): item is ServiceDetailItem => item !== undefined);

  return (
    <>
      <SEO
        title={`${service.title} Langley & Fraser Valley | Ideal Bath Renovations`}
        description={`${service.overview.substring(0, 155)}... Contact Ideal Bath Renovations at 20819 78B Ave, Langley for free 3D CAD design & fixed-price quote.`}
        canonical={`https://idealbathrenovations.ca/services/${service.slug}`}
      />

      {/* Visual Breadcrumbs */}
      <Breadcrumbs
        currentLabel={service.title}
        parentLabel="Services"
        parentPath="/services"
      />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          py: { xs: 7, md: 10 },
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Background photo overlay */}
        <Box
          component="img"
          src={service.heroImage}
          alt={service.title}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: { xs: "100%", md: "55%" },
            height: "100%",
            objectFit: "cover",
            opacity: { xs: 0.18, md: 0.3 },
            filter: "brightness(0.85) contrast(1.1)",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: { xs: "100%", md: "720px" } }}>
            {/* Top Category Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(194,155,56,0.18)",
                color: "#dfba5a",
                border: "1px solid rgba(223,186,90,0.35)",
                px: 2,
                py: 0.6,
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              <Sparkles size={14} /> {service.badge}
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: { xs: "32px", sm: "42px", md: "50px" },
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              {service.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "19px" },
                color: "#cbd5e1",
                lineHeight: 1.6,
                fontWeight: 400,
                mb: 4,
              }}
            >
              {service.tagline}
            </Typography>

            {/* Quick Metrics Bar */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2,
                p: 2.5,
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                mb: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <Sparkles size={20} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <Box>
                  <Typography sx={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>
                    In-Home Estimate
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    {service.priceRange || "Complimentary In-Home"}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <Clock size={20} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <Box>
                  <Typography sx={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>
                    Typical Timeline
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    {service.typicalTimeline}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <ShieldCheck size={20} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                <Box>
                  <Typography sx={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>
                    Warranty & Guarantee
                  </Typography>
                  <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                    {service.warranty}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* CTA Action Buttons */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <PrimaryButton
                content="Book In-Home Consultation & Quote"
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
                  backdropFilter: "blur(6px)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.18)",
                    borderColor: "#ffffff",
                  },
                }}
              >
                <Phone size={18} color="#dfba5a" />
                <span>Call (672) 273-0434 (24/7)</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Trust & Credentials Banner */}
      <Box sx={{ backgroundColor: "#ffffff", py: 2.5, borderBottom: "1px solid #e2e8f0" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle2 size={18} color="#15803d" />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                Schluter® Certified Waterproofing System
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle2 size={18} color="#15803d" />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                Red Seal Certified Plumbers & Electricians
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle2 size={18} color="#15803d" />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                100% Fixed-Price Written Contract Guarantee
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle2 size={18} color="#15803d" />
              <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                Serving Langley, Surrey & Abbotsford
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content & Scope Section */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            {/* Left Column: Detailed Overview, Key Benefits, Inclusions, Process */}
            <Grid size={{ xs: 12, lg: 8 }}>
              {/* Detailed Overview */}
              <Box sx={{ mb: 7 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <Hammer size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#c29b38", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Service Overview & Engineering
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: "24px", sm: "30px", md: "34px" },
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                  }}
                >
                  Expert {service.title} in Langley & Fraser Valley
                </Typography>

                <Typography sx={{ fontSize: "16px", color: "#334155", lineHeight: 1.8, mb: 2.5, fontWeight: 500 }}>
                  {service.overview}
                </Typography>

                {service.detailedParagraphs.map((para, idx) => (
                  <Typography key={idx} sx={{ fontSize: "15px", color: "#475569", lineHeight: 1.8, mb: 2 }}>
                    {para}
                  </Typography>
                ))}
              </Box>

              {/* Key Benefits Grid */}
              <Box sx={{ mb: 7 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: "20px", sm: "24px" },
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                  }}
                >
                  Why Homeowners Choose Us for {service.title}
                </Typography>

                <Grid container spacing={2.5}>
                  {service.keyBenefits.map((benefit, idx) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: "12px",
                          border: "1px solid #e2e8f0",
                          backgroundColor: "#ffffff",
                          height: "100%",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                            borderColor: "#cbd5e1",
                          },
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1 }}>
                          <CheckCircle2 size={18} color="#c29b38" style={{ flexShrink: 0 }} />
                          <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#0f172a" }}>
                            {benefit.title}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6 }}>
                          {benefit.desc}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Scope of Work & What's Included */}
              <Box sx={{ mb: 7 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3.5, sm: 5 },
                    borderRadius: "16px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Layers size={20} color="#c29b38" />
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: { xs: "20px", sm: "24px" },
                        fontWeight: 800,
                        color: "#0f172a",
                      }}
                    >
                      Comprehensive Scope of Work & Inclusions
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "14px", color: "#64748b", mb: 3 }}>
                    Every {service.title} project includes itemized materials, labor, permits, and lifetime waterproofing support:
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                    {service.inclusions.map((inc, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <CheckCircle2 size={18} color="#15803d" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <Typography sx={{ fontSize: "14px", color: "#334155", lineHeight: 1.5, fontWeight: 500 }}>
                          {inc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Box>

              {/* Step-by-Step Renovation Process */}
              <Box sx={{ mb: 7 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: "20px", sm: "24px" },
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                  }}
                >
                  Our 5-Stage Seamless Execution Process
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {service.processSteps.map((step, idx) => (
                    <Paper
                      key={idx}
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                        backgroundColor: "#ffffff",
                        display: "flex",
                        gap: 2.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "10px",
                          backgroundColor: "#0f172a",
                          color: "#dfba5a",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: "16px",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          flexShrink: 0,
                        }}
                      >
                        {step.number}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5, flexWrap: "wrap", gap: 1 }}>
                          <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#0f172a" }}>
                            {step.title}
                          </Typography>
                          {step.duration && (
                            <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#c29b38", backgroundColor: "rgba(194,155,56,0.1)", px: 1.2, py: 0.2, borderRadius: "4px" }}>
                              {step.duration}
                            </Typography>
                          )}
                        </Box>
                        <Typography sx={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.6 }}>
                          {step.description}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </Box>

              {/* Before & After Transformation Spotlight */}
              <Box sx={{ mb: 7 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4 },
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: 800,
                      color: "#0f172a",
                      mb: 1,
                    }}
                  >
                    Featured Transformation: {service.beforeAfterTitle}
                  </Typography>
                  <Typography sx={{ fontSize: "13.5px", color: "#64748b", mb: 3 }}>
                    {service.beforeAfterDesc}
                  </Typography>

                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ position: "relative", borderRadius: "10px", overflow: "hidden", height: "240px" }}>
                        <Box
                          component="img"
                          src={service.beforeImage}
                          alt="Before Renovation"
                          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                            backgroundColor: "rgba(15, 23, 42, 0.85)",
                            color: "#ffffff",
                            fontSize: "11px",
                            fontWeight: 700,
                            px: 1.5,
                            py: 0.4,
                            borderRadius: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Before
                        </Box>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ position: "relative", borderRadius: "10px", overflow: "hidden", height: "240px" }}>
                        <Box
                          component="img"
                          src={service.afterImage}
                          alt="After Renovation"
                          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                            backgroundColor: "#c29b38",
                            color: "#ffffff",
                            fontSize: "11px",
                            fontWeight: 700,
                            px: 1.5,
                            py: 0.4,
                            borderRadius: "4px",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          After: Ideal Bath
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link
                      to="/before-after"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#c29b38",
                        fontWeight: 700,
                        fontSize: "13.5px",
                        textDecoration: "none",
                      }}
                    >
                      <span>Explore More Before & After Case Studies</span>
                      <ArrowRight size={15} />
                    </Link>
                  </Box>
                </Paper>
              </Box>

              {/* Material Options */}
              {service.materialOptions && service.materialOptions.length > 0 && (
                <Box sx={{ mb: 7 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: { xs: "20px", sm: "24px" },
                      fontWeight: 800,
                      color: "#0f172a",
                      mb: 3,
                    }}
                  >
                    Premium Materials & Fixture Selections
                  </Typography>

                  <Grid container spacing={2}>
                    {service.materialOptions.map((mat, idx) => (
                      <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2.5,
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                            height: "100%",
                          }}
                        >
                          {mat.badge && (
                            <Typography
                              sx={{
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#b45309",
                                backgroundColor: "rgba(194,155,56,0.12)",
                                px: 1,
                                py: 0.2,
                                borderRadius: "4px",
                                width: "fit-content",
                                mb: 1,
                                textTransform: "uppercase",
                              }}
                            >
                              {mat.badge}
                            </Typography>
                          )}
                          <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#0f172a", mb: 0.8 }}>
                            {mat.title}
                          </Typography>
                          <Typography sx={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>
                            {mat.description}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Service Specific FAQs */}
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <HelpCircle size={18} color="#c29b38" />
                  <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#c29b38", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Frequently Asked Questions
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: "22px", sm: "26px" },
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                  }}
                >
                  Common Questions About {service.title}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {service.faqs.map((faq, idx) => (
                    <Accordion
                      key={idx}
                      elevation={0}
                      defaultExpanded={idx === 0}
                      sx={{
                        border: "1px solid #e2e8f0",
                        borderRadius: "10px !important",
                        "&:before": { display: "none" },
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ChevronDown size={18} color="#c29b38" />}
                        sx={{ px: 3, py: 1 }}
                      >
                        <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#0f172a" }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography sx={{ fontSize: "14px", color: "#475569", lineHeight: 1.7 }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Right Column: Sticky Quick Quote & In-Context Sidebar */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box sx={{ position: { lg: "sticky" }, top: { lg: "90px" } }}>
                {/* Fast Estimate Request Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: "16px",
                    backgroundColor: "#ffffff",
                    border: "2px solid #c29b38",
                    boxShadow: "0 12px 30px -10px rgba(194,155,56,0.18)",
                    mb: 4,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                    <Calculator size={18} color="#c29b38" />
                    <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#c29b38", textTransform: "uppercase" }}>
                      Instant Quote Request
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#0f172a",
                      mb: 1.5,
                    }}
                  >
                    Get a Fixed-Price Quote for {service.title}
                  </Typography>

                  <Typography sx={{ fontSize: "13px", color: "#64748b", lineHeight: 1.6, mb: 3 }}>
                    Schedule your free in-home consultation with our design team. Transparent itemized proposals with zero pressure.
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircle2 size={15} color="#15803d" />
                      <Typography sx={{ fontSize: "12.5px", color: "#334155", fontWeight: 600 }}>
                        3D Photorealistic Design Render
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircle2 size={15} color="#15803d" />
                      <Typography sx={{ fontSize: "12.5px", color: "#334155", fontWeight: 600 }}>
                        Itemized Material & Labor Breakdown
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircle2 size={15} color="#15803d" />
                      <Typography sx={{ fontSize: "12.5px", color: "#334155", fontWeight: 600 }}>
                        Schluter® Lifetime Leak Protection
                      </Typography>
                    </Box>
                  </Box>

                  <PrimaryButton
                    content={`Request ${service.title} Quote`}
                    variant="gold"
                    btnwidth="100%"
                    btnpadding="14px"
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                  />

                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Typography sx={{ fontSize: "12px", color: "#94a3b8" }}>
                      Or call our 24/7 hotline directly:
                    </Typography>
                    <Box
                      component="a"
                      href="tel:6722730434"
                      sx={{
                        color: "#0f172a",
                        fontWeight: 800,
                        fontSize: "16px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.8,
                        mt: 0.5,
                        "&:hover": { color: "#c29b38" },
                      }}
                    >
                      <Phone size={15} color="#c29b38" />
                      <span>(672) 273-0434</span>
                    </Box>
                  </Box>
                </Paper>

                {/* All 12 Services Quick Menu */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "14px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <Wrench size={16} color="#c29b38" />
                    <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase" }}>
                      Explore All 12 Services
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                    {servicesDetailList.map((item) => {
                      const isCurrent = item.slug === service.slug;
                      return (
                        <Box
                          key={item.id}
                          onClick={() => navigate(`/services/${item.slug}`)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            p: 1.2,
                            borderRadius: "8px",
                            backgroundColor: isCurrent ? "rgba(194,155,56,0.12)" : "transparent",
                            color: isCurrent ? "#b45309" : "#334155",
                            fontWeight: isCurrent ? 700 : 500,
                            fontSize: "13.5px",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                            "&:hover": {
                              backgroundColor: isCurrent ? "rgba(194,155,56,0.18)" : "#f8fafc",
                              color: "#0f172a",
                            },
                          }}
                        >
                          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {item.title}
                          </span>
                          <ChevronDown
                            size={14}
                            style={{
                              transform: "rotate(-90deg)",
                              color: isCurrent ? "#c29b38" : "#94a3b8",
                              flexShrink: 0,
                            }}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          {/* Related Services Cross-Links Section */}
          {relatedServices.length > 0 && (
            <Box sx={{ mt: 10, pt: 8, borderTop: "1px solid #e2e8f0" }}>
              <Box sx={{ textAlign: "center", mb: 5 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: { xs: "22px", sm: "28px" },
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 1,
                  }}
                >
                  Related Renovation Services You May Need
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#64748b" }}>
                  Frequently paired with {service.title} for complete bathroom harmony
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {relatedServices.map((rel) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={rel.id}>
                    <Paper
                      elevation={0}
                      onClick={() => navigate(`/services/${rel.slug}`)}
                      sx={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid #e2e8f0",
                        backgroundColor: "#ffffff",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                          borderColor: "#c29b38",
                        },
                      }}
                    >
                      <Box sx={{ height: "140px", overflow: "hidden" }}>
                        <Box
                          component="img"
                          src={rel.heroImage}
                          alt={rel.title}
                          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Box>
                      <Box sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#0f172a", mb: 0.8 }}>
                            {rel.title}
                          </Typography>
                          <Typography sx={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.5 }}>
                            {rel.tagline}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 2, color: "#c29b38", fontWeight: 700, fontSize: "12.5px" }}>
                          <span>Learn More</span>
                          <ArrowRight size={13} />
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default ServiceDetail;
