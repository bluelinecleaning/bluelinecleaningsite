import type { Metadata } from "next";
import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "./GlobalComponents/Header";
import Footer from "./GlobalComponents/Footer";
import Quality from "./(home)/Quality";
import GoogleAnalytics from "./metrics/GoogleAnalytics";

// Amplify
import ConfigureAmplifyClientSide from "./ConfigureAmplifyClientSide";

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
  description: "Registered charity organization that creates meaningful employment opportunities by providing commercial, industrial and production cleaning services in Tasmania",
  alternates: {
    canonical: 'https://www.bluelinecleaning.com.au'
  },
  icons: {
    icon: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo3.svg',
  },
  openGraph: {
    title: 'Blueline Cleaning',
    description: 'Registered charity organization that creates meaningful employment opportunities by providing commercial, industrial and production cleaning services in Tasmania',
    url: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png',
    type: 'website',
    images: [
      {
        url: 'https://blueline-cleaning.s3.ap-southeast-2.amazonaws.com/logo1.png'
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
      <GoogleAnalytics />
      <body className={`${inter.className} ${fira.variable}`}>
      {/* <script src="https://app.socialgrowthco.com/webchat/plugin.js?v=5"></script> */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (typeof window !== "undefined") {
                window.ktt10.setup({
                  id: "uO7Km0AcfaI1VS1P2",
                  accountId: "1269955",
                  color: "#006dff",
                });
              }
            })();
          `
        }} />
        <>
          <ConfigureAmplifyClientSide />
          <Header />
          {children}
          <Quality />
          <Footer />
        </>
      </body>
    </html>
  );
}
