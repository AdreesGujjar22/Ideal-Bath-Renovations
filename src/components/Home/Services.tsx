import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import {
  Bath,
  ShowerHead,
  Accessibility,
  LayoutGrid,
  ShieldCheck,
  Flame,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PrimaryButton from "../UI/PrimaryButton";

interface CoreServiceItem {
  id: string;
  title: string;
  slug: string;
  icon: React.ElementType;
  tag: string;
  img: string;
  imgAlt: string;
  description: string;
  highlights: string[];
}

const coreRenovationServices: CoreServiceItem[] = [
  {
    id: "full-service",
    title: "Full-Service Bathroom Renovations",
    slug: "bathroom-remodeling",
    icon: Bath,
    tag: "Turnkey Remodeling",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Full-service bathroom renovation in Fraser Valley BC",
    description:
      "A complete bathroom renovation, handled start to finish. We manage design, demolition, plumbing, electrical, tiling, and finishing work so you don't have to coordinate multiple contractors.",
    highlights: ["Complete Project Management", "Plumbing & Electrical Upgrades", "Turnkey Handover"],
  },
  {
    id: "tub-to-shower",
    title: "Tub-to-Shower Conversions",
    slug: "shower-remodeling",
    icon: ShowerHead,
    tag: "Quick Conversion",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Tub-to-shower conversion before and after Langley BC",
    description:
      "Replace an underused bathtub with a walk-in shower built for daily comfort and long-term accessibility. Our conversions are completed quickly with minimal disruption to your home.",
    highlights: ["Low-Threshold Step-In", "Custom Quartz Thresholds", "Minimal Disruption Build"],
  },
  {
    id: "curbless-showers",
    title: "Curbless Walk-In Showers",
    slug: "shower-remodeling",
    icon: Accessibility,
    tag: "Zero-Threshold & Modern",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Curbless walk-in shower renovation in Langley Twp BC",
    description:
      "Barrier-free, curbless shower designs combine a modern look with safer, easier access — ideal for aging in place or simply upgrading to a cleaner, more open bathroom layout.",
    highlights: ["Linear Trench Drainage", "10mm Frameless Glass", "Aging-in-Place Ready"],
  },
  {
    id: "custom-vanities",
    title: "Custom Vanities & Storage Solutions",
    slug: "bathroom-vanity-installation",
    icon: LayoutGrid,
    tag: "Bespoke Cabinetry",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Custom bathroom vanity installation by Ideal Bath Renovations",
    description:
      "Custom-built vanities maximize storage and match your bathroom's style, from compact powder rooms to spacious ensuite layouts.",
    highlights: ["Quartz & Granite Countertops", "Soft-Close Solid Wood Joinery", "Built-In Linen Towers"],
  },
  {
    id: "tile-schluter",
    title: "Custom Tile & Schluter Waterproofing Systems",
    slug: "bathroom-tile-installation",
    icon: ShieldCheck,
    tag: "100% Waterproofed",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Schluter waterproofed tile installation Langley BC",
    description:
      "We install premium tile work backed by Schluter waterproofing systems, protecting your investment against leaks and moisture damage for decades to come.",
    highlights: ["Schluter®-KERDI Vapor Membrane", "Large Format Porcelain & Marble", "24-Hour Hydrostatic Flood Test"],
  },
  {
    id: "radiant-floor",
    title: "Radiant Floor Heating Installation",
    slug: "bathroom-upgrades",
    icon: Flame,
    tag: "Winter Comfort",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Radiant heated floor tile installation in Langley Twp BC",
    description:
      "Add heated flooring to your renovation for year-round comfort — a popular upgrade for Fraser Valley homeowners tackling cold winter mornings.",
    highlights: ["Smart Wi-Fi Thermostat Control", "Schluter®-DITRA-HEAT System", "Energy-Efficient Heating"],
  },
];

const Services: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
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
            <span>Expertise Across Every Trade</span>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Bathroom Remodeling &amp; Renovation Services in Langley Twp
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" },
              color: "#64748b",
              maxWidth: "780px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            From full-service bathroom remodeling and tub-to-shower conversions to curbless walk-in showers and custom vanities, our Langley bathroom contractors deliver expert craftsmanship and Schluter® waterproofing across the Fraser Valley.
          </Typography>
        </Box>

        {/* 6 Core Services Grid */}
        <Grid container spacing={3.5}>
          {coreRenovationServices.map((service) => {
            const Icon = service.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.id}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#c29b38",
                      boxShadow: "0 12px 28px rgba(15,23,42,0.1)",
                      "& .service-img": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  {/* Image Container */}
                  <Box sx={{ position: "relative", height: "210px", overflow: "hidden" }}>
                    <Box
                      component="img"
                      className="service-img"
                      src={service.img}
                      alt={service.imgAlt}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      loading="lazy"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        backgroundColor: "rgba(15, 23, 42, 0.85)",
                        backdropFilter: "blur(4px)",
                        color: "#dfba5a",
                        px: 1.4,
                        py: 0.4,
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                      }}
                    >
                      <Icon size={13} color="#dfba5a" />
                      <span>{service.tag}</span>
                    </Box>
                  </Box>

                  {/* Body Content */}
                  <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1.35,
                        mb: 1.5,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#64748b",
                        lineHeight: 1.65,
                        mb: 2.5,
                        flex: 1,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Highlights bullet tags */}
                    <Stack spacing={0.8} sx={{ mb: 3 }}>
                      {service.highlights.map((item, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "#c29b38",
                              flexShrink: 0,
                            }}
                          />
                          <Typography sx={{ fontSize: "12.5px", fontWeight: 600, color: "#334155" }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    {/* View Details Link */}
                    <Box
                      component={Link}
                      to={`/services/${service.slug}`}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pt: 2,
                        borderTop: "1px solid #f1f5f9",
                        color: "#0f172a",
                        fontWeight: 700,
                        fontSize: "13.5px",
                        textDecoration: "none",
                        "&:hover": {
                          color: "#c29b38",
                          "& svg": { transform: "translateX(4px)" },
                        },
                        transition: "color 0.2s ease",
                      }}
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={16} color="#c29b38" style={{ transition: "transform 0.2s" }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* Bottom catalogue CTA banner */}
        <Box
          sx={{
            mt: 7,
            backgroundColor: "#0f172a",
            color: "#ffffff",
            borderRadius: "14px",
            p: { xs: 3.5, md: 5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
            border: "1px solid rgba(194, 155, 56, 0.25)",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "22px" },
                fontWeight: 800,
                color: "#ffffff",
                mb: 0.8,
              }}
            >
              Need a Custom Bathroom Design or Multi-Room Solution?
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#94a3b8", maxWidth: "680px" }}>
              Explore our complete directory of 12+ specialized renovation services or request a complimentary in-home consultation to receive an exact itemized plan.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", sm: "auto" }, flexShrink: 0 }}>
            <PrimaryButton
              content="View All 12+ Services"
              variant="outlined-white"
              btnpadding="12px 24px"
              fontsize={14}
              to="/services"
            />
            <PrimaryButton
              content="Request Free Quote"
              variant="gold"
              btnpadding="12px 24px"
              fontsize={14}
              to="/contact"
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

