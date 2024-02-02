import {
  findGameWeek,
  getGameWeekStatus,
} from "@/src/06_entities/gameweek-info/lib/utils";
import { useGetUser } from "@/src/07_shared/lib/hooks/auth";
import { useCreateDraft, useGetDraft } from "@/src/07_shared/lib/hooks/draft";
import { useGetGameWeeks } from "@/src/07_shared/lib/hooks/gameweek";
import { useGetPlayers } from "@/src/07_shared/lib/hooks/player";
import { useGetTeams } from "@/src/07_shared/lib/hooks/team";
import {
  draftAtom,
  draftPlayersAtom,
  draftPlayersDataAtom,
  gameWeekAtom,
  gameWeekStatusAtom,
  gameWeeksAtom,
  playersAtom,
  teamsAtom,
  userAtom,
} from "@/src/07_shared/lib/store";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useDraft = () => {
  const setDraftPlayers = useSetAtom(draftPlayersAtom);
  const setDraftPlayersData = useSetAtom(draftPlayersDataAtom);
  const setPlayers = useSetAtom(playersAtom);
  const setDraft = useSetAtom(draftAtom);
  const setTeams = useSetAtom(teamsAtom);
  const setUser = useSetAtom(userAtom);
  const setGameWeeks = useSetAtom(gameWeeksAtom);
  const setGameWeek = useSetAtom(gameWeekAtom);
  const setGameWeekStatus = useSetAtom(gameWeekStatusAtom);

  const { data: userData } = useGetUser();
  const { data: playersData } = useGetPlayers();
  const { data: teamsData } = useGetTeams();
  const { data: draftData } = useGetDraft(userData?.id);
  const { data: gameWeeksData } = useGetGameWeeks();

  const { mutate: createDraft } = useCreateDraft();

  useEffect(() => {
    if (playersData) setPlayers(playersData);
    if (draftData) {
      setDraft(draftData);
      setDraftPlayers(draftData.players);
    }
    if (teamsData) setTeams(teamsData);
    if (userData) setUser(userData);
    if (userData?.has_draft === false) {
      createDraft(userData?.id, {
        onSuccess: () => {
          toast.success("Draft created successfully");
        },
      });
    }
    if (gameWeeksData) {
      const time = new Date().getTime();

      const gameWeekData = findGameWeek(gameWeeksData, time);

      const gameWeekStatus = getGameWeekStatus(
        gameWeekData?.start_date,
        gameWeekData?.end_date,
        time
      );

      setGameWeeks(gameWeeksData);
      setGameWeek(gameWeekData);
      setGameWeekStatus(gameWeekStatus);
    }
  }, [
    createDraft,

    setPlayers,
    setDraftPlayers,
    setDraft,
    setTeams,
    setDraftPlayersData,
    setUser,
    setGameWeek,
    setGameWeekStatus,
    setGameWeeks,

    playersData,
    draftData,
    userData,
    teamsData,
    gameWeeksData,
  ]);
};
