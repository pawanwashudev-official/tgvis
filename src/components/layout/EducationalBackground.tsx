"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function MathTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-4, 2, -5]}>
      <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
      <meshStandardMaterial color="#0d3b66" wireframe opacity={0.2} transparent />
    </mesh>
  );
}

function Atom() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[5, -3, -8]}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#14b8a6" opacity={0.4} transparent />
      </mesh>
      {/* Electron orbits */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[i * Math.PI / 3, i * Math.PI / 3, 0]}>
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshBasicMaterial color="#14b8a6" opacity={0.3} transparent />
        </mesh>
      ))}
    </group>
  );
}

function DNA() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.position.y = -Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const numPairs = 10;
  const spacing = 0.5;

  return (
    <group ref={groupRef} position={[6, 3, -12]} rotation={[0, 0, Math.PI / 6]}>
      {Array.from({ length: numPairs }).map((_, i) => {
        const y = (i - numPairs / 2) * spacing;
        const angle = i * 0.5;
        const x1 = Math.cos(angle) * 1.5;
        const z1 = Math.sin(angle) * 1.5;
        const x2 = -Math.cos(angle) * 1.5;
        const z2 = -Math.sin(angle) * 1.5;

        return (
          <group key={i}>
            <mesh position={[x1, y, z1]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#0d3b66" opacity={0.5} transparent />
            </mesh>
            <mesh position={[x2, y, z2]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#14b8a6" opacity={0.5} transparent />
            </mesh>
            {/* Connection line */}
            <mesh position={[0, y, 0]} rotation={[0, -angle, Math.PI / 2]}>
              <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
              <meshStandardMaterial color="#ffffff" opacity={0.2} transparent />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.z += 0.003;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 1 - 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-6, -4, -10]}>
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="#38bdf8" wireframe opacity={0.15} transparent />
    </mesh>
  );
}

function SceneMouseReaction() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    // Make camera slightly react to mouse movement
    const targetX = mouse.x * 2;
    const targetY = mouse.y * 2;
    camera.position.set(
      camera.position.x + (targetX - camera.position.x) * 0.02,
      camera.position.y + (targetY - camera.position.y) * 0.02,
      camera.position.z
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function EducationalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <SceneMouseReaction />
        <MathTorus />
        <Atom />
        <DNA />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
