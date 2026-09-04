"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Ropes() {
  const lineRef = useRef<THREE.Line>(null);

  // Create a spline curve
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2, 10, -2),
      new THREE.Vector3(2, 5, -5),
      new THREE.Vector3(-3, 0, -3),
      new THREE.Vector3(3, -5, -4),
      new THREE.Vector3(-2, -10, -2)
    ]);
  }, []);

  const points = useMemo(() => curve.getPoints(50), [curve]);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame((state) => {
    if (lineRef.current) {
      // Gentle floating animation
      lineRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      lineRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#0d3b66', opacity: 0.3, transparent: true, linewidth: 2 }))} ref={lineRef} />
  );
}

function Ropes2() {
  const lineRef = useRef<THREE.Line>(null);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(4, 10, -8),
      new THREE.Vector3(-4, 5, -6),
      new THREE.Vector3(2, 0, -9),
      new THREE.Vector3(-2, -5, -7),
      new THREE.Vector3(4, -10, -8)
    ]);
  }, []);

  const points = useMemo(() => curve.getPoints(50), [curve]);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.6;
      lineRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#14b8a6', opacity: 0.2, transparent: true, linewidth: 3 }))} ref={lineRef} />
  );
}

export default function RopeBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Ropes />
        <Ropes2 />
      </Canvas>
    </div>
  );
}
