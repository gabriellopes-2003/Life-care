"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import type { Mesh } from "three"

function OrbMesh() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    const mesh = meshRef.current
    if (!mesh) return
    mesh.rotation.y = state.clock.elapsedTime * 0.18
    mesh.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.15
  })

  return (
    <Float speed={0.8} rotationIntensity={0.18} floatIntensity={0.28}>
      <mesh ref={meshRef} scale={1.35}>
        <icosahedronGeometry args={[1.1, 16]} />
        <MeshDistortMaterial
          color="#0ea5e9"
          roughness={0.3}
          metalness={0.08}
          distort={0.16}
          speed={0.9}
          transparent
          opacity={0.46}
        />
      </mesh>
    </Float>
  )
}

export function HeroOrb3D() {
  return (
    <div className="pointer-events-none absolute -right-24 top-24 h-[230px] w-[230px] opacity-30 sm:-right-16 sm:top-14 sm:h-[300px] sm:w-[300px] md:-right-4 md:top-2 md:h-[430px] md:w-[430px] md:opacity-55">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 44 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2.5, 3, 3]} intensity={0.75} color="#38bdf8" />
        <pointLight position={[-2.2, -1.8, 1.4]} intensity={0.38} color="#22d3ee" />
        <Suspense fallback={null}>
          <OrbMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
