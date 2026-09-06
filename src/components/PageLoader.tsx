import React from "react";
import { Box, Typography } from "@mui/material";
import { Bath, Sparkles } from "lucide-react";

interface PageLoaderProps {
  message?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ message = "Loading experience..." }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0b1120",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(194, 155, 56, 0.12) 0%, rgba(11, 17, 32, 0) 70%)",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        },
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      {/* Outer Pulse Rings & Icon Emblem */}
      <Box
        sx={{
          position: "relative",
          width: 110,
          height: 110,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3.5,
        }}
      >
        {/* Pulsing Outer Ring 1 */}
        <Box
          sx={{
            position: "absolute",
            inset: -12,
            borderRadius: "28px",
            border: "1px solid rgba(194, 155, 56, 0.25)",
            animation: "pulseRing 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "@keyframes pulseRing": {
              "0%": { transform: "scale(0.88)", opacity: 0.2 },
              "50%": { transform: "scale(1.06)", opacity: 0.8 },
              "100%": { transform: "scale(0.88)", opacity: 0.2 },
            },
          }}
        />

        {/* Pulsing Outer Ring 2 (Offset) */}
        <Box
          sx={{
            position: "absolute",
            inset: -4,
            borderRadius: "22px",
            border: "1px dashed rgba(223, 186, 90, 0.4)",
            animation: "rotateDash 12s linear infinite",
            "@keyframes rotateDash": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        />

        {/* Central Logo Box */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "18px",
            background: "linear-gradient(145deg, #131d33 0%, #0f172a 100%)",
            border: "1.5px solid rgba(194, 155, 56, 0.5)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(194, 155, 56, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Bath size={38} color="#dfba5a" style={{ filter: "drop-shadow(0 2px 8px rgba(223,186,90,0.4))" }} />
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              animation: "twinkle 1.8s ease-in-out infinite alternate",
              "@keyframes twinkle": {
                "0%": { opacity: 0.3, transform: "scale(0.8)" },
                "100%": { opacity: 1, transform: "scale(1.15)" },
              },
            }}
          >
            <Sparkles size={14} color="#fef08a" />
          </Box>
        </Box>
      </Box>

      {/* Brand Name & Identity */}
      <Typography
        sx={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: { xs: "18px", sm: "21px" },
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          mb: 0.5,
          textAlign: "center",
        }}
      >
        Ideal Bath Renovations
      </Typography>

      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#dfba5a",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          mb: 3,
          textAlign: "center",
        }}
      >
        Langley &amp; Fraser Valley
      </Typography>

      {/* Animated Loading Bar */}
      <Box
        sx={{
          width: { xs: 200, sm: 260 },
          height: 3.5,
          borderRadius: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
          position: "relative",
          mb: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "50%",
            borderRadius: "4px",
            background: "linear-gradient(90deg, rgba(194,155,56,0.2) 0%, #dfba5a 50%, #c29b38 100%)",
            boxShadow: "0 0 10px rgba(223, 186, 90, 0.6)",
            animation: "loadingSlide 1.5s ease-in-out infinite",
            "@keyframes loadingSlide": {
              "0%": { left: "-55%", width: "40%" },
              "50%": { left: "25%", width: "60%" },
              "100%": { left: "105%", width: "40%" },
            },
          }}
        />
      </Box>

      {/* Subtle Caption */}
      <Typography
        sx={{
          fontSize: "13px",
          color: "#94a3b8",
          fontWeight: 500,
          letterSpacing: "0.02em",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default PageLoader;
