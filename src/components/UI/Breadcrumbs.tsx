import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight, Sparkles } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  currentLabel?: string;
  parentLabel?: string;
  parentPath?: string;
  badge?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  currentLabel,
  parentLabel,
  parentPath,
  badge,
}) => {
  const location = useLocation();

  const resolvedItems: BreadcrumbItem[] = React.useMemo(() => {
    if (items && items.length > 0) return items;
    const res: BreadcrumbItem[] = [];
    if (parentLabel) {
      res.push({ label: parentLabel, path: parentPath || "/services" });
    }
    if (currentLabel) {
      res.push({ label: currentLabel });
    }
    return res;
  }, [items, currentLabel, parentLabel, parentPath]);

  // Inject BreadcrumbList JSON-LD Schema
  useEffect(() => {
    const breadcrumbListSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://idealbathrenovations.ca/",
        },
        ...resolvedItems.map((item, idx) => ({
          "@type": "ListItem",
          "position": idx + 2,
          "name": item.label,
          "item": item.path
            ? `https://idealbathrenovations.ca${item.path}`
            : `https://idealbathrenovations.ca${location.pathname}`,
        })),
      ],
    };

    const scriptId = "jsonld-breadcrumbs";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(breadcrumbListSchema, null, 2);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [resolvedItems, location.pathname]);

  return (
    <Box
      sx={{
        backgroundColor: "#f8fafc",
        borderBottom: "1px solid #e2e8f0",
        py: 1.5,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        {/* Breadcrumb Trail */}
        <Box
          component="nav"
          aria-label="Breadcrumb"
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            fontSize: "13.5px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {/* Home Link */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#64748b",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            className="hover:text-[#c29b38]"
          >
            <Home size={15} color="#c29b38" style={{ flexShrink: 0 }} />
            <span>Home</span>
          </Link>

          {/* Child Breadcrumb Items */}
          {resolvedItems.map((item, index) => {
            const isLast = index === resolvedItems.length - 1;

            return (
              <React.Fragment key={index}>
                <ChevronRight size={14} color="#94a3b8" style={{ flexShrink: 0 }} />

                {item.path && !isLast ? (
                  <Link
                    to={item.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#64748b",
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "color 0.2s",
                    }}
                    className="hover:text-[#c29b38]"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <Typography
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.6,
                      color: "#0f172a",
                      fontWeight: 700,
                      fontSize: "13.5px",
                    }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Typography>
                )}
              </React.Fragment>
            );
          })}
        </Box>

        {/* Quick Trust Indicator Badge */}
        {badge ? (
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 0.6,
              color: "#b45309",
              backgroundColor: "rgba(194, 155, 56, 0.12)",
              border: "1px solid rgba(194, 155, 56, 0.25)",
              px: 1.5,
              py: 0.3,
              borderRadius: "16px",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            <Sparkles size={13} />
            <span>{badge}</span>
          </Box>
        ) : (
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.6,
              color: "#64748b",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            <span>Langley Twp • Surrey • White Rock • Fraser Valley</span>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Breadcrumbs;
