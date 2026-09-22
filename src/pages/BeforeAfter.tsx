import React from "react";
import MainComp from "../components/BeforeAfter/MainComp";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import { Image as ImageIcon } from "lucide-react";

const BeforeAfter: React.FC = () => {
  return (
    <>
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
