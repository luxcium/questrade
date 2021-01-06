import { CancelTokenStatic as AxiosCancelTokenStatic } from 'axios';

import { Canceler } from './Canceler';
import { CancelToken } from './CancelToken';
import { CancelTokenSource } from './CancelTokenSource';

type Representative = AxiosCancelTokenStatic;
type Specimen = CancelTokenStatic;

export interface CancelTokenStatic {
  new (executor: (cancel: Canceler) => void): CancelToken;
  source(): CancelTokenSource;
}

interface Input {
  sampleA: Specimen;
  sampleB: Representative;
}
interface ReversedOutput {
  sampleA: Representative;
  sampleB: Specimen;
}
type Sample = Representative & Specimen;
void function testFunction(sample: Input): ReversedOutput {
  const returnSample: {
    sampleA: Sample;
    sampleB: Sample;
  } = sample;
  return returnSample;
};
