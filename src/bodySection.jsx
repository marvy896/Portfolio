import React from "react";
import MyImage from "./img/logo2.jpeg";

export default function BodySection() {
  return (
    <div className="bodySection">
      <div className="bodySection1">
        <div className="bodySectionChild1">
          <div className="FirstDiv1">Latest Post</div>
          <img
            src={MyImage}
            alt="horse"
            width={300}
            // height={100}
            className="myImage2"
          />
          <div className="innerFoot"></div>
          <h3>View our current Post in our blog</h3>
        </div>
        <div className="bodySectionChild2">
          <div className="FirstDiv1">Latest Project</div>
        </div>
        <div className="bodySectionChild3">
          <div className="FirstDiv1">Current Project</div>
        </div>
      </div>
    </div>
  );
}
