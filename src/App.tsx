import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import PageLoader from "./components/PageLoader";
import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all page routes
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ServicesHub = lazy(() => import("./pages/ServicesHub"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ServiceAreasHub = lazy(() => import("./pages/ServiceAreasHub"));
const ServiceAreaDetail = lazy(() => import("./pages/ServiceAreaDetail"));
const BeforeAfter = lazy(() => import("./pages/BeforeAfter"));
const Contact = lazy(() => import("./pages/Contact"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <NavBar />
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
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

