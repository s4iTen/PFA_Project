import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import shoeData from "../data/shoes.json";
import "../Styles/card.css";
import "swiper/css";
import "swiper/css/navigation";


// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);

const NikeShoesPage = () => {
  return (
    <div>
      <h2>Nike Shoes</h2>
      <Swiper
        navigation
        slidesPerView={4}
        spaceBetween={10}
      >
        {shoeData.map((shoe) => (
          <SwiperSlide key={shoe.title}>
            <div className="glass-card">
              <img className="card-image" src={shoe.imageSrc} alt={shoe.title} />
              <div className="card-content">
                <p className="card-title">{shoe.title}</p>
                <div button-borders>
                <button className="primary-button">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
  );
};

export default NikeShoesPage;
