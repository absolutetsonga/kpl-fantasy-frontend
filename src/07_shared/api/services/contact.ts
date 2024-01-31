import { APIClient, api_client } from "../client";

interface IContactService {
  createContact(data: any): Promise<void>;
}

export class ContactService implements IContactService {
  private apiClient;

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient;
  }

  async createContact(data: any) {
    return this.apiClient.makeRequest("POST", "contact/", data);
  }
}

export const contact_service = new ContactService(api_client);
