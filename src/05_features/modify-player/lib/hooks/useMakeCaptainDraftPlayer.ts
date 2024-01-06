import { CustomHookParams } from "../types";
import { useUpdatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useSetAtom } from "jotai";
import { togglePlayerModalWindowAtom } from "@/src/07_shared/lib/store";

export const useMakeCaptainDraftPlayer = ({
  draftPlayer,
}: CustomHookParams) => {

  const updatePlayer = useUpdatePlayer();
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);

  const handleMakeCaptainDraftPlayer = async () => {
    if (!draftPlayer) return null;

    const draftPlayerUpdatedData = {
      id: draftPlayer?.id,
      squad: draftPlayer?.squad,
      player: draftPlayer?.player,
      position: draftPlayer?.position,
      is_captain: true,
      is_vice_captain: draftPlayer?.is_vice_captain,
      on_bench: draftPlayer?.on_bench,
    };

    updatePlayer.mutate(draftPlayerUpdatedData, {
      onSuccess: () => console.log(`Draft player now is a captain.`),
      onError: (error) => console.log(error),
      onSettled: () => setPlayerModalWindow(false),
    });
  };

  return handleMakeCaptainDraftPlayer;
};
