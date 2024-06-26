import { CLUBS_SOFASCORE_IDS } from "../../lib/constants";
import {
  SofascoreClient,
  sofascore_client,
  sofascore_player_stats_client,
} from "../client/sofascore";

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

interface ISofascorePlayerStatsService {
  getGameStats(playerId: PlayerId, matchId: MatchId): Promise<void>;
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

    return response;
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

    return response;
  }
}

class SofascorePlayerStatsService implements ISofascorePlayerStatsService {
  private apiClient;
  private url = process.env.NEXT_PUBLIC_RAPID_API_SOFASCORE_URL;

  constructor(apiClient: SofascoreClient) {
    this.apiClient = apiClient;
  }

  async getGameStats(playerId: PlayerId, matchId: MatchId) {
    const response = await this.apiClient.makeRequest(
      "GET",
      `https://api.sofascore.com/api/v1/event/${matchId}/player/${playerId}/statistics`
    );

    console.log(response);
    return response.data;
  }
}

export const sofascore_service = new SofascoreService(sofascore_client);
export const sofascore_player_stats_service = new SofascorePlayerStatsService(
  sofascore_player_stats_client
);
