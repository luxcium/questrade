// import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IMarket,
  IMarkets,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => async (): Promise<IMarket[]> => {
  try {
    return (await _clientGetApi(credentials, proxy)<IMarkets>('/markets')())
      .markets;
  } catch (error) {
    void errorlog(error);
    return [];
  }
};
