import React from "react";
import MainBG from "../../assests/main-bg.png";
import { Container, Grid } from "@mui/material";
import Logo from "../../assests/logo.svg";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${MainBG})`,
        }}
      >
        <Container>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            gap={{md:10, xs:7}}
            height={'100vh'}
            sx={{pt:'20px'}}
          >
            <Grid
              item
              md={4}
              sx={{
                display: "flex",
                justifyContent: { md: "flex-end", xs: "center" },
                mb: { md: "80px" },
                width:{md:'443px'}, 
                height:{md:'137px'},
              }}
            >
              <img src={Logo} alt="Logo" />
            </Grid>
            <Grid item md={6.5} xs={12}>
              <SignInForm />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SignIn;
