import React from "react";
import Header from "../components/Home/Header";
import Review from "../components/Home/Review";
import Services from "../components/Home/Services";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ProcessSection from "../components/Home/ProcessSection";
import InfoImages from "../components/Home/InfoImages";
import Feedback from "../components/Home/Feedback";
import ReferralCard from "../components/Home/ReferralCard";
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
        canonical="https://idealbathrenovations.ca/"
        keywords="bathroom remodeling Langley, bathroom renovation Langley Twp, tub-to-shower conversion, curbless walk-in shower, bathroom contractor Fraser Valley, bathroom tile installation, custom bathroom vanities"
      />
      <Header />
      <Review />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <InfoImages />
      <Feedback />
      <ReferralCard />
      <ServiceAreas />
      <FAQSection />
      <CTAQuoteSection />
    </>
  );
};

export default Home;

