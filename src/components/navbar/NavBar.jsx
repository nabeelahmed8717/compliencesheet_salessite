import React, { useState } from "react";
import {
  Toolbar,
  Button,
  Tabs,
  Tab,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
} from "@mui/material";
import Logo from "../../assests/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [resourcesMenuAnchor, setResourcesMenuAnchor] = useState(null);
  const [supportMenuAnchor, setSupportMenuAnchor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const closeResourcesMenu = () => {
    setResourcesMenuAnchor(null);
  };

  const closeSupportMenu = () => {
    setSupportMenuAnchor(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        padding: "10px",
        position: "sticky",
        top: "0",
        zIndex: "100",
        backgroundColor: "#fff",
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Link to="/">
              <img src={Logo} alt="Logo" style={{ cursor: "pointer" }} />
            </Link>
          </Grid>
          <Grid item>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  "& .MuiTabs-indicator": { background: "none" },
                },
              }}
            >
              <Link Link to="/product" style={{ textDecoration: "none" }}>
                <Tab label="Product" value="1" sx={{ color: "#565666" }} />
              </Link>
              <Link Link to="/solution" style={{ textDecoration: "none" }}>
                <Tab label="Solutions" value="2" sx={{ color: "#565666" }} />
              </Link>
              <Link Link to="/pricing" style={{ textDecoration: "none" }}>
                <Tab label="Pricing" value="3" sx={{ color: "#565666" }} />
              </Link>
              <Link Link to="/career" style={{ textDecoration: "none" }}>
                <Tab label="Career" value="4" sx={{ color: "#565666" }} />
              </Link>
              <Link Link to="/contact-us" style={{ textDecoration: "none" }}>
                <Tab label="Contact Us" value="5" sx={{ color: "#565666" }} />
              </Link>
            </Tabs>
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item className={`hide-on-xs hide-on-sm-md`}>
            <Link Link to="/sign-in" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  padding: "10px 20px",
                  border: "1px solid #697AE2",
                  fontWeight: "500",
                  color: "#697AE2",
                  textTransform: "none",
                  mr: "10px",
                  "&:hover": {
                    border: "2px solid #697AE2",
                  },
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link Link to="/sign-up" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  padding: "10px 20px",
                  background: "#697AE2",
                  fontWeight: "500",
                  textTransform: "none",
                  color: "#fff",
                  "&:hover": {
                    background: "#5567d4",
                  },
                }}
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
      <Menu
        anchorEl={resourcesMenuAnchor}
        open={Boolean(resourcesMenuAnchor)}
        onClose={closeResourcesMenu}
      >
        <MenuItem onClick={closeResourcesMenu}>Option 1</MenuItem>
        <MenuItem onClick={closeResourcesMenu}>Option 2</MenuItem>
      </Menu>
      <Menu
        anchorEl={supportMenuAnchor}
        open={Boolean(supportMenuAnchor)}
        onClose={closeSupportMenu}
      >
        <MenuItem onClick={closeSupportMenu}>Option 1</MenuItem>
        <MenuItem onClick={closeSupportMenu}>Option 2</MenuItem>
      </Menu>
      <Drawer anchor="right" open={mobileMenuOpen} onClose={closeMobileMenu}>
        <div
          style={{ width: "250px", padding: "20px" }}
          role="presentation"
          onClick={closeMobileMenu}
        >
          <Tabs orientation="vertical" sx={{ textAlign: "center" }}>
            <Link Link to="/product" style={{ textDecoration: "none" }}>
              <Tab label="Product" value="1" sx={{ color: "#565666" }} />
            </Link>
            <Link Link to="/solution" style={{ textDecoration: "none" }}>
              <Tab label="Solutions" value="2" sx={{ color: "#565666" }} />
            </Link>
            <Link Link to="/pricing" style={{ textDecoration: "none" }}>
              <Tab label="Pricing" value="3" sx={{ color: "#565666" }} />
            </Link>
            <Link Link to="/career" style={{ textDecoration: "none" }}>
              <Tab label="Career" value="4" sx={{ color: "#565666" }} />
            </Link>
            <Link Link to="/contact-us" style={{ textDecoration: "none" }}>
              <Tab label="Contact Us" value="5" sx={{ color: "#565666" }} />
            </Link>
            <Link Link to="/sign-in" style={{ textDecoration: "none" }}>
              <Tab sx={{ color: "#565666" }} value="6" label="Sign In" />
            </Link>
            <Link Link to="/sign-up" style={{ textDecoration: "none" }}>
              <Tab sx={{ color: "#565666" }} value="7" label="Get Started" />
            </Link>
          </Tabs>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
