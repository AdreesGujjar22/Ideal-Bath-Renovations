import React from 'react'
import Header from "../components/ResurfacingTreatment/Header";
import CareCycle from "../components/ResurfacingTreatment/CareCycle";
import FAQs from "../components/ResurfacingTreatment/FAQs";
import PrimaryBookCard from "../components/UI/PrimaryBookCard";
import ImgBanner from "../components/ResurfacingTreatment/ImgBanner";
import About from "../components/ResurfacingTreatment/About";

const ResurfacingTreatment: React.FC = () => {
    return (
        <>
            <Header />
            <CareCycle />
            <About />
            <FAQs />
            <ImgBanner />
            <PrimaryBookCard />
        </>
    )
}

export default ResurfacingTreatment