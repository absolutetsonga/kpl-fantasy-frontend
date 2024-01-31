"use client";

import { redirect } from "next/navigation";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isLoadingAtom,
  userAtom,
} from "@/src/07_shared/lib/store";
import { Spinner } from "@/src/07_shared/ui";

export default function RequireAuth({
  children,
  admin,
}: {
  children: React.ReactNode;
  admin: boolean;
}) {
  const isLoading = useAtomValue(isLoadingAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const user = useAtomValue(userAtom);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  if (admin) {
    if (!user?.is_staff) {
      redirect("/auth/login");
    }
  }

  return children;
}
