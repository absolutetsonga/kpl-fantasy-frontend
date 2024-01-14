import { Footer } from "../04_widgets/footer/ui";
import { Navbar } from "../04_widgets/navbar/ui";
import { JotaiProvider, ReactQueryProvider } from "./providers";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        <Navbar />
        {children}
        <Footer />
      </ReactQueryProvider>
    </JotaiProvider>
  );
};

export default Layout;
