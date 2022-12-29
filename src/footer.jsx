import React from "react";
import MyImage from "./img/logo3.png";

export default function Footer() {
  return (
    <div>
      <div className="innerFoot"></div>
      <div className="footerDiv">
      <img src={MyImage} width={40} height={30}/>
        <h4>All Rights Reserved</h4>
        <div className="footerDiv1">
          <nav className="nav">
            <ul>
              <li>
                <a href="#" className="active">
                  Github
                </a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
