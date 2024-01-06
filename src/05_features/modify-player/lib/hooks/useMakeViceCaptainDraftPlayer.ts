import { CustomHookParams } from "../types";
import { useUpdatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useSetAtom, useAtom } from "jotai";
import {
  draftPlayersAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store";

export const useMakeViceCaptainDraftPlayer = ({
  draftPlayer,
}: CustomHookParams) => {
  const updatePlayer = useUpdatePlayer();
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);
  const [draftPlayers, setDraftPlayers] = useAtom(draftPlayersAtom);

  const handleMakeViceCaptainDraftPlayer = async () => {
    if (!draftPlayer) return null;

    const draftPlayerUpdatedData = {
      id: draftPlayer?.id,
      squad: draftPlayer?.squad,
      player: draftPlayer?.player,
      position: draftPlayer?.position,
      is_captain: draftPlayer?.is_captain,
      is_vice_captain: true,
      on_bench: draftPlayer?.on_bench,
    };

    updatePlayer.mutate(draftPlayerUpdatedData, {
      onSuccess: () => {
        const updatedDraftPlayers = draftPlayers.filter(
          (drPl) => drPl.id !== draftPlayer.id
        );

        console.log(updatedDraftPlayers);

        setDraftPlayers([
          ...updatedDraftPlayers,
          { ...draftPlayerUpdatedData },
        ]);
        
        console.log(`Draft player now is a vice-captain.`);
      },
      onError: (error) => console.log(error),
      onSettled: () => setPlayerModalWindow(false),
    });
  };

  return handleMakeViceCaptainDraftPlayer;
};
