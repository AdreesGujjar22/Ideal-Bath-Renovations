import React from "react";
import { Box, Typography } from "@mui/material";
import PrimaryMenuCard from "../UI/PrimaryMenuCard";
import Grid from "@mui/material/Grid2";

interface TreatmentData {
  id?: string;
  name: string;
  price: string;
  coursePrice?: string;
  description: string;
  duration: string;
  learnMoreLink: string;
  features?: string[];
}

interface MenuDetailProps {
  content: string;
  categoryBadge?: string;
  menuData: TreatmentData[];
}

const MenuDetail: React.FC<MenuDetailProps> = ({ content, categoryBadge, menuData }) => {
  return (
    <Box sx={{ mb: 7 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
        <Box
          sx={{
            width: "4px",
            height: "24px",
            backgroundColor: "#c29b38",
            borderRadius: "2px",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "20px", md: "24px" },
            color: "#0f172a",
          }}
        >
          {content}
        </Typography>
        {categoryBadge && (
          <Box
            sx={{
              display: { xs: "none", sm: "inline-block" },
              backgroundColor: "rgba(194, 155, 56, 0.1)",
              color: "#b45309",
              px: 1.5,
              py: 0.3,
              borderRadius: "12px",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {categoryBadge}
          </Box>
        )}
      </Box>

      <Grid container spacing={3}>
        {menuData.map((element, idx) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx}>
            <PrimaryMenuCard
              name={element.name}
              price={element.price}
              coursePrice={element.coursePrice}
              description={element.description}
              duration={element.duration}
              learnMoreLink={element.learnMoreLink}
              features={element.features}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuDetail;
