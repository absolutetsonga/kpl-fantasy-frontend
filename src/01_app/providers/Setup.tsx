"use client";

import { useEffect } from "react";
import { useGetUser, useVerifyUser } from "@/src/07_shared/lib/hooks/auth";
import { useReAuth } from "@/src/07_shared/lib/hooks/auth/useReAuth";

import { useAtom, useSetAtom } from "jotai";

import {
  isAuthenticatedAtom,
  isLoadingAtom,
  userAtom,
} from "@/src/07_shared/lib/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cookies from "js-cookie";

const Setup = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);
  const setUser = useSetAtom(userAtom);

  const { mutate: verifyUser } = useVerifyUser();
  const { mutate: refreshUser } = useReAuth();

  const { data: userData } = useGetUser();

  useEffect(() => {
    setUser(userData);
  }, [setUser, userData]);

  useEffect(() => {
    verifyUser(undefined, {
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
  }, [setIsAuthenticated, setIsLoading, verifyUser]);

  useEffect(() => {
    const timerId = setInterval(() => {
      refreshUser(undefined, {
        onSuccess: (res) => {
          Cookies.set("access", res.access);
        },
        onError: (err) => {
          console.error(err);
        },
      });
    }, 1 * 60 * 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [refreshUser]);
  return <ToastContainer />;
};

export default Setup;
