import React from "react";
import Feedback from "../components/Home/Feedback";
import SEO from "../components/SEO";
import PrimaryBanner from "../components/UI/PrimaryBanner";

const Reviews: React.FC = () => {
  return (
    <>
      <SEO
        title="Client Reviews & Testimonials | Ideal Bath Renovations"
        description="Read verified reviews from homeowners in Langley Twp, Surrey, Abbotsford, and the Fraser Valley who remodeled their bathrooms with Ideal Bath Renovations."
        canonical="https://idealbathrenovations.ca/reviews"
      />
      <PrimaryBanner
        img="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
        primaryContent="Client Reviews"
        secondaryContent="See what local homeowners across Langley Twp and the Fraser Valley have to say about our bathroom renovations."
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
