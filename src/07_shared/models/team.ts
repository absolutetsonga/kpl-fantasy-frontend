import { IPlayer } from ".";

export interface ITeam {
  id?: number;
  name: string;
  image_url: string;
  players?: IPlayer[];
}
