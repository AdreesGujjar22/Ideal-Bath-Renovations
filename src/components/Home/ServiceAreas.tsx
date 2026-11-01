import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { getServiceAreaPath, serviceAreasData } from "../../data/ServiceAreasData";
import GoogleBusinessProfile from "../UI/GoogleBusinessProfile";
import { homeSeo } from "../../data/SeoContent";

const ServiceAreas: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
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
            {homeSeo.areasHeading}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" },
              color: "#64748b",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.7,
              mb: 3.5,
            }}
          >
            {homeSeo.areasIntro}
          </Typography>

          {/* Short list of served area names as links */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {serviceAreasData.map((area) => (
              <Box
                key={area.id}
                component={Link}
                to={getServiceAreaPath(area)}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 2.2,
                  py: 1,
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  color: "#1e293b",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#c29b38",
                    color: "#b45309",
                    backgroundColor: "rgba(194, 155, 56, 0.05)",
                  },
                }}
              >
                <MapPin size={15} color="#c29b38" />
                <span>{area.name}</span>
              </Box>
            ))}
          </Box>
        </Box>

        <GoogleBusinessProfile />
      </Container>
    </Box>
  );
};

export default ServiceAreas;
