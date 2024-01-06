import { CustomHookParams } from "../types";
import { useUpdatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useSetAtom, useAtom } from "jotai";
import {
  draftPlayersAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store";
import { IDraftPlayer } from "@/src/07_shared/models";

export const useMakeViceCaptainDraftPlayer = ({
  draftPlayer,
}: CustomHookParams) => {
  const [draftPlayers, setDraftPlayers] = useAtom(draftPlayersAtom);

  const updatePlayer = useUpdatePlayer();
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);

  const oldViceCaptain = draftPlayers.find(
    (drPl) => drPl.is_vice_captain === true
  );

  const handleMakeViceCaptainDraftPlayer = async () => {
    if (draftPlayer) {
      const draftPlayerUpdatedData = {
        id: draftPlayer?.id,
        squad: draftPlayer?.squad,
        player: draftPlayer?.player,
        position: draftPlayer?.position,
        is_captain: draftPlayer?.is_captain,
        is_vice_captain: true,
        on_bench: draftPlayer?.on_bench,
      };

      if (oldViceCaptain) {
        const draftOldViceCaptainPlayerUpdatedData = {
          id: oldViceCaptain.id,
          squad: oldViceCaptain.squad,
          player: oldViceCaptain.player,
          position: oldViceCaptain.position,
          is_captain: oldViceCaptain.is_captain,
          is_vice_captain: false,
          on_bench: oldViceCaptain.on_bench,
        };

        await updatePlayer.mutateAsync(draftOldViceCaptainPlayerUpdatedData, {
          onSuccess: () => console.log(`Old vice-captain updated successfully`),
          onError: (error) => console.log(error),
          onSettled: () => setPlayerModalWindow(false),
        });
      }

      updatePlayer.mutate(draftPlayerUpdatedData, {
        onSuccess: () => {
          console.log(`Draft player now is a vice-captain.`);
        },
        onError: (error) => console.log(error),
        onSettled: () => setPlayerModalWindow(false),
      });
    }
  };

  return handleMakeViceCaptainDraftPlayer;
};
