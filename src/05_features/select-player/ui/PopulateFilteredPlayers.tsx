import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useMemo } from "react";
import { useCreatePlayer } from "@/src/07_shared/lib/hooks/draft-player";

import {
  draftAtom,
  draftPlayersAtom,
  playerPositionAtom,
  playersAtom,
  togglePlaceholderModalWindowAtom,
} from "@/src/07_shared/lib/store";

import { find_draft_substitution_player_position } from "../lib/utils";

import { FilteredPlayerCard } from "@/src/06_entities/filtered-player-card/ui";
import { useSelectPlayer } from "../lib/hooks/useSelectPlayer";

export const PopulateFilteredPlayers = () => {
  const playerPosition = useAtomValue(playerPositionAtom);
  const players = useAtomValue(playersAtom);
  const [draft] = useAtom(draftAtom);

  const handleSelectPlayer = useSelectPlayer();
  const filteredPlayers = useMemo(
    () =>
      players.filter(
        (pl) =>
          pl.position ===
          find_draft_substitution_player_position(playerPosition)
      ),
    [players, playerPosition]
  );

  if (!draft) {
    return <div>Players are loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredPlayers.map((player) => {
        const draftPlayer = {
          id: 0,
          squad: draft.id,
          player: player.id,
          position: playerPosition,
          is_captain: false,
          is_vice_captain: false,
          on_bench: false,
        };

        return (
          <FilteredPlayerCard
            key={player.id}
            player={player}
            onClick={() => handleSelectPlayer({ draftPlayer })}
          />
        );
      })}
    </div>
  );
};
