import React from 'react';
import { signOut } from 'firebase/auth';
import auth from '../firebase';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const isLoggedIn = !!localStorage.getItem('current user'); // Check if the user is logged in

  const navigateToLogin = () => {
    history.push('/Login');
  };

  const navigateToSignUp = () => {
    history.push('/SignUp');
  };
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
  

  return (
    <div className='navbar'>
      <div>
        <a href='#'>logo</a>
        <ul>
          <li>Home</li>
          <li>Design</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className='LoginSignup'>
        <button onClick={navigateToLogin}>Log In</button>
        <button onClick={navigateToSignUp}>Sign Up</button>
      </div>
      {isLoggedIn && (
        <div className='LoginSignup'>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;