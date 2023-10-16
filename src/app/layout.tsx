import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HGNW1LPS20"
        strategy="afterInteractive"
      />
      <Script src="./script.js" strategy="afterInteractive" />
      <Script src="./tag.js" strategy="afterInteractive" />
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
