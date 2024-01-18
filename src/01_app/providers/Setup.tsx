"use client";

import { useEffect } from "react";
import { useVerifyUser } from "@/src/07_shared/lib/hooks/auth";
import { useSetAtom } from "jotai";

import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReAuth } from "@/src/07_shared/lib/hooks/auth/useReAuth";

export const Setup = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  const verifyUser = useVerifyUser();
  const reAuth = useReAuth();

  useEffect(() => {
    verifyUser.mutate(undefined, {
      onSuccess: () => {
        setIsAuthenticated(true);
      },
      onError: async (error) => {
        console.error("Error in verifying user:", error);
        await reAuth();
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  }, []);

  return <ToastContainer />;
};
