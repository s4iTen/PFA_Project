import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import ModelViewer from '../components/Shoes'

const Main = () => {
  return (
    <div>
        <NavBar/>
        <ModelViewer scale="40" modelPath={"/nike_shoes.glb"} />
        <Card/>
        <div>
        </div>
    </div>
        
  )
}

export default Main