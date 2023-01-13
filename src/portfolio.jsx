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
    Ecommerce,
    Calculator,
    Dice,
    GameApp,
    Pokemon,
    Todo,
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
              <p>The E-Commerce website was built with TypeScript, React, NodeJs, HTML and CSS. its a typical Store where Buyers can get items onlione, it has features like Carts, Search Button, Checkout pages etc.</p>
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
              <p>The Calculator was built with HTML, JavaScript and CSS. It has features to store already calculated figures, all the features of a typical calculator.</p>
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
              <b>The Tic-Tac-Toe</b>
              <p>The Tic-Tac-Toe is a game developed with JavaScript, HTML and CSS. It can be played by two persons and its Fun!</p>
              <a href="https://github.com/marvy896/Tic-Tac-Toe-Game">Visit the code</a>
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
              <p>The Game App was Developed with JavaScript, React, HTML and CSS. It contains many games like Dice Game, MatchMaker for dating, Quiz App, Tic-Tac and TODO list etc.</p>
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
              <p>The Pokemon list was built with React, JavaScript, CSS and Html and API fetch. THe list was gotten from the Pokemon APi and it displays all the features of each Pokemon amd their images.</p>
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
              <p>The Todo was built with JavaScript, CSS and Html, it handles the work of a typical ToDo list with features of Delete, update and Create</p>
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
