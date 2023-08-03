import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="background w-screen h-screen flex flex-col items-center overflow-x-hidden">
    <h1 className="text-3xl w-11/12 bg-white mt-[28px] mx-auto text-center rounded-lg py-2 font-bold uppercase ">Random GIFS</h1>
    <Random/>
    <Tag/>
    
  </div>);
}
