import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Star, ExternalLink } from "lucide-react";
import Feedback from "../components/Home/Feedback";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import PrimaryButton from "../components/UI/PrimaryButton";
import {
  reviews,
  GOOGLE_REVIEWS_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from "../data/ReviewsData";
import { buildMetaTitle, SITE_URL } from "../data/SeoContent";

const Reviews: React.FC = () => {
  const hasAggregate = GOOGLE_RATING !== null && GOOGLE_REVIEW_COUNT !== null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Ideal Bath Renovations",
    url: SITE_URL,
    telephone: "+1-672-273-0434",
    ...(hasAggregate
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: GOOGLE_RATING,
            reviewCount: GOOGLE_REVIEW_COUNT,
          },
        }
      : {}),
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.stars, bestRating: 5 },
      reviewBody: r.comment,
    })),
  };

  return (
    <>
      <SEO
        title={buildMetaTitle("Bathroom Remodeler Reviews Langley")}
        description="Read reviews of Ideal Bath Renovations, a bathroom remodeler in Langley, BC. See what homeowners say about our renovations, showers, and tile work."
        canonical={`${SITE_URL}/reviews`}
        schema={schema}
      />
      <Breadcrumbs currentLabel="Reviews" />

      <Box sx={{ backgroundColor: "#0f172a", color: "#fff", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "32px", md: "46px" },
              fontWeight: 800,
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Bathroom Remodeler Reviews in Langley, BC
          </Typography>
          <Typography sx={{ color: "#cbd5e1", fontSize: { xs: "16px", md: "18px" }, maxWidth: 720, mx: "auto", mb: 3 }}>
            Read what homeowners in Langley and the Fraser Valley say about their bathroom renovation, shower, and
            tile projects with Ideal Bath Renovations.
          </Typography>
          {hasAggregate && (
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Star size={20} fill="#f59e0b" stroke="none" />
              <Typography sx={{ fontWeight: 800 }}>
                {GOOGLE_RATING!.toFixed(1)} on Google ({GOOGLE_REVIEW_COUNT} reviews)
              </Typography>
            </Box>
          )}
          <Box>
            <Box
              component="a"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: "8px",
                backgroundColor: "#dfba5a",
                color: "#0f172a",
                fontWeight: 800,
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Read All Reviews on Google <ExternalLink size={16} />
            </Box>
          </Box>
        </Container>
      </Box>

      <Feedback />

      <Box sx={{ pb: { xs: 7, md: 9 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: { xs: "24px", md: "30px" }, fontWeight: 800, color: "#0f172a", mb: 3, textAlign: "center" }}
          >
            Find Ideal Bath Renovations on Google Maps
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: { xs: 320, md: 450 },
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid #cbd5e1",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
            }}
          >
            <Box
              component="iframe"
              title="Ideal Bath Renovations on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2609.862816766048!2d-122.645019!3d49.146229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d100095e3151%3A0x30d85aa12ead439e!2sIdeal%20bath%20renovations!5e0!3m2!1sen!2s!4v1792277695358!5m2!1sen!2s"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              sx={{ display: "block", border: 0 }}
            />
          </Box>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <PrimaryButton content="Get a Free Quote" variant="gold" btnpadding="14px 30px" fontsize={15} to="/contact" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Reviews;
