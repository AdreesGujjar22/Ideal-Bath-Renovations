import React from 'react'
import Header from "../components/About/Header";
import SubHeader from "../components/About/SubHeader";
import ImgBanner from "../components/About/ImgBanner";
import Banner from "../components/About/Banner";
import Footer from "../components/About/Footer";

const About: React.FC = () => {
    return (
        <>
            <Header />
            <SubHeader />
            <ImgBanner />
            <Banner />
            <Footer />
        </>
    )
}

export default About