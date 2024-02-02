"use client";

import { redirect } from "next/navigation";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isLoadingAtom,
  userAtom,
} from "@/src/07_shared/lib/store";
import { Spinner } from "@/src/07_shared/ui";
import { useGetUser } from "@/src/07_shared/lib/hooks/auth";

export default function RequireAuth({
  children,
  admin,
}: {
  children: React.ReactNode;
  admin: boolean;
}) {
  const isLoading = useAtomValue(isLoadingAtom);
  const { data: userData } = useGetUser();

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (admin) {
    if (userData?.is_staff === false) {
      redirect("/auth/login");
    }
  }

  return children;
}
