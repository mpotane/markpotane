import Image from "next/image";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home" className="body-font min-h-screen md:p-20 p-5">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="py-1 px-4 text-sm font-semibold rounded-lg bg-green-400 border-2 border-black shadow-md shadow-black hover:shadow-none">
            @mpotane
          </p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black pt-10 pb-5">
            Talk is cheap. Show me the code!
          </h1>
          <p className="mb-8 leading-relaxed text-sm">
              I&apos;m a <span className="bg-gradient-to-br from-green-400 to-sky-400">Full Stack Software Engineer</span> with a passion for building
            scalable and maintainable web applications.
          </p>
          <div className="flex justify-center">
            <a
              className="underline underline-offset-4 text-purple-600 font-semibold"
              href="https://t.me/mpotane"
              rel="noreferrer"
              target="_blank"
            >
              LET&apos;S CHAT!
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="programming hero"
            src="/images/hero.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Element>
  );
};

export default Hero;
