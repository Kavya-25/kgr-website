import React from "react";
import "./Home.scss";
import {BsChevronDoubleDown} from 'react-icons/bs'

export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-container">
        <h2>We work for quality</h2>
        <h1>Craftsmanship built to scale</h1>
      </div>
      {/* <BsChevronDoubleDown className="down"/> */}
    </div>
  );
};
