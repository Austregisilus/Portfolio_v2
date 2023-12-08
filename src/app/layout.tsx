import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Arsenio's portfolio",
  description:
    "This is a profolio website to showcase who I am and some of my works",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <meta
          property="og:description"
          content="This is a profolio website to showcase who I am and some of my works"
        />
        <meta name="author" content="Arsenio Kimani" />
        <meta name="keywords" content="arsenio, portfolio, arsenio portfolio" />
        <meta
          property="og:image"
          content="https://photos.google.com/photo/AF1QipMYkaxLK3lg1bimo3GkTYaaobiulw5J3RQ-50t6"
        />
        <meta property="og:title" content="Arsenio's portfolio" />
        <meta property="og:url" content="arsenio.vercel.app" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
