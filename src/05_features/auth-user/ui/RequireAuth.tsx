"use client";

import { redirect } from "next/navigation";
import { useAtomValue } from "jotai";
import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";
import { Spinner } from "@/src/07_shared/ui";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useAtomValue(isLoadingAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

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

  return children;
}
