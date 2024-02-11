import { Box, Typography, } from "@mui/material";
import React from "react";
import PricingTable from "../../../components/custom-table/PricingTable";

const data2 = [
  {
    id: "1",
    name: "Drive improvement from the palm of your hand with the Compliance Sheet mobile app",
    checkOne: true,
    checkTwo: true,
    Text: "Up to 10",
    Text2: "Unlimited",
    isText: true
  },
  {
    id: "2",
    name: "Access to +130K free inspection templates",
    checkOne: true,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "3",
    name: "Edit or create your own inspections, audits or checklists",
    checkOne: true,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "4",
    name: "Conduct and schedule paperless inspections",
    checkOne: true,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "5",
    name: "Export inspection reports",
    checkOne: true,
    checkTwo: true,
    Text: "PDF, Web reports",
    Text2: "PDF, Word, Excel & web reports",
    isText: true
  },
  {
    id: "6",
    name: "Customize report cover pages",
    checkOne: false,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
];

const PricingForthS = () => {
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
            Go digital and automate
          </Typography>
        </Box>
      </div>
      <PricingTable data={data2} />
    </>
  );
};

export default PricingForthS;
