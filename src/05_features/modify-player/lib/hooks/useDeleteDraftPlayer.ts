import { useDeletePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useAtom, useSetAtom } from "jotai";
import {
  draftPlayersAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store";

export const useDeleteDraftPlayer = (draftPlayerId: number | undefined) => {
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);
  const [draftPlayers, setDraftPlayers] = useAtom(draftPlayersAtom);
  const deletePlayer = useDeletePlayer();

  const handleDeletePlayerClick = async () => {
    if (draftPlayerId) {
      deletePlayer.mutate(draftPlayerId, {
        onSuccess: () => {
          const updatedDraftPlayers = draftPlayers.filter(
            (drPl) => drPl.id !== draftPlayerId
          );

          setDraftPlayers(updatedDraftPlayers);
          console.log(`Player deleted successfully`);
        },
        onError: (error) => console.log(error),
        onSettled: () => setPlayerModalWindow(false),
      });
    }
  };

  return handleDeletePlayerClick;
};
