import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacLanding from "./components/MacLanding";

function App() {
  return (
    <div className=" w-full h-screen ">
      <div className="tracking-tight text-white flex flex-col items-center absolute top-32 left-1/2 -translate-x-1/2 text-7xl font-bold">
        <h3 className=" masked">Macbook pro M3</h3>
        <p className=" text-2xl tracking-normal font-normal">
          We can do this all day.
        </p>
        <p className=" text-sm text-gray-400 tracking-normal font-light text-center w-3/4">
          MacBook Pro has the longest battery life ever in a Mac — up to 22
          hours.
        </p>
      </div>
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
    </div>
  );
}

export default App;
