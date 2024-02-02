import { IGameWeekStats } from "../../models";
import { APIClient, api_client } from "../client";

interface IGameWeekStatsService {
  createGameWeekStat(gameweek_stats: IGameWeekStats): Promise<void>;
}

export class GameWeekStatsService implements IGameWeekStatsService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async createGameWeekStat(gameweek_stats: IGameWeekStats) {
    console.log(gameweek_stats);

    return this.apiClient.makeRequest(
      "POST",
      "gameweek_stats/",
      gameweek_stats
    );
  }
}

export const gameweek_stats_service = new GameWeekStatsService(api_client);
