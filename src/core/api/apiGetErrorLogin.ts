/** Logging the error for the function apiClient */
export function apiGetErrorLogin(apiError: any) {
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
