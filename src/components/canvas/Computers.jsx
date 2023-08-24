import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Computers Component: Renders 3D computer models using GLTF
const Computers = ({ isMobile }) => {
  // Load the 3D model using GLTF (GL Transmission Format)
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Hemisphere lighting to provide soft illumination */}
      <hemisphereLight intensity={1} groundColor="#bf2051" />
      {/* Point light to add a focused light source */}
      <pointLight intensity={1} />
      {/* Directional light with shadow to create more realistic lighting */}
      <directionalLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Primitive object to render the computer model with scale and position adjustments based on mobile or desktop view */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// ComputersCanvas Component: Main component to render the computers using react-three-fiber
const ComputersCanvas = () => {
  // State to detect if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check if the device is mobile using media query
  useEffect(() => {
    const mediaQuery = window.matchMedia("( max-width: 500px )");

    // Set isMobile state based on media query match
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      // Update isMobile state when media query changes
      setIsMobile(event.matches);
    };

    // Add event listener to detect media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up by removing event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand" // Control the frame loop manually
      shadows // Enable shadows in the scene
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }} // Set initial camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for further use
    >
      {/* Suspense to provide a fallback loader during async operations */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls for user interaction with the scene */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Render Computers component */}
        <Computers isMobile={isMobile} />
      </Suspense>
      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
