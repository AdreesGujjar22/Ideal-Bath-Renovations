import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "How long does a typical bathroom renovation take?",
    answer:
      "A standard bathroom renovation usually takes between one to two weeks, depending on the project scope and tile setting times. We provide an estimated timeline before work begins.",
  },
  {
    question: "Can I keep my existing bathroom layout to save on costs?",
    answer:
      "Yes. Keeping your plumbing fixtures in their current locations reduces pipe relocation work and helps keep overall project costs down.",
  },
  {
    question: "Do you handle both the plumbing and tile installation?",
    answer:
      "Yes. We coordinate the full project, including demolition, rough-in plumbing, waterproof backing, tile setting, and final fixture trim.",
  },
  {
    question: "How do I get an estimate for my project?",
    answer:
      "Contact us by phone or submit our online quote form. We will schedule a convenient in-home visit to review your bathroom and provide a clear, written estimate.",
  },
];

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

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
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: "26px", sm: "34px", md: "40px" },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Frequently Asked Questions
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
            Straightforward answers to common questions about bathroom remodeling.
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
      </Container>
    </Box>
  );
};

export default FAQSection;
