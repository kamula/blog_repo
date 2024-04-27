import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/includes/NavBar";
import Footer from "@/components/includes/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog post",
  description: "Blog post",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
