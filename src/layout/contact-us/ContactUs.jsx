import {
  Card,
  Grid,
  Typography,
} from "@mui/material";
import React  from "react";
import BGPIC5 from "../../assests/bg5.jpg";
import Form from "./ContactForm";
import ContactUsImg from "../../assests/contact.jpg";

const ContactUs = () => {
  return (
    <>
      {/* <Container maxWidth="xxl"> */}
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "700",
            fontFamily: "Red Hat Display",
            color: "#565666",
            py: "30px",
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>

        <div
          style={{
            width: "100%",
            // height:'180vh',
            flex: 1,
            backgroundImage: `url(${BGPIC5})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <Card
              sx={{
                background: "white",
                borderRadius: "8px",
                width: { md: "90%" },
                m: { md: "100px", xs: "20px" },
                p: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  py: "10px",
                  textAlign: "center",
                }}
              >
                Get in touch
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "400",
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  textAlign: "center",
                }}
              >
                Our friendly team would love to hear from you.
              </Typography>
              <Grid container gap={10} justifyContent={"center"}>
                <Grid item md={5} xs={12} sx={{ m: "40px 0" }}>
                  <Form />
                </Grid>
                <Grid
                  item
                  md={5.5}
                  xs={12}
                  className="hide-on-sm-md hide-on-xs"
                >
                  <img src={ContactUsImg} alt="ContactUsImg" width={"100%"} />
                </Grid>
              </Grid>
            </Card>
          </div>
        </div>
      {/* </Container> */}
    </>
  );
};

export default ContactUs;
