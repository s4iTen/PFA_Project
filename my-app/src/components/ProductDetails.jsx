import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../lib/client";
import NavBar from "./NavBar";
import "../Styles/globals.css";
import { useStateContext } from "../context/StateContext";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity] = useState(1);
  const [index, setIndex] = useState(0);
  const [otherProducts, setOtherProducts] = useState([]);
  const { decQty, incQty, qty } = useStateContext();
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "product" && _id == "${id}"]`
        );
        if (result.length === 1) {
          setProduct(result[0]);
          console.log(result);
        } else {
          console.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    const fetchOtherProducts = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "product" && _id != "${id}"]`
        );
        setOtherProducts(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching other products:", error);
      }
    };

    fetchProduct();
    fetchOtherProducts();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleCheckout = async () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    try {
      const lineItems = [
        {
          name: `${product.name} - Size: ${selectedSize}`,
          price: product.price,
          quantity: qty,
        },
      ];

      const response = await axios.post("http://localhost:3001/api/server", {
        line_items: lineItems,
      });

      const { data } = response;
      if (data && data.id) {
        window.location = data.url;

        toast.success("Thank you for your purchase!", {
          autoClose: 8000,
        });
      } else {
        console.error("Invalid response from server");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div>
        <ToastContainer />
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img
                src={urlFor(product.image && product.image[index])}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {product.image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{product.name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h2>Details: </h2>
            <p>{product.details}</p>
            <p className="price">{product.price}DT</p>
            <div className="sizes">
              <h2>Sizes:</h2>
              <select value={selectedSize} onChange={handleSizeChange}>
                <option value="">Select a size</option>
                {product.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="quantity">
              <h2>Quantity:</h2>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <button
              data-text="Awesome"
              className="button"
              onClick={handleCheckout}
            >
              {" "}
              <span className="actual-text" style={{ cursor: "pointer" }}>
                &nbsp;Buy NoW&nbsp;
              </span>
              <span
                className="hover-text"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              >
                &nbsp;Nikez&nbsp;
              </span>
            </button>
          </div>
        </div>
        <div className="maylike-products-wrapper">
          <div className="marquee">
            <h2>You may also like</h2>
            <div className="maylike-products-container track">
              {otherProducts.map((otherProduct) => (
                <div key={otherProduct._id}>
                  <a href={`/product/${otherProduct._id}`}>
                    <img
                      src={urlFor(
                        otherProduct.image && otherProduct.image[0]
                      ).url()}
                      alt={otherProduct.name}
                      width={250}
                      height={250}
                      style={{ borderRadius: "15px" }}
                    />
                    <h1>{otherProduct.name}</h1>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
