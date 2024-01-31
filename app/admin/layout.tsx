import { LayoutProps } from "@/src/04_widgets/layout/lib/types";
import { PageLayout } from "@/src/04_widgets/layout/ui/layout";
import React from "react";

const Layout = ({ children, admin }: LayoutProps) => {
  return <PageLayout admin={admin}>{children}</PageLayout>;
};

export default Layout;
