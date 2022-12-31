import React from "react";
import { Outlet, Link } from "react-router-dom";
import Ecommerce from "./img/ECOMERCE.jpg";
import Dice from "./img/Dice.jpg";
import GameApp from "./img/gameApp.jpg";
import Pokemon from "./img/Pokemon.jpg";
import Todo from "./img/Todo.jpg";
import Calculator from "./img/Calculator.jpg";
import Footer from "./footer";

export default function Portfolio() {
  return (
    <div>
      <h2>Projects Done!</h2>
      <div>
        <div className="portfolio">
          <div className="pt">
            <a href="https://github.com/marvy896/E-commerce-Store" className="FirstDiv1">E-commerce</a>
            <img src={Ecommerce} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <a href="https://github.com/marvy896/Tic-Tac-Toe-Game" className="FirstDiv1">Tic Tac Toe</a>
            <img src={Dice} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <a href="https://github.com/marvy896/Pokemon" className="FirstDiv1">Pokemon</a>
            <img src={Pokemon} width={150} height={100} className="Contact" />
          </div>
        </div>
        <div className="portfolio">
          <div className="pt">
            <a href="https://github.com/marvy896/Game-App" className="FirstDiv1">Game-App</a>
            <img src={GameApp} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <a href="https://github.com/marvy896/ToDo-List-" className="FirstDiv1">ToDo-List-</a>
            <img src={Todo} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <a href="https://github.com/marvy896/Calculator" className="FirstDiv1">Calculator</a>
            <img src={Calculator} width={150} height={100} className="Contact" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
