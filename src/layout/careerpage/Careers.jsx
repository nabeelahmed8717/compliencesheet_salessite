import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import CareerBody from "./careerbody/Body";
import ScrollToTop from "../../hooks/ScrollToTop";

const Careers = () => {
  return (
    <>
      <ScrollToTop />          
      <NavBar />
      <CareerBody />
      <Footer />
    </>
  );
};

export default Careers;
