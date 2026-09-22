import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "@/lib/router-compat";
import {
  Bath,
  ShowerHead,
  Accessibility,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";
import {
  customVanityImg,
  tileSchluterImg,
  bathtubReplaceImg,
} from "../../assets/images";

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
    title: "Full Bathroom Remodeling",
    slug: "bathroom-remodeling",
    icon: Bath,
    tag: "Complete Rebuild",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Full bathroom remodeling in Langley BC",
    description:
      "Complete teardowns and rebuilds for master ensuites, guest baths, and powder rooms. We update the layout, plumbing, lighting, and finishes from start to finish.",
    highlights: ["Complete Layout Updates", "Plumbing & Lighting Upgrades", "Turnkey Installation"],
  },
  {
    id: "tub-to-shower",
    title: "Tub-to-Shower Conversions",
    slug: "shower-remodeling",
    icon: ShowerHead,
    tag: "Shower Conversion",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Tub-to-shower conversion in Langley BC",
    description:
      "Replace an old or hard-to-clean bathtub with a walk-in shower stall featuring waterproof backing, modern tile, and glass doors.",
    highlights: ["Low Step-In Entry", "Custom Waterproof Pans", "Minimal Disruption"],
  },
  {
    id: "curbless-showers",
    title: "Walk-In & Curbless Showers",
    slug: "shower-remodeling",
    icon: Accessibility,
    tag: "Zero-Threshold",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Curbless walk-in shower renovation in Langley Twp BC",
    description:
      "Barrier-free showers with level entries, linear drainage, and slip-resistant flooring for easy everyday access and peace of mind.",
    highlights: ["Level Floor Drainage", "Custom Glass Panels", "Accessible Design"],
  },
  {
    id: "custom-vanities",
    title: "Custom Vanities & Countertops",
    slug: "bathroom-vanity-installation",
    icon: LayoutGrid,
    tag: "Cabinetry & Quartz",
    img: customVanityImg,
    imgAlt: "Custom bathroom vanity with quartz countertop in Langley",
    description:
      "Quality vanity installations with durable quartz surfaces, undermount sinks, and well-planned storage to keep your bathroom organized.",
    highlights: ["Quartz Countertops", "Soft-Close Drawers", "Undermount Sinks"],
  },
  {
    id: "tile-schluter",
    title: "Bathroom Tile & Waterproofing",
    slug: "bathroom-tile-installation",
    icon: ShieldCheck,
    tag: "Waterproof Tile",
    img: tileSchluterImg,
    imgAlt: "Bathroom tile and waterproofing installation in Langley BC",
    description:
      "Proper waterproof membrane installations behind shower walls and floor tile to ensure leak-free durability for years to come.",
    highlights: ["Sealed Waterproof Backing", "Porcelain & Ceramic Tile", "Flood Tested Pans"],
  },
  {
    id: "bathtub-replacement",
    title: "Bathtub Replacements",
    slug: "bathtub-replacement",
    icon: Bath,
    tag: "Soaking Tubs",
    img: bathtubReplaceImg,
    imgAlt: "Modern bathtub replacement with tile surround in Langley BC",
    description:
      "New drop-in tubs, deep alcove soakers, and freestanding bathtubs fitted securely with updated plumbing fixtures and solid backing.",
    highlights: ["Freestanding & Alcove Tubs", "Updated Plumbing Valves", "Solid Base Support"],
  },
];

const Services: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Bathroom Remodeling Services in Langley & Fraser Valley
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
            Ideal Bath Renovations is a local bathroom remodeler serving Langley Township, Surrey, Abbotsford, and the wider Fraser Valley. We handle full bathroom renovations, walk-in showers, tub-to-shower conversions, bathtub replacements, custom vanities, and waterproof tile installation.
          </Typography>
        </Box>

        {/* 6 Core Services Grid */}
        <Grid container spacing={3}>
          {coreRenovationServices.map((service) => {
            const Icon = service.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.id}>
                <Box
                  component={Link}
                  to={`/services/${service.slug}`}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "#c29b38",
                      boxShadow: "0 12px 28px rgba(15,23,42,0.1)",
                      "& .service-img": {
                        transform: "scale(1.05)",
                      },
                      "& .service-title": {
                        color: "#b45309",
                      },
                    },
                  }}
                >
                  {/* Image Container */}
                  <Box sx={{ position: "relative", height: "220px", overflow: "hidden" }}>
                    <Box
                      component="img"
                      className="service-img"
                      src={service.img}
                      alt={service.imgAlt}
                      referrerPolicy="no-referrer"
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

                  <Box sx={{ p: 3, flex: 1 }}>
                    <Typography
                      variant="h3"
                      className="service-title"
                      sx={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1.35,
                        transition: "color 0.2s ease",
                        mb: 1,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography sx={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.65 }}>
                      {service.description}
                    </Typography>
                    <Box component="ul" sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, listStyle: "none", p: 0, m: "14px 0 0" }}>
                      {service.highlights.map((highlight) => (
                        <Box component="li" key={highlight} sx={{ px: 1, py: 0.45, borderRadius: "5px", backgroundColor: "#f8fafc", color: "#475569", fontSize: "11px", fontWeight: 700 }}>
                          {highlight}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
