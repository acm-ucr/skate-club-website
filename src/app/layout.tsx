import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import {
  Inter,
  Orbitron,
  Bangers,
  Baloo_Tamma_2,
  Baloo_Thambi_2,
} from "next/font/google";
import localFont from "next/font/local";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import favicon from "./favicon.ico";

const banco = localFont({
  src: "../../public/fonts/Banco-Regular.ttf",
  variable: "--font-banco",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

const balooTamma = Baloo_Tamma_2({
  subsets: ["latin"],
  variable: "--font-baloo-tamma",
});

const balooThambi = Baloo_Thambi_2({
  subsets: ["latin"],
  variable: "--font-baloo-thambi-2",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UCR Skate Club",
  description: "The skateboarding club at UCR.",
  icons: {
    icon: favicon.src,
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${banco.variable} ${orbitron.variable} ${bangers.variable} ${balooThambi.variable} ${balooTamma.variable} ${inter.className} flex flex-col justify-between bg-black`}
      >
        <Navbar />
        <div className="flex w-full flex-col items-center justify-center">
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
