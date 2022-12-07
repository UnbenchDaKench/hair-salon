import React from "react";

//styles
import "./About.scss";
import Box from "@mui/material/Box";

import JanellJabari from "../../images/pictures/Janell-Jabari.jpg";

const About = () => {
  return (
    <div className="about-page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: {
            md: 800
          }
        }}
      >
        <Box
          className="about-section"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: 'row'
            },
          }}
        >
          <img className="about-image" src={JanellJabari} alt="" loading="lazy" />

          <Box
            className="about-box"
            sx={{
              height: {
                xs: 550,
                sm: 500,
                lg: 600
              },
              width: {
                xs: 320,
                sm: 450,
                md: 700,
                lg: 800
              },
              display: {
                md: 'flex'
              },
              flexDirection: {
                md: 'column'
              },
              
              backgroundColor: "#a88361",
              borderRadius: '20px',
              paddingTop: 10,
              position: {
                sm: 'relative'
              },
              top: {
                sm: 90
              },
              right: {
                sm: 30,
                md: 50
              },
              zIndex:{
                sm: 2,
              }
            }}
          >
            <h2 className="about-title">Who Are We At Top Notch Locks?</h2>
            <p className="about-text">
              Top Notch Locs is an organisation founded by Janell Jabari who has
              always had a love for ethnic hair styles. She has been braiding
              and twisting locs now for well over a decade and still loves every
              minute of it. Her goal was to create a space where anyone who also
              has a love for these styles can come make their visions a reality!
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
