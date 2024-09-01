import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacLanding from "./components/MacLanding";

function App() {
  return (
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
        ]}
      />
      <ScrollControls>
        <MacLanding />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
