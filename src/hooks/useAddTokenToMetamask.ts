import { useCallback } from 'react';

import { Asset, ASSET_LIST } from '../constants/contracts';

export const useAddTokenToMetamask = (asset: Asset) => {
  const addTokenToMetamask = useCallback(async () => {
    if ((window as any).ethereum) {
      await (window as any).ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          // Initially only supports ERC20, but eventually more!
          options: {
            address: ASSET_LIST[asset].address,
            // A ticker symbol or shorthand, up to 5 chars.
            decimals: ASSET_LIST[asset].decimals,

            // The number of decimals in the token
            image: `https://web.toolboxtoken.com/img/${asset}.png`,
            // The address that the token is at.
            symbol: asset, // A string url of the token logo
          },
          type: 'ERC20',
        },
      });
    }
  }, [asset]);

  return addTokenToMetamask;
};
