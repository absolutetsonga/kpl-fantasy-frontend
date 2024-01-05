import { IDraftPlayer } from ".";

export interface IDraft {
  id: number;
  user: number;

  date_created: string;
  date_updated: string;

  total_budget: number;

  players: IDraftPlayer[];
}
