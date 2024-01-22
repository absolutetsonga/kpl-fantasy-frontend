"use client";

import { redirect } from "next/navigation";
import { useAtom } from "jotai";
import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";
import { Spinner } from "@/src/07_shared/ui";
import { toast } from "react-toastify";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useAtom(isLoadingAtom);
  const isAuthenticated = useAtom(isAuthenticatedAtom);

  console.log(isAuthenticated, isLoading);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (isAuthenticated) {
    toast.error("Must be logged in");
    redirect("/auth/login");
  }

  return children;
}
