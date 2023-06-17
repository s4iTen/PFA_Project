import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import "../Styles/ShoesContainer.css";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import "../Styles/globals.css";

const state = proxy({
  items: {
    TheEntireShoes: "#9d3e3e",
    Laces006: "#0f0505",
    Nike_Logo_right001: "#834a4a",
    Ticket: "#ac5454",
    Shoe_Flap002: "#752121",
    BackOftheShoes: "#975959",
    TheFrontOfTheShoes: "#361111",
    BottomOfTheShoes: "#753636",
    theFrontFromINside: "#c97a7a",
    BackLeftAndRight: "#000000",
  },
});

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
  const pivot = useRef(new THREE.Object3D());
  const [rotation, setRotation] = useState(0);
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    const radius = 1;
    const speed = 1;
    const angle = elapsedTime * speed;

    const y = Math.sin(angle) * radius;
    pivot.current.position.y = y;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 0.01);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []); // Run the effect only once on mount

  return (
    <group ref={pivot} position={[3, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
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

export default function Shoesy() {
  return (
    <>
      <div className="footer-bannerr-container">
        <div className="bannner-desc">
          <div className="left">
            <p>Get Your OwN Shoes</p>
            <h2>Unleash your potential</h2>
            <h3>Fly Alone</h3>
            <div className="right">
              <h2>Step up your style</h2>
              <h3>Unparalleled quality</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="canvas-Container">
        <Canvas dpr={[1, 2]} camera={{ position: [6, 0, 0] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 0, 0]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, 20]} />

          <Suspense fallback={null}>
            <Shoes />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </>
  );
}
