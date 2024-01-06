import { useAtomValue } from "jotai";
import { playersAtom, draftPlayersAtom } from "@/src/07_shared/lib/store";

import { PLAYERS_STYLE_POSITIONS } from "@/src/07_shared/lib/constants";
import { find_draft_player_data } from "@/src/06_entities/populate-players/lib/utils";
import { IDraftPlayer } from "@/src/07_shared/models";

type PopulatePlayersProps = {
  draft_placeholder_players: IDraftPlayer[];
};

export const useGetDraftPlayersData = ({
  draft_placeholder_players,
}: PopulatePlayersProps) => {
  const draftExistingPlayers = useAtomValue(draftPlayersAtom);
  const players = useAtomValue(playersAtom);

  return draft_placeholder_players.map((phPl) => {
    const draftExistingPlayer = draftExistingPlayers.find(
      (drPl) => drPl.position === phPl.position
    );

    const player = find_draft_player_data({
      draftPlayer: draftExistingPlayer,
      placeholderDraftPlayer: phPl,
      players: players,
    });

    const [position] = PLAYERS_STYLE_POSITIONS.filter(
      (pos) => phPl.position === pos.name
    );

    const data = {
      player,
      position,
    };

    return data;
  });
};
