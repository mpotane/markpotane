import { SiLinkedin, SiGithub, SiHashnode, SiPolywork } from "react-icons/si";

export default function Contact() {
  return (
    <div className="relative m-1">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg blur opacity-75 transition duration-1000"></div>
      <div className="relative leading-none bg-base-200 rounded-xl h-full">
        <h2 className="text-center font-extrabold text-2xl pt-10">Socials:</h2>
        <div className="grid grid-cols-1 gap-3 place-items-center mx-10 my-5 cursor-pointer">
          <div className="bg-base-300 w-full py-10 px-5 rounded-xl min-h-full">
            <a href="https://blog.mpotane.com" target="_blank" rel="noreferrer">
              <span className="flex flex-wrap gap-2 justify-center items-end">
                <div className=" text-blue-700">
                  <SiHashnode />
                </div>
                Blogs
              </span>
            </a>
          </div>
          <div className="bg-base-300 w-full py-10 px-5 rounded-xl">
            <a href="https://work.mpotane.com" target="_blank" rel="noreferrer">
              <span className="flex flex-wrap gap-2 justify-center items-end">
                <div className="text-orange-500">
                  <SiPolywork />
                </div>
                Works
              </span>
            </a>
          </div>
          <div className="bg-base-300 w-full py-10 px-5 rounded-xl">
            <a
              href="https://www.linkedin.com/in/mpotane/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex flex-wrap gap-2 justify-center items-end">
                <div className=" text-sky-600">
                  <SiLinkedin />
                </div>
                LinkedIn
              </span>
            </a>
          </div>
          <div className="bg-base-300 w-full py-10 px-5 rounded-xl">
            <a
              href="https://github.com/mpotane"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex flex-wrap gap-2 justify-center items-end">
                <div className="text-white">
                  <SiGithub />
                </div>
                Github
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
