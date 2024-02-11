import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import PricingTable from "../../../components/custom-table/PricingTable";

const data3 = [
  {
    id: "1",
    name: "Create, assign and track actions and tasks",
    checkOne: true,
    checkTwo: true,
    image: "",
    image2: "",
    isText: false,
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "2",
    name: "Report, track and resolve issues and incidents",
    checkOne: true,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "3",
    name: "Enhance communication and engagement through text, photo, and video messages",
    checkOne: true,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "4",
    name: "Manage assets with complete digital register",
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
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
  {
    id: "6",
    name: "Pinpoint areas for improvement with Analytics",
    checkOne: false,
    checkTwo: true,
    image: "",
    image2: "",
    isIcon1: true,
    isIcon2: true
  },
];

const PricingFifthS = () => {
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
            Raise your operational standards
          </Typography>
        </Box>
      </div>
      <PricingTable data={data3} />
    </>
  );
};

export default PricingFifthS;
