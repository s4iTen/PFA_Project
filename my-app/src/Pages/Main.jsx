import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import ModelViewer from "../components/Shoes";
import Footer from "../components/Footer";
import SavedCardList from "../components/SavedCardList";
import Product from "../components/Product";
import HeroBanner from "../components/HeroBanner";
import { ToastContainer, toast } from "react-toastify";
import { Canvas } from "@react-three/fiber";
import "react-toastify/dist/ReactToastify.css";
import Shoesy from "../components/Shoes";
import Spline from "@splinetool/react-spline";
import { OrbitControls } from "@react-three/drei";

function New() {
  return (
    <div className="">
      <Spline scene="https://prod.spline.design/h5c2jh4NVwguAJsC/scene.splinecode" />
    </div>
  );
}
const Main = () => {
  return (
    <div className="Content-Container">
      <ToastContainer />
      <NavBar />
      <Shoesy />
      <div>
        <SavedCardList />
      </div>
      <HeroBanner />
      <Product />
      <Footer />
    </div>
  );
};

export default Main;
