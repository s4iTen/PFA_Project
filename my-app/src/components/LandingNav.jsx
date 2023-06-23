import React from 'react'
import '../Styles/LandingNav.css'

const LandingNav = () => {
    const login = () => {
        window.location.href = "/login";
      };
    
      const signup = () => {
        window.location.href = "/signup";
      };
  return (
    <div className='LandingNav'>
        <ul>
            <img src="/logo.png" alt="logo" />
            <li>Home</li>
            <li>Design</li>
            <li>Contact</li>
        </ul>
        <button onClick={login} className='navButton'>Login</button>
        <button onClick={signup} className='navButton'>signup</button>
    </div>
  )
}

export default LandingNav