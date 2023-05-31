/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 AirForce.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/AirForce.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BackLeftAndRight.geometry} material={nodes.BackLeftAndRight.material} position={[-4.38, 0.3, -0.01]} rotation={[0, 1.54, 0]} scale={8.34} />
      <mesh geometry={nodes.BackOftheShoes.geometry} material={nodes.BackOftheShoes.material} position={[-4.38, 0.3, -0.01]} rotation={[0, 1.54, 0]} scale={8.34} />
      <mesh geometry={nodes.BottomOfTheShoes.geometry} material={nodes.BottomOfTheShoes.material} position={[-4.38, 0.3, -0.01]} rotation={[0, 1.54, 0]} scale={8.34} />
      <mesh geometry={nodes.Laces.geometry} material={nodes.Laces.material} position={[-4.42, 0.97, 0.72]} rotation={[-0.68, 1.53, 1.15]} scale={8.56} />
      <mesh geometry={nodes.Nike_Logo_right.geometry} material={nodes.Nike_Logo_right.material} position={[-5.05, 0.83, -1.87]} rotation={[-Math.PI, 1.55, -Math.PI]} scale={8.38} />
      <mesh geometry={nodes.Shoe_Flap.geometry} material={nodes.Shoe_Flap.material} position={[-4.42, 0.52, -0.24]} rotation={[-2.09, 1.42, -0.94]} scale={-6.8} />
      <mesh geometry={nodes.TheEntireShoes.geometry} material={nodes.TheEntireShoes.material} position={[-4.38, 0.3, -0.01]} rotation={[0, 1.54, 0]} scale={8.34} />
      <mesh geometry={nodes.theFrontFromINside.geometry} material={nodes.theFrontFromINside.material} position={[-4.38, 0.3, -0.01]} rotation={[0, 1.54, 0]} scale={8.34} />
      <mesh geometry={nodes.TheFrontOfTheShoes.geometry} material={nodes.TheFrontOfTheShoes.material} position={[-4.38, 0.3, -0.01]} rotation={[0, 1.54, 0]} scale={8.34} />
      <mesh geometry={nodes.Ticket.geometry} material={nodes.Ticket.material} position={[-4.41, 0.21, -0.01]} rotation={[0, 1.51, 0]} scale={8.82} />
    </group>
  )
}

useGLTF.preload('/AirForce.glb')