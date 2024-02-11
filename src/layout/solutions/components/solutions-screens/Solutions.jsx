import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Main4 from "../../../../assests/main4.png";
import BGPIC2 from "../../../../assests/bg2.png";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div
      style={{
        width:'100%',
        flex: 1,
        background: `url(${BGPIC2}) no-repeat left`,
      }}
    >
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
            py: {xs:'20px'}
          }}
        >
          <Box className='item-center' sx={{ ml: {md:"30px"} }}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "600",
                fontFamily: "Red Hat Display",
                color: "#697AE2",
                mb: 2,
              }}
            >
              Solutions
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Red Hat Display",
                fontWeight: "400",
                color: "#565666",
                width: "100%",
                mb: 3,
              }}
            >
              Empower your workers at every site to inspect in minutes, collect
              consistent data, standardize procedures, send reports, identify
              failed areas and get problems resolved. Compliance Sheet provides
              visibility and insights to help raise safety and quality standards
              across each construction site.
            </Typography>
            <Link Link to="/book-a-demo">
            <Button
              sx={{
                padding: "15px 25px",
                background: "#697AE2",
                fontWeight: "500",
                textTransform: "none",
                color: "#fff",
                "&:hover": {
                  background: "#5567d4",
                },
              }}
            >
              Book a Demo
            </Button>
            </Link>
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
            justifyContent: "center",
            alignItems: "center",
            pl: 25,
          }}
        >
          <img src={Main4} alt="Main" className={`hide-on-xs hide-on-sm-md`}  style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Solutions;
