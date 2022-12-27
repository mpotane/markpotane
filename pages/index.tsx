import Hero from "../components/Hero";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import About from "../components/About";
import dynamic from "next/dynamic";
import Loading from "../components/Loading";

const Skillset = dynamic(() => import("../components/TechStack"), {
  loading: () => <Loading />,
});

const Nav = dynamic(() => import("../components/NavBar"), {
  loading: () => <Loading />,
});

const Home = () => {
  return (
    <>
      <Seo />
      <Nav />
      <Hero />
      <Skillset />
      <About />
      <Footer />
    </>
  );
};

export default Home;
