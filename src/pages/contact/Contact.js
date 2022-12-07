import React, { useState } from "react";

//styles
import "./Contact.scss";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  const [hairstyle, setHairstyle] = useState("");

  /* const styles = theme => ({
    multilineColor:{
        color: 'white'
    }
  }) */

  const handleChange = (event) => {
    setHairstyle(event.target.value);
  };
  return (
    <div className="contact-page">
      <br />
      <br />
      <br />
      <br />
      <Box
        className="contact-section"
        sx={{
          display: "flex",

          justifyContent: "center",
        }}
      >
        <Box
          className="contact-box"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            width: {
              xs: "100%",
              lg: "90%",
            },
            height: {
              xs: "1200px",
              lg: '800px'
            },
            backgroundColor: "#a88361",
            borderRadius: {
                lg: '20px'
            }
          }}
        >
          <Box sx={{
            width:{
                lg: '50%'
            }
          }}>
            <h1 className="title">Book Your Appointment Today!</h1>
            <Box
              className="appointment-form"
              sx={{
                display: "block",
                width: {
                  xs: "90%",
                  sm: "70%",
                  md: "60%",
                  lg: "90%",
                  xl: '80%'
                },
                height: {
                  xs: "500px",
                },
                marginLeft: {
                  xs: "5%",
                  sm: "15%",
                  md: "20%",
                  lg: "5%",
                  xl: '10%'
                },

                backgroundColor: "",
              }}
              noValidate
            >
              <form>
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label="Firstname"
                  color="secondary"
                  sx={{
                    width: {
                      xs: "45%",
                    },
                    input: {
                      background: "white",
                    },
                  }}
                />
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label="Lastname"
                  color="secondary"
                  sx={{
                    width: {
                      xs: "45%",
                    },
                    input: {
                      background: "white",
                    },
                  }}
                />
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label="Email"
                  color="secondary"
                  sx={{
                    width: {
                      xs: "45%",
                    },
                    input: {
                      background: "white",
                    },
                  }}
                />
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label="Phone Number"
                  color="secondary"
                  sx={{
                    width: {
                      xs: "45%",
                    },
                    input: {
                      background: "white",
                    },
                  }}
                />
                <FormControl fullWidth>
                  <InputLabel>Select Your Style</InputLabel>
                  <Select
                    //labelId="select-label"
                    //id="select-label"
                    label="Select Your Style"
                    value={hairstyle}
                    onChange={handleChange}
                    sx={{
                      backgroundColor: "white",
                    }}
                  >
                    <MenuItem value={"Locs"}>Locs</MenuItem>
                    <MenuItem value={"Braids"}>Braids</MenuItem>
                    <MenuItem value={"Attachments"}>Attachments</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  className="message"
                  type="text"
                  variant="filled"
                  label="Message"
                  color="secondary"
                  multiline
                  rows={6}
                  sx={{
                    width: {
                      xs: "100%",
                    },
                    height: {
                      xs: "34%",
                    },
                    input: {
                      background: "white",
                    },
                    backgroundColor: "white",
                  }}
                />

                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#6B5858",
                    padding: "3px 3px",
                    borderRadius: "20px",
                    fontSize: {
                      xs: "17px",
                    },
                    width: {
                      xs: "150px",
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>

          <br />
          <br />
          <Box sx={{
            width:{
                xs: '100%',
                lg: '50%'
            },
            display: {
                lg: 'flex'
            },
            flexDirection:{
                xs: 'column'
            }
          }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="contact-us-title">Contact Us</h1>
            <h3 className="contact-us-blurb">
              give us a call to find out more about our services!
            </h3>
            <p className="contact-info">
              <u>Email:</u> admin@topnotchlocs.com
            </p>
            <p className="contact-info">
              <u>Address:</u> 123 Ready St, johnsville, NC, United States, 28375
            </p>
            <br />
            <br />
            <Button
              size="large"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#6B5858",
                padding: "5px 5px",
                borderRadius: "20px",
                fontSize: {
                  xs: "17px",
                  sm: "20px",
                },
                width: {
                  xs: "170px",
                  sm: "200px",
                },
                marginLeft:{
                    xs: '27%',
                    sm: '33%',
                    md: '39%'
                },
                alignSelf: "center",
              }}
            >
              <LocalPhoneIcon />
              555-555-5555
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
