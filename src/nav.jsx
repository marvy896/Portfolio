import React from "react";
import MyImage from "./img/logo1.jpg";
import Twitter from "./img/twitter.png";
import WhatsApp from "./img/whatsapp.png";
import mail from "./img/mail.png";
export default function Nav() {
  return (
    <div className="MainHead">
      <div className="headDiv">
        <div className="headDiv1">
          <div className="FirstDiv">Home Page</div>
          <div className="SecoundDiv">PortFolio</div>
        </div>
        <div className="contactDiv">
          <img src={WhatsApp} width={40} height={30} className="Contact"/>
          <img src={Twitter} width={40} height={30}  className="Contact" />
          <img src={mail} width={40} height={30}  className="Contact" />
        </div>
      </div>
      <div className="BigDiv">
        <div className="BigDivInner">
          <div className="marvel">MARVEL KENE</div>
          <img src={MyImage} width={100} height={100} className="myImage" />
        </div>
        <div className="bigDivInner2">
          <div className="bigDivInner22">
            <div className="FirstDiv">Home Page</div>
            <h3>Full Stack Engineer</h3>
          </div>
          <div className="FirstDiv">Contact me</div>
        </div>
      </div>
    </div>
  );
}
