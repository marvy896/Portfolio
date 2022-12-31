import React from "react";
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
            <div className="FirstDiv1">E-commerce</div>
            <img src={Ecommerce} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <div className="FirstDiv1">Dice Game</div>
            <img src={Dice} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <div className="FirstDiv1">Pokemon</div>
            <img src={Pokemon} width={150} height={100} className="Contact" />
          </div>
        </div>
        <div className="portfolio">
          <div className="pt">
            <div className="FirstDiv1">Game-App</div>
            <img src={GameApp} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <div className="FirstDiv1">ToDo-List-</div>
            <img src={Todo} width={150} height={100} className="Contact" />
          </div>
          <div className="pt">
            <div className="FirstDiv1">Calculator</div>
            <img src={Calculator} width={150} height={100} className="Contact" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
