'use client';

import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Points>(null);
  const count = isMobile ? 400 : 800;

  const { positions, initialPositions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const emerald = new THREE.Color('#10B981');
    const gold = new THREE.Color('#F59E0B');

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.5 + Math.random() * 0.5;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      // 75% emerald, 25% gold
      const c = Math.random() < 0.75 ? emerald : gold;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { positions, initialPositions, colors };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors.slice(), 3));
    return geo;
  }, [positions, colors]);

  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.0008;
    meshRef.current.rotation.x += 0.0002;

    if (isMobile) return;

    const mouse = state.mouse;
    const posAttr = meshRef.current.geometry.attributes.position;

    const mouseWorldX = (mouse.x * viewport.width) / 2;
    const mouseWorldY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const ox = initialPositions[i * 3];
      const oy = initialPositions[i * 3 + 1];
      const oz = initialPositions[i * 3 + 2];

      let cx = posAttr.getX(i);
      let cy = posAttr.getY(i);
      let cz = posAttr.getZ(i);

      const dx = cx - mouseWorldX;
      const dy = cy - mouseWorldY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const repelRadius = 0.9;
      if (dist < repelRadius && dist > 0.001) {
        const force = ((repelRadius - dist) / repelRadius) * 0.4;
        const angle = Math.atan2(dy, dx);
        cx += Math.cos(angle) * force;
        cy += Math.sin(angle) * force;
      }

      cx += (ox - cx) * 0.05;
      cy += (oy - cy) * 0.05;
      cz += (oz - cz) * 0.05;

      posAttr.setXYZ(i, cx, cy, cz);
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.018}
        transparent
        opacity={0.5}
        sizeAttenuation
        vertexColors
      />
    </points>
  );
}

export default function ParticleCanvas() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <ambientLight intensity={0.5} />
      <ParticleField isMobile={isMobile} />
    </Canvas>
  );
}
