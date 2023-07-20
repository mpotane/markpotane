import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Project from "./Project";
import TeckStack from "./TechStack";

export default function Container() {
  return (
    <main className="container max-w-screen-lg mx-auto px-5 py-5">
      <div className="grid grid-cols-1 gap-2">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 gap-y-2">
          <TeckStack />
          <Contact />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 gap-y-2">
          <Footer />
          <Project />
        </div>
      </div>
    </main>
  );
}
