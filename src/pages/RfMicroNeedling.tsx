import React from 'react'
import Header from "../components/RfMicroNeedling/Header";
import SubHeader from "../components/RfMicroNeedling/SubHeader";
import CareCycle from "../components/RfMicroNeedling/CareCycle";
import Features from "../components/RfMicroNeedling/Features";
import FAQs from "../components/RfMicroNeedling/FAQs";
import ImgBanner from "../components/RfMicroNeedling/ImgBanner";
import PrimaryBookCard from "../components/UI/PrimaryBookCard";
const RfMicroNeedling: React.FC = () => {
    return (
        <>
            <Header />
            <SubHeader />
            <CareCycle />
            <Features />
            <FAQs />
            <ImgBanner />
            <PrimaryBookCard />
        </>
    )
}

export default RfMicroNeedling
