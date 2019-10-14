import { AxiosStatic, default as axios } from 'axios';
import {
  Credentials,
  FiltersArray,
  IOptionsQuotes,
  OptionsIdArray,
  OptionsPostData,
} from '../../../../../typescript';
import { _axiosPostApi } from '../../../core/API_Request_AXIOS';

export const _getMarketsQuotesOptions = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
  optionIds: void | null | undefined | number[] = [],
  underlyingId?: number,
  expiryDate?: string,
  optionType: string | undefined | null = void 0,
  minstrikePrice: number | undefined | null = 0,
  maxstrikePrice: number | undefined | null = 0
): Promise<IOptionsQuotes> => {
  try {
    const postData: OptionsIdArray | FiltersArray =
      !!optionIds && optionIds.length > 0
        ? {
            optionIds,
          }
        : {
            filters: [
              {
                underlyingId,
                expiryDate,
                optionType: optionType || void 0,
                minstrikePrice: minstrikePrice || 0,
                maxstrikePrice: maxstrikePrice || 0,
              },
            ],
          };

    return _axiosPostApi(_axios)(credentials)<OptionsPostData>(postData)<
      IOptionsQuotes
    >('/markets/quotes/options')();
  } catch (error) {
    console.error('/markets/quotes/options', error.message);
    throw error;
  }
};