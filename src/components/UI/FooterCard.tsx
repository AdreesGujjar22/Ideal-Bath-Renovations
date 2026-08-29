import { Box, Typography } from "@mui/material";
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const FooterCard: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#c29b38",
          textTransform: "uppercase",
        }}
      >
        Headquarters & Showroom
      </Typography>
      
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
        <MapPin size={18} color="#94a3b8" style={{ flexShrink: 0, marginTop: "2px" }} />
        <Typography
          sx={{
            fontSize: "14px",
            color: "#cbd5e1",
            lineHeight: 1.5,
          }}
        >
          20819 78B Avenue, Langley Twp, BC V2Y, Canada
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Phone size={18} color="#94a3b8" style={{ flexShrink: 0 }} />
        <Typography sx={{ fontSize: "14px", color: "#cbd5e1" }}>
          (604) 539-8822
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Mail size={18} color="#94a3b8" style={{ flexShrink: 0 }} />
        <Typography sx={{ fontSize: "14px", color: "#cbd5e1" }}>
          estimates@idealbathrenovations.ca
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
        <Clock size={18} color="#94a3b8" style={{ flexShrink: 0, marginTop: "2px" }} />
        <Typography sx={{ fontSize: "13px", color: "#94a3b8" }}>
          Mon – Sat: 7:30 AM – 6:00 PM | Sun: By Appt
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterCard;
