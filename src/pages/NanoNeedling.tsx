import React from 'react'
import Header from "../components/NanoNeedling/Header";
import CareCycle from "../components/NanoNeedling/CareCycle";
import About from "../components/NanoNeedling/About";
import FAQs from "../components/NanoNeedling/FAQs";
import PrimaryBookCard from "../components/UI/PrimaryBookCard";

const NanoNeedling: React.FC = () => {
    return (
        <>
            <Header />
            <CareCycle />
            <About />
            <FAQs />
            <PrimaryBookCard />
        </>
    )
}

export default NanoNeedling