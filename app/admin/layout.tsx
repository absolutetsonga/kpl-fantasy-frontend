import { PageLayout } from "@/src/04_widgets/layout/ui/layout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <PageLayout admin={true}>{children}</PageLayout>;
};

export default Layout;
