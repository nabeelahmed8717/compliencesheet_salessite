import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import PricingTable from "../../../components/custom-table/PricingTable";

const data1 = [
  {
    id: "1",
    name: "Team size",
    checkOne: true,
    checkTwo: false,
    Text: "Up to 10",
    Text2: "Unlimited",
    isText: true,
    isIcon1: false,
    isIcon1: false
  },
  {
    id: "2",
    name: "Manage teams across groups & sites",
    checkOne: true,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "3",
    name: "Unlimited free guest seats for casual users, contractors, and suppliers",
    checkOne: false,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "4",
    name: "Advanced permissions & access management",
    checkOne: false,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "5",
    name: "Access SafetyCulture securely via Single sign-on (SSO)",
    checkOne: false,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
];

const PricingThirdS = () => {
  return (
    <>
    <section id="featurelist">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 20px 0 20px",
        }}
      >
        <Grid
          container
          sx={{
            width: { xl: "43%", lg: "44%", xs: "53%" },
            px: "20px",
            py: "8px",
            justifyContent: "space-between",
            background: "#697AE2",
            color: "#fff",
            borderRadius: "4px",
          }}
        >
          <Grid
            item
            sx={{
              fontSize: { md: "20px", xs: "16px" },
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              ml: { xl: "30px", lg: "30px", md: "25px" },
            }}
          >
            Free
          </Grid>
          <Grid
            item
            sx={{
              fontSize: { md: "20px", xs: "16px" },
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              mr: { xl: "20px", lg: "25px", xs: "0" },
            }}
          >
            Premium
          </Grid>
        </Grid>
      </div>
      <div style={{ padding: "0 20px 0 20px" }}>
        <Box
          sx={{
            px: "20px",
            py: "8px",
            display: "flex",
            justifyContent: "space-between",
            background: "#F0F2FC",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "16px", xs: "14px" },
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              ml: "4px",
            }}
          >
            Ready to be shared with your team
          </Typography>
        </Box>
      </div>
      <PricingTable data={data1} />
      </section>
    </>
  );
};

export default PricingThirdS;
