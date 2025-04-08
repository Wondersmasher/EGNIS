import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"], // Or other subsets as needed
  weight: ["400", "700"], // Or other weights as needed
  variable: "--font-inter", // Optional, for using CSS variables
  display: "swap", // Optional, but recommended for performance
});

export const metadata: Metadata = {
  title: "EGNIS PROJECT",
  description: "THIS IS THE EGNIS PROJECT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`
          ${geistSans.variable}
           ${geistMono.variable}
          ${inter.variable} 
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
