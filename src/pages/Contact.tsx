import React from "react";
import Header from "../components/Contact/Header";
import ContactUs from "../components/Contact/ContactUs";
import ImageBanner from "../components/Contact/ImageBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import { Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Contact & Consultation", path: "/contact", icon: <Mail size={14} color="#c29b38" /> },
        ]}
        badge="Free 3D Design & Fixed Estimate"
      />
      <Header />
      <ContactUs />
      <ImageBanner />
    </>
  );
};

export default Contact;
