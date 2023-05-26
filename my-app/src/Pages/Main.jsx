import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import ModelViewer from '../components/Shoes';
import NikeShoesPage from '../components/Data_shoes';
import Gallery from '../components/Gallery';
import Newseason from '../components/Newseason';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <NavBar/>
      <NikeShoesPage />
      <Gallery />
      <Newseason />
      <Footer />
    </div>
  );
};

export default Main;
