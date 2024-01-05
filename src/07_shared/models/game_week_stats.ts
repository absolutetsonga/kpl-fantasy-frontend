export interface IGameWeekStats {
  date_created: string;
  date_updated: string;

  game_week_number: number;
  goals_scored: number;
  assists: number;
  own_goals_scored: number;
  clean_sheets: number;
  yellow_cards: number;
  red_cards: number;
}
