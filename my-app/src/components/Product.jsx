import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useStateContext } from "../context/StateContext";
import "../Styles/globals.css"

SwiperCore.use([Navigation]);

const Product = () => { 
  const { onAdd } = useStateContext();
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch('*[_type == "product"]');
        setProducts(result);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    onAdd(product, 1);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  
  return (
    <Swiper navigation slidesPerView={2} spaceBetween={30}>
      {products.map((product) => (
        <SwiperSlide key={product._id}>
          <a href={`/product/${product._id}`}>
            <img
              src={urlFor(product.image[0]).url()}
              alt={product.name}
              width={250}
              height={250}
              className="product-image"
            />
            <h1>{product.name}</h1>
          </a>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Product;
