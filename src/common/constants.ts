/**
 * AlgoWorld Swapper
 * Copyright (C) 2022 AlgoWorld
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { ChainType } from '@/models/Chain';
import { IpfsGateway } from '@/models/Gateway';

export const CHAIN_TYPE: ChainType = process.env.NEXT_PUBLIC_CHAIN_TYPE
  ? (process.env.NEXT_PUBLIC_CHAIN_TYPE.trim().toLowerCase() as ChainType)
  : ChainType.TestNet;

export const TOC_MD: string = process.env.NEXT_PUBLIC_TOC_MD || `N/A`;
export const PRIVACY_MD: string = process.env.NEXT_PUBLIC_PRIVACY_MD || `N/A`;

export const ALGONODE_INDEXER_URL = (chain: ChainType) => {
  return chain.toLowerCase() === `mainnet`
    ? `	https://mainnet-idx.algonode.cloud`
    : `https://testnet-idx.algonode.cloud`;
};

export const ALGOEXPLORER_URL = (chain: ChainType) => {
  return chain.toLowerCase() === `mainnet`
    ? `https://algoexplorer.io`
    : `https://testnet.algoexplorer.io`;
};

export const EMPTY_ASSET_IMAGE_URL = (gateway: IpfsGateway) => {
  return `https://${gateway}/ipfs/QmXrsy5TddTiwDCXqGc2yzNowKs7WhCJfQ17rvHuArfnQp`;
};
export const LATEST_SWAP_PROXY_VERSION = `0.0.4`;
export const AWVT_ASSET_INDEX = (chain: ChainType) => {
  return chain === ChainType.MainNet ? 827624831 : 100256867;
};
export const AWVT_CREATOR_ADDRESS = (chain: ChainType) => {
  return chain === ChainType.MainNet
    ? `C5NGOAUZFT63NNUN6AYQUV76FDWYBH2HIJJO737J3GMRFNC72EGH75632A`
    : `SUF5OEJIPBSBYELHBPOXWR3GH5T2J5Y7XHW5K6L3BJ2FEQ4A6XQZVNN4UM`;
};

export const ASA_TO_ASA_FUNDING_FEE = Math.round((0.1 + 0.1 + 0.01) * 1e6);
export const ASA_TO_ALGO_MAX_FEE = 1_000;
export const ASA_TO_ALGO_FUNDING_BASE_FEE = ASA_TO_ASA_FUNDING_FEE;

export const INCENTIVE_WALLET = `RJVRGSPGSPOG7W3V7IMZZ2BAYCABW3YC5MWGKEOPAEEI5ZK5J2GSF6Y26A`;
export const INCENTIVE_FEE = 50_000;
export const INCENTIVE_FEES: { [key: string]: number } = {
  '0.0.1': 500_000,
  '0.0.2': 500_000,
  '0.0.3': INCENTIVE_FEE,
  '0.0.4': INCENTIVE_FEE,
};
export const GET_INCENTIVE_FEE = (version: string, toAlgos = false) => {
  const response = INCENTIVE_FEES[version] ?? INCENTIVE_FEE;
  return toAlgos ? response / 1e6 : response;
};

export const TXN_SIGNING_CANCELLED_MESSAGE = `You have cancelled transactions signing...`;
export const TXN_SUBMISSION_FAILED_MESSAGE = `Failed to submit transactions, refresh page and try again. Make sure you have enough minimum balance on your account...`;

export const CONNECTED_WALLET_TYPE = `CONNECTED_WALLET_TYPE`;

export const ASA_TO_ASA_PAGE_HEADER_ID = `AWAsaToAsaPageHeader`;
export const CREATE_SWAP_BTN_ID = `AWCreateSwapButton`;
export const ASAS_TO_ALGO_PAGE_HEADER_ID = `AWAsasToAlgoPageHeader`;
export const MY_SWAPS_PAGE_HEADER_ID = `AWMySwapsPageHeader`;
export const PUBLIC_SWAPS_PAGE_HEADER_ID = `AWPublicSwapsPageHeader`;

export const PERFORM_SWAP_PAGE_HEADER_ID = `AWPerformSwapPageHeader`;
export const PERFORM_SWAP_OPTIN_BUTTON_ID = `AWPerformSwapOptinButton`;
export const PERFORM_SWAP_PERFORM_BUTTON_ID = `AWPerformSwapPerformButton`;

export const PUBLIC_SWAPS_SEARCH_FIELD_ID = `AWPublicSwapsSearchField`;
export const PUBLIC_SWAPS_SEARCH_BUTTON_ID = `AWPublicSwapsSearchButton`;

export const MIN_CONTRACTS_VERSION = `0.0.4`;
