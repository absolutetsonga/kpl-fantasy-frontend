import { IPlayer, IDraftPlayer } from "@/src/07_shared/models";

type FindPlayerForSquadParams = {
  draftPlayer: IDraftPlayer | undefined;
  placeholderDraftPlayer: IDraftPlayer;
  players: IPlayer[];
};

export const find_draft_player_data = ({
  draftPlayer,
  players,
  placeholderDraftPlayer,
}: FindPlayerForSquadParams) => {
  let resultPlayer: IPlayer = {
    date_created: "",
    date_updated: "",

    id: 0,
    name: "",
    market_value: 0,
    position: placeholderDraftPlayer.position,
    price: null,

    club: "",
    height: "",
    nationality_image_url: "",
    team: 0,
    is_injured: false,
    is_right_foot: false,

    image_url: "/images/player.png",
    gameweek_stats: [],
  };

  if (draftPlayer) {
    const filteredPlayer = players.find((pl) => pl.id === draftPlayer.player);

    if (filteredPlayer) resultPlayer = filteredPlayer;
  }

  return resultPlayer;
};
