import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import About from "../components/About";
import TeckStack from "../components/TechStack";

const Home = () => {
  return (
    <>
      <Seo />
      <NavBar />
      <Hero />
      <TeckStack />
      <About />
      <Footer />
    </>
  );
};

export default Home;
