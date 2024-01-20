"use client";

import { useSocialAuth } from "@/src/05_features/auth-user/lib/hooks";
import { useSociaAuthUser } from "@/src/07_shared/lib/hooks/auth/useSocialAuthUser";
import { PageContainer } from "@/src/07_shared/ui";
import { Spinner } from "@/src/07_shared/ui";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPL Fantasy | Google Account Activation Page",
  description: "KPL Fantasy Google Account Activation Page",
};

export const Google = () => {
  const googleAuthenticate = useSociaAuthUser();

  useSocialAuth(googleAuthenticate, "google-oauth2");

  return (
    <PageContainer>
      <Spinner lg />
    </PageContainer>
  );
};
