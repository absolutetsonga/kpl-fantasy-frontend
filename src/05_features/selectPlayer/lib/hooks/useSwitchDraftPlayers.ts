import { useAtomValue, useSetAtom, useAtom } from "jotai";
import { useUpdatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import {
  draftPlayersAtom,
  playerAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store";

import { find_draft_substitution_draft_position } from "../utils";
import { IDraftPlayer } from "@/src/07_shared/models";

export const useSwitchDraftPlayers = () => {
  const updatePlayer = useUpdatePlayer();
  const [draftPlayers, setDraftPlayers] = useAtom(draftPlayersAtom);
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);
  const player = useAtomValue(playerAtom);

  const handleSwitchDraftPlayers = () => {
    const draftPlayer = draftPlayers.find(
      (drPl: IDraftPlayer) => drPl.player === player?.id
    );

    const substitutionPlayer = draftPlayers.find(
      (drPl: IDraftPlayer) =>
        drPl.position ===
        find_draft_substitution_draft_position(draftPlayer?.position)
    );

    if (substitutionPlayer?.id && draftPlayer?.id) {
      const updatedDraftPlayers = draftPlayers.map((drPl: IDraftPlayer) => {
        if (drPl.id === draftPlayer.id) {
          return { ...drPl, position: substitutionPlayer.position };
        } else if (drPl.id === substitutionPlayer.id) {
          return { ...drPl, position: draftPlayer.position };
        }
        return drPl;
      });

      setDraftPlayers(updatedDraftPlayers);

      const draftPlayerUpdatedData = {
        id: draftPlayer?.id,
        squad: draftPlayer?.squad,
        player: draftPlayer?.player,
        position: substitutionPlayer?.position,
        is_captain: draftPlayer?.is_captain,
        is_vice_captain: draftPlayer?.is_vice_captain,
        on_bench: true,
      };

      const substitutePlayerUpdatedData = {
        id: substitutionPlayer?.id,
        squad: substitutionPlayer?.squad,
        player: substitutionPlayer?.player,
        position: draftPlayer.position,
        is_captain: substitutionPlayer?.is_captain,
        is_vice_captain: substitutionPlayer?.is_vice_captain,
        on_bench: false,
      };

      updatePlayer.mutate(draftPlayerUpdatedData, {
        onSuccess: () => console.log("Draft Player updated successfully"),
        onError: (error) => console.log(error),
        onSettled: () => setPlayerModalWindow(false),
      });

      updatePlayer.mutate(substitutePlayerUpdatedData, {
        onSuccess: () => console.log("Draft Player updated successfully"),
        onError: (error) => console.log(error),
        onSettled: () => setPlayerModalWindow(false),
      });
    }
  };
  
  return handleSwitchDraftPlayers;
};
