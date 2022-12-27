import Hero from "../components/Hero";
import Seo from "../components/Seo";
import About from "../components/About";
import NavBar from "../components/NavBar";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <>
      <Seo />
      <NavBar />
      <article>
        <Hero />
      </article>
      <TechStack />
      <About />
      <p className="grid place-items-center py-3">Made with 💚 by @mpotane</p>
    </>
  );
};

export default Home;
