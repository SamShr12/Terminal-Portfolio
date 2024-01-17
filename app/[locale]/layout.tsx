import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terminal Mode - Samyam",
  description: "Samyam Shrestha",
  icons: "/mainlogoport.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/mainlogoport.png" />
      <body>{children}</body>
    </html>
  );
}
