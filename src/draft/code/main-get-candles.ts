import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { CandleWithInfos } from '../../schema/candle-with-infos';
import { applyListMapping } from '../../utils/mapping-function';
import { getCandleSticks } from './get-candle-sticks';
import { saveMongo } from './save-mongo';

// -----------------------------------------------------------------------------!!

export async function mainGetCandles(
  qtApi: QuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<string[]>,
) {
  // const list1 = step1(startIndex, endIndex);
  const mapCandleSticks = getCandleSticks(qtApi)();
  const mapCandleSticks2020 = mapCandleSticks('2020-01-01')('2021-01-01')();
  const mapCandleSticks2019 = mapCandleSticks('2019-01-01')('2020-01-01')();
  const mapCandleSticks2018 = mapCandleSticks('2018-01-01')('2019-01-01')();
  const mapCandleSticks2017 = mapCandleSticks('2017-01-01')('2018-01-01')();
  const mapCandleSticks2016 = mapCandleSticks('2016-01-01')('2017-01-01')();
  const mapCandleSticks2015 = mapCandleSticks('2015-01-01')('2016-01-01')();
  const results = [
    mapCandleSticks2020,
    mapCandleSticks2019,
    mapCandleSticks2018,
    mapCandleSticks2017,
    mapCandleSticks2016,
    mapCandleSticks2015,
  ].map(candleSticks => applyListMapping(list)(candleSticks));

  return Promise.all(
    results.map(async result => {
      return Promise.all(
        (await result).map(async xy =>
          Promise.all(
            (await xy).map(async x => {
              if (x.valid === true) {
                const config = {
                  Model: CandleWithInfos,
                  value: x,
                };

                await apiCallQ.addToQueue({
                  config,
                  fn: saveMongo,
                });
              }

              return x;
            }),
          ),
        ),
      );
    }),
  );
}
