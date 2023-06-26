import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BigShoes from "./BigShoes";
import "../Styles/ShoesContainer.css";

const ModelViewer = ({ modelPath, scale = 100, position = [0, 0, 0.8] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <BigShoes
          modelPath={modelPath}
          scale={scale}
          position={position}
          rotation={[Math.PI, 0, 0]}
        />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
