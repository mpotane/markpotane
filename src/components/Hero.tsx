import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { SiGmail } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Hero() {
  return (
    <section>
      <div className="flex justify-center items-center gap-5 p-5 bg-base-100">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/gt.jpg" alt="mpotane profile" />
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-slate-50 font-medium">Mark Edzel Potane</h1>
          <p className="text-slate-300 text-sm">
            A digital marketing specialist with a strong background in Web Development.
            I help businesses achieve their online goals through targeted SEO, PPC, and GHL campaigns, tailored to their specific needs.
          </p>
        </div>
      </div>
      <div className="flex gap-2 py-2 items-center justify-center">
        <a
          className="hover:underline hover:decoration-lime-500"
          href="mailto:markpotanecc@gmail.com"
        >
          <Button variant="outline"><SiGmail />Email</Button>
        </a>
        <a
          className="hover:underline hover:decoration-cyan-500"
          href="tel:+639653865805"
        >
          <Button variant="outline"><MdOutlinePhoneIphone />Call or Text</Button>
        </a>
      </div>
    </section>
  );
}
