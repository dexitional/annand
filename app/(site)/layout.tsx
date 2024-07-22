import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'

import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const tstar = localFont({
  src: [
    {
      path: '../../public/fonts/TStarProRegular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/TStarProMedium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/TStarProLight.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/TStarProBold.ttf',
      weight: '800'
    },
    {
      path: '../../public/fonts/TStarProHeavy.ttf',
      weight: '900'
    },
  ],
  variable: '--font-tstar'
})

export const metadata: Metadata = {
  title: "Adehye Charity Organisation",
  description: "A Non-profit Organisation committed to charity works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${tstar.variable} min-h-screen flex flex-col items-end justify-between`}>
        <Header />
        {/* mt-[8.75rem] */}
        <main className="w-full h-full bg-green-400 border">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
