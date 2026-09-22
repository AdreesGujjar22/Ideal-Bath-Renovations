import React from "react";
import MainComp from "../components/BeforeAfter/MainComp";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { Image as ImageIcon } from "lucide-react";

const BeforeAfter: React.FC = () => {
  return (
    <>
      <SEO
        title="Before & After Bathroom Photos | Ideal Bath Renovations"
        description="See real before-and-after bathroom transformations from Ideal Bath Renovations in Langley, BC. Browse our gallery of completed renovation projects."
        canonical="https://idealbathrenovations.ca/before-after"
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
