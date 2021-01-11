// import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  ISymbolSearchResult,
  ISymbolSearchResults,
} from '../../../../typescript';
import { void0 } from '../../../../utils';
import { _clientGetApi } from '../../../routes';

// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => async (
  prefix: string,
  offset: number = 0,
): Promise<ISymbolSearchResult[]> => {
  try {
    const results = await _clientGetApi(
      credentials,
      proxy,
    )<ISymbolSearchResults>(
      `/symbols/search?prefix=${prefix.toUpperCase()}&offset=${offset}`,
    )();
    if (results && results.symbols) {
      return results.symbols.map(result => {
        result.count = results.symbols.length || 0;
        return result;
      });
    }
    return results.symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
void0(void0);
