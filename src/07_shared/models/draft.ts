import { IDraftPlayer } from ".";

export interface IDraft {
  id: number;
  user: number;
  left_transfers: number;

  date_created: string;
  date_updated: string;

  total_budget: number;

  activated_bench_boost: boolean;
  activated_triple_captain: boolean;
  activated_free_hit: boolean;

  players: IDraftPlayer[];
}
