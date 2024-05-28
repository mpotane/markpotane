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
            <ul>
              <li>
                <a
                  className="hover:underline hover:decoration-lime-500"
                  href="mailto:yanexrequilme@gmail.com"
                >
                  yanexrequilme@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:decoration-cyan-500"
                  href="tel:+639653865805"
                >
                  +(63) 965 3865 805
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
