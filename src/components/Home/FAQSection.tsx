import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ChevronDown, HelpCircle } from "lucide-react";
import PrimaryButton from "../UI/PrimaryButton";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "How long does a typical bathroom renovation take?",
    answer:
      "Most full renovations are completed within 2–4 weeks, depending on scope and material availability. Simpler tub-to-shower conversions or tile refreshes can often be completed in 3–5 working days.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes — every project starts with a free, no-obligation in-home consultation and written quote. We evaluate your existing plumbing, electrical, and structural layout to give you an accurate, transparent proposal with zero surprises.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Ideal Bath Renovations is fully licensed and insured for all work performed in BC. We maintain comprehensive general liability coverage and WorkSafeBC registration for complete homeowner peace of mind.",
  },
  {
    question: "What waterproofing system do you use for walk-in showers?",
    answer:
      "We exclusively install certified Schluter®-KERDI waterproofing systems and Schluter®-DITRA-HEAT uncoupling membranes. Every shower pan is backed by a 24-hour hydrostatic flood test before any tile is laid.",
  },
  {
    question: "Can you help design our bathroom layout and pick materials?",
    answer:
      "Absolutely. Our experienced design specialists guide you through 3D layout renderings, vanity dimensions, tile combinations, plumbing fixtures, and lighting plans to make your renovation seamless and stress-free.",
  },
];

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>("panel0");

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#ffffff" }}>
      {/* FAQPage Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqList.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              backgroundColor: "rgba(194, 155, 56, 0.12)",
              color: "#b45309",
              px: 1.8,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "12.5px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            <HelpCircle size={14} color="#c29b38" />
            <span>Helpful Answers</span>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "26px", sm: "34px", md: "40px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Frequently Asked Questions About Bathroom Renovations
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", md: "16.5px" },
              color: "#64748b",
              maxWidth: "740px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Have questions about planning your bathroom remodel? Here are clear answers to the most common questions from Langley and Fraser Valley homeowners.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "840px", mx: "auto" }}>
          {faqList.map((faq, index) => {
            const panelId = `panel${index}`;
            const isSelected = expanded === panelId;
            return (
              <Accordion
                key={index}
                expanded={isSelected}
                onChange={handleChange(panelId)}
                elevation={0}
                sx={{
                  mb: 2,
                  borderRadius: "12px !important",
                  border: isSelected ? "1.5px solid #c29b38" : "1px solid #e2e8f0",
                  backgroundColor: isSelected ? "#fffdfa" : "#f8fafc",
                  boxShadow: isSelected ? "0 6px 20px rgba(194, 155, 56, 0.08)" : "none",
                  transition: "all 0.2s ease",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDown color={isSelected ? "#c29b38" : "#64748b"} />}
                  sx={{
                    px: 3,
                    py: 1,
                    "& .MuiAccordionSummary-content": {
                      my: 1.2,
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: { xs: "15px", sm: "16.5px" },
                      fontWeight: isSelected ? 700 : 600,
                      color: isSelected ? "#0f172a" : "#1e293b",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 2.5, pt: 0 }}>
                  <Typography
                    sx={{
                      fontSize: "14.5px",
                      color: "#475569",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography sx={{ fontSize: "14.5px", color: "#64748b", mb: 2 }}>
            Have a question specific to your bathroom's layout or plumbing?
          </Typography>
          <PrimaryButton
            content="Ask Our Renovation Specialists"
            variant="gold"
            btnpadding="12px 28px"
            fontsize={14}
            to="/contact"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
