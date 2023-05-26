import React, { useRef, useState, useEffect } from "react";
import * as THREE from 'three';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const BigShoes = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  const textureLoader = new THREE.TextureLoader();

    // Load the color map
    const colorTexture = textureLoader.load('Jordan_Texture/Color.png');
    const colorMaterial = new THREE.MeshStandardMaterial({ map: colorTexture });

    // Load the displacement map
    const displacementTexture = textureLoader.load('Jordan_Texture/Displacement.png');
    const displacementMaterial = new THREE.MeshStandardMaterial({ displacementMap: displacementTexture });

    // Load the normal map
    const normalTexture = textureLoader.load('Jordan_Texture/Normal.png');
    const normalMaterial = new THREE.MeshStandardMaterial({ normalMap: normalTexture });

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
      />
    </>
  );
};

export default BigShoes;