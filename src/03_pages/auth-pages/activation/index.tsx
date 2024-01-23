"use client";

import { PageContainer } from "@/src/07_shared/ui";

import { useEffect } from "react";
import { useActivateUser } from "@/src/07_shared/lib/hooks/auth";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPL Fantasy | Account Activation Page",
  description: "KPL Fantasy Account Activation Page",
};

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export const Activation = ({ params }: Props) => {
  const { uid, token } = params;

  const { mutate } = useActivateUser();

  useEffect(() => {
    mutate(
      { uid, token },
      {
        onSuccess: () => {
          toast.success("Account activated");
        },

        onError: () => {
          toast.error("Failed to activate account");
        },

        onSettled: () => {
          redirect("/auth/login");
        },
      }
    );
  }, [uid, token, mutate]);

  return (
    <PageContainer>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Activating your account...
          </h1>
        </div>
      </div>
    </PageContainer>
  );
};
