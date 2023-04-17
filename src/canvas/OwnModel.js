import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const OwnModel =(props) => {
  // Load the OBJ model using the useLoader hook
  const obj = useGLTF(props.modelPath);

  // Set the mesh to the loaded object

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]} 
      angle={0.12}
      penumbra={1}
      intensity={0.3}
      castShadow
      shadow-mapSize={1024} />
      <spotLight position={[20, 20, 10]}
        angle={0.42}
        penumbra={1}
        intensity={0.4}
        castShadow
        shadow-mapSize={1024} />

      <primitive object={obj.scene} scale={4.7} position={[0, -2.3, 0]} />
    </mesh>
  );
}

export default OwnModel