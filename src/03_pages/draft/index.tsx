"use client";

import { Metadata } from "next";

import { PageContainer } from "@/src/07_shared/ui/PageContainer";
import { GameWeekInfo } from "@/src/06_entities/gameweek-info/ui";
import { Field } from "@/src/04_widgets/field/ui";
import { WildCardTabs } from "@/src/04_widgets/wildcard-tabs/ui";
import { TransferTabs } from "@/src/04_widgets/transfer-tabs/ui/TransferTabs";
import { GameWeekStatusMessage } from "@/src/06_entities/gameweek-status-message/ui";
import { useDraft } from "./lib/useDraft";
import { useAtomValue } from "jotai";
import { userAtom } from "@/src/07_shared/lib/store";

export const metadata: Metadata = {
  title: "KPL Fantasy | Draft Page",
  description: "KPL Fantasy Draft Page",
};

export const DraftPage = () => {
  useDraft();
  const user = useAtomValue(userAtom);

  return (
    <PageContainer>
      <div className="text-fuchsia-950 text-[25px] text-left">
        Драфт - {user?.first_name} {user?.last_name}
      </div>

      <div className="flex flex-col w-[90%] md:max-w-[880px] rounded-md shadow gap-6">
        <GameWeekInfo />
        <GameWeekStatusMessage />
        <TransferTabs />
        <Field />
        {/* <WildCardTabs /> */}
      </div>
    </PageContainer>
  );
};
