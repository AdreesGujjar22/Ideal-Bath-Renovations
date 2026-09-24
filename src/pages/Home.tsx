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
        title="Bathroom Remodeler in Langley, BC - Ideal Bath Renovations"
        description="Looking for a Bathroom Remodeler in Langley, BC? Ideal Bath Renovations provides quality bath renovations, shower upgrades, and complete bathroom remodeling."
        canonical="https://www.idealbathrenovations.ca/"
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
