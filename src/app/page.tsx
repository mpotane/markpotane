import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Mark Edzel Potane | Personal Porfolio | SEO Specialist.",
  description:
    "Explore the profile of Mark Edzel Potane, a talented SEO Specialist and Software Engineer hailing from the Philippines.",
  metadataBase: new URL("https://www.mpotane.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mark Edzel Potane | Personal Porfolio | SEO Specialist.",
    description:
      "Explore the profile of Mark Edzel Potane, a talented SEO Specialist and Software Engineer hailing from the Philippines.",
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
    title: "Mark Edzel Potane | Personal Porfolio | SEO Specialist.",
    description:
      "Explore the profile of Mark Edzel Potane, a talented SEO Specialist and Software Engineer hailing from the Philippines.",
    creator: "@mpotanedev",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N2L95B2T"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
        ></iframe>
      </noscript>
      <Container />
    </>
  );
}
