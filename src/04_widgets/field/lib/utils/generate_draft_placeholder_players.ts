import { PLAYERS_STYLE_POSITIONS } from "@/src/07_shared/lib/constants";

export const generate_draft_placeholder_players = () => {
  const draft_placeholder_players = PLAYERS_STYLE_POSITIONS.map((pos) => ({
    id: 0,
    squad: 0,
    player: 0,
    position: pos.name,

    is_captain: false,
    is_vice_captain: false,
    on_bench: false,
  }));

  return draft_placeholder_players;
};
