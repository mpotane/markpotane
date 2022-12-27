import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiPrisma } from "react-icons/si";
import { Element } from "react-scroll";

const TeckStack = () => {
  return (
    <Element name="skill" className="min-h-screen w-full">
      <div className="p-10 md:p-20 md:mx-5">
          <h4 className="mt-10 pb-5 text-center font-extrabold text-2xl">⚙️ Tech Stack:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-base-200 px-5 py-10 rounded-xl w-full">
              <TbBrandNextjs size={40} />
              Nextjs
            </div>
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-base-200 px-5 py-10 rounded-xl w-full">
              <SiReact size={40} />
              Reactjs
            </div>
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-base-200 px-5 py-10 rounded-xl w-full">
              <SiJavascript size={40} />
              Javascript
            </div>
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-base-200 px-5 py-10 rounded-xl w-full">
              <SiTailwindcss size={40} />
              TailwindCSS
            </div>
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-base-200 px-5 py-10 rounded-xl w-full">
              <SiTypescript size={40} />
              Typescript
            </div>
            <div className="flex flex-wrap flex-col gap-2 justify-center items-center bg-base-200 px-5 py-10 rounded-xl w-full">
              <SiPrisma size={40} />
              Prisma ORM
            </div>
          </div>
      </div>
    </Element>
  );
};

export default TeckStack;