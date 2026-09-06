import React, { useState } from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import {
  ExternalLink,
  Navigation,
  Star,
  Info,
  Layers,
  Map as MapIcon,
  Phone,
  Maximize2,
} from "lucide-react";

interface GoogleMapEmbedProps {
  businessName?: string;
  address?: string;
  rating?: number;
  reviewsCount?: number | string;
  mapQuery?: string;
  googleMapsLink?: string;
  directionsQuery?: string;
  bottomLabel?: string;
  height?: number | string;
  defaultSatellite?: boolean;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  businessName = "IDEAL BATH RENOVATIONS",
  address = "20819 78B Ave, Langley Twp, BC V2Y 0A1",
  rating = 5.0,
  reviewsCount = "28+",
  mapQuery = "20819+78B+Avenue,+Langley+Twp,+BC+V2Y+0A1",
  googleMapsLink = "https://maps.app.goo.gl/AyGKysqniA1hfoGJA",
  directionsQuery = "20819+78B+Avenue,+Langley+Twp,+BC+V2Y+0A1",
  bottomLabel = "IDEAL BATH RENOVATIONS HQ • 20819 78B Ave, Langley Twp, BC, Canada",
  height = 460,
  defaultSatellite = false,
}) => {
  const [isSatellite, setIsSatellite] = useState<boolean>(defaultSatellite);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    directionsQuery
  )}`;

  // Construct iframe embed URL with roadmap or satellite layer
  const mapTypeParam = isSatellite ? "k" : "";
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&t=${mapTypeParam}&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height,
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #cbd5e1",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        backgroundColor: "#e2e8f0",
      }}
    >
      {/* Real Google Map iframe */}
      <iframe
        title={`Google Map - ${businessName} - ${address}`}
        src={embedSrc}
        width="100%"
        height="100%"
        style={{
          border: 0,
          display: "block",
          filter: isSatellite ? "contrast(1.05) saturate(1.1)" : "none",
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Top-Left Google Maps Business Card Overlay (Matching Image) */}
      <Box
        sx={{
          position: "absolute",
          top: 14,
          left: 14,
          maxWidth: { xs: "calc(100% - 28px)", sm: "360px" },
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          p: 1.8,
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 1.5 }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14.5px",
                fontWeight: 800,
                color: "#1e293b",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                lineHeight: 1.25,
                mb: 0.4,
              }}
            >
              {businessName}
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                color: "#475569",
                lineHeight: 1.35,
                mb: 0.8,
              }}
            >
              {address}
            </Typography>

            {/* Rating Row */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <Typography sx={{ fontSize: "12.5px", fontWeight: 700, color: "#1e293b" }}>
                {rating.toFixed(1)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", color: "#eab308" }}>
                <Star size={13} fill="#eab308" />
              </Box>
              <Typography
                component="a"
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "12px",
                  color: "#2563eb",
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                ({reviewsCount})
              </Typography>
              <Tooltip title="Verified Google Business Profile" arrow>
                <Box component="span" sx={{ display: "inline-flex", color: "#94a3b8", cursor: "pointer" }}>
                  <Info size={13} />
                </Box>
              </Tooltip>
            </Box>
          </Box>

          {/* Right Action Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, flexShrink: 0 }}>
            <Tooltip title="View larger map on Google" arrow>
              <IconButton
                component="a"
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  color: "#2563eb",
                  width: 32,
                  height: 32,
                  "&:hover": { backgroundColor: "#eff6ff", borderColor: "#93c5fd" },
                }}
              >
                <ExternalLink size={16} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Get Directions" arrow>
              <IconButton
                component="a"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  width: 32,
                  height: 32,
                  "&:hover": { backgroundColor: "#1d4ed8" },
                }}
              >
                <Navigation size={16} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Quick action footer */}
        <Box
          sx={{
            mt: 1.2,
            pt: 1,
            borderTop: "1px solid #f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box
            component="a"
            href="tel:6722730434"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.6,
              fontSize: "11.5px",
              fontWeight: 700,
              color: "#0f172a",
              textDecoration: "none",
              "&:hover": { color: "#c29b38" },
            }}
          >
            <Phone size={12} color="#c29b38" />
            <span>(672) 273-0434</span>
          </Box>

          <Box
            component="a"
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: "11.5px",
              fontWeight: 700,
              color: "#2563eb",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Open in Maps &rarr;
          </Box>
        </Box>
      </Box>

      {/* Satellite / Map layer switch button (Bottom Left) */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 52, sm: 16 },
          left: 14,
          zIndex: 10,
        }}
      >
        <Box
          component="button"
          onClick={() => setIsSatellite(!isSatellite)}
          sx={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: "8px",
            p: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: 0.8,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            fontSize: "12px",
            fontWeight: 700,
            color: "#1e293b",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#f8fafc",
              borderColor: "#c29b38",
            },
          }}
        >
          {isSatellite ? <MapIcon size={14} color="#0284c7" /> : <Layers size={14} color="#059669" />}
          <span>{isSatellite ? "Default Map View" : "Satellite / Hybrid"}</span>
        </Box>
      </Box>

      {/* Bottom Center / Right Address Label Pill (Matching Image) */}
      <Box
        sx={{
          position: "absolute",
          bottom: 12,
          right: { xs: "auto", sm: 14 },
          left: { xs: 14, sm: "auto" },
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(6px)",
          borderRadius: "6px",
          px: 1.5,
          py: 0.5,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          border: "1px solid rgba(0,0,0,0.08)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 0.8,
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#334155",
            letterSpacing: "0.02em",
          }}
        >
          {bottomLabel}
        </Typography>

        <Box
          component="a"
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#64748b", display: "inline-flex", "&:hover": { color: "#2563eb" } }}
        >
          <Maximize2 size={12} />
        </Box>
      </Box>
    </Box>
  );
};

export default GoogleMapEmbed;
