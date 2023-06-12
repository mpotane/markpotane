import { TbStar, TbGitFork } from "react-icons/tb";
import type { RepoProperties } from "@/types/ghdata";

async function getData() {
  const res = await fetch(
    "https://api.github.com/users/mpotane/repos?sort=created",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Project() {
  const data = (await getData()) as unknown as RepoProperties[];
  //    ^?
  return (
    <section className="col-span-2">
      {data && (
        <div className="grid grid-cols-1 gap-2 m-0.5">
          {data.map(
            ({ topics, ...item }: RepoProperties) =>
              topics.includes("portfolio") && (
                <div
                  key={item.id}
                  className="card border border-teal-800 text-slate-300 rounded-lg"
                >
                  <div className="card-body">
                    <span className="card-title">
                      <a
                        className="font-extrabold inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-green-600 before:via-sky-400 before:to-purple-500 hover:before:w-full hover:before:opacity-100"
                        target="_blank"
                        href={item.html_url}
                        rel="noreferrer"
                      >
                        {item.name}
                      </a>
                      <div className="badge badge-error">
                        NEW
                      </div>
                    </span>
                    <p>{item.description}</p>
                    {item.language && (
                      <div className="flex justify-between items-center px-1 py-3">
                        <div className="grid grid-cols-2 gap-2 place-items-center">
                          <div className="grid grid-cols-2 place-items-center text-purple-400">
                            <TbStar />
                            <span className="text-sm">
                              {item.stargazers_count}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 place-items-center text-orange-300">
                            <TbGitFork />
                            <span className="text-sm">{item.forks_count}</span>
                          </div>
                        </div>
                        <div className="badge badge-outline border-blue-500 border-2 shadow-sm shadow-blue-500">
                          {item.language}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </section>
  );
}
