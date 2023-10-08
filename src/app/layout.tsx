/* eslint-disable */
'use client';
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
         <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
