import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import ModelViewer from "../components/Shoes";
import Footer from "../components/Footer";
import SavedCardList from "../components/SavedCardList";
import Product from "../components/Product";
import HeroBanner from "../components/HeroBanner";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  return (
    <div className="Content-Container">
      <ToastContainer />
      <NavBar />
      <ModelViewer
        scale="40"
        modelPath={"/Jordan.glb"}
        style={{ pointerEvents: "none" }}
      />
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
