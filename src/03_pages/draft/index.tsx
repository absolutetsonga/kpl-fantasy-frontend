"use client";

import { Metadata } from "next";

import { PageContainer } from "@/src/07_shared/ui/PageContainer";
import { GameWeekInfo } from "@/src/06_entities/gameweek-info/ui";
import { Field } from "@/src/04_widgets/field/ui";
import { WildCardTabs } from "@/src/04_widgets/wildcard-tabs/ui";
import { TransferTabs } from "@/src/04_widgets/transfer-tabs/ui/TransferTabs";
import { useAtomValue } from "jotai";
import { gameWeekStartAtom } from "@/src/07_shared/lib/store";

export const metadata: Metadata = {
  title: "KPL Fantasy | Draft Page",
  description: "KPL Fantasy Draft Page",
};

export const DraftPage = () => {
  const gameWeekStart = useAtomValue(gameWeekStartAtom);

  return (
    <PageContainer>
      <div className="text-fuchsia-950 text-[25px] text-left">
        Pick Team - Tsonga
      </div>
      <div className="flex flex-col max-w-[880px] rounded-md shadow gap-6">
        <GameWeekInfo />

        <div className="w-full flex justify-center items-center text-center">
          <div className="text-red-600 text-md font-semibold">
            Complete all changes until: {gameWeekStart}
          </div>
        </div>

        <TransferTabs />
        <Field />
        <WildCardTabs />
      </div>
    </PageContainer>
  );
};
