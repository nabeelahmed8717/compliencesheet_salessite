import React from "react";
import DGPIC3 from "../../assests/bg3.png";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Logo from "../../assests/logo.svg";
import Facebook from "../../assests/fb.svg";
import Tweeter from "../../assests/x.svg";
import YouTube from "../../assests/yt.svg";
import LinkedIn from "../../assests/link.svg";
import Pinterest from "../../assests/p.svg";
import Insta from "../../assests/insta.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer2 from "./footer-for-S/Footer2";
import { Link } from "react-router-dom";
import PlayStoreImg from "../../assests/play.png";
import AppStoreImg from "../../assests/app.png";

const Footer = () => {
  const matches = useMediaQuery("(min-width:600px) and (min-width:1200px)");
  return (
    <>
      {matches && (
        <div
          style={{
            height: "auto",
            flex: 1,
            background: `url(${DGPIC3}) no-repeat right`,
            backgroundPosition: "right",
          }}
        >
          <Grid container p={5}>
            <Grid item xl={3} lg={3} sx={{ pl: "30px", mt: "8px" }}>
              <Typography>
                <img src={Logo} alt="Logo" />
              </Typography>
              <Typography
                sx={{
                  width: "85%",
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Red Hat Display",
                  mt: "10px",
                  color: " #565666",
                }}
              >
                Compliance Sheet empowers businesses of all sizes to conduct
                inspections, identity issues, manage tasks, ensures clear
                communication, and provide training to their working teams, thus
                enabling them to efficiently accomplish their job tasks
              </Typography>
            </Grid>
            <Grid item xl={3} lg={3} sx={{ pl: "40px", mt: "40px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#565666",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                }}
              >
                Contact info
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  mt: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Red Hat Display",
                    fontWeight: "600",
                    color: "#565666",
                  }}
                >
                  Address:
                </span>{" "}
                Unit 8, Northgate Industrial Park, Collier Row Road, Romford,
                England, RM5 2BG
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  mt: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Red Hat Display",
                    fontWeight: "600",
                    color: "#565666",
                    marginRight: "5px",
                  }}
                >
                  Phone:
                </span>
                +44 23 3333 0034
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  mt: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Red Hat Display",
                    fontWeight: "600",
                    color: "#565666",
                    marginRight: "5px",
                  }}
                >
                  Mail:
                </span>
                Info@Compliancesheet.co.uk
              </Typography>
            </Grid>
            <Grid item xl={3} lg={3} sx={{ pl: "40px", mt: "40px" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#565666",
                  fontWeight: "600",
                  fontFamily: "Red Hat Display",
                }}
              >
                Home
              </Typography>
              <Link Link to="/product" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    color: "#565666",
                    mt: "20px",
                    cursor: "pointer",
                  }}
                >
                  Products
                </Typography>
              </Link>
              <Link Link to="/solution" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    color: "#565666",
                    mt: "10px",
                    cursor: "pointer",
                  }}
                >
                  Solutions
                </Typography>
              </Link>
              <Link Link to="/pricing" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    color: "#565666",
                    mt: "10px",
                    cursor: "pointer",
                  }}
                >
                  Pricing
                </Typography>
              </Link>
              <Link Link to="/career" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    color: "#565666",
                    mt: "10px",
                    cursor: "pointer",
                  }}
                >
                  Career
                </Typography>
              </Link>
              <Link Link to="/contact-us" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Red Hat Display",
                    color: "#565666",
                    mt: "10px",
                    cursor: "pointer",
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Grid>
            <Grid item xl={3} lg={3} sx={{ pl: "10px", mt: "40px" }}>
              <Box sx={{ mb: "30px" }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#565666",
                    fontWeight: "600",
                    fontFamily: "Red Hat Display",
                  }}
                >
                  Download the Compliancesheet App
                </Typography>
                {/* <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  mt: "20px",
                }}
              >
                Data Policy
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  mt: "10px",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  mt: "10px",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  mt: "10px",
                }}
              >
                Cookie Policy
              </Typography> */}
              </Box>
              <Box style={{ display: "flex", gap: "10px" }}>
                <img
                  src={AppStoreImg}
                  width={"50%"}
                  style={{ cursor: "pointer" }}
                  alt="img"
                />
                <img
                  src={PlayStoreImg}
                  width={"50%"}
                  style={{ cursor: "pointer" }}
                  alt="img"
                />
              </Box>
            </Grid>
          </Grid>
          <div style={{ borderBottom: "1px solid #A6A6B3" }}></div>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ px: "40px" }}
          >
            <Grid item md={4}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  fontSize: "14",
                }}
              >
                © INNOVATE SENSIGHT LIMITED, All rights reserved
              </Typography>
            </Grid>
            <Grid item md={4.5} sx={{ display: "flex" }}>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  fontSize: "14",
                }}
              >
                <Link
                  Link
                  to="/data-policy"
                  style={{ textDecoration: "none", color: "#565666" }}
                >
                  Data Policy
                </Link>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  fontSize: "14",
                  px: "20px",
                }}
              >
                <Link
                  Link
                  to="/privacy-policy"
                  style={{ textDecoration: "none", color: "#565666" }}
                >
                  Privacy Policy
                </Link>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Red Hat Display",
                  color: "#565666",
                  fontSize: "14",
                }}
              >
                <Link
                  Link
                  to="/cookies-policy"
                  style={{ textDecoration: "none", color: "#565666" }}
                >
                  Cookies Policy
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              md={2.3}
              sx={{ display: "flex", alignContent: "center" }}
            >
              <IconButton>
                <Link to="https://www.facebook.com/compliancesheet">
                  <img src={Facebook} alt="Facebook" />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="https://twitter.com/ComplianceSheet">
                  <img src={Tweeter} alt="Tweeter" />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="https://www.youtube.com/@Compliancesheet/playlists">
                  <img src={YouTube} alt="YouTube" />
                </Link>
              </IconButton>
              <IconButton sx={{ mb: "-5px" }}>
                <Link to="https://www.linkedin.com/company/compliance-sheet/">
                  <img src={LinkedIn} alt="LinkedIn" />
                </Link>
              </IconButton>
              <IconButton sx={{ mb: "5px" }}>
                <Link to="https://www.pinterest.com/compliancesheet07/">
                  <img src={Pinterest} alt="Pinterest" />
                </Link>
              </IconButton>
              <IconButton sx={{ mb: "8px" }}>
                <Link to="#">
                  <img src={Insta} alt="Insta" />
                </Link>
              </IconButton>
            </Grid>
          </Grid>
        </div>
      )}
      {!matches && (
        <div>
          <Footer2 />
        </div>
      )}
    </>
  );
};

export default Footer;
