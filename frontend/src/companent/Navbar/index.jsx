import { Link } from "react-router-dom";
import Style from "./index.module.css";
import { Button } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Navbar = () => {
  return (
    <div className={Style.Hom}>
      <div className={Style.Header}>
        <div className={Style.HeaderItem}>
          <div className={Style.leftNavbar}>
            <img
              src="	https://preview.colorlib.com/theme/robotics/img/logo.png"
              alt=""
            />
          </div>
          <div className={Style.rigthNavbar}>
            <Link to="/">
              <Button style={{color:"white"}} variant="text">Home</Button>
            </Link>
            <Link to="/addelement">
              <Button style={{color:"white"}} variant="text">Add Element</Button>
            </Link>
            <Button style={{color:"white"}} variant="text">SERVICES</Button>
            <Button style={{color:"white"}} variant="text">products</Button>
            <Button style={{color:"white"}} variant="text">blog</Button>
            <Button style={{color:"white"}} variant="text">contact</Button>
            <Button style={{color:"white"}} variant="text">dropdown</Button>
          </div>
        </div>
      </div>
    <div  className={Style.Box}>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid  item xs={6}>
            <h1 className={Style.hhh}>Improved Production level with Robotics</h1>
            <p className={Style.ppp}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
            <Button style={{background:"white", color: "black"}}>VIEW DETAILS</Button>
          </Grid>
          <Grid item xs={5}>
            <img
              src="https://preview.colorlib.com/theme/robotics/img/banner-img.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </div>
    </div>
  );
};
//
export default Navbar;
