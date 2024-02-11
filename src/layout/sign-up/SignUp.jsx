import React from "react";
import MainBG from "../../assests/main-bg.png";
import { Box, Container, Grid } from "@mui/material";
import Logo from "../../assests/logo.svg";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: {md:"100vh", xs:'120vh'},
          backgroundImage: `url(${MainBG})`,
        }}
      >
        <Container>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            gap={{md:10, xs:7}}
            height={{md:'100vh', xs:'120vh'}}
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
              <SignUpForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
