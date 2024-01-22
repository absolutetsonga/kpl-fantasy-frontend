import { DraftLayout } from "@/src/03_pages/draft/layout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <DraftLayout>{children}</DraftLayout>;
};

export default Layout;
