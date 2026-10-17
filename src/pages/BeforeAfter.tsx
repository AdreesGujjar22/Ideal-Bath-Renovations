import React from "react";
import MainComp from "../components/BeforeAfter/MainComp";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { Image as ImageIcon } from "lucide-react";

const BeforeAfter: React.FC = () => {
  return (
    <>
      <SEO
        title="Bathroom Remodel Photos Langley, BC | Ideal Bath Renovations"
        description="See before and after bathroom remodel photos in Langley, BC from Ideal Bath Renovations, including shower conversions, tile work, and custom vanities."
        canonical="https://www.idealbathrenovations.ca/before-after"
        keywords="Bathroom Before and After, Bathroom Remodel Photos Langley, Ensuite Transformations Fraser Valley BC"
      />
      <Breadcrumbs
        items={[
          { label: "Before & After Gallery", path: "/before-after", icon: <ImageIcon size={14} color="#c29b38" /> },
        ]}
        badge="Real Local Projects"
      />
      <MainComp />
    </>
  );
};

export default BeforeAfter;
