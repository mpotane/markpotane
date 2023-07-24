import Balancer from "react-wrap-balancer";
import Image from "next/image";

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
          <Balancer>
            I&apos;m a Software Engineer with a passion for building scalable
            and maintainable web applications.
          </Balancer>
        </div>
      </div>
    </section>
  );
}
