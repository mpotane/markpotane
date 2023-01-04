import Hero from "../components/Hero";
import Seo from "../components/Seo";
import About from "../components/About";
import NavBar from "../components/NavBar";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
import { RepoProperties } from "../interface/interface";
import { createContext } from "react";
import { loadRepo } from "../lib/loadRepo";

type Props = {
  data: RepoProperties[];
};

export async function getStaticProps(){
  const res = await loadRepo();
  // filter data to only include repos with topics that include "portfolio"
  const data = res.filter((repo: RepoProperties) =>
    repo.topics.includes("portfolio")
  );

  return {
    props: {
      data,
    },
  };
};

export const RepoContext = createContext<RepoProperties[]>([]);

export default function Home({ data }: Props) {
  return (
    <RepoContext.Provider value={data}>
      <Seo />
      <NavBar />
      <main>
        <Hero />
        <TechStack />
        <About />
      </main>
      <Footer />
    </RepoContext.Provider>
  );
}
