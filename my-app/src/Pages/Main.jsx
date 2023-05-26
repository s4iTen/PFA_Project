import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import ModelViewer from '../components/Shoes'

const Main = () => {
  return (
    <div>
        <NavBar/>
        <ModelViewer scale="40" modelPath={"/Jordan.glb"} />
        <Card/>
    </div>
        
  )
}

export default Main