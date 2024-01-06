import { useDeletePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useSetAtom } from "jotai";
import { togglePlayerModalWindowAtom } from "@/src/07_shared/lib/store";

export const useDeleteDraftPlayer = (draftPlayerId: number | undefined) => {
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);
  const deletePlayer = useDeletePlayer();

  const handleDeletePlayerClick = async () => {
    if (draftPlayerId) {
      deletePlayer.mutate(draftPlayerId, {
        onSuccess: () => console.log("Draft Player deleted successfully"),
        onError: (error) => console.log(error),
        onSettled: () => setPlayerModalWindow(false),
      });
    }
  };

  return handleDeletePlayerClick;
};
