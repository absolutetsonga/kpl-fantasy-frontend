import { IGameWeekStats } from "./game_week_stats";

export interface IPlayer {
  id: number;
  team: number;
  sofascore_id: number;

  date_created: string;
  date_updated: string;

  age: number;
  market_value: number;
  price: number | null;

  name: string;
  club: string;
  position: string;
  nationality: string;
  height: string;

  image_url: string;
  nationality_image_url: string;

  is_injured: boolean;
  is_right_foot: boolean;

  gameweek_stats: IGameWeekStats[];
}