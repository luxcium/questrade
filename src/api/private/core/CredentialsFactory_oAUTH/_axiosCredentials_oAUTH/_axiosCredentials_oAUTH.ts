import { AxiosStatic, default as axios } from 'axios';
import { introspect } from '../../../..';
import { AxiosIntrospectRes, Credentials } from '../../../../../typescript';
import { _validateToken } from './_validateToken';
import { IRefreshCreds, _writeToken } from './_writeToken';

export const _oAuthAxiosCredentials = (_axios: AxiosStatic = axios) => async (
  token: string
): Promise<Credentials> => {
  const { refreshToken, credentials } = _validateToken(token);
  const axiosConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };
  const response = (await _axios(axiosConfig)) as AxiosIntrospectRes<
    IRefreshCreds
  >;

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }
  if (
    (!!response.introspect && !!response.introspect.onOff) ||
    (!!introspect && introspect.onOff)
  ) {
    console.log('\n\n_oAuthCredentials:\n');
    console.log('\naxiosCONFIG:\n');
    console.log(axiosConfig);
    console.log('\nOBJECT:\n');
    console.log(response.data);
    console.log('\n\nJSON:\n');
    console.log(JSON.stringify(response.data));
    console.log('\n--_oAuthCredentials--\n\n');
  }

  return _writeToken(credentials, response);
};