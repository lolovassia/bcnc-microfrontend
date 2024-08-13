import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

export async function get<TResponse>(
  url: string,
  config?: AxiosRequestConfig<TResponse>,
) {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
