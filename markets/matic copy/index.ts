import { IeMoneyConfiguration, eMoneyNetwork, ePolygonNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyWBTC,
  strategyWETH,
  strategyMATIC,
  strategyAAVE,
  strategyeTSLA,
  strategyeNVDA,
  strategyeAMZN,
  strategyeAAPL,
  strategyeGoogl,
  strategyeEMYC,
  strategyeWEMONEY,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const MaticConfig: IeMoneyConfiguration = {
  ...CommonsConfig,
  MarketId: 'Matic Market',
  ProviderId: 3,
  ReservesConfig: {
    DAI: strategyDAI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    WMATIC: strategyMATIC,
    AAVE: strategyAAVE,
    eTSLA: strategyeTSLA,
    eNVDA: strategyeNVDA,
    eAMZN: strategyeAMZN,
    eAAPL: strategyeAAPL,
    eGoogl: strategyeGoogl,
    EMYC: strategyeEMYC,
    WEMONEY: strategyeWEMONEY,
  },
  ReserveAssets: {
    [eMoneyNetwork.mainnet]: {
      DAI: '',
      USDC: '',
      USDT: '',
      WBTC: '',
      WETH: '',
      WMATIC: '',
      AAVE: '',
    },
    [eMoneyNetwork.testnet]: {
      // Mock tokens with a simple "mint" external function, except wmatic
      DAI: '0xf8c00b04344C8dd57ae3FEa394EC001675Ba3dD4',
      USDC: '0x6c9Ef575b38A127556b4502434E69C71A05766cF',
      USDT: '0x7d28E08BfC911DDD5F779Fd5D87837E74771c96b',
      WBTC: '0x877004abf23D9B444c3Bd9CeF681261aD532B813',
      WETH: '0xE7a7A5E11ab4eB1Ecd3806F36A40d244EA1b06dF',
      WMATIC: '0x4C6f8CB876ef5cDcda9fbb601b22df61BDc303F8',
      eTSLA: '0x4e885f684c1FCAA272896206EcAaeAa07c95F2d7',
      eNVDA: '0x54F86DCefA3A253c2D184d2189eE67a539698085',
      eAMZN: '0x3671eb5EaEC7B7CEb98C1434D7Dd1e0732896a86',
      eAAPL: '0x0C88C3C4503B9738054C7aC01aBB3324081E55d2',
      eGoogl: '0xE0A7cB466Ea3306a24aCF277Af5Cf08188393F8B',
      EMYC: '0x2C5E5BbdD0524AE1AdD10C3782013c4A98d2764A',
    },
  },
};

export default MaticConfig;
