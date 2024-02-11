import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ContactUs from "./ContactUs";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../hooks/ScrollToTop";

const Body = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Body;
