import React from "react";
import Header from "../components/ResurfacingTreatment/Header";
import CareCycle from "../components/ResurfacingTreatment/CareCycle";
import FAQs from "../components/ResurfacingTreatment/FAQs";
import PrimaryBookCard from "../components/UI/PrimaryBookCard";
import ImgBanner from "../components/ResurfacingTreatment/ImgBanner";
import About from "../components/ResurfacingTreatment/About";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { Bath } from "lucide-react";

const ResurfacingTreatment: React.FC = () => {
  return (
    <>
      <SEO
        title="Walk-In Showers & Custom Steam Suites Langley | Ideal Bath Renovations"
        description="Luxury curbless walk-in showers, custom tile benches, frameless glass, and residential ThermaSol steam generator suites in Langley, BC."
        canonical="https://idealbathrenovations.ca/resurfacingTreatment"
        keywords="Walk In Shower Langley, Steam Shower Installation, Curbless Tile Shower, Luxury Ensuite Steam Suite BC"
      />
      <Breadcrumbs
        items={[
          { label: "Services", path: "/treatments" },
          { label: "Walk-In Showers & Steam", path: "/resurfacingTreatment", icon: <Bath size={14} color="#c29b38" /> },
        ]}
        badge="Luxury Spa Grade"
      />
      <Header />
      <CareCycle />
      <About />
      <FAQs />
      <ImgBanner />
      <PrimaryBookCard />
    </>
  );
};

export default ResurfacingTreatment;