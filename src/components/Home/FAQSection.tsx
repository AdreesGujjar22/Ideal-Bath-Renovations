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
    question: "How long does a bathroom remodel take in Langley, BC?",
    answer:
      "A standard tub-to-shower conversion typically takes 3 to 5 working days, while a complete full-gut bathroom remodel or master ensuite transformation takes between 2 to 3 weeks. Before starting any demolition, our team ensures all custom vanities, tiles, and fixtures are ordered and staged on site to prevent mid-project delays.",
  },
  {
    question: "Do I need a municipal building or plumbing permit in Langley Township?",
    answer:
      "If you are replacing fixtures like-for-like without changing wall layouts or drainage stacks, a permit is generally not required. However, moving plumbing lines, adding new electrical circuits, or altering load-bearing walls requires permits from the Township of Langley or City of Langley. Our licensed team handles all permit filings and coordinates mandatory municipal inspections directly.",
  },
  {
    question: "Can I keep my existing bathroom layout to save on renovation costs?",
    answer:
      "Yes, absolutely. Keeping your vanity, toilet, and shower/tub rough-in locations avoids expensive subfloor alterations and pipe relocations, saving between $1,500 and $4,000. You can invest those savings into luxury porcelain tile, custom quartz countertops, or high-end thermostatic shower fixtures.",
  },
  {
    question: "What waterproofing system do you install behind shower tile?",
    answer:
      "We exclusively install certified Schluter®-KERDI waterproofing systems and Schluter®-DITRA uncoupling floor membranes. Unlike outdated greenboard or liquid-painted membranes, Schluter provides a continuous, vapor-tight moisture barrier that completely prevents water intrusion, mold growth, and structural rot, backed by manufacturer lifetime warranties.",
  },
  {
    question: "How much does a bathroom renovation typically cost in Langley?",
    answer:
      "A powder room refresh typically ranges from $6,500 to $12,000; a tub-to-shower conversion ranges from $9,500 to $18,000; and a full-scale master ensuite overhaul with custom glass, heated floors, and double vanities ranges from $22,000 to $45,000+. We provide complete, transparent, itemized fixed-price quotes so you never encounter surprise extras.",
  },
  {
    question: "Do you handle both the plumbing, electrical, and tile installation?",
    answer:
      "Yes. Ideal Bath Renovations is a turnkey contractor. We manage the entire project from initial design consultation and clean demolition to Red Seal licensed plumbing, certified electrical wiring, waterproofing, precision tile setting, and final walkthrough.",
  },
  {
    question: "How do I schedule a free in-home design consultation and estimate?",
    answer:
      "Simply call us directly at +1 (672) 273-0434 or submit our online request form. One of our Langley renovation specialists will visit your home, measure your bathroom space, discuss your layout and design ideas, and provide a clear, no-obligation written estimate.",
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
            Bathroom Remodeling FAQs for Langley Homeowners
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
