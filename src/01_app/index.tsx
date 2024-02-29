"use client";

import { JotaiProvider, ReactQueryProvider } from "./providers";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

import { Navbar } from "@/src/04_widgets/navbar/ui";
import { Footer } from "@/src/04_widgets/footer/ui";

import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const SetupNoSSR = dynamic(() => import("./providers/Setup"), {
  ssr: false,
});

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        <html lang="en">
          <head>
            <link
              rel="icon"
              href="/images/logo.png"
              sizes="any"
            />
          </head>
          <body className={`${inter.className}`}>
            <SetupNoSSR />
            <Navbar />
            <div className="flex items-center justify-center">{children}</div>
            <Footer />
          </body>
        </html>
      </ReactQueryProvider>
    </JotaiProvider>
  );
};
