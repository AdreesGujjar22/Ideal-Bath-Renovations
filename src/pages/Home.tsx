import React from "react";
import Header from "../components/Home/Header";
import Services from "../components/Home/Services";
import ProcessSection from "../components/Home/ProcessSection";
import FeaturedTestimonial from "../components/Home/FeaturedTestimonial";
import ServiceAreas from "../components/Home/ServiceAreas";
import FAQSection from "../components/Home/FAQSection";
import CTAQuoteSection from "../components/Home/CTAQuoteSection";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Bathroom Remodeler & Renovation Contractor in Langley, BC | Ideal Bath Renovations"
        description="Ideal Bath Renovations is a Langley BC bathroom remodeler serving Langley Township, Surrey, Abbotsford and the Fraser Valley with full renovations, showers and tub conversions."
        canonical="https://idealbathrenovations.ca/"
        keywords="bathroom remodeler Langley BC, bathroom renovation Langley Township, bathroom contractor Fraser Valley, walk-in shower Langley, tub-to-shower conversion Langley"
      />
      <Header />
      <Services />
      <ProcessSection />
      <FeaturedTestimonial />
      <ServiceAreas />
      <FAQSection />
      <CTAQuoteSection />
    </>
  );
};

export default Home;
