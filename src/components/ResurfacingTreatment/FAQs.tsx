import React from "react";
import { Container, Typography, Box } from "@mui/material";
import FAQsCard from "../UI/FAQsCard";
import { faqs } from "../../data/FAQsData";

const steamFaqs = faqs.filter((f) =>
  f.question.toLowerCase().includes("shower") ||
  f.question.toLowerCase().includes("steam") ||
  f.question.toLowerCase().includes("waterproof") ||
  f.question.toLowerCase().includes("heat") ||
  f.question.toLowerCase().includes("cost")
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
          Walk-In & Steam Shower FAQs
        </Typography>
        <Box>
          {steamFaqs.map((faq, idx) => (
            <FAQsCard key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQs;
