import { JotaiProvider, ReactQueryProvider, ToastSetup } from "./providers";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

import { Navbar } from "@/src/04_widgets/navbar/ui";
import { Footer } from "@/src/04_widgets/footer/ui";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body className={inter.className}>
            <ToastSetup />
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ReactQueryProvider>
    </JotaiProvider>
  );
};
