import { TbGitFork, TbStar } from "react-icons/tb";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { Badge } from "./ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";

type ProjectProps = {
  id: string;
  name: string;
  stargazerCount: number;
  forkCount: number;
  description: string;
  languages: {
    edges: [
      {
        node: {
          name: string;
          color: string;
        };
      }
    ];
  };
  url: string;
};

const getProjects = gql`
  query GetProjects {
    viewer {
      login
      pinnedItems(first: 3) {
        edges {
          node {
            ... on Repository {
              id
              name
              stargazerCount
              forkCount
              description
              languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              url
            }
          }
        }
      }
    }
  }
`;

export default async function Project() {
  const { data } = await getClient().query({
    query: getProjects,
  });

  return (
    <section className="col-span-2">
      <div className="px-8">
        <h3>📦 Personal Projects</h3>
      </div>
      {data && (
        <div className="grid grid-cols-1 gap-2 my-0.5">
          {data.viewer.pinnedItems.edges.map(
            ({ node }: { node: ProjectProps }) => (
              <div key={node.id} className="text-slate-300">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex gap-2 justify-start items-center">
                      <a
                        className="font-extrabold inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-green-600 before:via-sky-400 before:to-purple-500 hover:before:w-full hover:before:opacity-100"
                        target="_blank"
                        href={node.url}
                        rel="noreferrer"
                      >
                        {node.name}
                      </a>{" "}
                      <Badge variant="destructive">Pin</Badge>
                    </CardTitle>
                    <CardDescription>{node.description}</CardDescription>
                  </CardHeader>
                  {node.languages.edges[0].node.name && (
                    <CardFooter className="flex justify-between items-center px-7 py-3">
                      <div className="grid grid-cols-2 gap-2 place-items-center">
                        <div className="grid grid-cols-2 place-items-center text-purple-400">
                          <TbStar />
                          <span className="text-sm">{node.stargazerCount}</span>
                        </div>
                        <div className="grid grid-cols-2 place-items-center text-orange-300">
                          <TbGitFork />
                          <span className="text-sm">{node.forkCount}</span>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        style={{
                          borderColor: node.languages.edges[0].node.color,
                        }}
                      >
                        {node.languages.edges[0].node.name}
                      </Badge>
                    </CardFooter>
                  )}
                </Card>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}
