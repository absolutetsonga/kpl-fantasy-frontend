import { APIClient, api_client } from "../client/index";
import { IPlayer } from "../../models";

type TeamId = number;
type PlayerId = number;

interface IPlayerService {
  getPlayer(player_id: PlayerId): Promise<void>;
  getPlayers(): Promise<void>;
  createPlayer(player: IPlayer): Promise<void>;
  updatePlayer(player: IPlayer): Promise<void>;
  deletePlayers(): Promise<void>;
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
    return this.apiClient.makeRequest("POST", "players/", player);
  }

  async updatePlayer(player: IPlayer) {
    console.log(player);
    return this.apiClient.makeRequest("PATCH", `players/${player.id}/`, player);
  }

  async deletePlayers() {
    return this.apiClient.makeRequest("DELETE", "players/delete-all/");
  }

  async deletePlayer(player_id: number) {
    return this.apiClient.makeRequest("DELETE", `players/${player_id}/`);
  }
}

export const player_service = new PlayerService(api_client);
