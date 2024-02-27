import axios, { AxiosRequestConfig } from "axios";

interface ISofascoreClient {
  makeRequest(method: string, url: string, data: {}, params: {}): any;
}

export class SofascoreClient implements ISofascoreClient {
  async makeRequest(method: string, url: string, params = {}) {
    const options: AxiosRequestConfig = {
      method,
      url,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_SOFASCORE_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_SOFASCORE_HOST,
      },
      params,
    };

    const response = await axios.request(options);

    return response.data;
  }
}

export class SofascorePlayerStatsClient implements ISofascoreClient {
  async makeRequest(method: string, url: string) {
    const options: AxiosRequestConfig = {
      method,
      url,
    };

    const response = await axios.request(options);

    console.log(response);
  }
}

export const sofascore_client = new SofascoreClient();
export const sofascore_player_stats_client = new SofascorePlayerStatsClient();
