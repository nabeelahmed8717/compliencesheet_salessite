import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Main5 from "../../../assests/main5.jpg";
import { Link } from "react-router-dom";

const Product1 = () => {
  return (
    <Grid container sx={{mt:'6rem'}}>
      <Grid
        item
        xl={4.5}
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
        <Box className="item-center" sx={{ ml: {md:"30px"}, mt:{md:'5rem'} }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              color: "#697AE2",
              mb: 2,
            }}
          >
            Product Vision for Sales Site
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
            Compliance Sheet is an inspection, issue capture and corrective
            action platform for teams
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
            Application that allows you to digitize all the elements of your
            operations
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
            As an inspection management software, Compliance Sheet lets your
            team capture consistent data, identify areas of improvement, share
            reports and collaborate across working teams – all from one
            easy-to-use app.
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
        xl={7.5}
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
        <img
          src={Main5}
          alt="Main"
          className={`hide-on-xs hide-on-sm-md`}
          style={{ maxWidth: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Product1;
