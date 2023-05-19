import React from 'react';
import { signOut } from 'firebase/auth';
import auth from '../firebase';
import { useState } from 'react';
import { Helmet } from 'react-helmet';


const NavBar = () => {
  
  const isLoggedIn = !!localStorage.getItem('current user');
  
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      localStorage.removeItem('current user');
      window.location.href = '/';
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const navigateToLogin = () => {
    window.location.href = '/Login';
  };

  const navigateToSignUp = () => {
    window.location.href = '/SignUp';
  };

  return (
    <div className='navbar'>
      <div>
        <a href='/'>logo</a>
        <ul>
          <li>Home</li>
          <li>Design</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className='LoginSignup'>
        {!isLoggedIn ? (
          <>
            <button onClick={navigateToLogin}>Log In</button>
            <button onClick={navigateToSignUp}>Sign Up</button>
            
          </>
        ) : (
          <div className='userContainer'>
            <div className='userTools'>
              <ul>
                <li>Profile</li>
                <li>Likes</li>
                <button onClick={handleSignOut}>Sign Out</button>
              </ul>
            </div>
          <select name="" id="">
            <option value="" disabled>Settings</option>
            <option value="">Settings</option>
            <option value="">Settings</option>
            <option value="">Settings</option>
            <div className='dropdown'>
                  <ul>
                    <li>Settings</li>
                    <li>Account</li>
                    <li>Likes</li>
                  </ul>
                  </div>
          </select>
        
        <button onClick={handleSignOut}>Sign Out</button>
        </div>
  
        )}
      </div>
      </div>
  )
};

export default NavBar;
