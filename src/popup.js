import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="close-icon" onClick={props.handleClose}>x</div>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;