import React from "react";

//styles
import Box from "@mui/material/Box";
import "./Services.scss";
import FadeInTransition from "../../widgets/transitions/fade-in-transition/FadeInTransition";

//data
import AllServices from "../../data/services";

const Services = () => {
  return (
    <div className="services-page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="services-page-title">What Services Do We Offer?</h2>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          className="services-box"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {AllServices.map((service, i) => (
            <FadeInTransition>
              <Box
                className={`service ${service.id % 2 == 0 ? "right" : ""}`}
                key={service.id}
                sx={{
                  width: {
                    xs: 380,
                    sm: 550,
                    md: 700,
                    xl: 900,
                  },
                  height: {
                    xs: 300,
                    sm: 350,
                    md: 400,
                    xl: 550,
                  },
                  display: "flex",
                  justifyContent: "center",

                  marginBottom: "5%",
                }}
              >
                <img className="service-pic" src={service.photo} alt="" />
                <Box
                  className="service-box"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                      xs: 300,
                      sm: 450,
                      md: 550,
                      xl: 750,
                    },
                    height: {
                      xs: 300,
                      sm: 300,
                      md: 350,
                      xl: 450,
                    },
                    backgroundColor: "#a88361",
                    borderRadius: "20px",
                    position: "relative",
                  }}
                >
                  <p className="service-description">{service.description}</p>
                  <p className="service-price">Starting at: ${service.price}</p>
                </Box>
              </Box>
            </FadeInTransition>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Services;
