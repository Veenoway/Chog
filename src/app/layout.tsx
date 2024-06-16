import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHOG",
  description:
    "Chog is a community-driven project that aims to bring the best of DeFi to the masses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Poetsen+One&display=swap');
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
