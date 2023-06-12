import { SiLinkedin, SiGithub, SiHashnode, SiPolywork } from "react-icons/si";

export default function Contact() {
  return (
    <section> 
      <div className="flex flex-wrap justify-center items-center gap-5 border border-teal-800 rounded-lg p-5">
        <div className="flex flex-col justify-center items-center">
          <div className="text-blue-500">
            <SiLinkedin size={25} />
          </div>
          LinkedIn
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-white">
            <SiGithub size={25} />
          </div>
          GitHub
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-blue-700">
            <SiHashnode size={25} />
          </div>
          Blogs
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-amber-600">
            <SiPolywork size={25} />
          </div>
          Work
        </div>
      </div>
    </section>
  );
}
