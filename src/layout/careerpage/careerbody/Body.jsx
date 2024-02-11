import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CareerImg from '../../../assests/CareersImg.svg'

const Body = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xl={4}
          lg={6}
          md={8}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "left",
            px: 2,
          }}
        >
          <Box className={`main-first-part-heading`} sx={{ ml: "30px" }}>
            <Typography
              className={`item-center font-size-on-small`}
              sx={{
                fontSize: "60px",
                fontWeight: "700",
                fontFamily: "Red Hat Display",
                color: "#697AE2",
                mb: 2,
              }}
            >
              Career Opening's
            </Typography>
            <Typography
              className={`item-center font-size-on-small`}
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                fontFamily: "Red Hat Display",
                color: "#565666",
                mb: 2,
              }}
            >
              Come Join Us
            </Typography>
            <Typography
              className="item-center"
              sx={{
                fontFamily: "Red Hat Display",
                fontSize: "22px",
                fontWeight: "700",
                color: "#565666",
                width: "100%",
                mb: 3,
              }}
            >
              We’re always looking for creative, talented self-starters to join
              the <b style={{ color: "#697AE2" }}> Compliance Sheet</b> family.
              Check out our open roles below and fill out an application.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xl={8}
          lg={6}
          md={4}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 2,
          }}
        >
          <img src={CareerImg} alt="CareerImg" className={`hide-on-xs hide-on-sm-md`} style={{ maxWidth: "80%" }} />
        </Grid>
      </Grid>
      <Container>
      <Box sx={{
        background:'#F0F2FC',
        p:{md:'50px', xs:'10px'},
        borderRadius:'15px', 
        boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        mb:'40px'
      }}>
        <Typography
          className={`item-center font-size-on-small`}
          sx={{
            fontSize: "48px",
            fontWeight: "700",
            fontFamily: "Red Hat Display",
            color: "#697AE2",
            textAlign: "center",
            pb:'20px'
          }}
        >
          Job Opportunities
        </Typography>
      <Box height={"100%"} width={"100%"} padding={"20px 0"}>
        <Container>
          <iframe
            src="https://jobs.orcaloholding.co.uk/jobs/companies/rZon0zv4KDM7YNAle8pJLNGWgV"
            width="100%"
            height="100%"
            no-border
            title="Jobs Widget"
            scrolling="no"
            style={{ border: "0", minHeight: "105vh", boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius:'8px'}}
          ></iframe>
        </Container>
      </Box>
      </Box>
      </Container>
    </>
  );
};

export default Body;
