import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home" className="w-full min-h-screen grid place-items-center">
      <div className="text-center p-10 md:p-20 md:mx-5">
        <span className="py-1 px-4 text-sm text-primary-content font-semibold rounded-lg border-2 border-success shadow-[0_0_4px_2px] shadow-success">
          @mpotane
        </span>
        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-black pt-10 pb-5">
          Talk is cheap. Show me the code!
        </h1>
        <p className="mb-8 leading-relaxed text-sm">
          I&apos;m a{" "}
          <span className="rounded-md px-1 text-primary-content bg-gradient-to-br from-accent to-primary-focus">
            Software Engineer
          </span>{" "}
          with a passion for building scalable and maintainable web
          applications.
        </p>
        <div className="flex justify-center">
          <a
            className="underline underline-offset-4 text-info font-semibold"
            href="https://t.me/mpotane"
            rel="noreferrer"
            target="_blank"
          >
            LET&apos;S CHAT!
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
