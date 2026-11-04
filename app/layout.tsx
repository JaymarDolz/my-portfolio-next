import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";

const brandonGrotesque = localFont({
  src: "../public/portfolio/fonts/BrandonGrotesque.woff",
  variable: "--font-brandon-grotesque",
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela-round",
});

export const metadata: Metadata = {
  title: "Jaymar Dolz | Portfolio",
  description:
    "Portfolio of Jaymar Dolz, an electrical engineer transitioning into a full-stack web development and digital design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${varelaRound.variable} ${brandonGrotesque.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
