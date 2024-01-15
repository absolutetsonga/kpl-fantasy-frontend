import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface IAPIClient {
  makeRequest(method: string, url: string, data: {}, params: {}): any;
}

export class APIClient implements IAPIClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async makeRequest(
    method: string,
    url: string,
    data = {},
    params = {},
    headers = {}
  ) {
    const options: AxiosRequestConfig = {
      method,
      url: process.env.NEXT_PUBLIC_API_URL + url,
      headers: headers ? headers : { "Content-Type": "application/json" },
      data,
      params,
    };

    const response = await this.axiosInstance.request(options);

    return response.data;
  }

  async makeTransfermarktRequest(method: string, url: string, params = {}) {
    const options: AxiosRequestConfig = {
      method,
      url,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_HOST,
      },
      params,
    };

    const response = await this.axiosInstance.request(options);

    return response.data;
  }
}

export const api_client = new APIClient(process.env.NEXT_PUBLIC_API_URL ?? "");
