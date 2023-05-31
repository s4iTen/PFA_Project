import React from 'react';
import "../Styles/gallery.css";
import ns from "../assets/ns.png";
import ns1 from "../assets/ns1.png";

const Newseason = () => {
  return (
    <div className='newseason'>
      <div className='nsitem'>
        <img src={ns} className='nsimg' />
      </div>

      <div className='nsitem'>
        <h3 className='nstitles'>New Summer Arrivals</h3>
        <h1 className='nstitle'>New Season</h1>
        <h1 className='nstitle'>New Collection</h1>
        <a href='#product'>
          <button className='nsbutton'>CHOOSE YOUR STYLE</button>
        </a>
      </div>
      <div className='nsitem'>
        <img src={ns1} className='nsimg' />
      </div>
    </div>
  );
};

export default Newseason;
