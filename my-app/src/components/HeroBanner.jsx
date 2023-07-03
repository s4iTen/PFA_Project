import React, { useState, useEffect } from "react";
import { client } from "../lib/client";
import '../Styles/banner.css';
import image1 from "../assets/ns1.png";
import image from "../assets/ns.png";
const Banner = () => {
  

  

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-left">
          <img src={image1} alt="" />
          <p>summer collection</p>
        </div>
        <div className="banner-right">
          <p>summer collection</p>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
