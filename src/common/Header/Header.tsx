import testXLogo from '@/assets/logo.svg';
import petraIcon from '@/assets/petra.svg';
import { AppButtonIcon } from '@/components';
import { AppButton } from '@/components/base/AppButton';
import { connectWallet, formatAddress } from '@/utils';
import {
  ACCOUNT_STORAGE_KEY,
  initialStateAccount,
  navData,
} from '@/utils/constants';
import { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

export const Header = () => {
  const intl = useIntl();
  const [account] = useLocalStorage(ACCOUNT_STORAGE_KEY, initialStateAccount);
  const [address, setAddress] = useState<string>(account?.address ?? '');

  const handleConnectWallet = async () => {
    const account = await connectWallet();
    setAddress(account?.address);
  };

  useEffect(() => {
    return () => {
      window.aptos.disconnect();
    };
  }, []);

  return (
    <div className='flex items-center justify-between h-[135px] bg-white px-[36px]'>
      <Link to={'/'}>
        <SVG src={testXLogo} />
      </Link>
      <div className='flex items-center rounded-[12px] bg-[#F7BDCC]'>
        {navData.map((navData, index) => (
          <div key={index} className='nav-top-item'>
            {intl.formatMessage({
              id: navData,
            })}
          </div>
        ))}
        <div className='px-[32px] py-[8px]'>
          {address ? (
            <AppButtonIcon
              className='bg-white !py-[8px] !pl-[16px] text-deepNavy'
              icon={petraIcon}
            >
              {formatAddress(address)}
            </AppButtonIcon>
          ) : (
            <AppButton
              onClick={() => handleConnectWallet()}
              className='bg-white !py-[8px] text-deepNavy'
            >
              {intl.formatMessage({
                id: 'navBar.connect-wallets',
              })}
            </AppButton>
          )}
        </div>
      </div>
    </div>
  );
};
