import { Box, Container, Typography } from "@mui/material";
import { ExternalLink } from "lucide-react";
import { GOOGLE_BUSINESS_EMBED_URL, GOOGLE_BUSINESS_URL } from "../../data/ReviewsData";

const GoogleBusinessProfile: React.FC = () => (
  <Box component="section" sx={{ py: { xs: 5, md: 6 }, backgroundColor: "#ffffff" }}>
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
          mb: 2.5,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "22px", md: "28px" },
              fontWeight: 800,
              color: "#0f172a",
              mb: 0.5,
            }}
          >
            Ideal Bath Renovations on Google
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#64748b" }}>
            View current business information and reviews on our Google Business Profile.
          </Typography>
        </Box>
        <Box
          component="a"
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.8,
            color: "#2563eb",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Open Google profile <ExternalLink size={15} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 320, md: 380 },
          overflow: "hidden",
          borderRadius: "14px",
          border: "1px solid #cbd5e1",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Box
          component="iframe"
          title="Ideal Bath Renovations Google Business Profile"
          src={GOOGLE_BUSINESS_EMBED_URL}
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          sx={{ display: "block", border: 0 }}
        />
      </Box>
    </Container>
  </Box>
);

export default GoogleBusinessProfile;
