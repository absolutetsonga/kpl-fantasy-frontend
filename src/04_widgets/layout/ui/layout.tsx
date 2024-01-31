import { RequireAuth } from "@/src/05_features/auth-user/ui";
import React from "react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <RequireAuth>{children}</RequireAuth>;
};
