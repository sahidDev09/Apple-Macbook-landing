import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import MacLanding from "./components/MacLanding";

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <MacLanding />
    </Canvas>
  );
}

export default App;
