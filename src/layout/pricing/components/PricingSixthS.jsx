import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import PricingTable from "../../../components/custom-table/PricingTable";

const data4 = [
  {
    id: "1",
    name: "Self-serve support via help center",
    checkOne: true,
    checkTwo: true,
    Text: "Up to 10",
    Text2: "Unlimited",
    isText: true,
  },
  {
    id: "2",
    name: "Contact our support team via phone & email",
    checkOne: true,
    checkTwo: true,
    Text: "24/5",
    Text2: "24/5",
    isText: true
  },
  {
    id: "3",
    name: "Ongoing customer success services",
    checkOne: true,
    checkTwo: true,
    Text2: "Contact sales",
    image: "",
    image2:"",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "4",
    name: "Edit or create your own inspections, audits or checklists",
    checkOne: false,
    checkTwo: false,
    Text2:'Contact sales',
    image1: "",
    isIcon1: true,
    isIcon2: false,
  },
  {
    id: "5",
    name: "Contact our support team via phone & email",
    checkOne: false,
    checkTwo: false,
    Text2:'Contact sales',
    image: "",
    isIcon1: true,
    isIcon2: false
  },
];

const PricingSixthS = () => {
  return (
    <>
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
              fontSize: {md:"16px",xs:'14px'},
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              ml: "4px",
              color:'#565666'
            }}
          >
            Unparalleled support every step of the way
          </Typography>
        </Box>
      </div>
      <PricingTable data={data4} />
      <div style={{display:'flex', justifyContent:'flex-end'}}>
      <Grid
          container
          sx={{
            width: { xl: "45%", lg: "46%", md:'57%', xs: "49%", },
            px: "20px",
            py: "8px",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item 
            sx={{
              ml: { xl: "30px", lg: "30px", md: "25px", },
              mb:'5px'
            }}
          >
            <Button
              sx={{
                padding: {lg:"10px 20px", md:'10px 15px', xs:'8px 8px'},
                border: "1px solid #697AE2",
                fontWeight: "500",
                color: "#697AE2",
                textTransform: "none",
                mr: {md:"15px", xs:'0'},
                "&:hover": {
                  border: "2px solid #697AE2",
                },
              }}
            >
              Try it for Free
            </Button>
          </Grid>
          <Grid sx={{mt: {md:"0", xs:'15px'},}} 
            item>
            <Button
            sx={{
              padding: {lg:"10px 20px", md:'10px 15px', xs:'10px 10px'},
              background: "#697AE2",
              fontWeight: "500",
              textTransform: "none",
              color: "#fff",
              "&:hover": {
                background: "#5567d4",
              },
            }}
          >
            Start your 30 Day free Trial
          </Button>
          </Grid>
        </Grid>
          </div>
    </>
  );
};

export default PricingSixthS;
