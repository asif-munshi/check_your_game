import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackProvider from "./providers/TanstackProvider";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Check Your Game",
  description: "Created by Asif Munshi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212]`}>
        <TanstackProvider>
          <div className="flex h-screen w-full flex-col items-center justify-start">
            <Header />
            <Main />
            {children}
            <Footer />
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
