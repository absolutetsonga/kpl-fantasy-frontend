"use client";

import Image from "next/image";
import { useAtom } from "jotai";
import { useEffect } from "react";

import {
  togglePlaceholderModalWindowAtom,
  togglePlayerModalWindowAtom,
  draftPlayersAtom,
  playersAtom,
} from "@/src/07_shared/lib/store/";

import { generate_draft_placeholder_players } from "../lib/utils";

import { useGetDraftPlayersData } from "../lib/hooks/useGetDraftPlayersData";
import { useGetDraft } from "@/src/07_shared/lib/hooks/draft";
import { useGetPlayers } from "@/src/07_shared/lib/hooks/player";

import { PopulatePlayers } from "@/src/06_entities/populate-players/ui";
import { PlayerModalWindow } from "@/src/05_features/modify-player/ui";
import { PlaceholderModalWindow } from "@/src/05_features/select-player/ui";
import { Bench } from "@/src/06_entities/bench/ui/Bench";

export const Field = () => {
  const [, setDraftPlayers] = useAtom(draftPlayersAtom);
  const [, setPlayers] = useAtom(playersAtom);

  const { data: draftData } = useGetDraft(17);
  const { data: playersData } = useGetPlayers();

  useEffect(() => {
    if (playersData) setPlayers(playersData);
    if (draftData) setDraftPlayers(draftData.players);
  }, [setPlayers, setDraftPlayers, playersData, draftData]);

  const draft_placeholder_players = generate_draft_placeholder_players();
  const draftPlayersData = useGetDraftPlayersData({
    draft_placeholder_players,
  });

  const [togglePlayerModalWindow] = useAtom(togglePlayerModalWindowAtom);
  const [togglePlaceholderModalWindow] = useAtom(
    togglePlaceholderModalWindowAtom
  );

  return (
    <div className="relative">
      <Image
        src="/images/squad-pitch.svg"
        width={880}
        height={833}
        alt="football-field"
        className="w-auto"
      />

      <PopulatePlayers draftPlayersData={draftPlayersData} />

      <Bench />

      {togglePlayerModalWindow && <PlayerModalWindow />}
      {togglePlaceholderModalWindow && <PlaceholderModalWindow />}
    </div>
  );
};
