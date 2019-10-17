import { _getPrimaryAccountNumber } from '../..';
import {
  _getAccounts,
  _getServerTime,
} from '../../../controllers/QuestradeApi_QtApi/AccountsCalls';
import { _oAuthAxiosCredentials } from '../../_axiosCredentials_oAUTH';

/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
export const _credentialsFactory = async (token: string) => {
  if (!token) throw new Error('Missing Token');
  const mock = token.length === 8 ? true : false;

  const credentials = await _oAuthAxiosCredentials(token);

  try {
    const accounts = await _getAccounts(credentials)();
    const time = await _getServerTime(credentials)();

    const timZoneOffset = new Date(time).getTimezoneOffset();
    const timZone = -1 * 60 * 1000 * timZoneOffset;
    const serverTime = new Date(time).getTime();
    const expireAt = serverTime + credentials.expiresIn * 1000;

    credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
    credentials.tokenExpiration = new Date(timZone + expireAt);
    credentials.expiresAtRaw = expireAt;
    credentials.serverTime = new Date(timZone + serverTime);
    credentials.serverTimeRaw = serverTime;

    credentials.accountNumber = _getPrimaryAccountNumber(accounts);

    if (credentials.accountNumber === '00000000' && mock) {
      console.info(
        '\n🧐\n🤡 MOCK Server Time:   ',
        new Date().toISOString(),

        '\n🍦 Status: MOCKING!!!\n🤨'
      );
    } else {
      if (credentials.accountNumber === '00000000') {
        throw Error("Account should not be '00000000'");
      }
      console.info('Questrade Server Time:', time, '\nStatus: ready\n');
    }
  } catch (error) {
    console.log(error.message);
    console.info(credentials);
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};
