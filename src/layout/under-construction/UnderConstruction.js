import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BGPIC2 from "../../assests/bg2.png";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const UnderConstruction = () => {
  const navigate = useNavigate();
  const HandlerLogout = () => {
    localStorage.clear();
    navigate("/sign-in");
  };
  return (
    <Box sx={style.container}>
      <Box sx={style.box}>
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "48px" },
            margin: "30px 0",
            color: "#697ae2",
            textAlign: "center",
          }}
        >
          Exciting news – our website is getting a makeover! 🛠️{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "22px" },
              width: { xs: "auto", md: "800px" },
              textAlign: "center",
              color: "#7d7d8c",
            }}
          >
            Thanks a bunch for reaching out to us. We’ve got your info and we’re
            thrilled to connect with you soon! Our friendly representative will
            be in touch with all the awesome details and information you need.{" "}
          </Typography>
          <Typography
            sx={{
              color: "#7d7d8c",
              textAlign: "center",
              margin: "30px 0",
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            Hang tight and talk to you real soon! 🚀
          </Typography>
          <Box gap={3}>
            <Button
              onClick={() => navigate("/")}
              sx={{
                padding: "15px 30px",
                background: "#697AE2",
                fontWeight: "600",
                textTransform: "none",
                textAlign: "center",
                color: "#fff",
                "&:hover": {
                  background: "#5567d4",
                },
              }}
            >
              <HomeIcon sx={{ padding: "0 3px", marginBottom: "3px" }} />
              Home
            </Button>
            <Button
              onClick={HandlerLogout}
              sx={{
                padding: "15px 30px",
                border: "1px solid #697AE2",
                fontWeight: "600",
                color: "#697AE2",
                textTransform: "none",
                ml: "10px",
                "&:hover": {
                  border: "2px solid #697AE2",
                },
              }}
            >
              <ExitToAppIcon sx={{ padding: "0 3px", marginBottom: "" }} />
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UnderConstruction;

const style = {
  container: {
    background: `url(${BGPIC2}) no-repeat left`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative",
  },

  box: {
    padding: { xs: "0", sm: "20px" },
    backgroundColor: "#red",
  },
};
