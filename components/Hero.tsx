import { Element } from "react-scroll";
import Balancer from "react-wrap-balancer";
import { SiTelegram } from "react-icons/si";

export default function Hero() {
  return (
    <Element
      name="home"
      className="w-full min-h-screen grid place-items-center"
    >
      <article>
        <div className="text-center p-10 md:p-20 md:mx-5">
          <span className="py-1 px-4 text-sm text-primary-content font-semibold rounded-lg border-2 border-success shadow-[0_0_4px_2px] shadow-success">
            @mpotane
          </span>
          <br />
          <br />
          <Balancer>
            <h1 className="text-3xl md:text-5xl font-bold">
              Talk is cheap. Show me the code!
            </h1>
            <br />
            <p className="leading-relaxed text-sm">
              I&apos;m a{" "}
              <span className="rounded-md px-1 text-primary-content bg-gradient-to-br from-accent to-primary-focus">
                Software Engineer
              </span>{" "}
              with a passion for building scalable and maintainable web
              applications.
            </p>
          </Balancer>
          <br />
          <br />
          <div className="flex justify-center items-center gap-2 text-info cursor-pointer hover:brightness-90">
            <a
              className="font-semibold"
              href="https://t.me/mpotane"
              rel="noreferrer"
              target="_blank"
            >
              LET&apos;S CHAT!
            </a>
            <SiTelegram />
          </div>
        </div>
      </article>
    </Element>
  );
}
