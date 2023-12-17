import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

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
            With our expertise in both SEO and software engineering, we are
            uniquely positioned to help businesses thrive in the digital
            landscape. Our team is dedicated to improving your online visibility
            and creating robust web solutions that can grow and adapt with your
            business.
          </p>
        </div>
      </div>
    </section>
  );
}
