"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section>
      <div className="flex justify-center items-center gap-5 p-5 bg-base-100">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <Image
              src="/gt.jpg"
              alt="mpotane profile"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div>
          <h1 className="text-slate-50 font-medium">Mark Edzel Potane</h1>
          <p>
            I&apos;m a Software Engineer with a passion for building scalable
            and maintainable web applications.{" "}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "Nice to meet you! 👋",
                1000,
                "Let's get to know each other! 🤗",
                1000,
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
