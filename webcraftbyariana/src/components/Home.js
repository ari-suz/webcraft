import React from "react";
import "../css/main.css";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <div className="homeDiv">
          <h2>Beautiful web design, customized to your vision.</h2>
        </div>
        <div className="homeDiv">
          <img className="homeImg" src={home1} alt="laptop" />
        </div>
      </div>
      <div className="homePage">
        <div className="homeDiv">
          <img className="homeImg" src={home2} alt="laptop" />
        </div>
        <div className="homeDiv">
          <h2>Increase your onlince presence and reach more customers with WebCraft by Ariana.</h2>
        </div>
      </div>
      <div className="homePage">
        <div className="homeDiv">
          <h2>Work directly with an engineer to build the website that suites your and your customers' needs.</h2>
        </div>
        <div className="homeDiv">
          <img className="homeImg" src={home3} alt="laptop" />
        </div>
      </div>
    </>
  );
};

export default Home;