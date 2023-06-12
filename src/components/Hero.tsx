import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="p-0.5 bg-gradient-to-r from-teal-800 to-blue-500 rounded-lg">
        <div className="flex justify-center items-center gap-5 p-5 border border-teal-800 rounded-lg bg-base-100">
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
            <h1>Mark Edzel Potane</h1>
            <Balancer>I&apos;m a Software Engineer with a passion for building scalable and maintainable web
                applications.</Balancer>
          </div>
        </div>
      </div>
    </section>
  );
}
