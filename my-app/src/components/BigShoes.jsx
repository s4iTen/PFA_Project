import React, { useRef, useEffect } from "react";
import * as THREE from 'three';
import { useLoader, useFrame, extend, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const BigShoes = ({ modelPath, scale = 0.5, position = [0, -10, 0] }) => {
  const ref = useRef();
  const spotLightRef = useRef();
  const groundRef = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const { camera } = useThree();

  const textureLoader = new THREE.TextureLoader();

  // Load the color map
  const colorTexture = textureLoader.load('Jordan_Texture/Color.png');
  const colorMaterial = new THREE.MeshStandardMaterial({ map: colorTexture, shadowMap: true });

  // Load the displacement map
  const displacementTexture = textureLoader.load('Jordan_Texture/Displacement.png');
  const displacementMaterial = new THREE.MeshStandardMaterial({ displacementMap: displacementTexture, shadowMap: true });

  // Load the normal map
  const normalTexture = textureLoader.load('Jordan_Texture/Normal.png');
  const normalMaterial = new THREE.MeshStandardMaterial({ normalMap: normalTexture, shadowMap: true });

  useEffect(() => {
    spotLightRef.current.castShadow = true;
    groundRef.current.receiveShadow = true;
  }, []);

  useFrame((state, delta) => (ref.current.rotation.y += 0.005));

  useEffect(() => {
    camera.position.set(0, 150, 100);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <spotLight
        ref={spotLightRef}
        position={[0, 10, 0]}
        intensity={1}
        angle={Math.PI / 4}
        penumbra={0.2}
        castShadow
      />

      <mesh
        ref={groundRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[0, 0]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={[scale, scale, scale]}
        castShadow
      />
    </>
  );
};

export default BigShoes;
