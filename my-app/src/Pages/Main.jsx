import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SavedCardList from "../components/SavedCardList";
import Product from "../components/Product";
import HeroBanner from "../components/HeroBanner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shoesy from "../components/Shoes";
import ModelViewer from "../components/test";
const Main = () => {
  return (
    <div className="Content-Container">
      <ToastContainer />
      <NavBar />
      <ModelViewer
        scale="250"
        modelPath={"/deki.glb"}
        style={{ pointerEvents: "none" }}
      />
      {/* <Shoesy /> */}
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
