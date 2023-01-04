import { SiLinkedin, SiGithub, SiHashnode, SiPolywork } from "react-icons/si";

export default function Contact() {
  return (
    <div className="relative m-1">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-purple-600 rounded-lg blur opacity-75 transition duration-1000"></div>
      <div className="relative leading-none bg-base-200 rounded-xl h-full">
        <h2 className="text-center font-medium text-2xl pt-10 italic">
          Socials:
        </h2>
        <div className="grid grid-cols-1 gap-3 place-items-center mx-10 my-5 cursor-pointer">
          <div className="bg-base-300 w-full py-10 px-5 rounded-xl min-h-full">
            <a href="https://blog.mpotane.com" target="_blank" rel="noreferrer">
              <span className="flex flex-wrap gap-2 justify-center items-end">
                <SiHashnode />
                Blogs
              </span>
            </a>
          </div>
          <div className="bg-base-300 w-full py-10 px-5 rounded-xl">
            <a href="https://work.mpotane.com" target="_blank" rel="noreferrer">
              <span className="flex flex-wrap gap-2 justify-center items-end">
                <SiPolywork />
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
                <SiLinkedin />
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
                <SiGithub />
                Github
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
