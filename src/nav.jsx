import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BiChevronRightCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import MyImage from "./img/logo1.jpg";


export default function Nav() {
  return (
    <div className="MainHead">
      <div className="headDiv">
              <div className="headDiv1">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="FirstDiv">
                    Home Page{" "}
                    <div className="circle">
                      <BiChevronRightCircle />
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" style={{ textDecoration: "none" }}>
                  <div className="SecoundDiv">
                    PortFolio{" "}
                    <div className="circle">
                      <BiChevronRightCircle />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="contactDiv">
                <a href="mailto:onyex896@gmail.com" style={{ textDecoration: "none" }}><FiMail/></a>
                <FaTwitter/>
                <FaWhatsappSquare />
              </div>
            </div>
            <div className="BigDiv">
              <div className="BigDivInner">
                <div className="marvel">MARVEL KENE</div>
                <img
                  src={MyImage}
                  width={100}
                  height={100}
                  className="myImage"
                />
              </div>
              <div className="bigDivInner2">
                <div className="bigDivInner22">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="FirstDiv">
                    Home Page{" "}
                    <div className="circle">
                      <BiChevronRightCircle />
                    </div>
                  </div>
                </Link>
                  <h3>Full Stack Engineer</h3>
                </div>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <div className="FirstDiv">About me{" "}
                    <div className="circle">
                      <BiChevronRightCircle />
                    </div></div>
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
  )
}
