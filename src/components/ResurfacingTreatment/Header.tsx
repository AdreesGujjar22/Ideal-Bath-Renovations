import React from "react";
import ReferralCard from "../UI/RefferalCard";

const Header: React.FC = () => (
  <ReferralCard
    img="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
    title="Walk-In & Steam Showers Langley"
    content1="What is a Curbless Walk-In & Steam Shower System?"
    content2="A seamless, luxury architectural wet room featuring a flush zero-step entry, continuous large-format porcelain tile, integrated aroma steam generators, chromotherapy mood lighting, and frameless ceiling-height glass enclosures."
    content3={[
      "✔ 100% Barrier-free zero threshold curbless entry",
      "✔ Integrated steam generators (Thermasol, Kohler, Steamist)",
      "✔ Full vapor-sealed ceiling & dual linear drainage",
    ]}
    content4={[
      "From $8,500 CAD (Custom Walk-In Showers)",
      "From $14,000 CAD (Full Steam Shower & Sauna System)",
    ]}
  />
);

export default Header;
