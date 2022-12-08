import React from "react";

import { Link } from "react-router-dom";

//images
import headerImage from "../../images/pictures/Dreadlocks home.jpg";
import IntroImage from "../../images/pictures/intro-image.jpg";

//styles
import "./Home.scss";
import FadeInTransition from "../../widgets/transitions/fade-in-transition/FadeInTransition";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";

//data
import Services from "../../data/home-services";
import Pictures from "../../data/home-gallery-pictures";

const Home = () => {
  return (
    <div className="home-page">
      <Box
        className="header"
        sx={{
          width: "100%",
          height: {
            xs: 400,
            sm: 625,
            md: 750,
            lg: 875,
            xl: 1000,
          },
        }}
      >
        <img className="header-image" src={headerImage} alt="" />
        <h1 className="text">Top Quality Dreadlocks and Braids</h1>
      </Box>

      <FadeInTransition>
        <Box
          className="introduction"
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            height: {
              sm: 400,
              md: 600,
              lg: 800,
              xl: 1000,
            },
            marginTop: "7%",
            marginBottom: "3%",
            justifyContent: "center",
          }}
        >
          <Box
            className="intro-box"
            sx={{
              width: {
                xs: 300,
                sm: 473.5,
                md: 647,
                lg: 820.5,
                xl: 994,
              },
              height: {
                xs: 180,
                sm: 291,
                md: 402,
                lg: 513,
                xl: 624,
              },
              backgroundColor: "#a88361",
              borderRadius: "20px",
              position: "relative",
              //left: "10px",
              right: "20px",
            }}
          >
            <p className="intro-text">
              Redefine your hair with over a decade of braiding and loc twisting
              experience!
            </p>
            <Button
              className="more-info-button"
              size="large"
              variant="contained"
            >
              More Info
            </Button>
            <img
              className="intro-picture"
              src={IntroImage}
              alt=""
              loading="lazy"
            />
          </Box>
        </Box>
      </FadeInTransition>
      <br />
      <br />
      <br />

      <FadeInTransition>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            className="our-services"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "column",
                xl: "column",
              },
              width: {
                xs: 320,
                sm: 450,
                lg: 1100,
                xl: 1400,
              },
              height: {
                xs: 1100,
                sm: 1400,
                lg: 500,
                xl: 650,
              },
              marginTop: "100px",
              marginBottom: "1%",

              borderRadius: "20px",
              backgroundColor: "#a88361",
            }}
          >
            <h1 className="our-services-title">Ours Services</h1>
            <Box
              className="our-services-container"
              sx={{
                display: {
                  xs: "flex",
                },
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                },
                width: {
                  xs: "100%",
                },
              }}
            >
              {Services.map((service, i) => {
                return (
                  <Link
                    key={service.serviceName}
                    className="links"
                    to="/services"
                  >
                    <div className="service">
                      <img
                        className="service-picture"
                        src={service.servicePicture}
                        alt=""
                        loading="lazy"
                      />
                      <h4 className="service-title">{service.serviceName}</h4>
                    </div>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
      </FadeInTransition>
      <FadeInTransition>
        <Box
          sx={{
            display: {
              xs: "flex",
            },
            justifyContent: {
              xs: "center",
            },
          }}
        >
          <Box
            className="gallery"
            sx={{
              display: "flex",

              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              },
              width: {
                xs: 320,
                sm: 400,
                md: 600,
                lg: 1100,
                xl: 1400,
              },
              height: {
                xs: 800,
                sm: 900,
                md: 1300,
                lg: 800,
                xl: 900,
              },
              marginTop: {
                xs: 30,
                sm: 30,
                md: 10,
                lg: 20,
                xl: 30,
              },
            }}
          >
            <Box
              className="pictures-box"
              sx={{
                width: {
                  xs: 320,
                  sm: 400,
                  md: 600,
                  lg: 600,
                  xl: 700,
                },
                height: {
                  xs: 400,
                  sm: 400,
                  md: 400,
                  lg: 500,
                },
              }}
            >
              <ImageList
                variant="masonry"
                cols={2}
                gap={50}
                sx={{
                  position: "relative",
                  //right: 30,
                  zIndex: 3,
                }}
              >
                {Pictures.map((picture) => (
                  <ImageListItem key={picture.photo}>
                    <img
                      src={`${picture.photo}?w=248&fit=crop&auto=format`}
                      srcSet={`${picture.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt="home gallery"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <Box
              className="gallery-blurb"
              sx={{
                width: {
                  xs: 320,
                  sm: 400,
                  md: 600,
                  lg: 600,
                  xl: 700,
                },
                height: {
                  xs: 400,
                  sm: 500,
                  md: 700,
                  lg: 500,
                  xl: 600,
                },
                backgroundColor: "#a88361",
                borderRadius: "20px",
                position: "relative",
                bottom: {
                  xs: 80,
                  sm: 80,
                  md: 0,
                },
                //right: 30,
                right: {
                  lg: 30,
                },
                top: {
                  lg: 60,
                },
                zIndex: 2,
              }}
            >
              <p className="gallery-text">
                Checkout Some of our work, and let them speak for themself!
              </p>
              <Link to="/gallery" className="links">
                <Button
                  className="view-gallery-button"
                  size="large"
                  variant="contained"
                >
                  View Gallery
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </FadeInTransition>
      <br />
      <FadeInTransition>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            className="call-to-action"
            sx={{
              width: {
                xs: 300,
                md: 450,
                xl: 500,
              },
              height: {
                xs: 400,
                md: 400,
                xl: 400,
              },
            }}
          >
            <p className="text">What are you still waiting for?</p>
            <Link className="links" to="/contact">
              <Button
                className="book-appointment-button"
                size="large"
                variant="contained"
              >
                Book your Appointment now!
              </Button>
            </Link>
          </Box>
        </Box>
      </FadeInTransition>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
