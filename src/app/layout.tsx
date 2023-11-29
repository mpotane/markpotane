import "./globals.css";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <Script
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N2L95B2T');`,
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "dateCreated": "2023-11-29T00:00:00Z",
            "dateModified": "2023-11-29T00:00:00Z",
            "mainEntity": {
              "@type": "Person",
              "name": "Mark Edzel Potane",
              "alternateName": "Mark Potane",
              "identifier": "mpotane",
              "interactionStatistic": [
                {
                  "@type": "InteractionCounter",
                  "interactionType": "https://schema.org/FollowAction",
                  "userInteractionCount": 0
                },
                {
                  "@type": "InteractionCounter",
                  "interactionType": "https://schema.org/LikeAction",
                  "userInteractionCount": 0
                }
              ],
              "agentInteractionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/WriteAction",
                "userInteractionCount": 0
              },
              "description": "I am dedicated to assisting businesses in elevating their online presence and constructing web solutions that are both scalable and maintainable.",
              "image": "/gt.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/mpotane/",
                "https://twitter.com/mpotanedev"
              ]
            }
          }),
        }}
      />
      <body className={`${GeistSans.variable} font-sans`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2L95B2T"
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
