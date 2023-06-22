import React from 'react'


const Landing = () => {

    const home = () => {
        window.location.href='/Main'
      }
  return (
    <div>
        <button onClick={home}>Home</button>
    </div>
  )
}

export default Landing