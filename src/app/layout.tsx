"use client";
import "./global.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@/redux/provider/provider";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
