import axios, { AxiosRequestConfig } from "axios";

interface IAPIClient {
  makeRequest(method: string, url: string, data: {}, params: {}): any;
}

export class APIClient implements IAPIClient {
  async makeRequest(method: string, url: string, params = {}) {
    const options: AxiosRequestConfig = {
      method,
      url,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_HOST,
      },
      params,
    };

    const response = await axios.request(options);

    return response.data;
  }
}

export const transfermarkt_client = new APIClient();
