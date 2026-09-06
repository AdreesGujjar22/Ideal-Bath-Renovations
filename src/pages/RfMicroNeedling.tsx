import React from "react";
import Header from "../components/RfMicroNeedling/Header";
import SubHeader from "../components/RfMicroNeedling/SubHeader";
import CareCycle from "../components/RfMicroNeedling/CareCycle";
import Features from "../components/RfMicroNeedling/Features";
import FAQs from "../components/RfMicroNeedling/FAQs";
import ImgBanner from "../components/RfMicroNeedling/ImgBanner";
import PrimaryBookCard from "../components/UI/PrimaryBookCard";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { ShowerHead } from "lucide-react";

const RfMicroNeedling: React.FC = () => {
  return (
    <>
      <SEO
        title="Tub-to-Shower Conversions Langley | Ideal Bath Renovations"
        description="Convert your old bathtub into a modern walk-in tile shower. Fast turnaround, 100% Schluter waterproofing, heavy frameless glass, and lifetime protection in Langley, BC."
        canonical="https://idealbathrenovations.ca/rfMicroNeedling"
        keywords="Tub to Shower Conversion, Bathtub Replacement, Walk In Tile Shower, Schluter Waterproofing Langley BC"
      />
      <Breadcrumbs
        items={[
          { label: "Services", path: "/treatments" },
          { label: "Tub-to-Shower Conversions", path: "/rfMicroNeedling", icon: <ShowerHead size={14} color="#c29b38" /> },
        ]}
        badge="Completed in 5-7 Days"
      />
      <Header />
      <SubHeader />
      <CareCycle />
      <Features />
      <FAQs />
      <ImgBanner />
      <PrimaryBookCard />
    </>
  );
};

export default RfMicroNeedling;
