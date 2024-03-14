import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Place of all of kind technical blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-[90vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
