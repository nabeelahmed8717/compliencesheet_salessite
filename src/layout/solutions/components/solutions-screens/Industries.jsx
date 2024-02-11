import { Grid, Typography } from "@mui/material";
import React from "react";
import {IndustriesData} from '../../data-solutions-page/SolutionIndustriesData'


const Industries = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: "700",
          fontFamily: "Red Hat Display",
          p: "30px",
          color: "#565666",
        }}
      >
        Industries
      </Typography>
      <Grid container justifyContent={"center"} spacing={4}>
      {IndustriesData.map((item , index) => {
        return (
            <Grid key={index} item xl={3.5} lg={4.5} md={6} xs={12} sm={12}  sx={{mb:'40px'}}>
                <img src={item.image} width={"100%"}  alt="img"/>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  py: "10px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  py: "10px",
                  width: "90%",
                }}
              >
                {item.details}
              </Typography>
            </Grid>
        );
      })}
          </Grid>
    </>
  );
};

export default Industries;
