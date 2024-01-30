import { APIClient, api_client } from "../client/index";
import { IPlayer, IPlayerTransfermarkt } from "../../models";
import { TEAMS_IDS } from "../../lib/constants";

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

  async createPlayerFromTransfermarkt(
    player: IPlayerTransfermarkt,
    teamId: number
  ) {
    const data = {
      name: player.name,
      club: TEAMS_IDS[teamId],
      position: player.positions.first.group,
      nationality: player.nationalities[0].name,
      height: player.height,
      age: player.age,
      market_value: player.marketValue.value,
      image_url: player.image,
      nationality_image_url: player.nationalities[0].image,
      price: null,
      is_injured: player.injury !== null,
      is_right_foot: player.foot === "right",
      team: teamId,
    };

    return this.apiClient.makeRequest("POST", `players/`, data);
  }
}

export const player_service = new PlayerService(api_client);
