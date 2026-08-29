import React from "react";
import ReferralCard from "../UI/RefferalCard";

const Header: React.FC = () => (
  <ReferralCard
    img="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    title="Tub-to-Shower Conversions Langley"
    content1="What is a Tub-to-Shower Conversion and how do we do it?"
    content2="We remove your outdated, high-walled bathtub and replace it with an expansive, low-threshold walk-in shower featuring custom porcelain or natural stone tile, 10mm tempered frameless glass, built-in recessed niches, and rain showerheads."
    content3={[
      "✔ 100% Schluter® KERDI waterproof substrate",
      "✔ Fast 3 to 5-day turnaround with minimal home disruption",
      "✔ Custom linear drains, quartz threshold sills, and floating benches",
    ]}
    content4={[
      "Starting from $6,500 CAD (Complete Materials & Labor)",
      "Includes 5-Year Workmanship Warranty & Permits",
    ]}
  />
);

export default Header;
