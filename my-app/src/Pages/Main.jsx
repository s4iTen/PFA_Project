import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import ModelViewer from '../components/Shoes'

const Main = () => {
  return (
    <div>
        <NavBar/>
        <Card/>
        <div>
        <ModelViewer scale="40" modelPath={"/AirForce.glb"} />
        </div>
    </div>
        
  )
}

export default Main