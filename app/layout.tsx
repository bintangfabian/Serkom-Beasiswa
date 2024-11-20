import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Home",
  description: "Sakolarship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Pemambahan navbar compoment */}
        <Navbar />

        {children}
        
        {/* Pemambahan footer compoment */}
        <Footer />
      </body>
    </html>
  );
}
