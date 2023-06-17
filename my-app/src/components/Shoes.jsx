import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BigShoes from "./BigShoes";
import "../Styles/ShoesContainer.css";

const ModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0.8] }) => {
  return (
    <div className="ShoesContainer">
      <div className="ShoesTextContainer">
        <div className="card">
          <h1>Welcome to Nikez Store</h1>
          <p>
            Your first destination for premium footwear and cutting-edge style.
          </p>
          <br />
          <p>
            Customize your own Nike Shoes! Unleash your creativity and design a
            pair that's uniquely yours. Click below to create your own design
            and make a style statement with Nike.
          </p>
          <hr />
          <button
            onClick={() => {
              window.location.href = "/Design";
            }}
          >
            Customize Your Own Shoes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
