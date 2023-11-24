import { SiGithub, SiHashnode, SiLinkedin, SiPolywork } from "react-icons/si";

export default function Contact() {
  return (
    <section>
      <div className="px-5">
        <h2>📣 Socials</h2>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-2 p-5 border border-neutral rounded">
        <a
          href="https://www.linkedin.com/in/mpotane/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex flex-col justify-center items-center w-20 h-20">
            <div className="text-blue-500">
              <SiLinkedin size={25} />
            </div>
            LinkedIn
          </div>
        </a>
        <a href="https://github.com/mpotane" target="_blank" rel="noreferrer noopener">
          <div className="flex flex-col justify-center items-center w-20 h-20">
            <div className="text-white">
              <SiGithub size={25} />
            </div>
            GitHub
          </div>
        </a>
        <a href="https://blog.mpotane.com" target="_blank" rel="noreferrer noopener">
          <div className="flex flex-col justify-center items-center w-20 h-20">
            <div className="text-blue-700">
              <SiHashnode size={25} />
            </div>
            Blog
          </div>
        </a>
        <a href="https://work.mpotane.com" target="_blank" rel="noreferrer noopener">
          <div className="flex flex-col justify-center items-center w-20 h-20">
            <div className="text-amber-600">
              <SiPolywork size={25} />
            </div>
            Work
          </div>
        </a>
      </div>
    </section>
  );
}
