"use client";

import { useEffect } from "react";
import { useVerifyUser } from "@/src/07_shared/lib/hooks/auth";
import { useReAuth } from "@/src/07_shared/lib/hooks/auth/useReAuth";

import { useAtom, useSetAtom } from "jotai";

import { isAuthenticatedAtom, isLoadingAtom } from "@/src/07_shared/lib/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cookies from "js-cookie";

const Setup = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);
  const { mutate } = useVerifyUser();
  const { mutate: refreshUser } = useReAuth();

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

  useEffect(() => {
    const timerId = setInterval(() => {
      refreshUser(undefined, {
        onSuccess: (res) => {
          Cookies.set("access", res.access);

          console.log(res);
        },
        onError: (err) => {
          console.error(err);
        },
      });
    }, 1 * 60 * 1000);

    return () => {
      clearInterval(timerId);
    };
  });
  return <ToastContainer />;
};

export default Setup;
