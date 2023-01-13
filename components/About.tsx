import { Suspense } from "react";
import Contact from "./Contact";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const Project = dynamic(() => import("./Project"), { suspense: true });

export default function About() {
  return (
    <Element
      name="about"
      className="w-full p-10 md:p-20 bg-base-200"
    >
      <h2 className="text-center py-12">About Me.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-5">
        <Suspense fallback={<Loading />}>
          <Project />
        </Suspense>
        <Contact />
      </div>
    </Element>
  );
}
