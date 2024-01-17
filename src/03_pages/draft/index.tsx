"use client";

import { PageContainer } from "@/src/07_shared/ui/PageContainer";
import { Field } from "@/src/04_widgets/field/ui";

import React, { useEffect } from "react";

import { Metadata } from "next";
import { useReAuth } from "@/src/07_shared/lib/hooks/auth/useReAuth";
import { BASE_URL } from "@/src/07_shared/lib/constants";

export const metadata: Metadata = {
  title: "KPL Fantasy | Draft Page",
  description: "KPL Fantasy Draft Page",
};

export const DraftPage = () => {
  // Widget Field
  // Widget ChipBoard
  // GameWeekTable entity
  const reAuth = useReAuth();

  useEffect(() => {
    reAuth({ url: `${BASE_URL}players/`, method: "GET" });
  }, [reAuth]);

  return (
    <PageContainer>
      Draft Page
      <Field />
    </PageContainer>
  );
};
