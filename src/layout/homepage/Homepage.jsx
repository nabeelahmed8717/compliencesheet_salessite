import React from "react";
import Firstpart from "./body/Firstpart";
import Secondpart from "./body/Secondpart";
import Thirdpart from "./body/Thirdpart";
import Forthpart from "./body/Forthpart";
import Fifthpart from "./body/Fifthpart";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import ScrollToTop from "../../hooks/ScrollToTop";

const Homepage = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Firstpart />
      <Secondpart />
      <Thirdpart />
      <Forthpart />
      <Fifthpart />
      {/* <SixthPart/> */}
      <Footer />
    </>
  );
};

export default Homepage;
