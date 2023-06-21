import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import ModelViewer from "../components/Shoes";
import Footer from "../components/Footer";
import SavedCardList from "../components/SavedCardList";
import Product from "../components/Product";
import HeroBanner from "../components/HeroBanner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shoesy from "../components/Shoes";


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
