import React from "react";
import Header from "../components/Home/Header";
import Review from "../components/Home/Review";
import Services from "../components/Home/Services";
import FeedbackBanner from "../components/Home/FeedbackBanner";
import Feedback from "../components/Home/Feedback";
import Feeback2nd from "../components/Home/Feeback2nd";
import ReferralCard from "../components/Home/ReferralCard";
import PatientNameForm from "../components/Home/PatientNameForm";
import InfoImages from "../components/Home/InfoImages";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Review />
      <Services />
      <FeedbackBanner />
      <Feedback />
      <Feeback2nd />
      <ReferralCard />
      <PatientNameForm />
      <InfoImages />
    </>
  );
};

export default Home;
