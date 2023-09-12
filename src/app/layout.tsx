import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackProvider from "./providers/TanstackProvider";

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
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
