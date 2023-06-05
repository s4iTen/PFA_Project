import React, { useEffect, useState, useRef, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import * as THREE from 'three';
import '../Styles/SavedCard.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { proxy } from "valtio";
import { useSnapshot } from "valtio";

const state = proxy({
  current: null,
  items: {
    TheEntireShoes: "#ffffff",
    Laces006: "#ffffff",
    Nike_Logo_right001: "#ffffff",
    Ticket: "#ff0000",
    Shoe_Flap002: "#ffffff",
    BackOftheShoes: "#ffffff",
    TheFrontOfTheShoes: "#fffffff",
    BottomOfTheShoes: "#ffffff",
    theFrontFromINside: "#ffffff",
    BackLeftAndRight: "#ffffff",
  },
});

function Mesh({ colorDictionary, ...props }) {
  const { geometry, material, color, ...rest } = props;

  return (
    <mesh geometry={geometry} material={material} {...rest}>
      <meshStandardMaterial attach="material" color={colorDictionary[color]} />
    </mesh>
  );
}

function Shoes({ colorDictionary}) {
  const { nodes, materials } = useGLTF("/AirComp.glb");
  const pivot = useRef(new THREE.Object3D()); // Create a ref for the pivot

  return (
    <group ref={pivot} position={[4, 0, 0]} rotation={[0.8, 0, 0]} scale={[1, 2, 2]}>
      <Mesh
        geometry={nodes.BackLeftAndRight.geometry}
        material={materials["default"]}
        color="BackLeftAndRight"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.BackOftheShoes.geometry}
        material={materials["default"]}
        color="BackOftheShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.BottomOfTheShoes.geometry}
        material={materials["default"]}
        color="BottomOfTheShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.Laces.geometry}
        material={materials["default"]}
        color="Laces006"
        className="shoe-mesh"
        position={[-4.42, 0.97, 0.72]}
        rotation={[-0.68, 1.53, 1.15]}
        scale={[8.56, 8.56, 8.56]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.Nike_Logo_right.geometry}
        material={materials["default"]}
        color="Nike_Logo_right001"
        className="shoe-mesh"
        position={[-5.05, 0.83, -1.87]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
        scale={[8.38, 8.38, 8.38]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.Shoe_Flap.geometry}
        material={materials["default"]}
        color="Shoe_Flap002"
        className="shoe-mesh"
        position={[-4.42, 0.52, -0.24]}
        rotation={[-2.09, 1.42, -0.94]}
        scale={[-6.8, -6.8, -6.8]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.TheEntireShoes.geometry}
        material={materials["default"]}
        color="TheEntireShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.theFrontFromINside.geometry}
        material={materials["default"]}
        color="theFrontFromINside"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.TheFrontOfTheShoes.geometry}
        material={materials["default"]}
        color="TheFrontOfTheShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
        colorDictionary={colorDictionary}
      />
      <Mesh
        geometry={nodes.Ticket.geometry}
        material={materials["default"]}
        color="Ticket"
        className="shoe-mesh"
        position={[-4.41, 0.21, -0.01]}
        rotation={[0, 1.51, 0]}
        scale={[8.82, 8.82, 8.82]}
        colorDictionary={colorDictionary}
      />
    </group>
  );
}

const SavedCard = ({  width, height }) => {
  const [colorDictionary, setColorDictionary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const db = getFirestore();
          const querySnapshot = await getDocs(collection(db, "color-dictionaries"));
          const colorDictionaries = querySnapshot.docs.map((doc) => doc.data());
          const mergedColorDictionary = {};
          colorDictionaries.forEach((dictionary) => {
            Object.entries(dictionary).forEach(([key, value]) => {
              mergedColorDictionary[key] = value;
            });
          });
          setColorDictionary(mergedColorDictionary);
          // console.log(mergedColorDictionary)
          setIsLoading(false);
        } catch (error) {
          console.error("Error retrieving color dictionaries: ", error);
        }
      };
  
      fetchData();
    }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!colorDictionary) {
    return <div>Error: Color dictionary not found.</div>;
  }

  return (
    <div className="Shoe-Container">
      <div className="canvas-wrapper">
        <Canvas dpr={[1, 2]} camera={{ position: [6, 0, 0 ] }} >
          <OrbitControls enableZoom={false} enableRotate={false} />
          <Suspense fallback={null}>
            <Shoes colorDictionary={colorDictionary} width={width} height={height}/>
          </Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={0.6} />
        </Canvas>
        <div className="description">
          <h1>{colorDictionary.shoeName}</h1>
          <h2>150 dt</h2>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
