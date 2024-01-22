import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            
            
            <span style={{"font-size":"20px"}}>
            eCommerce is short for electronic commerce, as in online commerce. It’s an umbrella term for any transaction done over the internet. eCommerce includes retail stores, such as clothing and other physical products, and services of all types, from cyber security to booking a hotel.
The most common way to facilitate online sales and transactions, is through a dedicated online store, or eCommerce platform.
              
           
            </span>
          </div>
          <div className="aboutSectionContainer2">
          <span style={{"font-size":"20px"}}>
              This Project has been develeoped by - Ujjwal Jha(
              Student at Lnct Group Of Institutions)
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
