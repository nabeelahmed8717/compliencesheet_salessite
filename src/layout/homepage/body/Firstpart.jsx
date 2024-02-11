import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import Main from "../../../assests/main.png"; 
import { Link } from "react-router-dom";

const Firstpart = () => {
  return (
    <Grid container>
      <Grid
        item
        xl={4} lg={6} md={8} xs={12} 
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", 
          flexDirection: "column", 
          textAlign: "left",
          px: 2,
        }}
      >
        <Box className={`main-first-part-heading`} sx={{ml:'30px'}}>
          <Typography className={`item-center font-size-on-small`}
            sx={{
              width: "82%", 
              fontSize: "60px", 
              fontWeight: "700",
              fontFamily: "Red Hat Display",
              color: "#565666",
              mb: 2,
            }}
          >
            Streamline yourCompliance with ease
          </Typography>
          <Typography className="item-center"
            sx={{
              fontSize: "16px",
              fontFamily: "Red Hat Display",
              fontWeight: "400",
              color: "#565666",
              width: "100%", 
              mb: 3, 
            }}
          >
            Compliance Sheet empowers businesses of all sizes to conduct
            inspections, identify issues, manage tasks, ensure clear
            communication, and provide training to their working teams, thus
            enabling them to efficiently accomplish their job tasks
          </Typography>
          <Typography className="item-center">
          <Link Link to="/sign-up">
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
            Let's Get Started
          </Button>
          </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xl={8} lg={6} md={4} xs={12} 
        sx={{
          display: "flex",
          justifyContent: "center", 
          alignItems: "center",
          px: 2,
        }}
      >
        <img src={Main} alt="Main" className={`hide-on-xs hide-on-sm-md`} style={{ maxWidth: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Firstpart;
