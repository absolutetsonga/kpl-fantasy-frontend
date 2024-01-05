import { APIClient, api_client } from "../client";

interface IUserService {
  createUser(username: string, email: string, password: string): void;
}

class UserService implements IUserService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async createUser(username: string, email: string, password: string) {
    const data = { username, email, password };
    const response = await this.apiClient.makeRequest("POST", "users/", data);

    return response;
  }

  async deleteUser(user_id: number) {}

  async getUser(user_id: number) {}
}

export const user_service = new UserService(api_client);
