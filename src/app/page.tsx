import Hero from "../components/Hero";
import About from "../components/About";
import NavBar from "../components/NavBar";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark Edzel Potane",
  description:
    "Hello, I'm Mark Edzel Potane. A software engineer based in the Philippines. Passionate about building scalable and maintainable web applications.",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  );
}
