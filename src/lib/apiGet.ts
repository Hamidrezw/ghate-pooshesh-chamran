"use server";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

type ApiConfig = {
  params?: object;
  retries?: number;
  timeout?: number;
  headers?: Record<string, string>;
};

const DEFAULT_RETRIES = 3;
const API_TIMEOUT = 10000;
const BASE_URL = process.env.API;

if (!BASE_URL) {
  throw new Error("API base URL is not configured");
}

const createHeaders = (customHeaders?: Record<string, string>) => ({
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  ...customHeaders,
});

const handleError = (error: unknown, url: string, retriesLeft: number): null => {
  const errorMessage = error instanceof AxiosError 
    ? `API Error (${error.code}): ${error.message}`
    : error instanceof Error 
    ? error.message 
    : 'Unknown error';

  console.error(`Request Failed: ${url} - ${errorMessage}`);

  if (retriesLeft > 0) {
    console.log(`Retrying... (${DEFAULT_RETRIES - retriesLeft + 1}/${DEFAULT_RETRIES})`);
    return null;
  }

  return null;
};

export const apiGet = async <T>(
  endpoint: string,
  config: ApiConfig = {}
): Promise<T | null> => {
  const { params, retries = DEFAULT_RETRIES, timeout = API_TIMEOUT } = config;
  
  try {
    const requestConfig: AxiosRequestConfig = {
      params,
      timeout,
      headers: createHeaders(config.headers),
      validateStatus: (status) => status >= 200 && status < 400,
    };

    const response = await axios.get<T>(
      `${BASE_URL}${endpoint}`,
      requestConfig
    );

    return response.data;
  } catch (error) {
    const remainingRetries = retries - 1;
    handleError(error, endpoint, remainingRetries);
    
    if (remainingRetries > 0) {
      return apiGet<T>(endpoint, { ...config, retries: remainingRetries });
    }

    return null;
  }
};