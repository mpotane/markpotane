import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Hero() {
  return (
    <section>
      <div className="flex justify-center items-center gap-5 p-5 bg-base-100">
        <Avatar className="w-20 h-20">
            <AvatarImage
              src="/gt.jpg"
              alt="mpotane profile"
            />
            <AvatarFallback>MP</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-slate-50 font-medium">Mark Edzel Potane</h1>
          <p>
            I specialize in SEO and also have a background in software
            engineering. I assist businesses in enhancing their online presence
            and building scalable and maintainable web solutions.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
