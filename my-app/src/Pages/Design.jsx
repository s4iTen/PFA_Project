import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import NavBar from "../components/NavBar";
import { proxy, useSnapshot } from "valtio";
import { HexColorPicker } from "react-colorful";
import "../Styles/Design.css";
import * as THREE from 'three';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import {useScreenshot} from 'use-react-screenshot'


const state = proxy({
  current: null,
  items: {
    TheEntireShoes: "#ffffff",
    Laces006: "#ffffff",
    Nike_Logo_right001: "#ffffff",
    Ticket: "#ffffff",
    Shoe_Flap002: "#ffffff",
    BackOftheShoes: "#ffffff",
    TheFrontOfTheShoes: "#fffffff",
    BottomOfTheShoes: "#ffffff",
    theFrontFromINside: "#ffffff",
    BackLeftAndRight: "#ffffff",
  },
});


function Picker() {
  const [image, takeScreenShot] = useScreenshot({
    
  });
  const isLoggedIn = !!localStorage.getItem('current user');
  const [selectedItem, setSelectedItem] = useState(null);
  const snap = useSnapshot(state);

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userId = currentUser ? currentUser.uid : "";
  const db = getFirestore();

  const handleColorChange = (key, color) => {
    state.items[key] = color;
  };

  const handleItemClick = (key) => {
    if (selectedItem === key) {
      setSelectedItem(null);
    } else {
      setSelectedItem(key);
    }
  };

  const handleColorInputChange = (key, event) => {
    state.items[key] = event.target.value;
  };

  const handleShoeNameChange = (event) => {
    state.shoeName = event.target.value;
  };



  const handleSave = async () => {
    
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substring(0, 10); // Format the date as YYYY-MM-DD
  
    const colorDictionary = {
      userId: userId,
      shoeName: state.shoeName,
      creationDate: formattedDate, // Use the formatted current date
      ...snap.items,
    };
  
    if (isLoggedIn) {
      try {
        const querySnapshot = await getDocs(collection(db, "color-dictionaries"));
        const existingDictionary = querySnapshot.docs.find((doc) => {
          const data = doc.data();
          if (data.userId === userId && data.shoeName === state.shoeName) { // Check if shoe name already exists
            for (const key in snap.items) {
              if (data[key] !== snap.items[key]) {
                return false;
              }
            }
            return true;
          }
          return false;
        });
  
        if (existingDictionary) {
          alert("You have already created this shoes before.");
          return;
        }
  
        const docRef = await addDoc(collection(db, "color-dictionaries"), colorDictionary);
        console.log("Color dictionary saved with ID: ", docRef.id);
        alert("Created successfully");
      } catch (error) {
        console.error("Error saving color dictionary: ", error);
      }
    } else {
      if (!isLoggedIn) {
        // Store the data locally
        localStorage.setItem('savedData', JSON.stringify(snap.items));
        window.location.href='/Login';
        return;
      }
    }
  };
  
  return (
    <div className="slider">
      <input
        type="text"
        placeholder="Shoe Name"
        value={state.shoeName}
        onChange={handleShoeNameChange}
      />
      {Object.entries(snap.items).map(([key, color]) => (
        <div key={key} className="input">
          <h1 onClick={() => handleItemClick(key)}>{key}</h1>
          {selectedItem === key && (
            <HexColorPicker
              className="picker"
              color={color}
              onChange={(newColor) => handleColorChange(key, newColor)}
            />
          )}
          <input
            className="color-input"
            type="text"
            value={color}
            onChange={(event) => handleColorInputChange(key, event)}
          />
        </div>
      ))}
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
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
  const pivot = useRef(new THREE.Object3D()); // Create a ref for the pivot


  return (
    <group ref={pivot} position={[4, 0, 0]} rotation={[0.8, 0, 0]}>
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
      <div className="Design-Page">
        <div className="canvas-container" id="design-container">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[10, 10, 20]} />

            <Suspense fallback={null}>
              <Shoes />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="Logos-container">
          <h1>Logos Container</h1>
          <Picker />
        </div>
      </div>
    </>
  );
}