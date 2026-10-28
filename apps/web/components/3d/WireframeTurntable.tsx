'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioColors } from '@portfolio/ui';

function RotatingSchematic() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Wireframe Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial wireframe color={portfolioColors.parchmentTextPrimary} />
      </mesh>

      {/* Inner Dense Blueprint Cube */}
      <mesh>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshBasicMaterial
          wireframe
          color={portfolioColors.parchmentTextSecondary}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Axis Cross-Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.02, 8, 32]} />
        <meshBasicMaterial color={portfolioColors.parchmentTextTertiary} />
      </mesh>
    </group>
  );
}

export interface WireframeTurntableProps {
  height?: number | string;
}

export function WireframeTurntable({ height = 180 }: WireframeTurntableProps) {
  return (
    <div
      style={{
        width: '100%',
        height,
        position: 'relative',
        backgroundColor: '#E7E0D0',
        border: `1px solid ${portfolioColors.parchmentBorderSubtle}`,
        overflow: 'hidden',
      }}
    >
      {/* Technical HUD grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 6,
          left: 8,
          fontFamily: 'monospace',
          fontSize: '0.58rem',
          color: portfolioColors.parchmentTextSecondary,
          letterSpacing: '0.06em',
          pointerEvents: 'none',
        }}
      >
        SCHEMATIC // 3D_TURNTABLE_VIEW
      </div>

      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <RotatingSchematic />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
