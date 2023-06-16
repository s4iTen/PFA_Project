import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../lib/client";
import NavBar from "./NavBar";
import "../Styles/globals.css";
import { useStateContext, addToCart } from "../context/StateContext";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);
  const [otherProducts, setOtherProducts] = useState([]);
  const { decQty, incQty, qty, onAdd } = useStateContext();
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useStateContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "product" && _id == "${id}"]`
        );
        if (result.length === 1) {
          setProduct(result[0]);
          console.log(result);
          if (result[0].sizes && result[0].sizes.length > 0) {
            setSelectedSize(result[0].sizes[0]);
          }
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

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyNow = () => {
    console.log("Buying product:", product);
    console.log("Selected quantity:", quantity);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <NavBar />
      <div>
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
            <div className="sizes">
              <h2>Sizes:</h2>
              <div className="size-options">
                {product.sizes &&
                  product.sizes.map((size, i) => (
                    <button key={i} className="size-option">
                      {size}
                    </button>
                  ))}
              </div>
            </div>
            <button
              data-text="Awesome"
              className="button"
              onClick=""
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
    </div>
  );
};

export default ProductDetails;
