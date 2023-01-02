import Hero from "../components/Hero";
import Seo from "../components/Seo";
import About from "../components/About";
import NavBar from "../components/NavBar";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Seo />
      <NavBar />
      <main>
        <article>
          <Hero />
        </article>
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
