import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default: "abbey",
    template: "%s | abbey"
  },
  description: "abbey's personal website containing projects",
  icons: {
    icon: "/images/profile.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-makima bg-no-repeat bg-cover bg-center bg-fixed min-h-screen">
          <div className="backdrop-blur-md bg-black/70 flex flex-col font-inter min-h-screen">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

