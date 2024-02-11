import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography, Grid, Button } from "@mui/material";
import CustomizedSwitche from "../../../components/switch/Switch";
import { values } from "./DataPricing";
import { secondCardData } from "./DataPricing";
import { thirdCardData } from "./DataPricing";

const Cards = () => {
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        mt={{ xl: "8rem", lg: "8rem", md: "7rem", xs: "2rem" }}
      >
        <Grid
          item
          xl={3.7}
          lg={4}
          md={4}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: { xl: "430px", lg: "340px", md: "280px", sm: "448px" },
              background: "#fff",
              borderRadius: "40px",
              border: "1px solid #F0F0F2",
              mb: "10px",
              p: "30px",
            }}
          >
            <Typography
              className={`font-size-on-small`}
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#565666",
                fontFamily: "Red Hat Display",
              }}
            >
              Free
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#565666",
                fontFamily: "Red Hat Display",
                mb: "10px",
              }}
            >
              For individuals or small teams looking to go digital with their
              inspections
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "600",
                color: "#697AE2",
                fontFamily: "Red Hat Display",
                display: "flex",
                alignItems: "center",
              }}
            >
              £0
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#565666",
                  fontFamily: "Red Hat Display",
                  marginLeft: "10px",
                }}
              >
                Upto 5 users
              </span>
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              <Button
                sx={{
                  my: "10px",
                  padding: {
                    xl: "15px 120px",
                    lg: "15px 80px",
                    sm: "15px 120px",
                    xs: "15px 25px",
                  },
                  border: "1px solid #697AE2",
                  fontWeight: "500",
                  color: "#697AE2",
                  textTransform: "none",
                  mr: "15px",
                  "&:hover": {
                    border: "2px solid #697AE2",
                  },
                }}
              >
                Get Started for FREE
              </Button>
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#565666",
                fontFamily: "Red Hat Display",
                my: "20px",
              }}
            >
              Includes:
            </Typography>
            {values.map((value, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "40px",
                  fontWeight: "600",
                  color: "#697AE2",
                  fontFamily: "Red Hat Display",
                  display: "flex",
                  alignItems: "center",
                  mb: "7px",
                }}
              >
                <CheckCircleIcon
                  style={{
                    color: value?.checkOne === true ? "#697AE2" : "#D2D7F6",
                  }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#565666",
                    fontFamily: "Red Hat Display",
                    marginLeft: "15px",
                    width: "80%",
                  }}
                >
                  {value.detail}
                </span>
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xl={3.7}
          lg={4}
          md={4}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems:'center',
            flexDirection:'column',
            mt:{md:'0',xs:'30px'}
          }}
        >
          <Box
          sx={{
            width: { xl: "430px", lg: "340px", md: "280px", sm: "448px" },
            background: "#697AE2",
            borderRadius: "40px",
            border: "1px solid #F0F0F2",
            mb: "10px",
            p: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "-50px",
              zIndex:1
            }}
          >
            <Typography
              className={`font-size-on-small-40px item-center`}
              sx={{
                width: { xl: "189px", lg: "170px" },
                fontSize: "14px",
                color: "#697AE2",
                fontWeight: "800",
                fontFamily: "Red Hat Display",
                background: "#D6DAFC",
                textAlign: "center",
                p: "10px",
                borderRadius: "40px",
              }}
            >
              Recommended Plan
            </Typography>
          </Box>
            
            <Typography
              className={`font-size-on-small`}
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#565666",
                fontFamily: "Red Hat Display",
               
              }}
            >
              Premium
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "600",
                color: "#697AE2",
                fontFamily: "Red Hat Display",
                display: "flex",
                alignItems: "center",
                
              }}
            >
              £24
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#565666",
                  fontFamily: "Red Hat Display",
                  marginLeft: "10px",
               
                }}
              >
                Per user, per month, billed annually
              </span>
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  mr: "10px",
                  fontFamily: "Red Hat Display",
                  color:'white'
                }}
              >
                Monthly Billing
              </Typography>
              <Typography sx={{ m: "2px 5px 5px 0" }}>
                <CustomizedSwitche/>
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  ml: "10px",
                  fontFamily: "Red Hat Display",
                  color:'white'
                }}
              >
                Annual Billing (save 17%)
              </Typography>
            </div>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                fontFamily: "Red Hat Display",
                py: "18px",
                color:'white'
              }}
            >
              For growing teams who need to take their operations to the next
              level
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Red Hat Display",
                my: "10px",
                color:'white'
              }}
            >
              Includes:
            </Typography>
            {secondCardData.map((id, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "40px",
                  fontWeight: "600",
                  color: "#697AE2",
                  fontFamily: "Red Hat Display",
                  display: "flex",
                  alignItems: "center",
                  mb: "5px",
                }}
              >
                <CheckCircleIcon
                  style={{
                    color: id?.checkOne === true ? "white" : "#D2D7F6",
                  }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color:'white',
                    fontFamily: "Red Hat Display",
                    marginLeft: "15px",
                    width: "80%",
                  }}
                >
                  {id.detail}
                </span>
              </Typography>
            ))}
            <Typography sx={{ textAlign: "center"  }}>
              <Button
                sx={{
                  my: "10px",
                  padding: {
                    xl: "15px 120px",
                    lg: "15px 80px",
                    md: "15px 40px",
                    sm: "15px 120px",
                    xs: "15px 25px",
                  },
                  background: "white",
                  color: "#697AE2 !important",
                  fontWeight: "500",
                  textTransform: "none",
                  "&:hover": {
                    background: "white",
                    color:'#697AE2',
                    fontWeight:'500'
                  },
                }}
              >
                Start your 30-day free trial
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xl={3.7} lg={4} md={4} xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: { xl: "430px", lg: "340px", md: "280px", sm: "448px" },
              background: "#fff",
              borderRadius: "40px",
              border: "1px solid #F0F0F2",
              mb: "10px",
              p: "30px",
            }}
          >
            <Typography
              className={`font-size-on-small`}
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#565666",
                fontFamily: "Red Hat Display",
              }}
            >
              Enterprise
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#565666",
                fontFamily: "Red Hat Display",
                mb: "10px",
              }}
            >
              For large businesses who need more customization and dedicated
              support
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Red Hat Display",
                display: "flex",
                alignItems: "center",
                py: "1rem",
              }}
            >
              Please contact us for a quote
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              <Button
                sx={{
                  my: "10px",
                  padding: {
                    xl: "15px 120px",
                    lg: "15px 80px",
                    md: "15px 50px",
                    sm: "15px 120px",
                    xs: "15px 25px",
                  },
                  border: "1px solid #697AE2",
                  fontWeight: "500",
                  color: "#697AE2",
                  textTransform: "none",
                  mr: "15px",
                  "&:hover": {
                    border: "2px solid #697AE2",
                  },
                }}
              >
                Contact our Sales team
              </Button>
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#565666",
                fontFamily: "Red Hat Display",
                my: "20px",
              }}
            >
              Includes:
            </Typography>
            {thirdCardData.map((id, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "40px",
                  fontWeight: "600",
                  color: "#697AE2",
                  fontFamily: "Red Hat Display",
                  display: "flex",
                  alignItems: "center",
                  mb: "7px",
                }}
              >
                <CheckCircleIcon
                  style={{
                    color: id?.checkOne === true ? "#697AE2" : "#D2D7F6",
                  }}
                />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#565666",
                    fontFamily: "Red Hat Display",
                    marginLeft: "15px",
                    width: "80%",
                  }}
                >
                  {id.detail}
                </span>
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
