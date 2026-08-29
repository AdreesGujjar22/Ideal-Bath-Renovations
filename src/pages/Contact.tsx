import React from 'react'
import Header from "../components/Contact/Header";
import ContactUs from "../components/Contact/ContactUs";
import ImageBanner from "../components/Contact/ImageBanner";

const Contact: React.FC = () => {
    return (
        <>
            <Header />
            <ContactUs />
            <ImageBanner />
        </>
    )
}

export default Contact