import Image from "next/image";

import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";

import { useGetDraftPlayersData } from "../lib/hooks/useGetDraftPlayersData";
import { useGetPlayers } from "@/src/07_shared/lib/hooks/player";
import { useGetUser } from "@/src/07_shared/lib/hooks/auth";
import { useGetDraft, useCreateDraft } from "@/src/07_shared/lib/hooks/draft";
import { useGetTeams } from "@/src/07_shared/lib/hooks/team";

import {
  togglePlaceholderModalWindowAtom,
  togglePlayerModalWindowAtom,
  draftPlayersAtom,
  playersAtom,
  draftAtom,
  teamsAtom,
  draftPlayersDataAtom,
} from "@/src/07_shared/lib/store/";

import { generate_draft_placeholder_players } from "../lib/utils";

import { PopulatePlayers } from "@/src/06_entities/populate-players/ui";
import { PlayerModalWindow } from "@/src/05_features/modify-player/ui";
import { PlaceholderModalWindow } from "@/src/05_features/select-player/ui";
import { Bench } from "@/src/06_entities/bench/ui";

import { toast } from "react-toastify";

export const Field = () => {
  const setDraftPlayers = useSetAtom(draftPlayersAtom);
  const setDraftPlayersData = useSetAtom(draftPlayersDataAtom);
  const setPlayers = useSetAtom(playersAtom);
  const setDraft = useSetAtom(draftAtom);
  const setTeams = useSetAtom(teamsAtom);

  const { data: userData } = useGetUser();
  const { data: playersData } = useGetPlayers();
  const { data: teamsData } = useGetTeams();
  const { data: draftData } = useGetDraft(userData?.id);

  const { mutate } = useCreateDraft();

  const draft_placeholder_players = generate_draft_placeholder_players();
  const draftPlayersData = useGetDraftPlayersData({
    draft_placeholder_players,
  });

  const [togglePlayerModalWindow] = useAtom(togglePlayerModalWindowAtom);
  const [togglePlaceholderModalWindow] = useAtom(
    togglePlaceholderModalWindowAtom
  );

  useEffect(() => {
    if (playersData) setPlayers(playersData);
    if (draftData) setDraftPlayers(draftData.players);
    if (teamsData) setTeams(teamsData);
    if (draftPlayersData) setDraftPlayersData(draftPlayersData);
    if (!draftData) {
      mutate(userData?.id, {
        onSuccess: () => {
          toast.success("Draft created successfully");
        },
      });
    }

    setDraft(draftData);
  }, [
    mutate,
    setPlayers,
    setDraftPlayers,
    setDraft,
    setTeams,
    setDraftPlayersData,
    playersData,
    draftData,
    userData,
    teamsData,
    draftPlayersData,
  ]);

  return (
    <div className="relative">
      <Image
        src="/images/squad-pitch.svg"
        width={880}
        height={833}
        alt="football-field"
        className="w-auto"
      />

      <PopulatePlayers />

      <Bench />

      {togglePlayerModalWindow && <PlayerModalWindow />}
      {togglePlaceholderModalWindow && <PlaceholderModalWindow />}
    </div>
  );
};
