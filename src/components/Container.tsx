import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Project from "./Project";
import TeckStack from "./TechStack";

export default function Container() {
  return (
    <main className="container max-w-screen-md mx-auto px-5 py-5">
      <div className="grid grid-cols-1 gap-2">
        <Hero />
          <hr className="border-gray-700 border-dashed mx-44 sm:mx-64 md:mx-72 my-2" />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 gap-y-2">
          <TeckStack />
          <Contact />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 gap-y-2">
          <Blog />
          <Project />
        </div>
        <Footer />
      </div>
    </main>
  );
}
