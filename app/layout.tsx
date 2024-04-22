import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const inter = Inter({ subsets: ["latin"] });

const font = localFont({
  src: '../public/fonts/AGPX.otf',
  display:'swap',
})

export const metadata: Metadata = {
  title: "deeroe",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
