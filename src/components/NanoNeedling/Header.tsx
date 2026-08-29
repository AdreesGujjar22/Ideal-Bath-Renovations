import React from "react";
import ReferralCard from "../UI/RefferalCard";

const Header: React.FC = () => (
  <ReferralCard
    img="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
    title="ADA & Aging-in-Place Bathrooms Langley"
    content1="Safe, Accessible, and Beautiful Independent Living Renovations"
    content2="We design and build barrier-free bathrooms that blend senior safety with luxury aesthetics. From zero-clearance curbless showers and designer grab bars to comfort-height smart bidets, widen doorways, and anti-scald digital faucets."
    content3={[
      "✔ Zero-threshold roll-in and walk-in showers",
      "✔ Reinforce blocking behind walls for 500lb rated grab bars",
      "✔ BC Home Accessibility Tax Credit (HARS & BC Seniors Grant) eligible",
    ]}
    content4={[
      "Custom Solutions tailored to mobility needs",
      "Fast 3 to 7-day conversion turnaround",
    ]}
  />
);

export default Header;
