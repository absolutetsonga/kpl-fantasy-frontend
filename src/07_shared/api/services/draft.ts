import { APIClient, api_client } from "../client";

type SquadId = number;
type UserId = number;

interface IDraftService {
  getSquad(squad_id: SquadId): Promise<void>;
  createSquad(user_id: UserId): Promise<void>;
  deleteSquad(squad_id: SquadId): Promise<void>;
}

export class DraftService implements IDraftService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getSquad(squad_id: SquadId) {
    return this.apiClient.makeRequest("GET", `squads/${squad_id}/`);
  }

  async createSquad(user_id: UserId) {
    return this.apiClient.makeRequest("POST", "squads/", { user_id });
  }

  async deleteSquad(squad_id: SquadId) {
    return this.apiClient.makeRequest("DELETE", `squads/${squad_id}/`);
  }
}

export const draft_service = new DraftService(api_client);
