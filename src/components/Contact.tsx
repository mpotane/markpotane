import { SiGithub, SiHashnode, SiLinkedin, SiPolywork } from "react-icons/si";

export default function Contact() {
  return (
    <section>
      <div className="px-5">
        <h4>📣 Socials</h4>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-5 p-5">
        <a
          href="https://www.linkedin.com/in/mpotane/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-col justify-center items-center w-20 h-20 border border-accent">
            <div className="text-blue-500">
              <SiLinkedin size={25} />
            </div>
            LinkedIn
          </div>
        </a>
        <a href="https://github.com/mpotane" target="_blank" rel="noreferrer">
          <div className="flex flex-col justify-center items-center w-20 h-20 border border-accent">
            <div className="text-white">
              <SiGithub size={25} />
            </div>
            GitHub
          </div>
        </a>
        <a href="https://blog.mpotane.com" target="_blank" rel="noreferrer">
          <div className="flex flex-col justify-center items-center w-20 h-20 border border-accent">
            <div className="text-blue-700">
              <SiHashnode size={25} />
            </div>
            Blog
          </div>
        </a>
        <a href="https://work.mpotane.com" target="_blank" rel="noreferrer">
          <div className="flex flex-col justify-center items-center w-20 h-20 border border-accent">
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
