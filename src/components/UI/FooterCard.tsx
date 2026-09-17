import { Box, Typography } from "@mui/material";
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const FooterCard: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography
        component="div"
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#c29b38",
          textTransform: "uppercase",
        }}
      >
        Headquarters & Operations
      </Typography>
      
      <Box
        component="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1.5,
          fontStyle: "normal",
        }}
      >
        <MapPin size={18} color="#94a3b8" style={{ flexShrink: 0, marginTop: "2px" }} />
        <Typography
          sx={{
            fontSize: "14px",
            color: "#cbd5e1",
            lineHeight: 1.5,
          }}
        >
          <span itemProp="streetAddress">20819 78B Avenue</span>,{" "}
          <span itemProp="addressLocality">Langley Township</span>,{" "}
          <span itemProp="addressRegion">BC</span>{" "}
          <span itemProp="postalCode">V2Y 0A1</span>,{" "}
          <span itemProp="addressCountry">Canada</span>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Phone size={18} color="#94a3b8" style={{ flexShrink: 0 }} />
        <Typography
          component="a"
          href="tel:16722730434"
          itemProp="telephone"
          sx={{ fontSize: "14px", color: "#cbd5e1", textDecoration: "none", "&:hover": { color: "#dfba5a" } }}
        >
          +1 (672) 273-0434
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Mail size={18} color="#94a3b8" style={{ flexShrink: 0 }} />
        <Typography sx={{ fontSize: "14px", color: "#cbd5e1" }}>
          info@idealbathrenovations.ca
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
        <Clock size={18} color="#94a3b8" style={{ flexShrink: 0, marginTop: "2px" }} />
        <Typography sx={{ fontSize: "13px", color: "#94a3b8" }}>
          Open 24 Hours / 7 Days a Week
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterCard;
