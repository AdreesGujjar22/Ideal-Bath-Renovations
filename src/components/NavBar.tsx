import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import PrimaryButton from "./UI/PrimaryButton";
import { Typography, Stack } from "@mui/material";
import { Phone, MapPin, Star, Sparkles } from "lucide-react";
import "../main.css";

const navItems = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/treatments" },
  { name: "Tub-to-Shower", route: "/rfMicroNeedling" },
  { name: "Walk-In & Steam", route: "/resurfacingTreatment" },
  { name: "ADA Accessibility", route: "/nanoneedling" },
  { name: "Before & After", route: "/before&After" },
  { name: "Contact", route: "/contact" },
];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ width: "100%" }}>
      {/* Top Announcement & Quick Contact Bar */}
      <Box
        sx={{
          backgroundColor: "#0f172a",
          color: "#cbd5e1",
          py: 1,
          px: { xs: 2, md: 4 },
          fontSize: "12.5px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#dfba5a", fontWeight: 600 }}>
              <Sparkles size={14} />
              <span>Langley's Premier Bathroom Remodeler</span>
            </Box>
            <Box sx={{ display: { xs: "none", md: "inline" }, color: "#64748b" }}>•</Box>
            <Box
              component="a"
              href="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "#94a3b8",
                "&:hover": { color: "#ffffff" },
                transition: "color 0.2s",
              }}
            >
              <MapPin size={13} color="#dfba5a" />
              <span>20819 78B Avenue, Langley Twp, BC V2Y</span>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Box sx={{ display: "flex", color: "#f59e0b" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" stroke="none" />
                ))}
              </Box>
              <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#f8fafc" }}>
                5.0 Google Rating
              </Typography>
            </Box>
            <Box
              component="a"
              href="tel:6045398822"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                color: "#f8fafc",
                fontWeight: 700,
                backgroundColor: "rgba(255,255,255,0.08)",
                px: 1.5,
                py: 0.4,
                borderRadius: "20px",
                "&:hover": { backgroundColor: "rgba(194, 155, 56, 0.25)", color: "#dfba5a" },
                transition: "all 0.2s",
              }}
            >
              <Phone size={13} color="#dfba5a" />
              <span>(604) 539-8822</span>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          borderBottom: "1px solid #e2e8f0",
          py: 1,
          px: { xs: 1, md: 2, lg: 4 },
          zIndex: 100,
        }}
      >
        <Container maxWidth="xl" sx={{ p: 0 }}>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between", minHeight: "68px !important" }}
          >
            {/* Brand Logo */}
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#dfba5a",
                  boxShadow: "0 4px 12px rgba(15,23,42,0.15)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 0L2 7" />
                  <path d="M4 12V7" />
                  <path d="M22 13v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a9 9 0 0 0 8.05 8.94V22a1 1 0 0 0 2 0v-0.06A9 9 0 0 0 22 13Z" />
                </svg>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "17px", md: "20px" },
                    color: "#0f172a",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  IDEAL BATH
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "#c29b38",
                    textTransform: "uppercase",
                  }}
                >
                  Renovations • Langley
                </Typography>
              </Box>
            </Box>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={() => setDrawerOpen(!drawerOpen)}
                sx={{ color: "#0f172a" }}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 2.5,
                alignItems: "center",
              }}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.route;
                return (
                  <NavLink
                    to={item.route}
                    key={item.name}
                    style={{
                      textDecoration: "none",
                      position: "relative",
                      padding: "6px 2px",
                      color: isActive ? "#0f172a" : "#475569",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "14.5px",
                      transition: "color 0.2s ease",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {item.name}
                    {isActive && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -2,
                          left: 0,
                          width: "100%",
                          height: "2px",
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

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              backgroundColor: "#ffffff",
              mt: "105px",
              boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
              borderBottom: "2px solid #c29b38",
              p: 3,
            },
          }}
        >
          <Stack spacing={2} sx={{ alignItems: "center", py: 2 }}>
            {navItems.map((item) => (
              <NavLink
                to={item.route}
                key={item.name}
                onClick={() => setDrawerOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  padding: "10px 20px",
                  color: isActive ? "#c29b38" : "#1e293b",
                  fontSize: "17px",
                  fontWeight: isActive ? 700 : 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                })}
              >
                {item.name}
              </NavLink>
            ))}
            <Box sx={{ width: "100%", maxWidth: "300px", pt: 2 }}>
              <PrimaryButton
                content="Get Free In-Home Estimate"
                variant="gold"
                btnwidth="100%"
                btnpadding="14px 20px"
                fontsize={16}
                to="/contact"
                onClick={() => setDrawerOpen(false)}
              />
            </Box>
          </Stack>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default NavBar;
