import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SavedCard from "./SavedCard";

SwiperCore.use([Navigation, Pagination]);

const SavedCardList = () => {
  const [colorDictionaries, setColorDictionaries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const colRef = collection(db, "color-dictionaries");
        const docsSnap = await getDocs(colRef);

        const dictionaries = [];
        docsSnap.forEach((doc) => {
          dictionaries.push(doc.data());
        });

        setColorDictionaries(dictionaries);
        setIsLoading(false);
      } catch (error) {
        console.error("Error retrieving color dictionaries: ", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (colorDictionaries.length === 0) {
    return <div>No color dictionaries found.</div>;
  }

  return (
    <div className="swiper-container">
      <h1>Designed Shoes:</h1>
      <Swiper
        navigation
        slidesPerView={4} // Display 4 cards per view
        spaceBetween={10} // Space between each card
      >
        {colorDictionaries.map((dictionary, idx) => (
          <SwiperSlide key={idx}>
            <SavedCard colorDictionary={dictionary} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SavedCardList;
