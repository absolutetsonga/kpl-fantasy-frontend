import { APIClient, api_client } from "../client";

interface IUserService {
  getUser(): void;
  loginUser(email: string, password: string): void;
  googleUser(state: string, code: string): void;
  verifyUser(): void;
  logoutUser(): void;
  activateUser(uid: string, token: string): void;
  resetPasswordUser(email: string): void;
  resetPasswordConfirmUser(
    uid: string,
    token: string,
    password: string,
    re_password: string
  ): void;
  createUser(
    first_name: string,
    second_name: string,
    email: string,
    password: string,
    re_password: string
  ): void;
}

class UserService implements IUserService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async getUser() {
    const response = await this.apiClient.makeRequest("GET", "users/me/");
    return response;
  }

  async createUser(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    re_password: string
  ) {
    const data = { first_name, last_name, email, password, re_password };
    const response = await this.apiClient.makeRequest("POST", "users/", data);

    return response;
  }

  async loginUser(email: string, password: string) {
    const data = { email, password };
    const response = await this.apiClient.makeRequest(
      "POST",
      "jwt/create/",
      data
    );

    return response;
  }

  async googleUser(state: string, code: string) {
    const response = await this.apiClient.makeRequest(
      "POST",
      `o/google-oauth2/state=${encodeURIComponent(
        state
      )}&code=${encodeURIComponent(code)}/`,
      {},
      {},
      {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      }
    );

    return response;
  }

  async verifyUser() {
    const response = await this.apiClient.makeRequest("POST", "jwt/verify/");

    return response;
  }

  async logoutUser() {
    const response = await this.apiClient.makeRequest("POST", "logout/");

    return response;
  }

  async activateUser(uid: string, token: string) {
    const response = await this.apiClient.makeRequest(
      "POST",
      "users/activation/",
      { uid, token }
    );

    return response;
  }

  async refreshUser() {
    const response = await this.apiClient.makeRequest("POST", "jwt/refresh/");

    return response;
  }

  async resetPasswordUser(email: string) {
    const response = await this.apiClient.makeRequest(
      "POST",
      "users/reset_password/",
      { email }
    );

    return response;
  }

  async resetPasswordConfirmUser(
    uid: string,
    token: string,
    password: string,
    re_password: string
  ) {
    const response = await this.apiClient.makeRequest(
      "POST",
      "users/reset_password/",
      { uid, token, password, re_password }
    );

    return response;
  }
}

export const user_service = new UserService(api_client);
