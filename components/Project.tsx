import useSWR, { Fetcher } from "swr";
import Loading from "./Loading";
import { TbStar, TbGitFork } from "react-icons/tb";

interface RepoProperties {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
}

const Project = () => {
  const fetcher: Fetcher<RepoProperties[], string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<RepoProperties[], Error>(
    "https://api.github.com/users/mpotane/repos?sort=updated",
    fetcher
  );

  if (error) return <div>Cannot retrieve data</div>;
  if (isLoading) return <Loading />;

  return (
    <>
      {data && (
        <div className="grid grid-cols-1 gap-2 m-0.5">
          {data.map(
            ({ topics, ...item }: RepoProperties) =>
              topics.includes("portfolio") && (
                <div
                  key={item.id}
                  className="card shadow bg-[#287785] text-white rounded-xl"
                >
                  <div className="card-body">
                    <h2 className="card-title">
                      <a
                        className="font-extrabold inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-green-600 before:via-sky-400 before:to-purple-500 hover:before:w-full hover:before:opacity-100"
                        target="_blank"
                        href={item.html_url}
                        rel="noreferrer"
                      >
                        {item.name}
                      </a>
                      <div className="badge badge-error border-2 border-black hover:border-none">
                        NEW
                      </div>
                    </h2>
                    <p>{item.description}</p>
                    {item.language && (
                      <div className="flex justify-between items-center px-1 py-3">
                        <div className="grid grid-cols-2 gap-2 place-items-center">
                          <div className="grid grid-cols-2 place-items-center text-purple-300">
                            <TbStar />
                            <p className="text-sm">{item.stargazers_count}</p>
                          </div>
                          <div className="grid grid-cols-2 place-items-center text-orange-300">
                            <TbGitFork />
                            <p className="text-sm">{item.forks_count}</p>
                          </div>
                        </div>
                        <div className="badge badge-outline border-[#e1e858] border-2 shadow-sm shadow-[#e1e858]">
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
    </>
  );
};

export default Project;
