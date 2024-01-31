import { RequireAuth } from "@/src/05_features/auth-user/ui";
import { LayoutProps } from "../lib/types";

export const PageLayout = ({ children, admin }: LayoutProps) => {
  return <RequireAuth admin={admin}>{children}</RequireAuth>;
};
