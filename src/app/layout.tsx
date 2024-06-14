import type { Metadata } from "next";
import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "./GlobalComponents/Header";
import Footer from "./GlobalComponents/Footer";

const inter = Inter({ subsets: ["latin"] });

const fira = Fira_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fira'
})

export const metadata: Metadata = {
  title: {
    default: 'Blueline Cleaning',
    template: '%s - Blueline Cleaning'
  },
  description: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fira.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
