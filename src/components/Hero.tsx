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
            I&apos;m a Software Engineer with a strong background in SEO. I
            specialize in building scalable web applications that are optimized
            for both user experience and search engine visibility.
          </p>
        </div>
      </div>
    </section>
  );
}
