import React from 'react';
import NavBar from '../components/NavBar';
import ModelViewer from '../components/Shoes';
import NikeShoesPage from '../components/Data_shoes';
import Gallery from '../components/Gallery';
import Newseason from '../components/Newseason';
import Footer from '../components/Footer';
import SavedCardList from '../components/SavedCardList';


const Main = () => {
  return (
    <div className='Content-Container'>
      <NavBar/>
      <ModelViewer scale="40" modelPath={"/Jordan.glb"} style={{ pointerEvents: "none" }}/>
      <SavedCardList />
      <NikeShoesPage />
      <Gallery />
      <Newseason />
      <Footer />
    </div>
  );
};

export default Main;
