import { PageLayout } from "@/src/04_widgets/layout/ui/layout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <PageLayout admin={false}>{children}</PageLayout>;
};

export default Layout;
