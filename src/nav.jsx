import React from "react";
import { Outlet, Link } from "react-router-dom";
import MyImage from "./img/logo1.jpg";
import Twitter from "./img/twitter.png";
import WhatsApp from "./img/whatsapp.png";
import mail from "./img/mail.png";
import { Transition } from "react-transition-group";


  class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.duration = 10000;
      this.defaultStyle = {
        transition: `opacity ${this.duration}ms ease-in-out`,
        opacity: 0,
      };
      this.transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
      };
      this.state = {
        inProp: true,
      };
      setInterval(() => {
        this.setState((state, props) => {
          let newState = {
            inProp: !state.inProp,
          };
          return newState;
        });
      }, 500);
    }
    render() {
  return (
    <Transition in={this.state.inProp} timeout={this.duration}>
        {(state) => (
    <div className="MainHead"style={{
      ...this.defaultStyle,
      ...this.transitionStyles[state],
    }}
  >
      <div className="headDiv">
        <div className="headDiv1">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="FirstDiv">Home Page</div>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
          <div className="SecoundDiv">PortFolio</div>
          </Link>
        </div>
        <div className="contactDiv">
          <img src={WhatsApp} width={40} height={30} className="Contact" />
          <img src={Twitter} width={40} height={30} className="Contact" />
          <img src={mail} width={40} height={30} className="Contact" />
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
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div className="FirstDiv">About me</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
   )}
   </Transition>
 );
}

}
export default Nav;