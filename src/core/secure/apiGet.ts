import { AxiosRequestConfig, AxiosResponse, default as axios } from 'axios';
import { Credentials } from '../types';
export async function apiGet<T>(endpoint: string,oAuth: Credentials): Promise<T> {
  let data: T;
  try {
    let response: AxiosResponse<T>;
    response = await axios(generateHeader(endpoint, oAuth));
    if (!response.data) {
      throw new Error();
    }
    data = response.data;
  } catch (apiError) {
    throw errorLog(apiError);
  }
  return data;
}

/** Logging the error for the function apiClient */
function errorLog(apiError: any) {
  try {
    console.error(
      '\nAPI error in call to api:\n',
      `\n${apiError.message}`,
      `\nError code: ${apiError.response.data.code}`,
      `\n${apiError.response.data.message}`
    );
  } catch (dataError) {
    console.error(
      '\nAPI error in the response from the api:',
      `\n${dataError.message}`
    );
  }
  return apiError;
}

function generateHeader(endpoint: string, oAuth: Credentials) {
  return {
    url:oAuth.apiUrl+ endpoint,
    methode: 'GET',
    headers: {
      Authorization: `Bearer ${oAuth.accessToken}`,
    },
  };
}

export type AxiosClient<T> = (
  axiosConfig: AxiosRequestConfig
) => Promise<AxiosResponse<T>>;
export async function axiosClient<T>(
  axiosConfig: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios(axiosConfig);
    // validating response.data is not: NaN, "", '', 0, false, null or undefined
    if (!response.data) {
      throw new Error();
    } else {
      return response as AxiosResponse<T>;
    }
  } catch (error) {
    // error handling must be taken care of when calling axioClient Function
    throw error;
  }
}
