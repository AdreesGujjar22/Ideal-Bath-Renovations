import React from "react";
import Header from "../components/Home/Header";
import Services from "../components/Home/Services";
import ServiceAreas from "../components/Home/ServiceAreas";
import FAQSection from "../components/Home/FAQSection";
import CTAQuoteSection from "../components/Home/CTAQuoteSection";
import SEO from "../components/SEO";
import { homeSeo, SITE_URL } from "../data/SeoContent";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title={homeSeo.metaTitle}
        description={homeSeo.metaDescription}
        canonical={`${SITE_URL}/`}
        keywords="bathroom remodeler Langley BC, bathroom renovation Langley, walk-in shower Langley BC, tub-to-shower conversion Langley, bathroom contractor Fraser Valley"
      />
      <Header />
      <Services />
      <ServiceAreas />
      <FAQSection />
      <CTAQuoteSection />
    </>
  );
};

export default Home;
