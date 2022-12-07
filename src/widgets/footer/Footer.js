import React from "react";
import "./Footer.scss";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//icons
import InstagramIcon from "../../images/icons/instagram-svgrepo-com.svg";
import TwitterIcon from "../../images/icons/twitter-svgrepo-com.svg";
import { Link } from "react-router-dom";

const pages = [
  { page: "Home", path: "/" },
  { page: "About", path: "/about" },
  { page: "Gallery", path: "/gallery" },
  { page: "Services", path: "/services" },
  { page: "Stylists", path: "/stylists" },
  { page: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <Box
      className="footer-box"
      sx={{
        Width: "100%",
        height: {
          xs: 400,
          sm: 300,
          lg: 200,
        },
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
          xl: "row",
        },
        backgroundColor: "#a88361",
      }}
    >
      <Box
        className="social-links"
        sx={{
          height: {
            xs: 100,
            sm: 200,
            lg: 200,
          },
          width: {
            xs: "33.33%",
            lg: "20%",
          },
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-evenly",
        }}
      >
        <img className="social-icons" src={InstagramIcon} alt="" />
        <img className="social-icons" src={TwitterIcon} alt="" />
      </Box>
      <Box
        className="bottom-nav"
        sx={{
          height: {
            xs: 300,
            lg: 150,
          },
          width: {
            xs: "66.67%",
          },
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          alignSelf: "center",
          paddingTop: { sm: "5%", md: '0' },
        }}
      >
        {pages.map((page, i) => (
          <Link key={page.page} to={page.path} className="bottom-nav-links">
            <p className="nav-links">{page.page}</p>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
