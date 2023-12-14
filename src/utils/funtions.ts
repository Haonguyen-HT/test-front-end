import { IPAddressData } from '@/hooks';
import { ACCOUNT_STORAGE_KEY } from './constants';

export const isIPAddressFromJapan = (data: IPAddressData): boolean => {
  return data.countryCode === 'JP';
};

export const getAptosWallet = () => {
  if ('aptos' in window) {
    return window.aptos;
  } else {
    window.open('https://petra.app/', `_blank`);
  }
};

export const connectWallet = async () => {
  const wallet = getAptosWallet();
  if (wallet) {
    try {
      await wallet.connect();
      const account = await wallet.account();
      return account;
    } catch (error) {
      console.log(error);
    }
  }
};

export const disConnectWallet = async () => {
  const wallet = getAptosWallet();
  if (wallet) {
    try {
      await wallet.disconnect();
      localStorage.removeItem(ACCOUNT_STORAGE_KEY);
    } catch (error) {
      console.log(error);
    }
  }
};

export const formatAddress = (address: string) => {
  return address.slice(0, 5) + '.....' + address.slice(-5);
};
