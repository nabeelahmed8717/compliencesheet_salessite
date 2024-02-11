import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import PicGroup from "../../../assests/Group.png";
import Image1 from "../../../assests/Image1.png";
import Image2 from "../../../assests/Image2.png";
import { useEffect, useState } from "react";

const Forthpart = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prevExpanded) => !prevExpanded);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`forth-bg-pic`}
      style={{
        height: "auto",
        flex: 1,
        background: `url(${PicGroup}) no-repeat right`,
        marginTop: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
      </div>
      <Grid container mt={3} sx={{py:'30px'}}>
        <Grid
          item
          xl={6}
          md={6}
          xs={12}
          sm={12}
          mb={5}
          sx={{
            position: "relative",
            height: { xl: "42vh", md: "55vh", xs: "30vh" },
          }}
          className="item-center container-1"
        >
          <div className="child child2">
            <img
              src={Image2}
              alt="Image2"
              className="forth-main-pic forth-main-pic2"
            />
          </div>
          <div className="child bounce" style={{ position: "absolute",}}>
            <img src={Image1} alt="Image1" className="forth-main-pic" />
          </div>
        </Grid>
        <Grid
          item
          xl={5}
          md={5}
          xs={12}
          sm={12}
          sx={{
            marginTop: {xl:"50px", md:'50px'},
            ml: {md:"30px"},
          }}
        >
            <Typography
              className={`item-center font-size-on-small`}
              sx={{
                fontSize: "60px",
                fontWeight: "700",
                fontFamily: "Red Hat Display",
                color:'#565666',
                py:'10px',
                mt:{xs:'70px'}
              }}
            >
              Train & Improve
            </Typography>
              
            <Typography className={`item-center`}
              sx={{
                width: {xl:"80%", lg:'80%', xs:'92%'},
                fontSize: "18",
                fontFamily: "Red Hat Display",
                fontWeight: "400",
                mt: "10px",
                mb: "20px",
                py:'10px',
                color:'#565666',
                mx:{md:'0', xs:'30px'}
              }}
            >
              Compliance sheet app is a mobile training application that
              empowers teams to better themselves through new and exciting
              training, especially for team on the go
            </Typography>
            <Typography
              className={`item-center`}
            >
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
              Find App
            </Button>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Forthpart;
