import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer" >
      <span style={{"text-align": "center","font-size":"30px"}}>
        You can contact us at:
      <br/>
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: ujjwalkjha85@gmail.com</Button>
      </a>
      </span>
    </div>
  );
};

export default Contact;
