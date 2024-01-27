export interface IGameWeekStats {
  id: number;
  gameweek: number;

  date_created: string;
  date_updated: string;

  goals_scored: number;
  assists: number;
  own_goals_scored: number;
  clean_sheets: number;
  yellow_cards: number;
  red_cards: number;
}
