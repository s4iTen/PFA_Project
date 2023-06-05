import React, { useEffect, useState } from "react";
import { firestore } from './firebase';
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
        const querySnapshot = await getDocs(collection(db, "color-dictionaries"));
        const colorDictionaries = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setColorDictionaries(colorDictionaries);
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

  return (
    <div>
      <Swiper navigation pagination={{ clickable: true }}>
        {colorDictionaries.map((colorDictionary) => (
          <SwiperSlide key={colorDictionary.id}>
            <SavedCard colorDictionary={colorDictionary} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SavedCardList;
