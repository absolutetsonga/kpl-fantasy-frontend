import { IDraftPlayer } from ".";

export interface IDraft {
  id: number;
  user: number;
  left_transfers: number;
  total_budget: number;

  date_created: string;
  date_updated: string;

  activated_bench_boost: boolean;
  activated_triple_captain: boolean;
  activated_free_hit: boolean;

  players: IDraftPlayer[];
}
