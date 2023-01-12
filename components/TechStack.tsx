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
    <Element name="skill" className="min-h-screen w-full bg-base-300">
      <div className="p-10 md:p-20 md:mx-5 text-center">
        <p className="mt-10 pb-5 font-extrabold text-2xl">⚙️ Tech Stack:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-violet-600 to-orange-800">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <TbBrandNextjs size={40} />
              Nextjs
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-violet-600 to-orange-800">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <SiReact size={40} />
              Nextjs
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-violet-600 to-orange-800">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <SiJavascript size={40} />
              Nextjs
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-violet-600 to-orange-800">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <SiTailwindcss size={40} />
              Nextjs
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-violet-600 to-orange-800">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <SiTypescript size={40} />
              Nextjs
            </div>
          </div>
          <div className="p-[1px] rounded-xl w-full bg-gradient-to-br from-violet-600 to-orange-800">
            <div className="px-5 py-10 w-full rounded-xl flex flex-wrap flex-col gap-2 justify-center items-center bg-base-300">
              <SiPrisma size={40} />
              Nextjs
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
