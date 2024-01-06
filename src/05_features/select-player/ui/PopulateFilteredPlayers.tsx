import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo } from "react";
import { useCreatePlayer } from "@/src/07_shared/lib/hooks/draft-player";

import {
  draftPlayersAtom,
  playerPositionAtom,
  playersAtom,
  togglePlaceholderModalWindowAtom,
} from "@/src/07_shared/lib/store";
import { find_draft_substitution_player_position } from "@/src/07_shared/lib/utils";

import { FilteredPlayerCard } from "@/src/06_entities/filtered-player-card/ui";

export const PopulateFilteredPlayers = () => {
  const playerPosition = useAtomValue(playerPositionAtom);
  const players = useAtomValue(playersAtom);
  const [draftPlayers, setDraftPlayers] = useAtom(draftPlayersAtom);

  const filteredPlayers = useMemo(
    () =>
      players.filter(
        (pl) =>
          pl.position ===
          find_draft_substitution_player_position(playerPosition)
      ),
    [players, playerPosition]
  );

  const createPlayer = useCreatePlayer();
  const setPlaceholderModalWindow = useSetAtom(
    togglePlaceholderModalWindowAtom
  );

  return (
    <div className="flex flex-col gap-2">
      {filteredPlayers.map((player) => {
        const draftPlayer = {
          id: 0,
          squad: 17,
          player: player.id,
          position: playerPosition,
          is_captain: false,
          is_vice_captain: false,
          on_bench: false,
        };

        const hanldeSelectPlayer = async () => {
          createPlayer.mutate(draftPlayer, {
            onSuccess: () => {
              setDraftPlayers([...draftPlayers, { ...draftPlayer }]);
            },
            onError: (error) => console.log(error),
            onSettled: () => setPlaceholderModalWindow(false),
          });
        };

        return (
          <FilteredPlayerCard
            key={player.id}
            player={player}
            onClick={hanldeSelectPlayer}
          />
        );
      })}
    </div>
  );
};
