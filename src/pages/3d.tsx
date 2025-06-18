// import { Canvas, useLoader } from '@react-three/fiber';
// import { Stats, Environment, OrbitControls } from '@react-three/drei';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

// function Scene() {
//   const materials = useLoader(MTLLoader, '/uxi_3D.mtl');
//   const obj = useLoader(OBJLoader, '/uxi_3D.obj', loader => {
//     materials.preload();
//     loader.setMaterials(materials);
//   });

//   return <primitive object={obj} />;
// }

const ObjectLookingAtMouse = () => {
  return (
    <section className="h-screen w-screen">
      {/* <Canvas>
        <directionalLight color="white" position={[100, 100, 100]} />
        <Scene />
        <OrbitControls />
        <Environment preset="park" background />
        <Stats />
      </Canvas> */}
    </section>
  );
};

export default ObjectLookingAtMouse;
