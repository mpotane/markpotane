import { HiArrowUpRight } from "react-icons/hi2";

const data = [
  {
    title: "Client-side data fetching in Nextjs",
    url: "https://blog.mpotane.com/client-side-data-fetching-in-nextjs",
    color: "text-sky-500",
  },
  {
    title: "How to set up fish-shell in WSL 2",
    url: "https://blog.mpotane.com/how-to-set-up-fish-shell-in-wsl-2",
    color: "text-yellow-500",
  },
  {
    title: "How I set up my dev environment.",
    url: "https://blog.mpotane.com/how-i-set-up-my-dev-environment",
    color: "text-pink-500",
  },
  {
    title:
      "Learn how to install and configure copilot in neovim using lazynvim",
    url: "https://blog.mpotane.com/learn-how-to-install-and-configure-copilot-in-neovim-using-lazynvim",
    color: "text-violet-500",
  },
];

export default function Blog() {
  return (
    <section className="pl-1">
      <div className="pl-5 mb-[.15rem]">
        <h3>📝 Blogs</h3>
      </div>
      <div className="flex flex-col p-5 py-9 gap-2 border border-neutral-focus rounded lg:h-[95.5%]">
        {data.map((item) => (
          <a
            key={item.title}
            className={`link ${item.color} link-hover`}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            {item.title}
            <HiArrowUpRight className="inline-block ml-1" size={7} />
          </a>
        ))}
      </div>
    </section>
  );
}
