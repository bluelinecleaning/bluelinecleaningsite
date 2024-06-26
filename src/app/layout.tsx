import type { Metadata } from "next";
import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "./GlobalComponents/Header";
import Footer from "./GlobalComponents/Footer";
import Quality from "./(home)/Quality";

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
  description: "Registered charity organization that creates meaningful employment opportunities by providing cleaning services in Tasmania",
  alternates: {
    canonical: 'https://www.bluelinecleaning.com.au'
  },
  icons: {
    icon: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg',
  },
  openGraph: {
    title: 'Blueline Cleaning',
    description: 'Registered charity organization that creates meaningful employment opportunities by providing cleaning services in Tasmania',
    url: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg',
    type: 'website',
    images: [
      {
        url: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg'
      },
    ]
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} ${fira.variable}`}>
        <Header />
        {children}
        <Quality />
        <Footer />
      </body>
    </html>
  );
}
