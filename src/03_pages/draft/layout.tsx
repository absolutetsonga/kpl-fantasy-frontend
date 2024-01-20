import { RequireAuth } from "@/src/05_features/auth-user/ui";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <RequireAuth>{children}</RequireAuth>;
};

export default layout;
