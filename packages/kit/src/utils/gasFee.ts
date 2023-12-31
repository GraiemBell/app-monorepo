import BigNumber from 'bignumber.js';

import type { ILocaleIds } from '@onekeyhq/components';
import {
  EGasType,
  type IFeeInfoUnit,
  type IGasEIP1559,
  type IGasLegacy,
} from '@onekeyhq/shared/types/gas';

const PRESET_GAS_ICON = ['🚴‍♂️️', '🚗', '🚅'];
const PRESET_GAS_LABEL = ['content__slow', 'content__normal', 'content__fast'];

function nilError(message: string): number {
  throw new Error(message);
}

function nanToZeroString(value: string | number | unknown) {
  if (value === 'NaN' || Number.isNaN(value)) {
    return '0';
  }
  return value as string;
}

export function calculateTotalFeeRange(
  feeInfo: IFeeInfoUnit,
  displayDecimals = 8,
) {
  const { common, gas, gasEIP1559 } = feeInfo;
  const limit = common?.limitUsed || common?.limit;
  const limitForDisplay = common?.limitForDisplay ?? limit;
  if (feeInfo.isEIP1559) {
    // MIN: (baseFeePerGas + maxPriorityFeePerGas) * limit
    const gasInfo = gasEIP1559 as IGasEIP1559;
    const min = new BigNumber(limit as string)
      .times(
        new BigNumber(gasInfo.baseFeePerGas).plus(gasInfo.maxPriorityFeePerGas),
      )
      .toFixed(displayDecimals);

    const minForDisplay = new BigNumber(limitForDisplay as string)
      .times(
        new BigNumber(gasInfo.baseFeePerGas).plus(gasInfo.maxPriorityFeePerGas),
      )
      .toFixed(displayDecimals);

    // MAX: maxFeePerGas * limit
    const max = new BigNumber(limit as string)
      .times(gasInfo.maxFeePerGas)
      .toFixed(displayDecimals);

    const maxForDisplay = new BigNumber(limitForDisplay as string)
      .times(gasInfo.maxFeePerGas)
      .toFixed(displayDecimals);
    return {
      min: nanToZeroString(min),
      max: nanToZeroString(max),
      minForDisplay: nanToZeroString(minForDisplay),
      maxForDisplay: nanToZeroString(maxForDisplay),
    };
  }

  if (feeInfo.isBtcForkChain) {
    const fee = new BigNumber(feeInfo.gasUTXO?.feeValue ?? '0')
      .shiftedBy(-displayDecimals)
      .toFixed(displayDecimals);
    return {
      min: nanToZeroString(fee),
      max: nanToZeroString(fee),
      minForDisplay: nanToZeroString(fee),
      maxForDisplay: nanToZeroString(fee),
    };
  }

  const gasInfo = gas as IGasLegacy;
  const max = new BigNumber(limit as string).times(gasInfo.gasPrice).toFixed();

  const maxForDisplay = new BigNumber(limitForDisplay as string)
    .times(gasInfo.gasPrice)
    .toFixed();

  return {
    min: nanToZeroString(max),
    max: nanToZeroString(max),
    minForDisplay: nanToZeroString(maxForDisplay),
    maxForDisplay: nanToZeroString(maxForDisplay),
  };
}
export function calculateTotalFeeNative({
  amount, // in GWEI
  feeInfo,
  displayDecimal = 8,
}: {
  amount: string | BigNumber;
  feeInfo: IFeeInfoUnit;
  displayDecimal?: number;
}) {
  const { common } = feeInfo;

  return new BigNumber(amount)
    .plus(common?.baseFeeValue ?? 0)
    .shiftedBy(
      common?.feeDecimals ??
        nilError('calculateTotalFeeNative ERROR: info.feeDecimals missing'),
    ) // GWEI -> onChainValue
    .shiftedBy(
      -(
        common?.nativeDecimals ??
        nilError('calculateTotalFeeNative ERROR: info.nativeDecimals missing')
      ),
    ) // onChainValue -> nativeAmount
    .toFixed(displayDecimal);
}

export function getGasLabel({
  gasType,
  gasPresetIndex,
}: {
  gasType: EGasType;
  gasPresetIndex?: number;
}) {
  if (gasType === EGasType.Custom) {
    return 'content__custom';
  }

  return PRESET_GAS_LABEL[gasPresetIndex || 1] as ILocaleIds;
}
export function getGasIcon({
  gasType,
  gasPresetIndex,
}: {
  gasType: EGasType;
  gasPresetIndex?: number;
}) {
  if (gasType === EGasType.Custom) {
    return '⚙️';
  }

  return PRESET_GAS_ICON[gasPresetIndex || 1];
}
