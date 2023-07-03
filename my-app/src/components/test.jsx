import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BigShoes from "./BigShoes";
import '../Styles/Nikez.css'
import "../Styles/ShoesContainer.css";

const ModelViewer = ({ modelPath, scale = 100, position = [0, 0, 0.8] }) => {
  return (
    <div className="Model-Container">
    <Canvas className="NikezModel">
      <ambientLight intensity={0.7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1}/>
      <pointLight position={[-10, -10, -10]} intensity={1}/>
      <Suspense fallback={null}>
        <BigShoes
          modelPath={modelPath}
          scale={scale}
          position={position}
        />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Suspense>
    </Canvas>
    </div>
  );
};

export default ModelViewer;
