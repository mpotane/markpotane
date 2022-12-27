import Project from "./Project";
import Contact from "./Contact";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      name="about"
      className="min-h-screen w-full p-10 md:p-20 bg-base-200"
    >
      <h2 className="text-center py-12">About Me.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-5">
        <Project />
        <Contact />
      </div>
    </Element>
  );
};

export default About;
