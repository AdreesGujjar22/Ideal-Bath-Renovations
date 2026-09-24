import React from "react";
import Feedback from "../components/Home/Feedback";
import SEO from "../components/SEO";
import PrimaryBanner from "../components/UI/PrimaryBanner";

const Reviews: React.FC = () => {
  return (
    <>
      <SEO
        title="Bathroom Reviews in Langley, BC - Ideal Bath Renovations"
        description="Bathroom remodeling reviews in Langley, BC show careful workmanship, clear quotes, and quality finishes. - Ideal Bath Renovations"
        canonical="https://www.idealbathrenovations.ca/reviews"
      />
      <PrimaryBanner
        img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
        primaryContent="What Langley Homeowners Say About Our Work"
        secondaryContent="Read what homeowners in Langley Twp and the Fraser Valley say about their bathroom projects."
        bannerHeight={380}
        fontsize={42}
        fontsizeSecondary={16}
        btn={false}
      />
      <Feedback />
    </>
  );
};

export default Reviews;
