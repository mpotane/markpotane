import { PiLinkSimpleHorizontal } from "react-icons/pi";

export default function Blog() {
  return (
    <section className="pl-1">
      <div className="pl-5">
        <h3>📝 Blogs</h3>
      </div>
      <div className="flex flex-col p-5 py-9">
        <a
          className="link link-info link-hover"
          href="https://blog.mpotane.com/client-side-data-fetching-in-nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-2">
            <PiLinkSimpleHorizontal size={25} />
            Client-side data fetching in Nextjs
          </div>
        </a>
        <a
          className="link link-warning link-hover"
          href="https://blog.mpotane.com/how-to-set-up-fish-shell-in-wsl-2"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-2">
            <PiLinkSimpleHorizontal size={25} />
            How to set up fish-shell in WSL 2
          </div>
        </a>
        <a
          className="link link-error link-hover"
          href="https://blog.mpotane.com/how-i-set-up-my-dev-environment"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-2">
            <PiLinkSimpleHorizontal size={25} />
            How I set up my dev environment.
          </div>
        </a>
      </div>
    </section>
  );
}
