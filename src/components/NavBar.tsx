import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import PrimaryButton from "./UI/PrimaryButton";
import { Typography, Stack, Divider, Chip } from "@mui/material";
import {
  Phone,
  MapPin,
  Star,
  Sparkles,
  Home,
  Info,
  Wrench,
  Bath,
  Image as ImageIcon,
  Mail,
  ChevronRight,
  ChevronDown,
  Clock,
  CheckCircle2,
  Menu as MenuIcon,
  X,
  ArrowRight,
} from "lucide-react";
import { servicesDetailList } from "../data/ServicesDetailData";
import "../main.css";

const navItems = [
  { name: "Home", route: "/", icon: Home },
  { name: "About Us", route: "/about", icon: Info },
  { name: "Services", route: "/services", icon: Wrench, isServicesMenu: true },
  { name: "Service Areas", route: "/service-areas", icon: MapPin },
  { name: "Before & After", route: "/before-after", icon: ImageIcon },
  { name: "Contact Us", route: "/contact", icon: Mail },
];

interface ServiceMegaCategory {
  letter: string;
  badgeBg: string;
  badgeColor: string;
  accentColor: string;
  title: string;
  items: {
    title: string;
    route: string;
  }[];
}

const megaMenuCategories: ServiceMegaCategory[] = [
  {
    letter: "R",
    badgeBg: "#ecfdf5",
    badgeColor: "#059669",
    accentColor: "#10b981",
    title: "FULL REMODELS",
    items: [
      { title: "Bathroom Remodeling", route: "/services/bathroom-remodeling" },
      { title: "Bathroom Renovation", route: "/services/bathroom-renovation" },
      { title: "Bathroom Installation", route: "/services/bathroom-installation" },
      { title: "Bathroom Restoration", route: "/services/bathroom-restoration" },
    ],
  },
  {
    letter: "S",
    badgeBg: "#e0f2fe",
    badgeColor: "#0284c7",
    accentColor: "#0ea5e9",
    title: "SHOWERS & TUBS",
    items: [
      { title: "Shower Remodeling", route: "/services/shower-remodeling" },
      { title: "Bathtub Replacement", route: "/services/bathtub-replacement" },
      { title: "Tub-to-Shower Conversions", route: "/services/shower-remodeling" },
      { title: "Barrier-Free Walk-In Suites", route: "/services/shower-remodeling" },
    ],
  },
  {
    letter: "T",
    badgeBg: "#fef3c7",
    badgeColor: "#d97706",
    accentColor: "#f59e0b",
    title: "TILE & VANITIES",
    items: [
      { title: "Bathroom Tile Installation", route: "/services/bathroom-tile-installation" },
      { title: "Bathroom Vanity Installation", route: "/services/bathroom-vanity-installation" },
      { title: "Heated In-Floor Warming", route: "/services/bathroom-tile-installation" },
      { title: "Custom Quartz Countertops", route: "/services/bathroom-vanity-installation" },
    ],
  },
  {
    letter: "U",
    badgeBg: "#f5f3ff",
    badgeColor: "#7c3aed",
    accentColor: "#8b5cf6",
    title: "UPGRADES & DESIGN",
    items: [
      { title: "Bathroom Design & 3D Renders", route: "/services/bathroom-design" },
      { title: "Bathroom Upgrades & Tech", route: "/services/bathroom-upgrades" },
      { title: "Bathroom Repair & Leak Fixes", route: "/services/bathroom-repair" },
      { title: "Bathroom Replacement", route: "/services/bathroom-replacement" },
    ],
  },
];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState<boolean>(false);
  const megaMenuTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 180);
  };

  const handleNavClick = (route: string) => {
    setDrawerOpen(false);
    setIsMegaMenuOpen(false);
    navigate(route);
  };

  // Close mega menu on route change
  React.useEffect(() => {
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  return (
    <Box sx={{ width: "100%", overflowX: "visible", position: "relative" }}>
      {/* Top Announcement & Quick Contact Bar */}
      <Box
        sx={{
          backgroundColor: "#0f172a",
          color: "#cbd5e1",
          py: { xs: 0.8, sm: 1 },
          px: { xs: 1.5, sm: 3, md: 4 },
          fontSize: "12px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 0.6, sm: 1 },
            px: { xs: 0.5, sm: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5 },
              flexWrap: { xs: "nowrap", sm: "wrap" },
              justifyContent: { xs: "center", sm: "flex-start" },
              width: { xs: "100%", sm: "auto" },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "#dfba5a",
                fontWeight: 700,
                whiteSpace: "nowrap",
                fontSize: { xs: "11.5px", sm: "12.5px" },
                flexShrink: 0,
              }}
            >
              <Sparkles size={13} />
              <span>Langley's Premier Bathroom Remodeler</span>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline" }, color: "#64748b" }}>•</Box>
            <Box
              component="a"
              href="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
                color: "#94a3b8",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                maxWidth: { md: "260px", lg: "340px" },
                "&:hover": { color: "#ffffff" },
                transition: "color 0.2s",
              }}
            >
              <MapPin size={13} color="#dfba5a" style={{ flexShrink: 0 }} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                20819 78B Avenue, Langley Twp, BC
              </span>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 0.5, color: "#cbd5e1" }}>
              <Clock size={12} color="#dfba5a" />
              <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                Open 24 Hours / 7 Days
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline" }, color: "#64748b" }}>•</Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Box sx={{ display: "flex", color: "#f59e0b" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#f59e0b" stroke="none" />
                ))}
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "12px" },
                  fontWeight: 600,
                  color: "#f8fafc",
                  whiteSpace: "nowrap",
                }}
              >
                5.0 Google Rating
              </Typography>
            </Box>
            <Box
              component="a"
              href="tel:6722730434"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.6,
                color: "#f8fafc",
                fontWeight: 700,
                backgroundColor: "rgba(255,255,255,0.08)",
                px: 1.2,
                py: 0.3,
                borderRadius: "20px",
                fontSize: { xs: "11.5px", sm: "12px" },
                whiteSpace: "nowrap",
                "&:hover": { backgroundColor: "rgba(194, 155, 56, 0.25)", color: "#dfba5a" },
                transition: "all 0.2s",
              }}
            >
              <Phone size={12} color="#dfba5a" />
              <span>(672) 273-0434</span>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          borderBottom: "1px solid #e2e8f0",
          py: 0.5,
          px: { xs: 1.5, sm: 2, md: 4 },
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl" sx={{ p: 0 }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: { xs: "60px", md: "68px" },
            }}
          >
            {/* Brand Logo & Name */}
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: { xs: 1.2, sm: 1.5 },
                maxWidth: { xs: "calc(100% - 56px)", lg: "350px" },
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: { xs: 38, sm: 44 },
                  height: { xs: 38, sm: 44 },
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dfba5a",
                  boxShadow: "0 4px 12px rgba(15,23,42,0.15)",
                  flexShrink: 0,
                }}
              >
                <Bath size={22} color="#dfba5a" />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                    color: "#0f172a",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  IDEAL BATH
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "9px", sm: "10px" },
                    fontWeight: 700,
                    letterSpacing: { xs: "0.12em", sm: "0.18em" },
                    color: "#c29b38",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Renovations • Langley
                </Typography>
              </Box>
            </Box>

            {/* Mobile Hamburger Button */}
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="open mobile menu drawer"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: "#0f172a",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  p: 1,
                  "&:hover": { backgroundColor: "#f1f5f9" },
                }}
              >
                <MenuIcon size={22} color="#0f172a" />
              </IconButton>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: { lg: 2, xl: 3 },
                alignItems: "center",
              }}
            >
              {navItems.map((item) => {
                const isActive =
                  item.route === "/services"
                    ? location.pathname.startsWith("/services")
                    : location.pathname === item.route;

                if (item.isServicesMenu) {
                  return (
                    <Box
                      key={item.name}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      sx={{ position: "relative", py: 1 }}
                    >
                      <Box
                        onClick={() => navigate("/services")}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.6,
                          cursor: "pointer",
                          padding: "6px 6px",
                          color: isActive || isMegaMenuOpen ? "#0f172a" : "#475569",
                          fontWeight: isActive || isMegaMenuOpen ? 700 : 500,
                          fontSize: "14.5px",
                          transition: "color 0.2s ease",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          whiteSpace: "nowrap",
                          "&:hover": { color: "#0f172a" },
                        }}
                      >
                        <span>Services</span>
                        <ChevronDown
                          size={14}
                          color={isActive || isMegaMenuOpen ? "#c29b38" : "#94a3b8"}
                          style={{
                            transform: isMegaMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                        {isActive && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                              left: 6,
                              right: 6,
                              height: "2.5px",
                              backgroundColor: "#c29b38",
                              borderRadius: "2px",
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  );
                }

                return (
                  <NavLink
                    to={item.route}
                    key={item.name}
                    style={{
                      textDecoration: "none",
                      position: "relative",
                      padding: "6px 6px",
                      color: isActive ? "#0f172a" : "#475569",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "14.5px",
                      transition: "color 0.2s ease",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                    {isActive && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 6,
                          right: 6,
                          height: "2.5px",
                          backgroundColor: "#c29b38",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </NavLink>
                );
              })}

              <PrimaryButton
                content="Get Free Estimate"
                variant="gold"
                btnpadding="10px 20px"
                fontsize={14}
                to="/contact"
              />
            </Box>
          </Toolbar>
        </Container>

        {/* Desktop Services Mega Dropdown Panel (Appears on Hover) */}
        {isMegaMenuOpen && (
          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              width: "100%",
              backgroundColor: "#ffffff",
              boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.18), 0 0 1px rgba(15, 23, 42, 0.1)",
              borderTop: "1px solid #e2e8f0",
              borderBottom: "2px solid #c29b38",
              py: { lg: 3.5, xl: 4 },
              px: { lg: 4, xl: 6 },
              zIndex: 1200,
              animation: "fadeInDown 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              "@keyframes fadeInDown": {
                "0%": { opacity: 0, transform: "translateY(-6px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Container maxWidth="xl" sx={{ px: { xs: 1, md: 2 } }}>
              {/* 4 Categorized Columns Layout */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: { lg: 3.5, xl: 4.5 },
                  mb: 3,
                }}
              >
                {megaMenuCategories.map((category) => (
                  <Box key={category.title}>
                    {/* Category Header with Letter Badge & Underline Accent */}
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1 }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: "6px",
                            backgroundColor: category.badgeBg,
                            color: category.badgeColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: 800,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            flexShrink: 0,
                          }}
                        >
                          {category.letter}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "13px",
                            fontWeight: 800,
                            letterSpacing: "0.06em",
                            color: "#0f172a",
                            textTransform: "uppercase",
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>

                      {/* Accent Underline Bar */}
                      <Box
                        sx={{
                          width: "36px",
                          height: "2.5px",
                          backgroundColor: category.accentColor,
                          borderRadius: "2px",
                        }}
                      />
                    </Box>

                    {/* Services Links in this Category */}
                    <Stack spacing={1}>
                      {category.items.map((svc) => (
                        <Box
                          key={svc.title}
                          onClick={() => handleNavClick(svc.route)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            py: 0.6,
                            px: 0.8,
                            borderRadius: "6px",
                            cursor: "pointer",
                            transition: "all 0.18s ease",
                            "&:hover": {
                              backgroundColor: "#f8fafc",
                              "& .service-link-text": {
                                color: "#0f172a",
                                fontWeight: 700,
                                transform: "translateX(2px)",
                              },
                              "& .service-arrow-icon": {
                                color: "#c29b38",
                                transform: "translateX(4px)",
                              },
                            },
                          }}
                        >
                          <Typography
                            className="service-link-text"
                            sx={{
                              fontSize: "13.5px",
                              fontWeight: 500,
                              color: "#475569",
                              transition: "all 0.18s ease",
                              lineHeight: 1.4,
                            }}
                          >
                            {svc.title}
                          </Typography>
                          <ArrowRight
                            size={14}
                            className="service-arrow-icon"
                            color="#cbd5e1"
                            style={{
                              flexShrink: 0,
                              transition: "all 0.18s ease",
                              marginLeft: "8px",
                            }}
                          />
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Box>

              {/* Bottom Catalogue Bar matching Reference Image */}
              <Box
                sx={{
                  pt: 2.5,
                  borderTop: "1px solid #f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {/* Left Catalogue Link */}
                <Box
                  onClick={() => handleNavClick("/services")}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    cursor: "pointer",
                    color: "#15803d",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    "&:hover": {
                      color: "#166534",
                      textDecoration: "underline",
                      "& svg": { transform: "translateX(3px)" },
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>Explore All 12+ Bathroom Renovation Services Catalogue</span>
                  <ArrowRight size={15} style={{ transition: "transform 0.2s" }} />
                </Box>

                {/* Right Warranty Badge & Dark Action Button */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#16a34a",
                        boxShadow: "0 0 0 3px rgba(22, 163, 74, 0.2)",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#475569",
                      }}
                    >
                      5-Year Workmanship Warranty & Schluter® Certified
                    </Typography>
                  </Box>

                  <Box
                    onClick={() => handleNavClick("/contact")}
                    sx={{
                      backgroundColor: "#0f172a",
                      color: "#ffffff",
                      px: 2.2,
                      py: 0.9,
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.6,
                      boxShadow: "0 2px 8px rgba(15,23,42,0.2)",
                      "&:hover": {
                        backgroundColor: "#1e293b",
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>BOOK FREE ESTIMATE</span>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        )}

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          transitionDuration={300}
          sx={{
            display: { xs: "block", lg: "none" },
            zIndex: 1400,
            "& .MuiBackdrop-root": {
              backgroundColor: "rgba(15, 23, 42, 0.65)",
              backdropFilter: "blur(3px)",
            },
            "& .MuiDrawer-paper": {
              width: "100%",
              maxWidth: { xs: "88vw", sm: "380px" },
              backgroundColor: "#ffffff",
              boxShadow: "-8px 0 32px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            },
          }}
        >
          {/* Drawer Header with Logo & Cross Button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2.5,
              borderBottom: "1px solid #e2e8f0",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              position: "sticky",
              top: 0,
              zIndex: 10,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, overflow: "hidden" }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  backgroundColor: "rgba(223, 186, 90, 0.15)",
                  border: "1px solid rgba(223, 186, 90, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dfba5a",
                  flexShrink: 0,
                }}
              >
                <Bath size={18} color="#dfba5a" />
              </Box>
              <Box sx={{ overflow: "hidden" }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "16px",
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  IDEAL BATH
                </Typography>
                <Typography
                  sx={{
                    fontSize: "9.5px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#dfba5a",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Renovations • Langley
                </Typography>
              </Box>
            </Box>

            {/* Cross Button to close drawer */}
            <IconButton
              aria-label="close mobile menu drawer"
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "8px",
                p: 0.8,
                "&:hover": {
                  backgroundColor: "rgba(223, 186, 90, 0.25)",
                  color: "#dfba5a",
                },
                transition: "all 0.2s",
              }}
            >
              <X size={20} color="#ffffff" />
            </IconButton>
          </Box>

          {/* Drawer Body Content */}
          <Box sx={{ p: 2.5, flex: 1, display: "flex", flexDirection: "column", gap: 2.5 }}>
            {/* Primary Nav Links */}
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: 1.5,
                  px: 1,
                }}
              >
                Navigation
              </Typography>
              <Stack spacing={0.8}>
                {navItems.map((item) => {
                  const isActive = location.pathname === item.route;
                  const Icon = item.icon;
                  return (
                    <Box
                      key={item.name}
                      onClick={() => handleNavClick(item.route)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 1.5,
                        py: 1.2,
                        borderRadius: "8px",
                        backgroundColor: isActive ? "rgba(194, 155, 56, 0.12)" : "transparent",
                        color: isActive ? "#b45309" : "#1e293b",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "15px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: isActive ? "rgba(194, 155, 56, 0.16)" : "#f8fafc",
                          color: "#0f172a",
                        },
                        transition: "all 0.15s ease",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, overflow: "hidden" }}>
                        <Icon size={18} color={isActive ? "#c29b38" : "#64748b"} style={{ flexShrink: 0 }} />
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {item.name}
                        </span>
                      </Box>
                      <ChevronRight size={16} color={isActive ? "#c29b38" : "#cbd5e1"} style={{ flexShrink: 0 }} />
                    </Box>
                  );
                })}
              </Stack>
            </Box>

            <Divider sx={{ borderColor: "#f1f5f9" }} />

            {/* Core 12 Renovation Services Direct Links */}
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5, px: 1 }}>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  All 12 Renovation Services
                </Typography>
                <Link
                  to="/services"
                  onClick={() => setDrawerOpen(false)}
                  style={{ fontSize: "11.5px", color: "#c29b38", fontWeight: 700, textDecoration: "none" }}
                >
                  View All
                </Link>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                {servicesDetailList.map((service) => (
                  <Chip
                    key={service.id}
                    icon={<CheckCircle2 size={12} color="#c29b38" />}
                    label={service.title}
                    size="small"
                    onClick={() => handleNavClick(`/services/${service.slug}`)}
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      color: "#334155",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#c29b38",
                        color: "#ffffff",
                        borderColor: "#c29b38",
                        "& svg": { stroke: "#ffffff" },
                      },
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Divider sx={{ borderColor: "#f1f5f9" }} />

            {/* Contact & Hours Info */}
            <Box sx={{ backgroundColor: "#f8fafc", p: 2, borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", mb: 1.2 }}>
                Langley Showroom & Consultation
              </Typography>
              <Stack spacing={1}>
                <Box
                  component="a"
                  href="tel:6722730434"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#0f172a",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    "&:hover": { color: "#c29b38" },
                  }}
                >
                  <Phone size={14} color="#c29b38" />
                  <span>(672) 273-0434</span>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, color: "#64748b", fontSize: "12px" }}>
                  <MapPin size={14} color="#c29b38" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span>20819 78B Avenue, Langley Twp, BC V2Y</span>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#64748b", fontSize: "12px" }}>
                  <Clock size={14} color="#c29b38" />
                  <span>Open 24 Hours / 7 Days a Week</span>
                </Box>
              </Stack>
            </Box>

            {/* Action CTA Button */}
            <Box sx={{ pt: 1, pb: 2 }}>
              <PrimaryButton
                content="Get Free In-Home Estimate"
                variant="gold"
                btnwidth="100%"
                btnpadding="13px 20px"
                fontsize={15}
                to="/contact"
                onClick={() => setDrawerOpen(false)}
              />
            </Box>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default NavBar;
