import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Chip,
  InputAdornment,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Search, ExternalLink, Download, Copy, Check, FileText, MapPin, Wrench, Globe, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

interface SitemapEntry {
  url: string;
  path: string;
  title: string;
  description: string;
  category: "Core Pages" | "Bathroom Services" | "Service Areas";
  priority: string;
  changefreq: string;
  lastmod: string;
}

const sitemapData: SitemapEntry[] = [
  // Core Pages
  {
    url: "https://idealbathrenovations.ca/",
    path: "/",
    title: "Homepage - Modern Bathroom Remodeler & Contractor",
    description: "Full-service bathroom renovations, tub-to-shower conversions, and walk-in showers in Langley, BC.",
    category: "Core Pages",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/about",
    path: "/about",
    title: "About Our Company",
    description: "Learn about Ideal Bath Renovations, our licensed Red Seal craftsmen, and lifetime waterproofing guarantee.",
    category: "Core Pages",
    priority: "0.85",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services",
    path: "/services",
    title: "Bathroom Remodeling Services Catalog",
    description: "Explore all 12 specialized bathroom remodeling solutions for Langley and Fraser Valley homeowners.",
    category: "Core Pages",
    priority: "0.95",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/service-areas",
    path: "/service-areas",
    title: "Service Areas & Regional Coverage",
    description: "View all communities we serve across Langley Township, Langley City, Surrey, and Abbotsford.",
    category: "Core Pages",
    priority: "0.90",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/before-after",
    path: "/before-after",
    title: "Before & After Transformation Gallery",
    description: "Real photo galleries and case studies of completed bathroom transformations in Langley and Fraser Valley.",
    category: "Core Pages",
    priority: "0.85",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/contact",
    path: "/contact",
    title: "Contact & Free In-Home Estimate",
    description: "Schedule a free consultation, 3D laser scan, and fixed-price quote with our renovation team.",
    category: "Core Pages",
    priority: "0.90",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },

  // 12 Services
  {
    url: "https://idealbathrenovations.ca/services/bathroom-remodeling",
    path: "/services/bathroom-remodeling",
    title: "Full-Service Bathroom Remodeling",
    description: "Turnkey bathroom renovations managing layout design, plumbing, electrical, tile, and premium finishes.",
    category: "Bathroom Services",
    priority: "0.90",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/shower-remodeling",
    path: "/services/shower-remodeling",
    title: "Tub-to-Shower & Walk-In Showers",
    description: "Convert old bathtubs into modern walk-in showers with frameless glass and Schluter waterproofing.",
    category: "Bathroom Services",
    priority: "0.90",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/bathtub-replacement",
    path: "/services/bathtub-replacement",
    title: "Bathtub Replacement & Freestanding Tubs",
    description: "Soaker tub installations, freestanding acrylic tubs, and modern drop-in alcove replacements.",
    category: "Bathroom Services",
    priority: "0.80",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/bathroom-vanity-installation",
    path: "/services/bathroom-vanity-installation",
    title: "Custom Vanities & Storage Cabinetry",
    description: "Floating and freestanding vanities with quartz countertops, soft-close hardware, and undermount sinks.",
    category: "Bathroom Services",
    priority: "0.80",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/bathroom-tile-installation",
    path: "/services/bathroom-tile-installation",
    title: "Custom Tile & Schluter Waterproofing",
    description: "Porcelain, marble, mosaic, and subway tile installation with 100% waterproof Schluter-KERDI membranes.",
    category: "Bathroom Services",
    priority: "0.80",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/custom-lighting-fixtures",
    path: "/services/custom-lighting-fixtures",
    title: "Bathroom Lighting & Electrical",
    description: "LED vanity bars, recessed shower pot lights, dimmer controls, and quiet humidity-sensing exhaust fans.",
    category: "Bathroom Services",
    priority: "0.75",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/accessible-bathrooms",
    path: "/services/accessible-bathrooms",
    title: "Accessible & Curbless Barrier-Free Bathrooms",
    description: "Zero-threshold curbless showers, grab bars, comfort-height toilets, and ADA-compliant safety layouts.",
    category: "Bathroom Services",
    priority: "0.85",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/powder-room-renovations",
    path: "/services/powder-room-renovations",
    title: "Powder Room & Small Bath Renovations",
    description: "High-impact half-bath remodels maximizing small footprints with designer fixtures and bold tile.",
    category: "Bathroom Services",
    priority: "0.75",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/flooring-solutions",
    path: "/services/flooring-solutions",
    title: "Heated Flooring & Waterproof Tile",
    description: "Nuheat electric in-floor radiant heating systems, slip-resistant porcelain tiles, and luxury vinyl plank.",
    category: "Bathroom Services",
    priority: "0.75",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/eco-friendly-upgrades",
    path: "/services/eco-friendly-upgrades",
    title: "Eco-Friendly & Water-Saving Upgrades",
    description: "WaterSense certified low-flow showerheads, dual-flush toilets, and sustainable building materials.",
    category: "Bathroom Services",
    priority: "0.70",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/smart-bathroom-tech",
    path: "/services/smart-bathroom-tech",
    title: "Smart Bathroom Technology Integration",
    description: "Digital thermostatic valves, smart bidet toilets, anti-fog LED mirrors, and smart ventilation systems.",
    category: "Bathroom Services",
    priority: "0.75",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/services/luxury-ensuite-transformations",
    path: "/services/luxury-ensuite-transformations",
    title: "Luxury Master Ensuite Transformations",
    description: "Spa-grade master suites featuring double vanities, freestanding soaking tubs, and custom steam showers.",
    category: "Bathroom Services",
    priority: "0.85",
    changefreq: "monthly",
    lastmod: "2026-09-05",
  },

  // 4 Service Areas
  {
    url: "https://idealbathrenovations.ca/service-areas/langley-twp",
    path: "/service-areas/langley-twp",
    title: "Langley Township Bathroom Renovations",
    description: "Serving Walnut Grove, Willoughby, Fort Langley, Brookswood, and Murrayville homeowners.",
    category: "Service Areas",
    priority: "0.95",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/service-areas/langley-city",
    path: "/service-areas/langley-city",
    title: "Langley City Bathroom Renovations",
    description: "Condo, townhouse, and detached home bathroom renovations in central Langley City neighborhoods.",
    category: "Service Areas",
    priority: "0.85",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/service-areas/surrey",
    path: "/service-areas/surrey",
    title: "Surrey & South Surrey Bathroom Remodeling",
    description: "Premium bathroom remodeling for Cloverdale, Fleetwood, South Surrey, and Morgan Creek residents.",
    category: "Service Areas",
    priority: "0.85",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
  {
    url: "https://idealbathrenovations.ca/service-areas/abbotsford",
    path: "/service-areas/abbotsford",
    title: "Abbotsford Bathroom Renovations",
    description: "Master ensuite overhauls, tub conversions, and accessible bathroom designs throughout Abbotsford.",
    category: "Service Areas",
    priority: "0.80",
    changefreq: "weekly",
    lastmod: "2026-09-05",
  },
];

const xmlRawContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const SitemapPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const filteredData = sitemapData.filter((item) => {
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlRawContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadXml = () => {
    const blob = new Blob([xmlRawContent], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <SEO
        title="HTML & XML Sitemap | Ideal Bath Renovations"
        description="Complete URL directory and XML sitemap for Ideal Bath Renovations. View all 22 verified pages including remodeling services and Fraser Valley service areas."
        canonical="https://idealbathrenovations.ca/sitemap.xml"
      />

      <Box sx={{ backgroundColor: "#0f172a", color: "#ffffff", pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.8, py: 0.6, borderRadius: "20px", backgroundColor: "rgba(194, 155, 56, 0.15)", border: "1px solid rgba(194, 155, 56, 0.4)", mb: 2 }}>
            <Globe size={15} color="#dfba5a" />
            <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#dfba5a", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Live Indexed Directory &bull; 22 Verified URLs
            </Typography>
          </Box>
          <Typography variant="h1" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: { xs: "28px", sm: "38px", md: "46px" }, fontWeight: 800, mb: 2 }}>
            Site Directory & XML Sitemap
          </Typography>
          <Typography sx={{ fontSize: { xs: "15px", md: "17px" }, color: "#94a3b8", maxWidth: "780px", lineHeight: 1.7, mb: 4 }}>
            Explore every active page, service overview, and regional service area across Ideal Bath Renovations. Both human-navigable and search-engine-ready.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleDownloadXml}
              startIcon={<Download size={16} />}
              sx={{
                backgroundColor: "#c29b38",
                color: "#0f172a",
                fontWeight: 700,
                textTransform: "none",
                px: 2.5,
                py: 1.2,
                "&:hover": { backgroundColor: "#dfba5a" },
              }}
            >
              Download sitemap.xml
            </Button>
            <Button
              variant="outlined"
              onClick={handleCopyXml}
              startIcon={copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "none",
                px: 2.5,
                py: 1.2,
                "&:hover": { borderColor: "#ffffff", backgroundColor: "rgba(255, 255, 255, 0.05)" },
              }}
            >
              {copied ? "Copied XML!" : "Copy XML Code"}
            </Button>
            <Button
              component="a"
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FileText size={16} />}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "#94a3b8",
                fontWeight: 500,
                textTransform: "none",
                px: 2,
                py: 1.2,
                "&:hover": { color: "#ffffff", borderColor: "#ffffff" },
              }}
            >
              View robots.txt
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ backgroundColor: "#f8fafc", py: 6, minHeight: "600px" }}>
        <Container maxWidth="lg">
          <Paper elevation={0} sx={{ borderRadius: "14px", border: "1px solid #e2e8f0", overflow: "hidden", mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={(_, val) => setActiveTab(val)}
              sx={{
                borderBottom: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                "& .MuiTab-root": { textTransform: "none", fontWeight: 700, fontSize: "15px", py: 2 },
                "& .Mui-selected": { color: "#c29b38" },
                "& .MuiTabs-indicator": { backgroundColor: "#c29b38", height: 3 },
              }}
            >
              <Tab label="Interactive Visual Sitemap (22 Pages)" />
              <Tab label="Raw XML Feed (sitemaps.org standard)" />
            </Tabs>

            {activeTab === 0 && (
              <Box sx={{ p: { xs: 2.5, md: 4 }, backgroundColor: "#ffffff" }}>
                {/* Search & Filter Bar */}
                <Grid container spacing={2} sx={{ mb: 4 }} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Search pages or services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search size={18} color="#94a3b8" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        backgroundColor: "#f8fafc",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#cbd5e1" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
                      {(["all", "Core Pages", "Bathroom Services", "Service Areas"] as const).map((cat) => (
                        <Chip
                          key={cat}
                          label={cat === "all" ? "All Pages (22)" : cat}
                          onClick={() => setCategoryFilter(cat)}
                          variant={categoryFilter === cat ? "filled" : "outlined"}
                          sx={{
                            fontWeight: 700,
                            fontSize: "13px",
                            cursor: "pointer",
                            backgroundColor: categoryFilter === cat ? "#0f172a" : "transparent",
                            color: categoryFilter === cat ? "#ffffff" : "#475569",
                            borderColor: categoryFilter === cat ? "#0f172a" : "#cbd5e1",
                            "&:hover": {
                              backgroundColor: categoryFilter === cat ? "#1e293b" : "#f1f5f9",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>

                {/* Items List */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {filteredData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 2.5,
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        backgroundColor: "#ffffff",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "#c29b38",
                          boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                          transform: "translateY(-1px)",
                        },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "center" },
                        gap: 2,
                      }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.8, flexWrap: "wrap" }}>
                          {item.category === "Core Pages" && <Globe size={16} color="#3b82f6" />}
                          {item.category === "Bathroom Services" && <Wrench size={16} color="#c29b38" />}
                          {item.category === "Service Areas" && <MapPin size={16} color="#10b981" />}

                          <Typography
                            component={Link}
                            to={item.path}
                            sx={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: "16px",
                              fontWeight: 700,
                              color: "#0f172a",
                              textDecoration: "none",
                              "&:hover": { color: "#c29b38", textDecoration: "underline" },
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Chip
                            label={item.category}
                            size="small"
                            sx={{
                              fontSize: "11px",
                              fontWeight: 700,
                              height: "22px",
                              backgroundColor:
                                item.category === "Core Pages"
                                  ? "#eff6ff"
                                  : item.category === "Bathroom Services"
                                  ? "#fffbeb"
                                  : "#ecfdf5",
                              color:
                                item.category === "Core Pages"
                                  ? "#1d4ed8"
                                  : item.category === "Bathroom Services"
                                  ? "#b45309"
                                  : "#047857",
                            }}
                          />
                        </Box>

                        <Typography sx={{ fontSize: "13.5px", color: "#64748b", mb: 1, maxWidth: "800px" }}>
                          {item.description}
                        </Typography>

                        <Typography sx={{ fontSize: "12px", fontFamily: "monospace", color: "#94a3b8" }}>
                          {item.url}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 3, width: { xs: "100%", md: "auto" }, justifyContent: "space-between", borderTop: { xs: "1px solid #f1f5f9", md: "none" }, pt: { xs: 1.5, md: 0 } }}>
                        <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
                          <Typography sx={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase" }}>
                            Priority / Freq
                          </Typography>
                          <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "#334155" }}>
                            {item.priority} &bull; {item.changefreq}
                          </Typography>
                        </Box>

                        <Button
                          component={Link}
                          to={item.path}
                          size="small"
                          endIcon={<ExternalLink size={14} />}
                          sx={{
                            textTransform: "none",
                            fontWeight: 700,
                            fontSize: "13px",
                            color: "#c29b38",
                            "&:hover": { backgroundColor: "#fffbeb" },
                          }}
                        >
                          Visit
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {activeTab === 1 && (
              <Box sx={{ p: { xs: 2.5, md: 4 }, backgroundColor: "#0f172a" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <Typography sx={{ fontSize: "13px", color: "#94a3b8", fontFamily: "monospace" }}>
                      Valid W3C XML Sitemap Format (sitemaps.org/schemas/sitemap/0.9)
                    </Typography>
                  </Box>
                  <Button
                    size="small"
                    onClick={handleCopyXml}
                    startIcon={copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    sx={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.2)", textTransform: "none", fontSize: "12px" }}
                    variant="outlined"
                  >
                    {copied ? "Copied" : "Copy Raw XML"}
                  </Button>
                </Box>
                <Box
                  component="pre"
                  sx={{
                    p: 3,
                    borderRadius: "8px",
                    backgroundColor: "#020617",
                    color: "#38bdf8",
                    fontFamily: "monospace",
                    fontSize: "12.5px",
                    lineHeight: 1.7,
                    overflowX: "auto",
                    maxHeight: "550px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {xmlRawContent}
                </Box>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default SitemapPage;
