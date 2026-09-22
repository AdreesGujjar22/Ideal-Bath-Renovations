import { Box, Container, Typography } from "@mui/material";
import SEO from "./SEO";

export interface ContentSection {
  heading?: string;
  text?: string;
  level?: 2 | 3;
}

export interface SEOPageContent {
  title: string;
  description: string;
  h1: string;
  sections: ContentSection[];
}

interface SEOContentPageProps {
  content: SEOPageContent;
  canonical: string;
}

const SEOContentPage: React.FC<SEOContentPageProps> = ({ content, canonical }) => (
  <>
    <SEO title={content.title} description={content.description} canonical={canonical} />
    <Box component="article" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "32px", md: "48px" }, fontWeight: 800, lineHeight: 1.15, color: "#0f172a", mb: 4 }}>
          {content.h1}
        </Typography>
        {content.sections.map((section, index) => (
          <Box key={`${section.heading ?? "text"}-${index}`} sx={{ mb: section.heading ? 4 : 2.5 }}>
            {section.heading && (section.level === 3 ? (
              <Typography component="h3" variant="h3" sx={{ fontSize: { xs: "21px", md: "25px" }, fontWeight: 700, color: "#0f172a", mb: 1.5 }}>
                {section.heading}
              </Typography>
            ) : (
              <Typography component="h2" variant="h2" sx={{ fontSize: { xs: "26px", md: "32px" }, fontWeight: 750, color: "#0f172a", mb: 1.5 }}>
                {section.heading}
              </Typography>
            ))}
            {section.text && <Typography component="p" sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.8 }}>{section.text}</Typography>}
          </Box>
        ))}
      </Container>
    </Box>
  </>
);

export default SEOContentPage;
