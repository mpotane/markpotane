import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export default function TeckStack() {
  return (
    <section className="col-span-2">
      <div className="px-5">
        <h2>🛠️ Tools and Technology</h2>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-2 p-5 border border-neutral rounded">
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-white">
            <TbBrandNextjs size={25} />
          </div>
          Nextjs
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-sky-400">
            <SiReact size={25} />
          </div>
          Reactjs
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-yellow-300">
            <SiJavascript size={25} />
          </div>
          JavaScript
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-blue-500">
            <SiTypescript size={25} />
          </div>
          TypeScript
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-emerald-600">
            <SiTailwindcss size={25} />
          </div>
          TailwindCSS
        </div>
        <div className="flex flex-col justify-center items-center w-32 h-20">
          <div className="text-white">
            <SiVercel size={25} />
          </div>
          Vercel
        </div>
      </div>
    </section>
  );
}
