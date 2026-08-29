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
        minHeight: { xs: `${bannerHeight - 60}px`, md: `${bannerHeight}px` },
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
          filter: "brightness(0.72) contrast(1.05)",
          transform: "scale(1.02)",
          transition: "transform 10s ease",
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
          background: "linear-gradient(180deg, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.45) 50%, rgba(15,23,42,0.85) 100%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 6, md: 8 },
          display: "flex",
          justifyContent: alignItems === "start" ? "flex-start" : alignItems === "end" ? "flex-end" : "center",
        }}
      >
        <Box
          sx={{
            maxWidth: width || "820px",
            textAlign: alignItems === "start" ? "left" : alignItems === "end" ? "right" : "center",
            display: "flex",
            flexDirection: "column",
            alignItems: alignItems === "start" ? "flex-start" : alignItems === "end" ? "flex-end" : "center",
            gap: gap,
          }}
        >
          {badge && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "rgba(194, 155, 56, 0.92)",
                color: "#ffffff",
                px: 2,
                py: 0.6,
                borderRadius: "30px",
                fontSize: { xs: "12px", md: "13px" },
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                backdropFilter: "blur(4px)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              {badge}
            </Box>
          )}

          <Typography
            variant="h1"
            sx={{
              textTransform: textTransform,
              fontSize: { xs: "28px", sm: "38px", md: `${fontsize}px` },
              fontWeight: fontweight,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
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
                fontSize: { xs: "15px", sm: "18px", md: `${fontsizeSecondary}px` },
                color: "rgba(255, 255, 255, 0.92)",
                lineHeight: 1.5,
                maxWidth: "700px",
                textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              }}
            >
              {secondaryContent}
            </Typography>
          )}

          {btn && (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <PrimaryButton
                content={btncontent}
                variant="gold"
                btnpadding="14px 28px"
                fontsize={15}
                to="/contact"
              />
              {secondaryBtnContent && (
                <PrimaryButton
                  content={secondaryBtnContent}
                  variant="outlined"
                  btnpadding="14px 28px"
                  fontsize={15}
                  to="/before&After"
                  onClick={() => {}}
                />
              )}
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default PrimaryBanner;
