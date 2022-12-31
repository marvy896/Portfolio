import React from "react";
import MyImage from "./img/logo2.jpeg";
import Project1 from "./img/project1.jpg";
import Project2 from "./img/project2.jpg";


export default function BodySection() {
  return (
    <div className="bodySection">
      <div className="bodySection1">
        <div className="bodySectionChild1">
          <div className="FirstDiv1">Latest Post</div>
          <img
            src={MyImage}
            alt="Blog"
            width={300}
            // height={100}
            className="myImage2"
          />
          <div className="innerFoot"></div>
          <h3>View our current Post in our blog</h3>
        </div>
        <div className="bodySectionChild2">
          <div className="FirstDiv1">Latest Project</div>
          <img src={Project1} width={250} height={150} className="Contact" />
        </div>
        <div className="bodySectionChild3">
          <div className="FirstDiv1">Current Project</div>
          <img src={Project2} width={250} height={150} className="Contact" />
        </div>
      </div>
    </div>
  );
}
