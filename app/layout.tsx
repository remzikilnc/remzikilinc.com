import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/Stars";
import Navbar from "@/components/Navbar";
import {MetaData as BaseMetaData} from "@/config/meta";
import {Metadata} from "next";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = BaseMetaData;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
