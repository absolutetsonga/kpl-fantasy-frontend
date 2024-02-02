import { IGameWeekCreateReq } from "../../models";
import { APIClient, api_client } from "../client";

type GameWeekId = number;

interface IGameWeekService {
  getGameWeeks(): Promise<void>;
  getGameWeek(game_week_id: GameWeekId): Promise<void>;
  createGameWeek(game_week: IGameWeekCreateReq): Promise<void>;
  deleteGameWeek(game_week_id: GameWeekId): Promise<void>;
}

export class GameWeekService implements IGameWeekService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getGameWeeks() {
    return this.apiClient.makeRequest("GET", `gameweek/`);
  }

  async getGameWeek(game_week_id: GameWeekId) {
    return this.apiClient.makeRequest("GET", `gameweek/${game_week_id}/`);
  }

  async createGameWeek(game_week: IGameWeekCreateReq) {
    return this.apiClient.makeRequest("POST", "gameweek/", { game_week });
  }

  async deleteGameWeek(game_week_id: GameWeekId) {
    return this.apiClient.makeRequest("DELETE", `gameweek/${game_week_id}/`);
  }
}

export const gameweek_service = new GameWeekService(api_client);
