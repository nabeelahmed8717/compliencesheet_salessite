import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const PricingSecondS = () => {
  return (
    <>
        <Grid container justifyContent={'center'}
          sx={{
            py: "50px",
          }}
        >
          <Typography
            className={`item-center font-size-on-small-40px`}
            sx={{
              width: {xl:"60%", lg:'60%', xs:'90%'},
              fontSize: "48px",
              fontWeight: "700",
              fontFamily: "Red Hat Display",
              textAlign: "center",
              color: " #565666",
            }}
          >
            214% ROI with Compliance Sheet
          </Typography>
          <Typography
            className={`item-center`}
            sx={{
              width: {xl:"60%", lg:'60%', xs:'90%'},
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              mt: "10px",
              color: " #565666",
              textAlign: "center",
              py: {xl:"40px", lg:'40px'},
            }}
          >
            We partnered with international research firm Forrester to measure
            the total impact of Compliance Sheet’s Operations Platform. Learn
            more about all the continuous improvement gains waiting for you and
            calculate your potential ROI
          </Typography>
          <Typography sx={{ textAlign: "center", mt: "30px", width: {xl:"60%", lg:'60%', xs:'90%'}, }}>
          <Link Link to="/sign-up">
            <Button
              sx={{
                padding: "10px 20px",
                background: "#697AE2",
                fontWeight: "500",
                textTransform: "none",
                color: "#fff",
                "&:hover": {
                  background: "#5567d4",
                },
              }}
            >
              Get started for free
            </Button>
            </Link>
          </Typography>
        </Grid>
      <div
        className="sec-section-text-p"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container justifyContent={'center'}
          sx={{
            py: "50px",
          }}
        >
          <Typography
            className={`item-center font-size-on-small`}
            sx={{
              width: {xl:"60%", lg:'60%', xs:'90%'},
              fontSize: "48px",
              fontWeight: "700",
              fontFamily: "Red Hat Display",
              textAlign: "center",
              color: " #565666",
              py:'10px'
            }}
          >
            Pricing Plan Comparison
          </Typography>
          <Typography
            className={`item-center font-size-on-small-40px`}
            sx={{
              width: {xl:"60%", lg:'60%', xs:'90%'},
              fontSize: "32px",
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              textAlign: "center",
              color: " #565666",
              py:'20px',
            }}
          >
            Find the right choice for your team.
          </Typography>
        </Grid>
        </div>
    </>
  );
};

export default PricingSecondS;
