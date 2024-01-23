import { APIClient, api_client } from "../client";

type DraftId = number;
type UserId = number;

interface IDraftService {
  getDraft(user_id: UserId): Promise<void>;
  createDraft(user_id: UserId): Promise<void>;
  deleteDraft(draft_id: DraftId): Promise<void>;
}

export class DraftService implements IDraftService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getDraft(user_id: UserId) {
    return this.apiClient.makeRequest(
      "GET",
      `squads/get-by-user/`,
      {},
      { user_id }
    );
  }

  async createDraft(user_id: UserId) {
    return this.apiClient.makeRequest("POST", "squads/", { user_id });
  }

  async deleteDraft(draft_id: DraftId) {
    return this.apiClient.makeRequest("DELETE", `squads/${draft_id}/`);
  }
}

export const draft_service = new DraftService(api_client);
