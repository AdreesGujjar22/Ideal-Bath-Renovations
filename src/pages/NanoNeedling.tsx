import React from "react";
import Header from "../components/NanoNeedling/Header";
import CareCycle from "../components/NanoNeedling/CareCycle";
import About from "../components/NanoNeedling/About";
import FAQs from "../components/NanoNeedling/FAQs";
import PrimaryBookCard from "../components/UI/PrimaryBookCard";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { Accessibility } from "lucide-react";

const NanoNeedling: React.FC = () => {
  return (
    <>
      <SEO
        title="ADA Accessible & Barrier-Free Bathrooms Langley | Ideal Bath Renovations"
        description="Certified aging-in-place and ADA barrier-free bathroom remodeling in Langley, BC. Zero-threshold curbless showers, grab bar reinforcement, and comfort-height fixtures."
        canonical="https://www.idealbathrenovations.ca/services/bathroom-upgrades"
        keywords="ADA Accessible Bathroom, Barrier Free Shower, Wheelchair Accessible Bathroom Langley, Aging in Place Renovations BC"
      />
      <Breadcrumbs
        items={[
          { label: "Services", path: "/services" },
          { label: "ADA Accessibility", path: "/services/bathroom-upgrades", icon: <Accessibility size={14} color="#c29b38" /> },
        ]}
        badge="Zero-Threshold Safety"
      />
      <Header />
      <CareCycle />
      <About />
      <FAQs />
      <PrimaryBookCard />
    </>
  );
};

export default NanoNeedling;
