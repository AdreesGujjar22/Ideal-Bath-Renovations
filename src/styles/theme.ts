import "./fontStyle.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Abel', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#1e293b", // Slate 800
      light: "#334155",
      dark: "#0f172a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c29b38", // Brushed Brass / Warm Champagne
      light: "#dfba5a",
      dark: "#997521",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;

