import { CustomHookParams } from "../types";
import { useUpdatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useSetAtom } from "jotai";
import { togglePlayerModalWindowAtom } from "@/src/07_shared/lib/store";

export const useMakeViceCaptainDraftPlayer = ({
  draftPlayer,
}: CustomHookParams) => {
  const updatePlayer = useUpdatePlayer();
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);

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
      onSuccess: () => console.log(`Draft player now is a vice-captain.`),
      onError: (error) => console.log(error),
      onSettled: () => setPlayerModalWindow(false),
    });
  };

  return handleMakeViceCaptainDraftPlayer;
};
