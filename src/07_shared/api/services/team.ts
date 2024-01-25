import { APIClient, api_client } from "../client";
import { ITeam } from "../../models";

type TeamId = number;
type TeamName = string;

interface ITeamService {
  createTeam(team: ITeam): Promise<void>;
  getTeams(): Promise<void>;
  getTeam(teamId: TeamId): Promise<void>;
  getTeamByName(teamName: TeamName): Promise<void>;
}

export class TeamService implements ITeamService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async createTeam(team: ITeam) {
    const data = { name: team.name, image_url: team.image };
    console.log(data);

    return this.apiClient.makeRequest("POST", "teams/", data);
  }

  async getTeams() {
    return this.apiClient.makeRequest("GET", `teams/`);
  }

  async getTeam(team: number) {
    return this.apiClient.makeRequest("GET", `teams/${team}/`);
  }

  async getTeamByName(teamName: TeamName) {
    const params = { name: teamName };

    return this.apiClient.makeRequest("GET", "teams/get-by-name/", {}, params);
  }
}

export const team_service = new TeamService(api_client);
