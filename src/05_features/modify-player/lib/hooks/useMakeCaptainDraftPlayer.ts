import { CustomHookParams } from "../types";
import { useUpdatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useSetAtom, useAtom } from "jotai";
import {
  togglePlayerModalWindowAtom,
  draftPlayersAtom,
} from "@/src/07_shared/lib/store";
import { toast } from "react-toastify";

export const useMakeCaptainDraftPlayer = ({
  draftPlayer,
}: CustomHookParams) => {
  const updatePlayer = useUpdatePlayer();
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);
  const [draftPlayers, setDraftPlayers] = useAtom(draftPlayersAtom);

  const oldCaptain = draftPlayers.find((drPl) => drPl.is_captain === true);

  const handleMakeCaptainDraftPlayer = async () => {
    if (draftPlayer) {
      const draftPlayerUpdatedData = {
        id: draftPlayer?.id,
        squad: draftPlayer?.squad,
        player: draftPlayer?.player,
        position: draftPlayer?.position,
        is_captain: true,
        is_vice_captain: draftPlayer?.is_vice_captain,
        on_bench: draftPlayer?.on_bench,
      };

      if (oldCaptain) {
        const draftOldCaptainPlayerUpdatedData = {
          id: oldCaptain.id,
          squad: oldCaptain.squad,
          player: oldCaptain.player,
          position: oldCaptain.position,
          is_captain: false,
          is_vice_captain: oldCaptain.is_vice_captain,
          on_bench: oldCaptain.on_bench,
        };

        await updatePlayer.mutateAsync(draftOldCaptainPlayerUpdatedData);
      }

      updatePlayer.mutate(draftPlayerUpdatedData, {
        onSuccess: () => {
          toast.success(`Вы добавили капитана`);
        },
        onSettled: () => setPlayerModalWindow(false),
      });
    }
  };

  return handleMakeCaptainDraftPlayer;
};
