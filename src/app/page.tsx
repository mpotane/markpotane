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
  openGraph: {
    title: "Mark Edzel Potane",
    description:
      "Hello, I'm Mark Edzel Potane. A software engineer based in the Philippines. Passionate about building scalable and maintainable web applications.",
    url: "https://mpotane.com",
    siteName: "Mark Edzel Potane",
    images: [
      {
        url: "https://mpotane.com/image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Edzel Potane",
    description:
      "Hello I'm Mark Edzel Potane. A software engineer based in the Philippines. Passionate about building scalable and maintainable web applications.",
    creator: "@mpotanedev",
    images: ["https://mpotane/image.png"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
