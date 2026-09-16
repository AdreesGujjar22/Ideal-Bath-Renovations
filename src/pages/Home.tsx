import React from "react";
import Header from "../components/Home/Header";
import Services from "../components/Home/Services";
import ProcessSection from "../components/Home/ProcessSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FeaturedTestimonial from "../components/Home/FeaturedTestimonial";
import ServiceAreas from "../components/Home/ServiceAreas";
import FAQSection from "../components/Home/FAQSection";
import CTAQuoteSection from "../components/Home/CTAQuoteSection";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Bathroom Renovation Langley Twp | Ideal Bath Renovations"
        description="Reliable bathroom renovation services in Langley Twp. From walk-in showers to complete remodels, we build it right. Contact us for a free in-home quote."
        canonical="https://idealbathrenovations.ca/"
        keywords="bathroom renovation Langley Twp, bathroom remodeler Langley BC, tub to shower conversion Langley, walk in shower Langley, bathroom contractor Fraser Valley"
      />
      <Header />
      <Services />
      <ProcessSection />
      <WhyChooseUs />
      <FeaturedTestimonial />
      <ServiceAreas />
      <FAQSection />
      <CTAQuoteSection />
    </>
  );
};

export default Home;

