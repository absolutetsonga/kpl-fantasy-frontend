import { IPlayer } from ".";

export type IDraftPlayerData = {
  player: IPlayer;
  position: {
    name: string;
    className: string;
  };
};
