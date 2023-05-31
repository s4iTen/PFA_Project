import React from 'react';
import NavBar from '../components/NavBar';
import ModelViewer from '../components/Shoes';
import NikeShoesPage from '../components/Data_shoes';
import Gallery from '../components/Gallery';
import Newseason from '../components/Newseason';
import Footer from '../components/Footer';


const Main = () => {
  return (
    <div>
      <NavBar/>
      <ModelViewer scale="40" modelPath={"/Jordan.glb"} style={{ pointerEvents: "none" }}/>
      <NikeShoesPage />
      <Gallery />
      <Newseason />
      <Footer />
    </div>
  );
};

export default Main;
