import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../src/styles/theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import RfMicroNeedling from "./pages/RfMicroNeedling";
import ResurfacingTreatment from "./pages/ResurfacingTreatment";
import NanoNeedling from "./pages/NanoNeedling";
import BeforeAfter from "./pages/BeforeAfter";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/treatments" element={<Treatments />}></Route>
          <Route path="/rfMicroNeedling" element={<RfMicroNeedling />}></Route>
          <Route path="/resurfacingTreatment" element={<ResurfacingTreatment />}></Route>
          <Route path="/nanoneedling" element={<NanoNeedling />}></Route>
          <Route path="/before&After" element={<BeforeAfter />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
