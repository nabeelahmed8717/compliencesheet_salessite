import { Box, Typography, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import Cards from "../pricing-cards/Cards";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



const PricingFirstS = () => {
  
  const dropdownIconStyle = {
    marginLeft: "5px",
    color:'#697AE2'
  };

  return (
    <div>
      <Typography className={`font-size-on-small item-center`}
        sx={{
          fontSize: "60px",
          fontWeight: "700",
          color: "#565666",
          fontFamily: "Red Hat Display",
          display: "flex",
          justifyContent: "center",
          py: "30px",
          mb:'20px'
        }}
      >
        You + the power of observation at scale
      </Typography>
      <Box
        sx={{
          background: "#F0F2FC",
          borderRadius: "24px",
          mx: {md:"25px",xs:'5px'},
          boxShadow: 'rgba(149, 157, 165, 0.3) 0px 8px 24px',
          px:'10px'
        }}
      >
        <Typography className={`font-size-on-small item-center`}
          sx={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#565666",
            fontFamily: "Red Hat Display",
            display: "flex",
            justifyContent: "center",
            pt:'20px'
          }}
        >
          Our Plans
        </Typography>
        <Typography className={`font-size-on-small-40px item-center`}
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#565666",
            fontFamily: "Red Hat Display",
            display: "flex",
            justifyContent: "center",
          }}
        >
          For teams of any size but with BIG ambitions.
        </Typography>
        <Typography>
          <Cards/>
        </Typography>
        <div
        style={{
          display: "flex",
          justifyContent:'center',
          padding:'30px 0 30px 0',
        }}
        // onClick={openSupportMenu}
      >
        <span style={{fontSize:'18px', fontFamily: "Red Hat Display", color:'#697AE2'}}>Compare featured list</span>
        <a href="#featurelist">
        <ArrowDropDownIcon fontSize="small" sx={{cursor:'pointer'}} style={dropdownIconStyle} />
        </a>
      </div>
      </Box>
    </div>
  );
};

export default PricingFirstS;
