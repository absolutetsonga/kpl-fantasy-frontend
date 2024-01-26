export interface IGameWeekRes {
  id: 1;
  date_created: string;
  date_updated: string;
  start_date: string;
  end_date: string;
}

export interface IGameWeekCreateReq {
  start_date: string;
  end_date: string;
}
