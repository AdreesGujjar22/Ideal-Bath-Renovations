import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import React, { Suspense } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { GOOGLE_REVIEWS_URL } from "./data/ReviewsData";
import theme from "./styles/theme";

import PageWrapper from "./components/PageWrapper";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import { getServiceAreaBySlug, getServiceAreaPath, serviceAreasData } from "./data/ServiceAreasData";

const Footer = React.lazy(() => import("./components/Footer"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const ServicesHub = React.lazy(() => import("./pages/ServicesHub"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));
const ServiceAreasHub = React.lazy(() => import("./pages/ServiceAreasHub"));
const ServiceAreaDetail = React.lazy(() => import("./pages/ServiceAreaDetail"));
const BeforeAfter = React.lazy(() => import("./pages/BeforeAfter"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const SitemapPage = React.lazy(() => import("./pages/SitemapPage"));

const FloatingReviewsLink: React.FC = () => (
  <Box
    component="a"
    href={GOOGLE_REVIEWS_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Read Ideal Bath Renovations reviews on Google"
    sx={{
      position: "fixed",
      left: { xs: 12, sm: 16 },
      bottom: { xs: 12, sm: 16 },
      zIndex: 1200,
      display: "inline-flex",
      alignItems: "center",
      gap: 1.2,
      px: { xs: 1.8, sm: 2 },
      py: 1.35,
      borderRadius: "12px",
      backgroundColor: "#fff",
      color: "#202124",
      boxShadow: "0 4px 18px rgba(0,0,0,0.24)",
      fontSize: { xs: "13px", sm: "14px" },
      fontWeight: 600,
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 7px 22px rgba(0,0,0,0.28)",
      },
      "&:focus-visible": { outline: "3px solid #4285f4", outlineOffset: 3 },
    }}
  >
    <span>Read reviews on</span>
    <span aria-hidden="true" style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-1px" }}>
      <span style={{ color: "#4285f4" }}>G</span>
      <span style={{ color: "#ea4335" }}>o</span>
      <span style={{ color: "#fbbc05" }}>o</span>
      <span style={{ color: "#4285f4" }}>g</span>
      <span style={{ color: "#34a853" }}>l</span>
      <span style={{ color: "#ea4335" }}>e</span>
    </span>
  </Box>
);

const LegacyServiceAreaRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getServiceAreaBySlug(slug) : undefined;
  return <Navigate to={area ? getServiceAreaPath(area) : "/service-areas"} replace />;
};

const LegacyBlogRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/blogs/${slug}` : "/blogs"} replace />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <FloatingReviewsLink />
        <main>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader message="Loading page content..." />}>
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
              {serviceAreasData.map((area) => (
                <Route
                  key={area.id}
                  path={getServiceAreaPath(area)}
                  element={
                    <PageWrapper title="Regional Coverage">
                      <ServiceAreaDetail slug={area.slug} />
                    </PageWrapper>
                  }
                />
              ))}
              <Route path="/service-areas/:slug" element={<LegacyServiceAreaRedirect />} />
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
              <Route path="/blogs" element={<PageWrapper title="Blogs"><Blog /></PageWrapper>} />
              <Route path="/blogs/:slug" element={<PageWrapper title="Blog Article"><BlogPost /></PageWrapper>} />
              <Route path="/blog" element={<LegacyBlogRedirect />} />
              <Route path="/blog/:slug" element={<LegacyBlogRedirect />} />
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

              {/* Legacy service-area URLs */}
              <Route path="/bathroom-remodeling-:slug" element={<LegacyServiceAreaRedirect />} />

              {/* SEO Landing Page Slug Aliases */}
              <Route path="/bathroom-renovations-langley" element={<Navigate to="/bathroom-remoder-langley" replace />} />
              <Route path="/tub-to-shower-conversion" element={<Navigate to="/services/shower-remodeling" replace />} />
              <Route path="/walk-in-showers" element={<Navigate to="/services/shower-remodeling" replace />} />
              <Route path="/custom-vanities" element={<Navigate to="/services/bathroom-vanity-installation" replace />} />

              {/* Legacy skin-care routes redirected to modern renovation equivalents */}
              <Route path="/treatments" element={<Navigate to="/services" replace />} />
              <Route path="/rfMicroNeedling" element={<Navigate to="/services/shower-remodeling" replace />} />
              <Route path="/resurfacingTreatment" element={<Navigate to="/services/shower-remodeling" replace />} />
              <Route path="/nanoneedling" element={<Navigate to="/services/bathroom-upgrades" replace />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
