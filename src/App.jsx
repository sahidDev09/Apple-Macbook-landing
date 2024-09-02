import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacLanding from "./components/MacLanding";

function App() {
  const menus = [
    "iphone",
    "iPad",
    "Watch",
    "WWDC",
    "Mac",
    "Services",
    "products",
  ];

  return (
    <div className=" w-full h-screen ">
      <div className="flex gap-6 my-4 navbar absolute top-0 left-1/2 -translate-x-1/2">
        {menus.map((e, index) => (
          <a
            key={index}
            className="text-white text-lg hover:text-blue-400 transition duration-300 ease-in-out"
            href="">
            {e}
          </a>
        ))}
      </div>

      <div className="tracking-tight text-white flex flex-col items-center absolute top-32 left-1/2 -translate-x-1/2 text-7xl font-bold">
        <h3 className=" masked">Macbook pro M3</h3>
        <p className=" text-2xl tracking-normal font-normal">
          Developed by Sahid
        </p>
        <p className=" text-sm text-gray-400 tracking-normal font-light text-center w-3/4">
          MacBook Pro has the longest battery life ever in a Mac — up to 22
          hours.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -8, 220] }}>
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
