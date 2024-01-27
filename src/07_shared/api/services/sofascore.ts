import axios from "axios";
import { CLUBS_SOFASCORE_IDS } from "../../lib/constants";
import { SofascoreClient, sofascore_client } from "../client/sofascore";

type TeamName = string;
type MatchId = number;
type PlayerId = number;

interface ISofascoreService {
  getPlayers(teamName: string): Promise<void>;
  getPlayerStatisticsByGame(
    playerId: PlayerId,
    matchId: MatchId
  ): Promise<void>;
}

class SofascoreService implements ISofascoreService {
  private apiClient;
  private url = process.env.NEXT_PUBLIC_RAPID_API_SOFASCORE_URL;

  constructor(apiClient: SofascoreClient) {
    this.apiClient = apiClient;
  }

  async getPlayers(teamName: TeamName) {
    const response = await this.apiClient.makeRequest(
      "GET",
      `${this.url}/teams/get-squad`,
      { teamId: CLUBS_SOFASCORE_IDS[teamName] }
    );

    console.log(response);
    return response.data;
  }

  async getPlayerStatisticsByGame(playerId: PlayerId, matchId: MatchId) {
    const response = await this.apiClient.makeRequest(
      "GET",
      `${this.url}/matches/get-player-statistics`,
      {
        matchId,
        playerId,
      }
    );

    console.log(response);
    return response.data;
  }
}

export const sofascore_service = new SofascoreService(sofascore_client);
