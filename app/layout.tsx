import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Adeeb Alkahat",
  description: "Mohammed Adeeb Alkahat projects resume blogs contact about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white scroll-p-28 scroll-smooth">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
