import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string;
  results: T[];
}

const apiKey = import.meta.env.VITE_API_KEY;
if (!apiKey) {
  throw new Error("VITE_API_KEY is not defined in the environment variables");
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey!,
  },
});

class ApiClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (axiosConfig: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endPoint, axiosConfig)
      .then((res) => res.data);

  get = (id: number | string) =>
    axiosInstance.get<T>(this.endPoint + "/" + id).then((res) => res.data);
}

export default ApiClient;
