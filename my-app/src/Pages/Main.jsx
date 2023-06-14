import React from "react";
import NavBar from "../components/NavBar";
import ModelViewer from "../components/Shoes";
import Gallery from "../components/Gallery";
import Newseason from "../components/Newseason";
import Footer from "../components/Footer";
import SavedCardList from "../components/SavedCardList";
import Product from "../components/Product";
import auth from "../firebase";

const Main = () => {
  return (
    <div className="Content-Container">
      <NavBar />
      <ModelViewer
        scale="40"
        modelPath={"/Jordan.glb"}
        style={{ pointerEvents: "none" }}
      />
      <div>
        <SavedCardList />
      </div>

      <Product />
      <Newseason />
      <Footer />
    </div>
  );
};

export default Main;
