import { HiArrowUpRight } from "react-icons/hi2";
import { Card } from "./ui/card";

const data = [
  {
    title: "Tips: How to Fetch Data on the Client Side with Next.js",
    url: "https://blog.mpotane.com/2023/12/tips-how-to-fetch-data-on-client-side.html",
    color: "text-sky-500",
  },
  {
    title: "How to set up fish-shell in WSL 2",
    url: "https://blog.mpotane.com/2023/12/how-to-set-up-fish-shell-in-wsl-2.html",
    color: "text-yellow-500",
  },
  {
    title: "Neovim: Learn How to Install and Configure Copilot",
    url: "https://blog.mpotane.com/2023/12/neovim-learn-how-to-install-and.html",
    color: "text-violet-300",
  },
];

export default function Blog() {
  return (
    <section>
      <div className="pl-6 mb-[.15rem]">
        <h3>📝 Blogs</h3>
      </div>
      <Card className="flex flex-col pl-6 pr-5 py-9 gap-2 lg:h-[94.5%]">
        {data.map((item) => (
          <a
            key={item.title}
            className={`link ${item.color} link-hover`}
            href={item.url}
            target="_blank"
            rel="noreferrer nofollow"
          >
            {item.title}
            <HiArrowUpRight className="inline-block ml-1" size={7} />
          </a>
        ))}
      </Card>
    </section>
  );
}
