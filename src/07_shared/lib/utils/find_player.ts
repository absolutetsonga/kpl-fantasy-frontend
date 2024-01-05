import { IPlayer, IDraftPlayer } from "../../models";

type FindPlayerForSquadProps = {
  squadPlayer: IDraftPlayer | undefined;
  players: IPlayer[];
  placeholderSquadPlayer: IDraftPlayer;
};

export const findPlayerForSquad = ({
  squadPlayer,
  players,
  placeholderSquadPlayer,
}: FindPlayerForSquadProps) => {
  let placeholderPlayer: IPlayer = {
    date_created: "",
    date_updated: "",

    id: 0,
    name: "",
    market_value: 0,
    position: placeholderSquadPlayer.position,
    price: null,

    club: "",
    height: "",
    nationality_image_url: "",
    teamId: 0,
    is_injured: false,
    is_right_foot: false,

    image_url: "/player.png",
    gameweek_stats: [],
  };

  if (squadPlayer) {
    const filteredPlayer = players.find((pl) => {
      return (
        pl.id === squadPlayer.player &&
        typeof pl.id === "number" &&
        typeof squadPlayer.player === "number"
      );
    });

    if (filteredPlayer) {
      placeholderPlayer = filteredPlayer;
    }
  }

  return placeholderPlayer;
};
