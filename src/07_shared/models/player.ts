import { IGameWeekStats } from "./game_week_stats";

export interface IPlayer {
  date_created: string;
  date_updated: string;

  id: number;
  market_value: number;
  price: number | null;

  club: string;
  height: string;
  image_url: string;
  name: string;
  nationality_image_url: string;
  position: string;
  teamId: number | null;

  is_injured: boolean;
  is_right_foot: boolean;

  gameweek_stats: IGameWeekStats[];
}
