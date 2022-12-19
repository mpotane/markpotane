import dynamic from "next/dynamic";
import { Suspense } from "react";
import Contact from "./Contact";
import Loading from "./Loading";
import { Element } from "react-scroll";

const Projects = dynamic(() => import("./Project"), {
  suspense: true,
});

const About = () => {
  return (
    <Element
      name="about"
      className="min-h-screen w-full p-10 md:p-20 bg-base-200"
    >
      <Suspense fallback={<Loading />}>
        <h2 className="text-center py-12">About Me.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-5">
          <Projects />
          <Contact />
        </div>
      </Suspense>
    </Element>
  );
};

export default About;
