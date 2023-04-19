import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const ModelCanvas = () => (
  <Canvas
    style={{ height: 620 }}
    frameloop="demand"
    shadows
    camera={{ position: [1, 1.5, 2.5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}>
    <ambientLight />
    <directionalLight
      position={[-5, 5, 5]}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />

    <Suspense fallback={null}>
      <Model />
    </Suspense>

    <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      autoRotate
      autoRotateSpeed={10}
    />

    {/* <mesh rotation={[-0.5 * Math.PI, 0, 0]} scale={5} position={[0, -0.65, 0]} receiveShadow>
      <planeBufferGeometry args={[7, 7]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh> */}
  </Canvas>
);

export default ModelCanvas;
