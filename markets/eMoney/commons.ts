import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
} from '../../helpers/constants';
import { ICommonConfiguration, eMoneyNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Aave Matic Market',
  StableDebtTokenNamePrefix: 'Aave Matic Market stable debt',
  VariableDebtTokenNamePrefix: 'Aave Matic Market variable debt',
  SymbolPrefix: 'm',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'ETH',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x6869EC683aB515753332812a5e6A0Ad8Db42adD5',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WMATIC: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(),
    },
    AAVE: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eMoneyNetwork.testnet]: undefined,
    [eMoneyNetwork.mainnet]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdminIndex: 0,
  EmergencyAdmin: {
    [eMoneyNetwork.testnet]: undefined,
    [eMoneyNetwork.mainnet]: undefined,
  },
  LendingPool: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  LendingPoolConfigurator: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  ProviderRegistry: {
    [eMoneyNetwork.testnet]: '0xE661e33B3B9555d39da80be57A5d0434B7D7f69b',
    [eMoneyNetwork.mainnet]: '',
  },
  ProviderRegistryOwner: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  LendingRateOracle: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  LendingPoolCollateralManager: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  TokenDistributor: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  WethGateway: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  AaveOracle: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  FallbackOracle: {
    [eMoneyNetwork.testnet]: ZERO_ADDRESS,
    [eMoneyNetwork.mainnet]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eMoneyNetwork.mainnet]: {
      AAVE: '',
      DAI: '',
      USDC: '',
      USDT: '',
      WBTC: '',
      WMATIC: '',
      USD: '',
    },
    [eMoneyNetwork.testnet]: {
      DAI: '',
      USDC: '',
      USDT: '',
      WBTC: '',
      WMATIC: '',
      USD: '',
    },
  },
  ReserveAssets: {
    [eMoneyNetwork.mainnet]: {},
    [eMoneyNetwork.testnet]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  WETH: {
    [eMoneyNetwork.testnet]: '0xE7a7A5E11ab4eB1Ecd3806F36A40d244EA1b06dF',
    [eMoneyNetwork.mainnet]: '',
  },
  WrappedNativeToken: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
  ReserveFactorTreasuryAddress: {
    [eMoneyNetwork.testnet]: ZERO_ADDRESS,
    [eMoneyNetwork.mainnet]: '',
  },
  IncentivesController: {
    [eMoneyNetwork.testnet]: '',
    [eMoneyNetwork.mainnet]: '',
  },
};
