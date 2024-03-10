import type { Metadata } from "next";
import { Sree_Krushnadevaraya } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Sree_Krushnadevaraya({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Defense Careers HQ",
  description: "Premier website to assist veterans find exciting US Defense contractor jobs and Defense contracting careers. Explore contractor websites and job resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
