"use client";

import { useEffect } from "react";
import { useVerifyUser } from "@/src/07_shared/lib/hooks/auth";
import { useAtom, useSetAtom } from "jotai";

import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Setup = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  const { mutate } = useVerifyUser();

  useEffect(() => {
    mutate(undefined, {
      onSuccess: () => {
        setIsAuthenticated(true);
      },
      onError: async (error) => {
        console.error("Error in verifying user:", error);
        setIsLoading(false);
        setIsAuthenticated(false);
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  }, [setIsAuthenticated, setIsLoading, mutate]);

  return <ToastContainer />;
};

export default Setup;
