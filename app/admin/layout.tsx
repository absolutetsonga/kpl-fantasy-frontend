import { LayoutProps } from "@/src/04_widgets/layout/lib/types";
import { PageLayout } from "@/src/04_widgets/layout/ui/layout";
import React from "react";

const Layout = ({ children }: LayoutProps) => {
  return <PageLayout admin={true}>{children}</PageLayout>;
};

export default Layout;
