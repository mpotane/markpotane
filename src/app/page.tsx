import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Mark Edzel Potane",
  description:
    "Hello, I'm Mark Edzel Potane. A software engineer based in the Philippines. Passionate about building scalable and maintainable web applications.",
  metadataBase: new URL("https://mpotane.com"),
  openGraph: {
    title: "Mark Edzel Potane",
    description:
      "Hello, I'm Mark Edzel Potane. A software engineer based in the Philippines. Passionate about building scalable and maintainable web applications.",
    url: "/",
    siteName: "Mark Edzel Potane",
    images: [
      {
        url: "/image.png",
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
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    noimageindex: true,
    notranslate: true,
  },
};

export default function Page() {
  return (
    <Container />
  )
}
