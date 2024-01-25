"use client";

import { Metadata } from "next";

import { PageContainer } from "@/src/07_shared/ui/PageContainer";
import { GameweekInfo } from "@/src/06_entities/gameweek-info/ui";
import { Field } from "@/src/04_widgets/field/ui";
import { WildCardTabs } from "@/src/04_widgets/wildcard-tabs/ui";

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
        <WildCardTabs />
      </div>
    </PageContainer>
  );
};
