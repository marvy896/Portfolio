import React from "react";
import DateObject from "react-date-object";


export default function Body() {
  let date1 = new DateObject();
  let date = new Date();
  let hours = date.getHours();
  let timeofDay
    if (hours < 12) {
      timeofDay = "morning"
  } else if (hours < 17) {
    timeofDay = "Afternoon"
  } else {
    timeofDay = "Evening";
  }

  return (
    <div className="bodyDivMain">
      <div className="bodyDiv">
        <div className="FirstDiv1">Welcome!</div>
        <div className="FirstDiv1">{date1.format()}</div>
        <div className="FirstDiv1">Good {timeofDay}</div>
      </div>
      <div>
        <h2>
        Creating Awesome Stuffs On The Client Side while Solving Problems For The Customers, While Making Their User Experience Seamless.
Subsequently, We simply provide Solutions to your day to day Activities.
        </h2>
      </div>
    </div>
  );
}
