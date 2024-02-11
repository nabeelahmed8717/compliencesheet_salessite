import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Thirdpart = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#E1E4F9",
      }}
    >
      <Box className={`item-center font-size-on-small-40px`}
        sx={{
          textAlign: "center",
          width: "48%",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            fontFamily: "Red Hat Display",
            color: "#565666",
            py: '30px'
          }}
        >
          Join the thousands who use Compliance sheet everyday. See how we’re
          changing the way the world learns at work
        </Typography>
        <Link Link to="/sign-up" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              marginTop: "20px",
              padding: "15px 30px",
              background: "#697AE2",
              fontWeight: "500",
              textTransform: "none",
              color: "#fff",
              "&:hover": {
                background: "#5567d4",
              },
            }}
          >
            Sign Up for free
          </Button>
        </Link>
        <Typography
          sx={{
            color: "#565666",
            fontSize: "18px",
            fontFamily: "Red Hat Display",
            m: "10px",
          }}
        >
          Or
        </Typography>
        <Grid container sx={{ justifyContent: 'center', marginBottom: '20px' }}>
          <Grid item style={{ color: '#697AE2', marginRight: '5px', fontFamily: "Red Hat Display", fontSize: { sm: '16px', xs: '14px' }, cursor:'pointer' }}><Link Link to="/book-a-demo" style={{ textDecoration: "none", color: '#697AE2' }}>Book a Demo</Link></Grid>
          <Grid item style={{ fontFamily: "Red Hat Display", fontSize: { sm: '16px', xs: '14px' } }}>With us Today</Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Thirdpart;
