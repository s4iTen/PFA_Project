import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { Toast, toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const CartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    Remove,
  } = useStateContext();

  return (
    <div className="cart-wrapper" ref={CartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your List</span>
          <span className="cart-num-items">{totalQuantities} NIKEZ</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your Bag Is Emty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        {/*call the items with the id*/}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                {item?.image && item.image.length > 0 && (
                  <img
                    src={urlFor(item?.image[0]).url()}
                    className="cart-product-image"
                  />
                )}
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}DT</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => Remove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Total:</h3>
                <h3>{totalPrice}DT</h3>
                <div className="btn-container">
                  <button type="button" className="btn" onClick="">
                    Pay With Card
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
