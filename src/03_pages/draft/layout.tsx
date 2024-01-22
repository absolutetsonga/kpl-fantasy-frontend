import { RequireAuth } from "@/src/05_features/auth-user/ui";
import React from "react";

export const DraftLayout = ({ children }: { children: React.ReactNode }) => {
  return <RequireAuth>{children}</RequireAuth>;
};
