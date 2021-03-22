// import { errorlog } from '../../resources/side-effects';
import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import type {
  Credentials,
  Logger,
  OptionsFilters,
  ProxyFactory_,
  QuestradeApi,
  StrategyVariantRequest,
} from '../../typescript';
import type { ApiCallQ_ } from '../core/next-rate-limiter/queue';
import { _clientGetApi, _clientPostApi } from '../routes';
import { _clientAccountGetApi } from '../routes/client-account-get-api/client-account-get-api';
import { _getAccounts } from './accounts-calls/get-accounts/get-accounts';
import { _getActivities } from './accounts-calls/get-activities/get-activities';
import { _getBalances } from './accounts-calls/get-balances/get-balances';
import { _myBalances } from './accounts-calls/get-balances/my-balances';
import { _getExecutions } from './accounts-calls/get-executions/get-executions';
import { _getOrders } from './accounts-calls/get-orders/get-orders';
import { _getOrdersByIds } from './accounts-calls/get-orders/get-orders-by-ids';
import { _getPositions } from './accounts-calls/get-positions/get-positions';
import { _getServerTime } from './accounts-calls/get-server-time/get-server-time';
import {
  _getCandles,
  // _getEquitySymbolAndCount,
  _getEquitySymbol,
  _getEquitySymbolAll,
  _getEquitySymbolCount,
  _getMarkets,
  _getMarketsQuotesStrategies,
  _getOptionsById,
  _getQuotesByIds,
  // _getQuotesOptionsbyFilterAndIds,
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
  _getSymbolsByIds,
} from './markets-calls';

export async function questradeApiFactory(
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy: ((cred: Credentials) => ProxyFactory_) | null,
  errorlog: Logger = (...error: any[]) => error,
): Promise<QuestradeApi & QuestradeAPIv2_0> {
  const proxyFactory: ProxyFactory_ | null = proxy ? proxy(credentials) : null;

  void proxy;
  const getApi = () => _clientGetApi(credentials, apiCallQ, proxyFactory);
  const postApi = () => _clientPostApi(credentials, apiCallQ, proxyFactory);
  const accGetApi = () =>
    _clientAccountGetApi(credentials, apiCallQ, proxyFactory);

  const api = {
    accounts: _getAccounts(getApi(), errorlog),
    activities: _getActivities(accGetApi(), errorlog),
    balances: _getBalances(accGetApi(), errorlog),
    candles: _getCandles(getApi(), errorlog),
    equitySymbol: _getEquitySymbol(getApi(), errorlog),
    equitySymbolAll: _getEquitySymbolAll(getApi(), errorlog),
    equitySymbolCount: _getEquitySymbolCount(getApi(), errorlog),
    executions: _getExecutions(accGetApi(), errorlog),
    markets: _getMarkets(getApi(), errorlog),
    marketsQuotesStrategies: _getMarketsQuotesStrategies(postApi(), errorlog),
    optionsById: _getOptionsById(getApi(), errorlog),
    orders: _getOrders(accGetApi(), errorlog),
    ordersByIds: _getOrdersByIds(accGetApi(), errorlog),
    positions: _getPositions(accGetApi(), errorlog),
    quotesByIds: _getQuotesByIds(getApi(), errorlog),
    quotesOptionsByIds: _getQuotesOptionsByIds(postApi(), errorlog),
    quotesOptionsFilter: _getQuotesOptionsFilter(postApi() /* , errorlog */),
    serverTime: _getServerTime(getApi() /* , errorlog */),
    symbolsByIds: _getSymbolsByIds(getApi(), errorlog),
  };

  return {
    account: {
      currentAccount: credentials.accountNumber,
      getActivities(startTime: string) {
        return api.activities(startTime);
      },
      async getAllAccounts() {
        return api.accounts();
      },
      async getBalances() {
        return api.balances();
      },
      getExecutions(startTime: string) {
        return api.executions(startTime);
      },
      getOrders(stateFilter?: string) {
        return api.orders(stateFilter);
      },
      async getOrdersByIds(orderId: number[]) {
        return api.ordersByIds(orderId);
      },
      async getPositions() {
        return api.positions();
      },
      async getServerTime() {
        return api.serverTime();
      },
    },

    getOptionChains: {
      async byStockId(stockId: number) {
        return api.optionsById(stockId);
      },
    },
    getOptionsQuotes: {
      async byOptionsIds(optionIds: number[]) {
        return api.quotesOptionsByIds(optionIds);
      },
      async fromFilter(filters: OptionsFilters) {
        return api.quotesOptionsFilter(filters);
      },
    },
    getQuotes: {
      async byStockIds(ids: number[]) {
        return api.quotesByIds(ids);
      },
      async byStrategies(strategyVariantRequestData: StrategyVariantRequest) {
        return api.marketsQuotesStrategies(strategyVariantRequestData);
      },
    },
    getSymbols: {
      async byStockIds(stockIds: number[]) {
        return api.symbolsByIds(stockIds);
      },
    },
    market: {
      async getAllMarkets() {
        return api.markets();
      },
      getCandlesByStockId(symbolID: number) {
        return api.candles(symbolID);
      },
    },
    async myBalances() {
      return _myBalances(await api.balances());
    },
    search: {
      async allStocks(prefix: string, offset?: number) {
        return api.equitySymbolAll(prefix, offset);
      },
      async countResults(prefix: string) {
        return api.equitySymbolCount(prefix);
      },
      async stock(prefix: string, offset?: number) {
        return api.equitySymbol(prefix, offset);
        // return equitySymbolAndCount(prefix, offset);
      },
    },
    serverTime: credentials.serverTime || 'ERROR',
  };
}
