import React from "react";
import { Container, Typography, Box } from "@mui/material";
import FAQsCard from "../UI/FAQsCard";
import { faqs } from "../../data/FAQsData";

const tubConversionFaqs = faqs.filter((f) =>
  f.question.toLowerCase().includes("tub") ||
  f.question.toLowerCase().includes("shower") ||
  f.question.toLowerCase().includes("waterproof") ||
  f.question.toLowerCase().includes("duration") ||
  f.question.toLowerCase().includes("permit")
);

const FAQs: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", md: "36px" },
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            color: "#0f172a",
            textAlign: "center",
            mb: 4,
          }}
        >
          Frequently Asked Questions About Tub Conversions
        </Typography>
        <Box>
          {tubConversionFaqs.map((faq, idx) => (
            <FAQsCard key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQs;
