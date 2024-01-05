import { APIClient, api_client } from "../client";
import { IDraftPlayer } from "../../models";

type DraftPlayerId = number;

interface IDraftPlayerService {
  getDraftPlayers(): Promise<void>;
  getDraftPlayer(draft_player_id: DraftPlayerId): Promise<void>;
  createDraftPlayer(data: IDraftPlayer): Promise<void>;
  updateDraftPlayer(data: IDraftPlayer): Promise<void>;
  deleteDraftPlayer(draft_player_id: DraftPlayerId): Promise<void>;
}

export class DraftPlayerService implements IDraftPlayerService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getDraftPlayers() {
    return this.apiClient.makeRequest("GET", "squad_players/");
  }

  async getDraftPlayer(draft_player_id: DraftPlayerId) {
    return this.apiClient.makeRequest(
      "GET",
      `squad_players/${draft_player_id}/`
    );
  }

  async createDraftPlayer(data: IDraftPlayer) {
    return this.apiClient.makeRequest("POST", "squad_players/", data);
  }

  async updateDraftPlayer(data: IDraftPlayer) {
    return this.apiClient.makeRequest("PUT", `squad_players/${data.id}/`, data);
  }

  async deleteDraftPlayer(draft_player_id: DraftPlayerId) {
    return this.apiClient.makeRequest(
      "DELETE",
      `squad_players/${draft_player_id}/`
    );
  }
}

export const draft_player_service = new DraftPlayerService(api_client);
