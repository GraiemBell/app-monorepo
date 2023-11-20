import { CrossEventEmitter } from '@onekeyfe/cross-inpage-provider-core';

import { isExtensionBackground } from '../platformEnv';

// eslint-disable-next-line import/no-mutable-exports
let appUIEventBus: CrossEventEmitter;

enum EAppUIEventBusNames {
  SwapCompleted = 'SwapCompleted',
  SwapError = 'SwapError',
  SwapAddTransaction = 'SwapAddTransaction',
  LimitOrderCompleted = 'LimitOrderCompleted',
  LimitOrderError = 'LimitOrderError',
  RemoveAccount = 'RemoveAccount',
  RemoveWallet = 'RemoveWallet',
  Unlocked = 'Unlocked',
  StoreInitedFromPersistor = 'StoreInitedFromPersistor',
  AccountChanged = 'AccountChanged',
  SwapRefresh = 'SwapRefresh',
  Migrate = 'Migrate',
  RevokeRefresh = 'RevokeRefresh',
  HardwareCancel = 'HardwareCancel',
  InscriptionRecycleChanged = 'InscriptionRecycleChanged',
}

if (isExtensionBackground) {
  appUIEventBus = new Proxy(
    {},
    {
      get() {
        throw new Error(
          '[appUIEventBus] is NOT allowed in Extension Background process currently. use [appEventBus] instead.',
        );
      },
    },
  ) as CrossEventEmitter;
} else {
  appUIEventBus = new CrossEventEmitter();
}

if (process.env.NODE_ENV !== 'production') {
  global.$$appUIEventBus = appUIEventBus;
}

export { appUIEventBus, EAppUIEventBusNames as AppUIEventBusNames };
