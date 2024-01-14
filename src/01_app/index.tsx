import { JotaiProvider, ReactQueryProvider } from "./providers";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </JotaiProvider>
  );
};

export default Layout;
