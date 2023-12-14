import {
  ACCOUNT_STORAGE_KEY,
  contentData,
  initialStateAccount,
} from '@/utils/constants';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

export const Test2 = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [account] = useLocalStorage(ACCOUNT_STORAGE_KEY, initialStateAccount);

  if (!account?.address) {
    return navigate('/');
  }

  return (
    <div className='text-white m-auto max-w-[940px] break-words text-[28px] font-bold'>
      <ol className='mt-[100px] list-decimal'>
        {contentData.map((item) => (
          <li className='break-words'>
            {intl.formatMessage({
              id: item,
            })}
          </li>
        ))}
      </ol>
      <div className='mt-[40px] ml-[-31.114px]'>
        {intl.formatMessage({
          id: 'pages.test2.congrats',
        })}
      </div>
    </div>
  );
};
