import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Auto-reload once if dynamic import / module fetch failed
    const isModuleError =
      error?.message?.includes("Failed to fetch dynamically imported module") ||
      error?.message?.includes("dynamically imported module") ||
      error?.message?.includes("Loading chunk");

    if (isModuleError) {
      const reloadKey = "chunk_error_reloaded";
      const hasReloaded = sessionStorage.getItem(reloadKey);
      if (!hasReloaded) {
        sessionStorage.setItem(reloadKey, "true");
        window.location.reload();
      }
    }
  }

  private handleReload = () => {
    sessionStorage.removeItem("chunk_error_reloaded");
    window.location.reload();
  };

  private handleGoHome = () => {
    sessionStorage.removeItem("chunk_error_reloaded");
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            py: { xs: 8, md: 14 },
            minHeight: "65vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8fafc",
            textAlign: "center",
          }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "rgba(194, 155, 56, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
                color: "#c29b38",
              }}
            >
              <AlertTriangle size={32} />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0f172a",
                mb: 1.5,
                fontSize: { xs: "22px", sm: "28px" },
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {this.props.fallbackTitle || "Page Could Not Be Loaded"}
            </Typography>

            <Typography
              sx={{
                color: "#64748b",
                fontSize: "15px",
                lineHeight: 1.6,
                mb: 4,
                maxWidth: "420px",
                mx: "auto",
              }}
            >
              We encountered a temporary connection issue while loading this view. Please refresh or return to the main showcase.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                onClick={this.handleReload}
                startIcon={<RefreshCw size={16} />}
                sx={{
                  backgroundColor: "#c29b38",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "14px",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  textTransform: "none",
                  boxShadow: "0 2px 8px rgba(194, 155, 56, 0.25)",
                  "&:hover": {
                    backgroundColor: "#a8832a",
                  },
                }}
              >
                Refresh Page
              </Button>

              <Button
                variant="outlined"
                onClick={this.handleGoHome}
                startIcon={<Home size={16} />}
                sx={{
                  borderColor: "#cbd5e1",
                  color: "#0f172a",
                  fontWeight: 700,
                  fontSize: "14px",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#94a3b8",
                    backgroundColor: "#f1f5f9",
                  },
                }}
              >
                Return to Home
              </Button>
            </Box>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
