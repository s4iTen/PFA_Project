import React from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase";
import { useState } from "react";
import "../Styles/Menu.css";
import "../Styles/Style.scss";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { AiOutlineShopping } from "react-icons/ai";
import sanityClient from '@sanity/client';
import '../Styles/globals.css';


const sanityConfig = {
  projectId: 'your-project-id',
  dataset: 'your-dataset',
};
const client = sanityClient(sanityConfig);


const NavBar = () => {


  const user = auth.currentUser;
  const AdminId = 'VFDBZoqI6Ehi4nAF5aauCVOK4P52';
  let userId;

  if (user) {
    userId = user.uid;
    // Do something with the user ID
  }
  const handleAddItem = () => {
      window.location.href='https://sanity-project-iota.vercel.app/'
    };

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const isLoggedIn = !!localStorage.getItem("current user");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("current user");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigateToLogin = () => {
    window.location.href = "/Login";
  };

  const navigateToSignUp = () => {
    window.location.href = "/SignUp";
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const dropdownClass = isMenuOpen
    ? "dropdown-content open"
    : "dropdown-content";
  return (
    <div className="navbar">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      <div className="ul">
        <ul>
          <li>
            {" "}
            <a
              onClick={() => {
                window.location.href = "/";
              }}
            >
              home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/Design";
              }}
            >
              Design
            </a>{" "}
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Contact Us
            </a>{" "}
          </li>
          <li>
            <a
              onClick={() => {
                window.location.href = "/";
              }}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
        {showCart && <Cart />}
      <div className="LoginSignup">
        {!isLoggedIn ? (
          <div>
            <button onClick={navigateToLogin}>Log In</button> 
            <button onClick={navigateToSignUp}>Sign Up</button>
          </div>
        ) : (
          <div className="userContainer">
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              className="menu"
            >
              <motion.button
                className="menuButton"
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                Menu
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <svg width="15" height="15" viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </motion.button>
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                className="menuDrop"
              >
                <motion.li
                  onClick={() => {
                    window.location.href = "/MyShoes";
                  }}
                  variants={itemVariants}
                  className="menuDropLi"
                >
                  My Shoes{" "}
                </motion.li>
                {AdminId === userId && (
                  <motion.li variants={itemVariants} className="menuDropLi" onClick={handleAddItem}>
                    Add Item
                  </motion.li>
                )}
                <motion.li variants={itemVariants} className="menuDropLi">
                  Item 3{" "}
                </motion.li>
                <motion.li variants={itemVariants} className="menuDropLi">
                  Item 4{" "}
                </motion.li>
                <motion.li onClick={handleSignOut} variants={itemVariants} className="menuDropLi">
                Sign Out{" "}
                </motion.li>
              </motion.ul>
            </motion.nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
