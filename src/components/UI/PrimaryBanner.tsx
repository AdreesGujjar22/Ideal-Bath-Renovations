import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";

interface PrimaryBannerProps {
  img: string;
  primaryContent: string;
  secondaryContent?: string;
  badge?: string;
  bannerHeight?: number;
  fontsize?: number;
  fontweight?: number;
  fontweightSecondary?: number;
  textTransform?: string;
  fontsizeSecondary?: number;
  alignItems?: string;
  width?: string;
  btn?: boolean;
  btncontent?: string;
  secondaryBtnContent?: string;
  gap?: number;
}

const PrimaryBanner: React.FC<PrimaryBannerProps> = ({
  img,
  primaryContent,
  secondaryContent,
  badge,
  bannerHeight = 520,
  fontsize = 52,
  fontweight = 700,
  fontweightSecondary = 400,
  textTransform = "none",
  fontsizeSecondary = 20,
  alignItems = "center",
  width = "100%",
  btn = true,
  btncontent = "Book Free In-Home Estimate",
  secondaryBtnContent = "View Recent Projects",
  gap = 2,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "auto", sm: "500px", md: `${bannerHeight}px` },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={img}
        alt={primaryContent}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(0.68) contrast(1.05)",
          transform: "scale(1.02)",
        }}
      />
      
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.52) 50%, rgba(15,23,42,0.88) 100%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 5, sm: 7, md: 9 },
          px: { xs: 2.5, sm: 3 },
          display: "flex",
          justifyContent: alignItems === "start" ? "flex-start" : alignItems === "end" ? "flex-end" : "center",
        }}
      >
        <Box
          sx={{
            maxWidth: width || "840px",
            textAlign: alignItems === "start" ? "left" : alignItems === "end" ? "right" : "center",
            display: "flex",
            flexDirection: "column",
            alignItems: alignItems === "start" ? "flex-start" : alignItems === "end" ? "flex-end" : "center",
            gap: { xs: 1.5, sm: gap },
          }}
        >
          {badge && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.8,
                backgroundColor: "rgba(194, 155, 56, 0.95)",
                color: "#0f172a",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.4, sm: 0.6 },
                borderRadius: "30px",
                fontSize: { xs: "11px", sm: "12px", md: "13px" },
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                mb: { xs: 0.5, sm: 0 },
              }}
            >
              {badge}
            </Box>
          )}

          <Typography
            variant="h1"
            sx={{
              textTransform: textTransform,
              fontSize: { xs: "24px", sm: "32px", md: "40px", lg: `${fontsize}px` },
              fontWeight: fontweight,
              color: "#ffffff",
              lineHeight: { xs: 1.22, sm: 1.2, md: 1.16 },
              letterSpacing: { xs: "-0.01em", md: "-0.02em" },
              textShadow: "0 2px 14px rgba(0,0,0,0.5)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {primaryContent}
          </Typography>

          {secondaryContent && (
            <Typography
              variant="h2"
              sx={{
                textTransform: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: fontweightSecondary,
                fontSize: { xs: "14px", sm: "16px", md: `${fontsizeSecondary}px` },
                color: "rgba(255, 255, 255, 0.92)",
                lineHeight: { xs: 1.55, sm: 1.6 },
                maxWidth: { xs: "100%", sm: "640px", md: "760px" },
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                mt: { xs: 0.5, sm: 0 },
              }}
            >
              {secondaryContent}
            </Typography>
          )}

          {btn && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 2 }}
              sx={{
                mt: { xs: 2, sm: 2.5 },
                width: { xs: "100%", sm: "auto" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                <PrimaryButton
                  content={btncontent}
                  variant="gold"
                  btnpadding="13px 26px"
                  fontsize={15}
                  btnwidth="100%"
                  to="/contact"
                />
              </Box>
              {secondaryBtnContent && (
                <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                  <PrimaryButton
                    content={secondaryBtnContent}
                    variant="outlined-white"
                    btnpadding="13px 26px"
                    fontsize={15}
                    btnwidth="100%"
                    to="/before-after"
                    onClick={() => {}}
                  />
                </Box>
              )}
            </Stack>
          )}

          {/* Quick Trust Credentials for Home and Landing Hero */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: alignItems === "start" ? "flex-start" : "center",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2.5 },
              mt: { xs: 2.5, sm: 3 },
              pt: { xs: 2, sm: 2.5 },
              borderTop: "1px solid rgba(255, 255, 255, 0.14)",
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: { xs: "12px", sm: "13px" },
              fontWeight: 500,
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <span style={{ color: "#dfba5a" }}>★ 5.0</span>
              <span><strong>Google Rating</strong></span>
            </Box>
            <span style={{ opacity: 0.4 }}>•</span>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <span>🛡️ <strong>Licensed &amp; Insured</strong></span>
            </Box>
            <span style={{ opacity: 0.4 }}>•</span>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <span>📍 <strong>Langley Twp &amp; Fraser Valley</strong></span>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PrimaryBanner;
