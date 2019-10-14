import { default as ƒ } from 'ramda';
import { redeemToken } from '..';
import { log, setDateRange, void0 } from '../api/utils';
// tslint:disable-next-line: no-unused-expression

(async () => {
  const dateRange = setDateRange(1);

  const redeem = await redeemToken('BfHXYThKbYiRAmEMYzEvMTWeFyiYFQBJ0')
    .then(result => {
      // console.log(result);
      return result;
    })
    .catch(err => console.log(err));
  if (!redeem) {
    throw new Error('Redeem token did not return acceptable response');
  }
  const { credentials, qtApi } = redeem;
  log(await dateRange(qtApi.get.market.candlesByStockId(8049)('OneDay')));

  void0([credentials, qtApi, ƒ, log]);
})().catch(error => console.log('PlayGround error message:', error.message));

export const getSymbolId = (stockSymbol: WithSymbolID) => stockSymbol.symbolId;
// const symId = getSymbolId;
interface WithSymbolID {
  symbolId: number;
}
export const xyz = (async () => {
  //
  return void 0 && ƒ;
})().catch(error => console.log('error message:', error.message));