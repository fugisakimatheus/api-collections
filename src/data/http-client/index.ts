import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode as AxiosHttpStatusCode,
} from "axios";

export const HttpStatusCode = AxiosHttpStatusCode;

export const HttpClient = {
  request: async <T>(
    baseURL: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const response = await axios.request<T>({
      ...config,
      baseURL,
    });
    return response;
  },
};
