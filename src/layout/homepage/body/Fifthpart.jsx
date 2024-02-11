import { Grid, Typography,} from "@mui/material";
import React from "react";
import BGPIC2 from "../../../assests/bg2.png";
import Main3 from "../../../assests/main3.png";

const Fifthpart = () => {
  return (
    <div
      style={{
        flex: 1,
        background: `url(${BGPIC2}) no-repeat right`,
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container className={`item-center font-size-on-small-40px`}
          sx={{
            textAlign: "center",
            width: "48%",
            padding: "20px",
            mt:{xl:'50px', lg:'30px'}
          }}
        >
          <Typography 
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              fontFamily: "Red Hat Display",
              color: "#565666",
            }}
          >
            Every step of the training journey, all in one place
          </Typography>
          <Typography
            sx={{
              color: "#565666",
              fontSize: "20px",
              fontFamily: "Red Hat Display",
              mt: "40px",
            }}
          >
            Digital and in person training at last. Assesses and track your
            team’s knowledge at each step of the training process so you can be
            your sure your teams are doing tasks correctly
          </Typography>
          </Grid>
          </div>
          <div className={`fifthpart-img`} style={{display:'flex', justifyContent:'center',marginTop:'8rem' }}>
            <img src={Main3} alt="main3" width={'90%'} />
          </div>
    </div>
  );
};

export default Fifthpart;
