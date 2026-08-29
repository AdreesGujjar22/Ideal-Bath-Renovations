import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQsCardProps {
  question: string;
  answer: string | string[];
}

const FAQsCard: React.FC<FAQsCardProps> = ({ question, answer }) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        mb: 1.5,
        border: "1px solid #e2e8f0",
        borderRadius: "10px !important",
        "&:before": {
          display: "none",
        },
        backgroundColor: "#ffffff",
        overflow: "hidden",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          borderColor: "#cbd5e1",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ChevronDown size={18} color="#64748b" />}
        sx={{
          px: 2.5,
          py: 1,
          "& .MuiAccordionSummary-content": {
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          },
        }}
      >
        <HelpCircle size={18} color="#c29b38" style={{ flexShrink: 0 }} />
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "15.5px",
            fontWeight: 600,
            color: "#0f172a",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2.5, borderTop: "1px solid #f1f5f9" }}>
        {Array.isArray(answer) ? (
          <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
            {answer.map((item, idx) => (
              <Box
                component="li"
                key={idx}
                sx={{
                  color: "#475569",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  my: 0.5,
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        ) : (
          <Typography
            variant="body2"
            sx={{
              color: "#475569",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            {answer}
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQsCard;
