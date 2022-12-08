import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

const pages = [
  /* { page: "Home", path: "/" }, */
  { page: "About", path: "/about" },
  { page: "Gallery", path: "/gallery" },
  { page: "Services", path: "/services" },
  { page: "Stylists", path: "/stylists" },
  { page: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#635F5F" }} className="appbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink to={page.path} key={page.page} className="links">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      {page.page}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <NavLink to="/" className="links">
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "flex",
                },
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Top Notch
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 800,
                  letterSpacing: ".3rem",
                  color: "#a88361",
                  textDecoration: "none",
                  marginRight: {
                    xs: 15,
                    sm: 25,
                    md: "none",
                  },
                }}
              >
                Locs
              </Typography>
            </Box>
          </NavLink>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex" },
              marginLeft: { md: "5%", lg: "25", xl: "30%" },
              justifyContent: { md: "space-between" },
            }}
          >
            {pages.map((page) => (
              <NavLink to={page.path} key={page.page} className="links">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: { lg: "17px", xl: "18px" },
                  }}
                >
                  {page.page}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

/* <div className="navbar">
        <div className="navbar-logo">
            <NavLink to="/"><img className="logo" src={Logo} /></NavLink>
        </div>
        <div className="navbar-links-container">
            <ul>
                <li>
                    <NavLink className="navbar-link" to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to='/gallery'>Gallery</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to='/services'>Services</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to='/stylists'>Stylists</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to='/contact-us'>Contact Us</NavLink>
                </li>
            </ul>

        </div>

    </div> */
