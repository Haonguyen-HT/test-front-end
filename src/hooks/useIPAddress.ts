import { useQuery } from 'react-query';

export interface IPAddressData {
  ip: string;
  country: string;
  countryCode: string;
}

const fetchIPAddressData = async (): Promise<IPAddressData> => {
  try {
    const response = await fetch('https://freeipapi.com/api/json/');
    if (!response.ok) {
      throw new Error('Failed to fetch IP address data');
    }
    const data: IPAddressData = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch IP address data');
  }
};

export const useIPAddress = () => {
  return useQuery<IPAddressData, Error>('ipAddress', fetchIPAddressData);
};
