import {
  OrderSide,
  OrderState,
  OrderTimeInForce,
  OrderType,
} from 'questrade-api-enumerations';

import { IOrder } from '../../../../typescript';

export const order: IOrder = {
  avgExecPrice: 10.1508,
  canceledQuantity: 0,
  chainId: 498_268_725,
  comissionCharged: 4.974_855,
  creationTime: '2018-04-19T15:40:08.330000-04:00',
  exchangeOrderId: '',
  filledQuantity: 106,
  gtdDate: null,
  icebergQuantity: null,
  id: 498_268_725,
  isAllOrNone: false,
  isAnonymous: false,
  isCrossZero: false,
  isInsider: false,
  isLimitOffsetInDollar: false,
  isSignificantShareHolder: false,
  lastExecPrice: null,
  legs: [],
  limitPrice: 10.15,
  minQuantity: null,
  notes: '',
  openQuantity: 0,
  orderClass: null,
  orderGroupId: 0,
  orderRoute: 'MNGD',
  orderType: OrderType.LIMIT,
  placementCommission: null,
  primaryRoute: 'AUTO',
  rejectionReason: '',
  secondaryRoute: '',
  side: OrderSide.SELL,
  source: 'QuestradeIQMobile',
  state: OrderState.EXECUTED,
  stockId: 6770,
  stopPrice: null,
  strategyType: 'SingleLeg',
  symbol: 'AMD',
  timeInForce: OrderTimeInForce.GOOD_TILL_CANCELED,
  totalQuantity: 106,
  triggerStopPrice: null,
  updateTime: '2018-04-19T15:40:08.393000-04:00',
  userId: 126_691,
  venueHoldingOrder: 'MNGD',
};