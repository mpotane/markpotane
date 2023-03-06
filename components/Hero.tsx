import { Element } from "react-scroll";
import Balancer from "react-wrap-balancer";
import styles from "./Hero.module.css";

const hubot = localFont({
  src: './Hubot-Sans.woff2'
})

export default function Hero() {
  return (
    <Element
      name="home"
      className="w-full grid place-items-center"
    >
      <article className="pt-10">
        <div className="text-center p-10 md:p-20 md:mx-5">
          <Balancer>
            <h1 className={`text-5xl md:text-7xl lg:text-[7rem] font-bold md:font-extrabold lg:font-black ${styles.colorize} ${hubot.className}`}>
              MARK EDZEL POTANE
            </h1>
            <br />
            <p className="leading-relaxed text-sm md:text-lg">
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
              <button className={styles.BTN}>LET&apos;S CHAT!</button>
            </a>
          </div>
        </div>
      </article>
    </Element>
  );
}
