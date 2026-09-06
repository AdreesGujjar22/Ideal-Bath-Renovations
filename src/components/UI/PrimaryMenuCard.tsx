import React from "react";
import { Typography, Stack, Box, Chip } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";
import { Clock } from "lucide-react";

interface PrimaryMenuCardProps {
  name: string;
  price: string;
  coursePrice?: string;
  description: string;
  duration: string;
  learnMoreLink: string;
  tag?: string;
  features?: string[];
  to?: string;
}

const getSlugForTitle = (t: string): string => {
  const norm = t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const serviceSlugs = [
    "bathroom-remodeling",
    "bathroom-renovation",
    "bathroom-repair",
    "bathroom-replacement",
    "bathroom-installation",
    "bathroom-design",
    "bathroom-upgrades",
    "bathroom-restoration",
    "shower-remodeling",
    "bathtub-replacement",
    "bathroom-tile-installation",
    "bathroom-vanity-installation",
  ];
  if (serviceSlugs.includes(norm)) return norm;
  if (norm.includes("shower") || norm.includes("tub-to-shower")) return "shower-remodeling";
  if (norm.includes("bathtub") || norm.includes("tub")) return "bathtub-replacement";
  if (norm.includes("tile") || norm.includes("floor")) return "bathroom-tile-installation";
  if (norm.includes("vanity") || norm.includes("cabinet")) return "bathroom-vanity-installation";
  if (norm.includes("design") || norm.includes("plan")) return "bathroom-design";
  if (norm.includes("repair") || norm.includes("leak")) return "bathroom-repair";
  if (norm.includes("install")) return "bathroom-installation";
  if (norm.includes("upgrade")) return "bathroom-upgrades";
  if (norm.includes("restore") || norm.includes("refinish")) return "bathroom-restoration";
  if (norm.includes("replace")) return "bathroom-replacement";
  return "bathroom-remodeling";
};

const PrimaryMenuCard: React.FC<PrimaryMenuCardProps> = ({
  name,
  price,
  coursePrice,
  description,
  duration,
  learnMoreLink,
  tag,
  to,
}) => {
  const serviceSlug = getSlugForTitle(name);
  const targetLink = to || `/services/${serviceSlug}`;

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        p: 3.5,
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        ":hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Stack spacing={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#0f172a",
              lineHeight: 1.3,
            }}
          >
            {name}
          </Typography>
          {tag && (
            <Chip
              label={tag}
              size="small"
              sx={{
                backgroundColor: "rgba(194, 155, 56, 0.12)",
                color: "#b45309",
                fontWeight: 700,
                fontSize: "11px",
              }}
            />
          )}
        </Box>

        <Box sx={{ py: 0.5 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "17px",
              color: "#c29b38",
            }}
          >
            {price}
          </Typography>
          {coursePrice && (
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12.5px",
                color: "#64748b",
                mt: 0.3,
              }}
            >
              {coursePrice}
            </Typography>
          )}
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: "13.5px",
            color: "#475569",
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "inline-block", mt: 1 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              fontSize: "12px",
              fontWeight: 600,
              color: "#0f172a",
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              px: 1.5,
              py: 0.4,
              borderRadius: "4px",
              width: "fit-content",
            }}
          >
            <Clock size={12} color="#c29b38" />
            <span>Expected Timeline: {duration}</span>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
        <PrimaryButton content={learnMoreLink} btnwidth="fit-content" to={targetLink} variant="outlined" />
        <PrimaryButton content="Book Consult" btnwidth="fit-content" to={`/contact?service=${encodeURIComponent(name)}`} variant="gold" />
      </Box>
    </Box>
  );
};

export default PrimaryMenuCard;

