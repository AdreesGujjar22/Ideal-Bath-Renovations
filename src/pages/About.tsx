import React from "react";
import Header from "../components/About/Header";
import SubHeader from "../components/About/SubHeader";
import ImgBanner from "../components/About/ImgBanner";
import Banner from "../components/About/Banner";
import Footer from "../components/About/Footer";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import { Info } from "lucide-react";

const About: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "About Us", path: "/about", icon: <Info size={14} color="#c29b38" /> },
        ]}
        badge="Established Langley Contractor"
      />
      <Header />
      <SubHeader />
      <ImgBanner />
      <Banner />
      <Footer />
    </>
  );
};

export default About;
