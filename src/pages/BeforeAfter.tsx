import React from "react";
import MainComp from "../components/BeforeAfter/MainComp";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { Image as ImageIcon } from "lucide-react";

const BeforeAfter: React.FC = () => {
  return (
    <>
      <SEO
        title="Before & After Bathroom Remodeling Gallery | Langley, BC"
        description="Browse real bathroom remodeling before and after photos in Langley Twp, Surrey, and Fraser Valley. Master ensuites, tub-to-shower conversions, and custom tile showers."
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