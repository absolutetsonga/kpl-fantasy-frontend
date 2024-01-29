import { TEAMS_IDS } from "../../lib/constants";

import { APIClient, api_client } from "../client/index";
import { IPlayerTransfermarkt } from "../../models";

type TeamId = number;
type PlayerId = number;

interface IPlayerService {
  getPlayer(player_id: PlayerId): Promise<void>;
  getPlayers(): Promise<void>;
  createPlayer(player: IPlayerTransfermarkt, teamId: TeamId): Promise<void>;
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

  async createPlayer(player: IPlayerTransfermarkt, teamId: TeamId) {
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

    return this.apiClient.makeRequest("POST", "players/", data);
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
