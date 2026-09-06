import React from "react";
import Header from "../components/Treatments/Header";
import Menu from "../components/Treatments/Menu";
import Banner from "../components/Treatments/Banner";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { Wrench } from "lucide-react";

const Treatments: React.FC = () => {
  return (
    <>
      <SEO
        title="Bathroom Remodeling Services & Packages | Langley, BC"
        description="Comprehensive bathroom renovation services in Langley: full master ensuites, tub replacements, walk-in tile showers, vanity installs, and heated floors."
        canonical="https://idealbathrenovations.ca/treatments"
        keywords="Bathroom Remodeling Services, Bathroom Renovation Packages, Langley BC, Shower Remodel, Vanity Installation, Tile Waterproofing"
      />
      <Breadcrumbs
        items={[
          { label: "Services Catalog", path: "/treatments", icon: <Wrench size={14} color="#c29b38" /> },
        ]}
        badge="19 Specialized Services"
      />
      <Header />
      <Menu />
      <Banner />
    </>
  );
};

export default Treatments;
