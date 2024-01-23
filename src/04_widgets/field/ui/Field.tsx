"use client";

import Image from "next/image";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";

import {
  togglePlaceholderModalWindowAtom,
  togglePlayerModalWindowAtom,
  draftPlayersAtom,
  playersAtom,
  draftAtom,
} from "@/src/07_shared/lib/store/";

import { generate_draft_placeholder_players } from "../lib/utils";

import { useGetDraftPlayersData } from "../lib/hooks/useGetDraftPlayersData";
import { useGetPlayers } from "@/src/07_shared/lib/hooks/player";
import { useGetUser } from "@/src/07_shared/lib/hooks/auth";
import { useGetDraft, useCreateDraft } from "@/src/07_shared/lib/hooks/draft";

import { PopulatePlayers } from "@/src/06_entities/populate-players/ui";
import { PlayerModalWindow } from "@/src/05_features/modify-player/ui";
import { PlaceholderModalWindow } from "@/src/05_features/select-player/ui";
import { Bench } from "@/src/06_entities/bench/ui";

import { toast } from "react-toastify";

export const Field = () => {
  const setDraftPlayers = useSetAtom(draftPlayersAtom);
  const setPlayers = useSetAtom(playersAtom);
  const setDraft = useSetAtom(draftAtom);

  const { data: playersData } = useGetPlayers();
  const { data: userData } = useGetUser();
  const { data: draftData } = useGetDraft(userData?.id);

  const { mutate } = useCreateDraft();

  useEffect(() => {
    if (playersData) setPlayers(playersData);
    if (draftData) setDraftPlayers(draftData.players);

    if (draftData && userData) {
      mutate(userData?.id, {
        onSuccess: () => {
          toast.success("Draft created successfully");
        },
      });
    }

    setDraft(draftData);
  }, [
    setPlayers,
    setDraftPlayers,
    setDraft,
    mutate,
    playersData,
    draftData,
    userData,
  ]);

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
