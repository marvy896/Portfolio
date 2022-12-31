import React from "react";
import Marvel from "./img/marvel.jpg";
import Footer from "./footer";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="About">
          <img src={Marvel} className="MarvelImg" />
          <div className="about-info">
            <h2>Marvel</h2>
            <p1>Front End Developer</p1>
          </div>
          <div className="about-info2">
            <button>Email</button>
          </div>
        </div>
        <div className="about-info3">
          <h3>About</h3>
          <p2>
            I create awesome stuffs on the client side and that's because <br />{" "}
            I love the intersection of solving problems for the customers, while
            making their User Experience seamless. <br /> Subsequently, I hope
            to lean towards A.I and be a specialist
            <br /> to help people in their daily interactions with technology.
          </p2>
          <h2>Interests</h2>
          <p2>
            💬 My current stacks are HTML, CSS, Bootstrap, Tailwind and
            Javascript
            <br />
            📫 How to reach me - <span>
              onyex896@gmail.com / 07044887255
            </span>{" "}
            <br />
            🚀 I'm currently working on Building simple programmes on the client
            side <br />
            🧠 I use React and Object Oriented Programming <br />
            🤝 I'm open to collaborating on Beginner Open source projects <br />
            ⚡ Fun fact: I Love Classicals and play the Piano
          </p2>
        </div>
      </div>
      <Footer />
    </>
  );
}
