import React from "react";
import Header from "../components/Home/Header";
import Services from "../components/Home/Services";
import ProcessSection from "../components/Home/ProcessSection";
import FeaturedTestimonial from "../components/Home/FeaturedTestimonial";
import ServiceAreas from "../components/Home/ServiceAreas";
import FAQSection from "../components/Home/FAQSection";
import CTAQuoteSection from "../components/Home/CTAQuoteSection";

const Home: React.FC = () => {
  return (
    <>
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
