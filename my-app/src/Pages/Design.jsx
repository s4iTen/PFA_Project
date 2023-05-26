import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import NavBar from "../components/NavBar";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import "../Styles/Design.css"

const state = proxy({
  current: null,
  items: {
    TheEntireShoes: "#ffffff",
    Laces006: "#ff0000",
    Nike_Logo_right001: "#ff0000",
    Ticket: "#ff0000",
    Shoe_Flap002: "#ff0000",
    BackOftheShoes: "#ffffff",
    TheFrontOfTheShoes: "#fffffff",
    BottomOfTheShoes: "#ffffff",
    theFrontFromINside: "#ffffff",
    BackLeftAndRight: "#ffffff",
  },
});

function Picker() {
  const snap = useSnapshot(state);

  const handleColorChange = (key, color) => {
    state.items[key] = color;
  };

  return (
    <div className="slider">
      {Object.entries(snap.items).map(([key, color]) => (
        <div key={key} className="input">
          <HexColorPicker
            className="picker"
            color={color}
            onChange={(newColor) => handleColorChange(key, newColor)}
          />
          <h1>{key}</h1>
        </div>
      ))}
    </div>
  );
}

function Mesh(props) {
  const snap = useSnapshot(state);
  const { geometry, material, color, ...rest } = props;

  return (
    <mesh geometry={geometry} material={material} {...rest}>
      <meshStandardMaterial attach="material" color={snap.items[color]} />
    </mesh>
  );
}

function Shoes(props) {
  const { nodes, materials } = useGLTF("/AirComp.glb");
  const snap = useSnapshot(state);

  return (
    <group {...props} dispose={null}>
      <Mesh
        geometry={nodes.BackLeftAndRight.geometry}
        material={materials["default"]}
        color="BackLeftAndRight"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
      />
      <Mesh
        geometry={nodes.BackOftheShoes.geometry}
        material={materials["default"]}
        color="BackOftheShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
      />
      <Mesh
        geometry={nodes.BottomOfTheShoes.geometry}
        material={materials["default"]}
        color="BottomOfTheShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
      />
      <Mesh
        geometry={nodes.Laces.geometry}
        material={materials["default"]}
        color="Laces006"
        className="shoe-mesh"
        position={[-4.42, 0.97, 0.72]}
        rotation={[-0.68, 1.53, 1.15]}
        scale={[8.56, 8.56, 8.56]}
      />
      <Mesh
        geometry={nodes.Nike_Logo_right.geometry}
        material={materials["default"]}
        color="Nike_Logo_right001"
        className="shoe-mesh"
        position={[-5.05, 0.83, -1.87]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
        scale={[8.38, 8.38, 8.38]}
      />
      <Mesh
        geometry={nodes.Shoe_Flap.geometry}
        material={materials["default"]}
        color="Shoe_Flap002"
        className="shoe-mesh"
        position={[-4.42, 0.52, -0.24]}
        rotation={[-2.09, 1.42, -0.94]}
        scale={[-6.8, -6.8, -6.8]}
      />
      <Mesh
        geometry={nodes.TheEntireShoes.geometry}
        material={materials["default"]}
        color="TheEntireShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
      />
      <Mesh
        geometry={nodes.theFrontFromINside.geometry}
        material={materials["default"]}
        color="theFrontFromINside"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
      />
      <Mesh
        geometry={nodes.TheFrontOfTheShoes.geometry}
        material={materials["default"]}
        color="TheFrontOfTheShoes"
        className="shoe-mesh"
        position={[-4.38, 0.3, -0.01]}
        rotation={[0, 1.54, 0]}
        scale={[8.34, 8.34, 8.34]}
      />
      <Mesh
        geometry={nodes.Ticket.geometry}
        material={materials["default"]}
        color="Ticket"
        className="shoe-mesh"
        position={[-4.41, 0.21, -0.01]}
        rotation={[0, 1.51, 0]}
        scale={[8.82, 8.82, 8.82]}
      />
    </group>
  );
}

export default function Design() {
  return (
    <>
      <NavBar />
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, 20]} />

          <Suspense fallback={null}>
            <Shoes />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <Picker />
      </div>
    </>
  );
}
