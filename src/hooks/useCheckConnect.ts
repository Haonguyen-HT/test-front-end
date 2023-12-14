import { useQuery } from 'react-query';

const checkConnectWallet = async (): Promise<boolean> => {
  try {
    const connectionStatus = await window.aptos.isConnected();
    return connectionStatus;
  } catch (error) {
    return false;
  }
};

export const useCheckConnect = () => {
  return useQuery<boolean, Error>('checkConnect', checkConnectWallet);
};
