import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Homepage from "./layout/homepage/Homepage";
import SolutionBody from "./layout/solutions/components/body";
import PricingBody from "./layout/pricing/components/PricingBody";
import ProductBody from "./layout/product/ProductBody";
import Careers from "./layout/careerpage/Careers";
import Body from "./layout/contact-us/Body";
import SignIn from "./layout/sign-in/SignIn";
import SignUp from "./layout/sign-up/SignUp";
import BookDemo from "./layout/book-a-demo/BookDemo";
import EmailForm from "./layout/forgot-password/email-screen/EmailForm";
import NewPassword from "./layout/forgot-password/new-password/NewPassword";
import DataPolicy from "./layout/data-policy/DataPolicy";
import PrivacyPolicy from "./layout/privacy-policy/PrivacyPolicy";
import CookiesPolicy from "./layout/cookies-policy/CookiesPolicy";
import UnderConstruction from "./layout/under-construction/UnderConstruction";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

const authPages = ["/sign-in", "/sign-up"];
function App() {
  const token = localStorage.getItem("username");
  const [isSuccess, setIsSuccess] = useState(true);
  const navigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    const checkToken = async () => {
      if (token && authPages.includes(window.location.pathname)) {
        navigate("/under-construction");
      } else {
         setIsSuccess(false);
      }
    };

    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
   if (isSuccess) {
     return (
       <Box
         sx={{
           textAlign: "center",
           margin: "auto",
           backgroundColor: "common.white",
           minHeight: "100vh",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
         }}
       >
         <ClipLoader color="#698ee9" size={150} />
       </Box>
     );
   }
  return (
    <React.Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductBody />} />
        <Route path="/solution" element={<SolutionBody />} />
        <Route path="/pricing" element={<PricingBody />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/contact-us" element={<Body />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/forgot-password" element={<EmailForm />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/data-policy" element={<DataPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
