import React from "react";

import { Grid, Typography, IconButton } from "@mui/material";
import Logo from "../../../assests/logo.svg";
import Facebook from "../../../assests/fb.svg";
import Tweeter from "../../../assests/x.svg";
import YouTube from "../../../assests/yt.svg";
import LinkedIn from "../../../assests/link.svg";
import Pinterest from "../../../assests/p.svg";
import Insta from "../../../assests/insta.svg";
import { Link } from "react-router-dom";
import PlayStoreImg from "../../../assests/play.png";
import AppStoreImg from "../../../assests/app.png";

const Footer = () => {
  return (
    <div
      style={{
        background: "#E4E7FA",
      }}
    >
      <Grid
        container
        p={5}
        justifyContent={{ sm: "space-between", xs: "center" }}
      >
        <Grid md={6} sm={6} xs={12} sx={{ mt: "8px" }}>
          <img src={Logo} alt="Logo" />
        </Grid>
        <Grid
          md={6}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: { sm: "row", xs: "column" },
            mt: "20px",
          }}
        >
          <img
            src={AppStoreImg}
            width={"70%"}
            style={{ cursor: "pointer" }}
            alt="img"
          />
          <img
            src={PlayStoreImg}
            width={"70%"}
            style={{ cursor: "pointer" }}
            alt="img"
          />
        </Grid>
      </Grid>
      <Grid container px={5}>
        <Typography
          sx={{
            width: "auto",
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "Red Hat Display",
            color: " #565666",
          }}
        >
          Compliance Sheet empowers businesses of all sizes to conduct
          inspections, identity issues, manage tasks, ensures clear
          communication, and provide training to their working teams, thus
          enabling them to efficiently accomplish their job tasks
        </Typography>
        <Grid item md={6} sm={5} xs={12} sx={{ mt: "15px" }}>
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
        <Grid xs={12} md={6} sm={4} sx={{ mt: "15px" }}>
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
        {/* <Grid item xs={12} md={6} sm={3} sx={{ mt: "15px" }}>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#565666",
              fontWeight: "600",
              fontFamily: "Red Hat Display",
            }}
          >
            Support
          </Typography>
          <Typography
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
          </Typography>
        </Grid> */}
      </Grid>
      <div style={{ borderBottom: "1px solid #A6A6B3" }}></div>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ px: "40px" }}
      >
        <Grid item sm={6}>
          <Typography
            sx={{
              fontFamily: "Red Hat Display",
              color: "#565666",
              fontSize: "14px",
              my: { xs: "5px" },
            }}
          >
            © INNOVATE SENSIGHT LIMITED, All rights reserved
          </Typography>
        </Grid>
        <Grid
          item
          sm={4.5}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            sx={{
              fontFamily: "Red Hat Display",
              color: "#565666",
              fontSize: { sm: "14px", xs: "12px" },
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
              fontSize: { sm: "14px", xs: "12px" },
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
              fontSize: { sm: "14px", xs: "12px" },
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
          sm={12}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
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
  );
};

export default Footer;
