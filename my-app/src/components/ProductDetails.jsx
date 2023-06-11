import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../lib/client";
import NavBar from "./NavBar";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

    fetchProduct();
  }, [id]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Implement the logic to add the product to the cart
    // You can use a state or a separate cart management system
    console.log("Product added to cart:", product);
    console.log("Selected quantity:", quantity);
  };

  const handleBuyNow = () => {
    // Implement the logic for buying the product
    // You can redirect the user to a checkout page or process the purchase here
    console.log("Buying product:", product);
    console.log("Selected quantity:", quantity);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <h1>{product.name}</h1>
      <img src={urlFor(product.image[0]).url()} alt={product.name} />
      <h3>{product.price}DT</h3>
      <h3>{product.details}</h3>

      <div>
        <label htmlFor="quantity">Quantity:</label>
        <button onClick={handleQuantityDecrease}>-</button>
        <span id="quantity">{quantity}</span>
        <button onClick={handleQuantityIncrease}>+</button>
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleBuyNow}>Buy Now</button>

      {product.image.slice(1).map((image, index) => (
        <img
          key={index}
          src={urlFor(image).url()}
          alt={`${product.name} - Image ${index + 4}`}
        />
      ))}
    </div>
  );
};

export default ProductDetails;
