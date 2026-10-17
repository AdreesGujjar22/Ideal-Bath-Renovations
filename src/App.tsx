import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import PageLoader from "./components/PageLoader";
import PageWrapper from "./components/PageWrapper";
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

const LegacyServiceAreaRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getServiceAreaBySlug(slug) : undefined;
  return <Navigate to={area ? getServiceAreaPath(area) : "/service-areas"} replace />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <main>
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
              <Route path="/blog" element={<PageWrapper title="Blog"><Blog /></PageWrapper>} />
              <Route path="/blog/:slug" element={<PageWrapper title="Blog Article"><BlogPost /></PageWrapper>} />
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
              <Route path="/bathroom-renovations-langley" element={<Navigate to="/bathroom-remodeling-langley" replace />} />
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
