import React, { useState } from "react";
import Popup from "./popup";
import { Outlet, Link } from "react-router-dom";
import Ecommerce from "./img/ECOMERCE.jpg";
import Dice from "./img/Dice.jpg";
import GameApp from "./img/gameApp.jpg";
import Pokemon from "./img/Pokemon.jpg";
import Todo from "./img/Todo.jpg";
import Calculator from "./img/Calculator.jpg";
import Footer from "./footer";
import { BiCheckboxChecked } from "react-icons/bi";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Portfolio() {
  const images = [
    "./imgpage/ECOMERCE.jpg",
    "./imgpage/Calculator.jpg",
    "./imgpage/Dice.jpg",
    "./imgpage/gameApp.jpg",
    "./imgpage/Pokemon.jpg",
    "./imgpage/Todo.jpg",
  ];
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className="portf">
    <h2>Projects Done!</h2>
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <input
            type="button"
            value="E-Commerce Website"
            onClick={togglePopup}
          />
          {isOpen && <Popup
            content={<>
              <b>About the E-Commerce Store!</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="https://github.com/marvy896/E-commerce-Store">Visit the code</a>
            </>}
            handleClose={togglePopup}
          />}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
        <input
            type="button"
            value="Calculator App"
            onClick={togglePopup}
          />
          {isOpen && <Popup
            content={<>
              <b>About the Calculator App!</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="https://github.com/marvy896/Calculator">Visit the code</a>
            </>}
            handleClose={togglePopup}
          />}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <input
            type="button"
            value="Dice Game"
            onClick={togglePopup}
          />
          {isOpen && <Popup
            content={<>
              <b>About the Dice Game!</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="https://github.com/marvy896/E-commerce-Store">Visit the code</a>
            </>}
            handleClose={togglePopup}
          />}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[3]})` }}>
        <input
            type="button"
            value="Games App"
            onClick={togglePopup}
          />
          {isOpen && <Popup
            content={<>
              <b>About the Games!</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="https://github.com/marvy896/Game-App">Visit the code</a>
            </>}
            handleClose={togglePopup}
          />}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[4]})` }}>
        <input
            type="button"
            value="Pokemon List"
            onClick={togglePopup}
          />
          {isOpen && <Popup
            content={<>
              <b>About Pokemon List!</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="https://github.com/marvy896/Pokemon">Visit the code</a>
            </>}
            handleClose={togglePopup}
          />}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[5]})` }}>
        <input
            type="button"
            value="ToDo App"
            onClick={togglePopup}
          />
          {isOpen && <Popup
            content={<>
              <b>About the ToDo!</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="https://github.com/marvy896/ToDo-List-">Visit the code</a>
            </>}
            handleClose={togglePopup}
          />}
        </div>
      </div>
    </Slide>
    </div>
    <Footer />
    </>
  );
}
