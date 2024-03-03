export interface IGameWeekRes {
  id: number;
  number: number;
  date_created: string;
  date_updated: string;
  start_date: string;
  end_date: string;
  updated: boolean;
  games: IGame[];
}

export interface IGameWeekCreateReq {
  start_date: string;
  end_date: string;
}

export interface IGameWeekStatus {
  status: string;
  process: string;
  message: string;
  time: string;
}

export interface IGame {
  id: number;

  sofascore_id: number;
  gameweek: number;

  date_created: string;
  date_updated: string;

  home_score: number;
  away_score: number;

  home_team: number;
  away_team: number;
}