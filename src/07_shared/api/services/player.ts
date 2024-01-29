import { APIClient, api_client } from "../client/index";
import { IPlayer } from "../../models";

type TeamId = number;
type PlayerId = number;

interface IPlayerService {
  getPlayer(player_id: PlayerId): Promise<void>;
  getPlayers(): Promise<void>;
  createPlayer(player: IPlayer): Promise<void>;
  updatePlayer(sofascore_id: number, player_id: PlayerId): Promise<void>;
  deletePlayer(): Promise<void>;
}

export class PlayerService implements IPlayerService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getPlayer(player_id: PlayerId) {
    return this.apiClient.makeRequest("GET", `players/${player_id}/`);
  }

  async getPlayers() {
    return this.apiClient.makeRequest("GET", "players/");
  }

  async createPlayer(player: IPlayer) {
    console.log(player);

    return this.apiClient.makeRequest("POST", "players/", player);
  }

  async updatePlayer(sofascore_id: number, player_id: PlayerId) {
    return this.apiClient.makeRequest("PATCH", `players/${player_id}/`, {
      sofascore_id,
    });
  }

  async deletePlayer() {
    return this.apiClient.makeRequest("DELETE", "players/delete-all/");
  }
}

export const player_service = new PlayerService(api_client);
