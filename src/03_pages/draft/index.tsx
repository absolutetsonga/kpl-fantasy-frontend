"use client";

import { PageContainer } from "@/src/07_shared/ui/PageContainer";
import { Field } from "@/src/04_widgets/field/ui";

import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPL Fantasy | Draft Page",
  description: "KPL Fantasy Draft Page",
};

export const DraftPage = () => {
  return (
    <PageContainer>
      Draft Page
      <Field />
    </PageContainer>
  );
};
