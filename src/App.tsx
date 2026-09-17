import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import PageLoader from "./components/PageLoader";
import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Statically import page components to avoid runtime chunk fetch failures
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesHub from "./pages/ServicesHub";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceAreasHub from "./pages/ServiceAreasHub";
import ServiceAreaDetail from "./pages/ServiceAreaDetail";
import BeforeAfter from "./pages/BeforeAfter";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import SitemapPage from "./pages/SitemapPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <ErrorBoundary>
          <Suspense fallback={<PageLoader message="Loading page..." />}>
            <Routes>
            <Route
              path="/"
              element={
                <PageWrapper title="Home Showcase">
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper title="About Our Craftsmen">
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/services"
              element={
                <PageWrapper title="Bathroom Services">
                  <ServicesHub />
                </PageWrapper>
              }
            />
            <Route
              path="/services/:slug"
              element={
                <PageWrapper title="Service Specifications">
                  <ServiceDetail />
                </PageWrapper>
              }
            />
            <Route
              path="/service-areas"
              element={
                <PageWrapper title="Service Coverage">
                  <ServiceAreasHub />
                </PageWrapper>
              }
            />
            <Route
              path="/service-areas/:slug"
              element={
                <PageWrapper title="Regional Coverage">
                  <ServiceAreaDetail />
                </PageWrapper>
              }
            />
            <Route
              path="/before-after"
              element={
                <PageWrapper title="Transformation Gallery">
                  <BeforeAfter />
                </PageWrapper>
              }
            />
            <Route path="/before&After" element={<Navigate to="/before-after" replace />} />
            <Route
              path="/reviews"
              element={
                <PageWrapper title="Client Reviews">
                  <Reviews />
                </PageWrapper>
              }
            />
            <Route path="/testimonials" element={<Navigate to="/reviews" replace />} />
            <Route
              path="/contact"
              element={
                <PageWrapper title="Free Consultation">
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="/sitemap"
              element={
                <PageWrapper title="Directory & Sitemap">
                  <SitemapPage />
                </PageWrapper>
              }
            />
            <Route
              path="/sitemap.html"
              element={
                <PageWrapper title="Directory & Sitemap">
                  <SitemapPage />
                </PageWrapper>
              }
            />

            {/* SEO Landing Page Slug Aliases */}
            <Route path="/bathroom-renovations-langley" element={<Navigate to="/service-areas/langley-twp" replace />} />
            <Route path="/service-areas/langley-township" element={<Navigate to="/service-areas/langley-twp" replace />} />
            <Route path="/service-areas/langley" element={<Navigate to="/service-areas/langley-twp" replace />} />
            <Route path="/service-areas/surrey-bc" element={<Navigate to="/service-areas/surrey" replace />} />
            <Route path="/service-areas/abbotsford-bc" element={<Navigate to="/service-areas/abbotsford" replace />} />
            <Route path="/tub-to-shower-conversion" element={<Navigate to="/services/shower-remodeling" replace />} />
            <Route path="/walk-in-showers" element={<Navigate to="/services/shower-remodeling" replace />} />
            <Route path="/custom-vanities" element={<Navigate to="/services/bathroom-vanity-installation" replace />} />

            {/* Legacy skin-care routes redirected to modern renovation equivalents */}
            <Route path="/treatments" element={<Navigate to="/services" replace />} />
            <Route path="/rfMicroNeedling" element={<Navigate to="/services/shower-remodeling" replace />} />
            <Route path="/resurfacingTreatment" element={<Navigate to="/services/bathtub-replacement" replace />} />
            <Route path="/nanoneedling" element={<Navigate to="/services/bathroom-upgrades" replace />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

