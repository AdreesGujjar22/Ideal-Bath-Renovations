import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import PrimaryButton from "../UI/PrimaryButton";
import { Box, Chip } from "@mui/material";
import { CheckCircle2 } from "lucide-react";

interface CardProps {
  id?: string;
  category?: string;
  img: string;
  title: string;
  price?: string;
  duration?: string;
  about?: string;
  features?: string[];
  btncontent: string;
  popular?: boolean;
  topLeftRadiusbrd?: number;
  topRightRadiusbrd?: number;
  bottomRightRadiusbrd?: number;
  bottomLeftRadiusbrd?: number;
}

const ServiceCard: React.FC<CardProps> = ({
  category,
  img,
  title,
  price,
  duration,
  about,
  features,
  btncontent,
  popular,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "420px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "14px",
        border: "1px solid #e2e8f0",
        boxShadow: popular ? "0 10px 25px -5px rgba(194,155,56,0.18)" : "0 4px 12px rgba(0,0,0,0.04)",
        backgroundColor: "#ffffff",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        position: "relative",
        overflow: "hidden",
        ":hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
        },
      }}
    >
      {popular && (
        <Box
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 10,
            backgroundColor: "#c29b38",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            px: 1.5,
            py: 0.5,
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Most Popular
        </Box>
      )}

      <Box>
        <Box sx={{ position: "relative", height: "230px", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="230"
            image={img}
            alt={title}
            sx={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          {category && (
            <Chip
              label={category}
              size="small"
              sx={{
                position: "absolute",
                bottom: 12,
                left: 12,
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "11px",
                backdropFilter: "blur(4px)",
              }}
            />
          )}
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography
            gutterBottom
            variant="h3"
            component="h3"
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.3,
              mb: 1,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2, alignItems: "center" }}>
            {price && (
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#c29b38",
                }}
              >
                {price}
              </Typography>
            )}
            {duration && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748b",
                  backgroundColor: "#f1f5f9",
                  px: 1,
                  py: 0.2,
                  borderRadius: "4px",
                  fontWeight: 500,
                }}
              >
                ⏱ {duration}
              </Typography>
            )}
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "#475569",
              lineHeight: 1.6,
              fontSize: "13.5px",
              mb: 2,
            }}
          >
            {about}
          </Typography>

          {features && features.length > 0 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, mt: 2, pt: 2, borderTop: "1px dashed #e2e8f0" }}>
              {features.slice(0, 3).map((feat, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle2 size={15} color="#c29b38" />
                  <Typography sx={{ fontSize: "12.5px", color: "#334155", fontWeight: 500 }}>
                    {feat}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Box>

      <CardActions sx={{ p: 3, pt: 0, justifyContent: "stretch" }}>
        <PrimaryButton content={btncontent} btnwidth="100%" to="/contact" />
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
