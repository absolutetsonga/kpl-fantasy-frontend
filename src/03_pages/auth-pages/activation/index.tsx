"use client";

import { PageContainer } from "@/src/07_shared/ui";

import { useEffect } from "react";
import { useActivateUser } from "@/src/07_shared/lib/hooks/auth";
import { toast } from "react-toastify";
import { Metadata } from "next";

import { useRouter } from "next/navigation";

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

export const ActivationPage = ({ params }: Props) => {
  const { uid, token } = params;
  const router = useRouter();

  const { mutateAsync: activateUser } = useActivateUser();

  useEffect(() => {
    activateUser(
      { uid, token },
      {
        onSuccess: () => {
          return toast.success("Account activated");
        },

        onError: () => {
          return toast.error("Failed to activate account");
        },

        onSettled: () => {
          return router.push("/auth/login");
        },
      }
    );
  }, [uid, token, activateUser, router]);

  return (
    <PageContainer>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Activating your account...
          </h1>
        </div>
      </div>
    </PageContainer>
  );
};
