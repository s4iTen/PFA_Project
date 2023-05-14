import React from 'react';
import { signOut } from 'firebase/auth';
import auth from '../firebase';


const LoggedInComponent = () => {
  return (
    <div>
      {/* Content of the component */}
    </div>
  );
};

const NavBar = () => {
  const isLoggedIn = !!localStorage.getItem('current user');

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('current user');
        window.location.href = '/Login';
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
      {isLoggedIn && <LoggedInComponent />}
      <div className='LoginSignup'>
        {isLoggedIn ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <>
            <button onClick={navigateToLogin}>Log In</button>
            <button onClick={navigateToSignUp}>Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;