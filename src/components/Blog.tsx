import { HiArrowUpRight } from "react-icons/hi2";

const data = [
  {
    title: "How to Fetch Data on the Client Side with Next.js: A Comparison of SWR, React Query and Apollo Client",
    url: "https://blog.mpotane.com/how-to-fetch-data-on-the-client-side-with-nextjs-a-comparison-of-swr-react-query-and-apollo-client",
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
    color: "text-pink-300",
  },
  {
    title:
      "Learn how to install and configure copilot in neovim using lazynvim",
    url: "https://blog.mpotane.com/learn-how-to-install-and-configure-copilot-in-neovim-using-lazynvim",
    color: "text-violet-300",
  },
];

export default function Blog() {
  return (
    <section>
      <div className="pl-6 mb-[.15rem]">
        <h3>📝 Blogs</h3>
      </div>
      <div className="flex flex-col pl-6 pr-5 py-9 gap-2 border border-neutral-focus rounded lg:h-[95.5%]">
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
