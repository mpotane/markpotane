import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { Element } from "react-scroll";

export default function TeckStack() {
  return (
    <Element name="skill" className="w-full bg-base-300">
      <div className="p-10 md:p-20 md:mx-5 text-center">
        <p className="pb-5 font-extrabold text-2xl">⚙️ Tech Stack:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-pink-500 to-yellow-500">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <div className="text-white">
                <TbBrandNextjs size={40} />
              </div>
              Nextjs
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-pink-500 to-yellow-500">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <div className="text-sky-400">
                <SiReact size={40} />
              </div>
              Reactjs
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-pink-500 to-yellow-500">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <div className="text-yellow-300">
                <SiJavascript size={40} />
              </div>
              JavaScript
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-pink-500 to-yellow-500">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <div className="text-teal-500">
                <SiTailwindcss size={40} />
              </div>
              Tailwind
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-pink-500 to-yellow-500">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <div className="text-blue-600">
                <SiTypescript size={40} />
              </div>
              TypeScript
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-pink-500 to-yellow-500">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <div className="text-emerald-700">
                <SiPrisma size={40} />
              </div>
              Prisma
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
