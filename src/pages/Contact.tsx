import React from "react";
import Header from "../components/Contact/Header";
import ContactUs from "../components/Contact/ContactUs";
import ImageBanner from "../components/Contact/ImageBanner";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import SEO from "../components/SEO";
import { Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us in Langley, BC - Ideal Bath Renovations"
        description="Contact Ideal Bath Renovations for bathroom remodeling in Langley, BC, shower conversions, and a free estimate. - Ideal Bath Renovations"
        canonical="https://www.idealbathrenovations.ca/contact"
        keywords="Contact Ideal Bath Renovations, Bathroom Remodel Quote Langley, Bathroom Estimate Fraser Valley BC"
      />
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
