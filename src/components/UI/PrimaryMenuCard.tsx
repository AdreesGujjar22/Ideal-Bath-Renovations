import React from "react";
import { Typography, Stack, Box, Chip } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";

interface PrimaryMenuCardProps {
  name: string;
  price: string;
  coursePrice?: string;
  description: string;
  duration: string;
  learnMoreLink: string;
  tag?: string;
  features?: string[];
}

const PrimaryMenuCard: React.FC<PrimaryMenuCardProps> = ({
  name,
  price,
  coursePrice,
  description,
  duration,
  learnMoreLink,
  tag,
}) => {
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
          <Typography
            sx={{
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
            ⏱ Expected Timeline: {duration}
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "flex-end" }}>
        <PrimaryButton content={learnMoreLink} btnwidth="fit-content" to="/contact" variant="outlined" />
      </Box>
    </Box>
  );
};

export default PrimaryMenuCard;
