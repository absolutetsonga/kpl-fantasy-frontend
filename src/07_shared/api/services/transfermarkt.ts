import { CLUBS_TRANSFERMARKT_IDS } from "../../lib/constants";
import {
  TransfermarktClient,
  transfermarkt_client,
} from "../client/transfermarkt";

type TeamName = string;

interface ITransfermarktService {
  getPlayers(teamName: string): Promise<void>;
  getTeam(teamName: string): Promise<void>;
}

class TransfermarktService implements ITransfermarktService {
  private apiClient;
  private url = process.env.NEXT_PUBLIC_RAPID_API_URL;

  constructor(apiClient: TransfermarktClient) {
    this.apiClient = apiClient;
  }

  async getPlayers(teamName: TeamName) {
    const params = {
      id: CLUBS_TRANSFERMARKT_IDS[teamName],
      saison_id: "2023",
      domain: "com",
    };

    const response = await this.apiClient.makeRequest(
      "GET",
      `${this.url}/clubs/get-squad`,
      params
    );

    return response.squad;
  }

  async getTeam(teamName: TeamName) {
    const params = { id: CLUBS_TRANSFERMARKT_IDS[teamName], domain: "com" };

    const response = await this.apiClient.makeRequest(
      "GET",
      `${this.url}/clubs/get-header-info`,
      params
    );

    return response.club;
  }
}

export const transfermarkt_service = new TransfermarktService(
  transfermarkt_client
);
