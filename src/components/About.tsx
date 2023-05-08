import Contact from "./Contact";
import dynamic from "next/dynamic";

/* @ts-expect-error Async Server Component */
const Project = dynamic(() => import("./Project"), { suspense: true });

export default function About() {
  return (
    <div className="w-full p-10 md:p-20 bg-base-200" id="aboutpge">
      <h2 className="text-center py-12">About Me.</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:mx-5">
        <Project />
        <Contact />
      </div>
    </div>
  );
}
