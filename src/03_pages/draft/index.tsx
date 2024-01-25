"use client";

import { PageContainer } from "@/src/07_shared/ui/PageContainer";
import { Field } from "@/src/04_widgets/field/ui";

import React from "react";

import { Metadata } from "next";
import { GameweekInfo } from "@/src/06_entities/gameweek-info/ui";

export const metadata: Metadata = {
  title: "KPL Fantasy | Draft Page",
  description: "KPL Fantasy Draft Page",
};

export const DraftPage = () => {
  return (
    <PageContainer>
      <div className="text-fuchsia-950 text-[25px] text-left">
        Pick Team - Tsonga
      </div>
      <div className="flex flex-col max-w-[880px] rounded-md shadow gap-6">
        <GameweekInfo />
        <Field />
      </div>
    </PageContainer>
  );
};
