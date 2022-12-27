import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import About from "../components/About";
import NavBar from "../components/NavBar";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <>
      <Seo />
      <NavBar />
      <Hero />
      <TechStack />
      <About />
      <Footer />
    </>
  );
};

export default Home;
