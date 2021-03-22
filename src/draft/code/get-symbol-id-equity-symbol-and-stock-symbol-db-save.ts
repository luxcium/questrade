import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../../typescript';
import { searchAndStockSymbolDbSave } from './equity-symbol-and-stock-symbol-mongo-save';

export async function getSymbolIDSearchAndStockSymbolDbSave(
  qtApi: QuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<
    {
      symbolId: number;
      symbolItem: IEquitySymbol;
      symbolItems: IEquitySymbol[];
    }[]
  >,
) {
  return Promise.all(
    (await list).map(async items => {
      await Promise.all(
        searchAndStockSymbolDbSave(qtApi)(apiCallQ)(items.symbolItems),
      );

      return items.symbolId;
    }),
  );
}

/*
import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../../typescript';
import { equitySymbolDbSave } from './equitySymbolResultMongoSave';
import { stockSymbolDbSave } from './stockSymbolMongoSave';

export function searchAndStockSymbolDbSave(qtApi: IQuestradeAPIv2_0) {
  return (apiCallQ: SimpleQueue) => (symbolItems: IEquitySymbol[]) => {
    return symbolItems.map(async symbItem => {
      const symbId = symbItem?.symbolId || 1;
      const stockIds = [symbId];
      const symbol = await qtApi.getSymbols.byStockIds(stockIds);
      await equitySymbolDbSave(apiCallQ)(symbItem);
      await stockSymbolDbSave(apiCallQ)(symbol);

      return symbol;
    });
  };
}

*/
