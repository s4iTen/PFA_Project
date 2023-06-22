import React from 'react'
import { Application } from '@splinetool/runtime';

const Spline = () => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/0b4hpSNsO8A6yXBQ/scene.splinecode');
  return (
    <div id='canvas3d'></div>
  )
}

export default Spline