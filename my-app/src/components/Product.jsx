import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useStateContext } from "../context/StateContext";
import "../Styles/globals.css";
import { toast, Toaster } from "react-hot-toast";

SwiperCore.use([Navigation]);

const Product = () => {
  const { onAdd, cartItems } = useStateContext();

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
    const quantity = getQuantity(product);
    toast.success(`${quantity} ${product.name} Added To The Cart.`);
  };

  const getQuantity = (product) => {
    const cartItem = cartItems.find((item) => item._id === product._id);
    return cartItem ? cartItem.quantity : 1;
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Toaster />
      <Swiper navigation slidesPerView={4} spaceBetween={25}>
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="snip1418">
              <a href={`/product/${product._id}`}>
                <img
                  src={urlFor(product.image[0]).url()}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="img"
                />

                <h1>{product.name}</h1>
              </a>
              <button
                data-text="Awesome"
                className="button"
                onClick={() => addToCart(product)}
              >
                <span className="actual-text" style={{ cursor: "pointer", color: "black" }}>
                  &nbsp;Go Add&nbsp;
                </span>
                <span
                  className="hover-text"
                  aria-hidden="true"
                  style={{ cursor: "pointer" }}
                >
                  &nbsp;cart&nbsp;
                </span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
