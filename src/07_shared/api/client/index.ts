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
    isTransfermarkt = false
  ) {
    const options: AxiosRequestConfig = {
      method,
      url: `${isTransfermarkt ? "" : process.env.NEXT_PUBLIC_API_URL}${url}`,
      headers: isTransfermarkt
        ? {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_HOST,
          }
        : { "Content-Type": "application/json" },
      data,
      params,
    };

    const response = await this.axiosInstance.request(options);

    return response.data;
  }
}

export const api_client = new APIClient(process.env.NEXT_PUBLIC_API_URL ?? "");
