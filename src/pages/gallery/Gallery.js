import React from "react";

//styles
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Gallery.scss";

//data
import GallerPictures from "../../data/gallery-pictures";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          height: {
            xs: 900,
          },
          justifyContent: "center",
        }}
      >
        <Box
          className="gallery-box"
          sx={{
            width: {
              xs: 330,
              sm: 500,
              md: 750,
              lg: 950,
              xl: 1100,
            },
            height: {
              xs: 800,
              sm: 700,
              md: 650,
              lg: 900,
              xl: 1000
            },
            display: "flex",

            flexDirection: "column",
            backgroundColor: "#a88361",
            borderRadius: "20px",
          }}
        >
          <h2 className="gallery-title">Let The Work Speak For Itself!</h2>

          <Box
            className="image-gallery"
            sx={{
              width: {
                xs: 330,
                sm: 500,
                md: 750,
                lg: 950,
                xl: 1100
              },
              height: {
                xs: 700,
                sm: 600,
                md: 500,
                lg: 900,
                xl: 1000
              },
              overflowY: "scroll",
              borderRadius: "20px",
            }}
          >
            <ImageList
              variant="masonry"
              cols={2}
              gap={8}
              sx={{
                display: {
                  md: "none",
                },
              }}
            >
              {GallerPictures.map((picture, i) => (
                <ImageListItem key={picture.photo}>
                  <img
                    src={`${picture.photo}?w=248&fit=crop&auto=format`}
                    srcSet={`${picture.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt=""
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <ImageList
              variant="masonry"
              cols={3}
              gap={8}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "inherit",
                },
              }}
            >
              {GallerPictures.map((picture, i) => (
                <ImageListItem key={picture.photo}>
                  <img
                    src={`${picture.photo}?w=248&fit=crop&auto=format`}
                    srcSet={`${picture.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt=""
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Gallery;
