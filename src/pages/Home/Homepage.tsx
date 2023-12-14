import bannerIcon from '@/assets/baner.png';
import { TradeVolume } from '@/components/TradeVolume';
import { AppButton } from '@/components/base/AppButton';
import { GoogleLogin } from 'react-google-login';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
  const dataTrades = [
    { value: '$1.80B', title: 'pages.home.30-day-volume' },
    { value: '$0.84B', title: 'pages.home.managed-on-testX.fi' },
    { value: '$21.43M', title: 'pages.home.total-collateral-automated' },
  ];
  const intl = useIntl();
  const navigate = useNavigate();
  const googleClientId = import.meta.env.VITE_API_BASE_URL;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <div className='mt-[100px] pl-[20px] pr-[64px] flex justify-between'>
        <div>
          <span className='whitespace-pre-line text-white text-[69px] leading-[80px] tracking-custom'>
            {intl.formatMessage({
              id: 'pages.home.title',
            })}
          </span>
          <div className='flex gap-[30px]'>
            <span className='whitespace-pre-line text-white text-[69px] leading-[80px] tracking-custom'>
              {intl.formatMessage({
                id: 'pages.home.title-on',
              })}
            </span>
            <img src={bannerIcon} />
          </div>
          <div className='flex flex-col gap-[22px] max-w-[423px]'>
            <div className='flex gap-[2px] px-[8px] py-[5px] rounded-[32px] bg-white '>
              <input className='outline-none input' />
              <AppButton className='bg-pastelPink py-[4px]'>
                {intl.formatMessage({ id: 'pages.home.sign-up' })}
              </AppButton>
            </div>
            <div className='flex justify-between'>
              <GoogleLogin
                clientId={googleClientId}
                render={(renderProps) => (
                  <AppButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className='bg-skyBlue py-[12px] px-[60px]'
                  >
                    {intl.formatMessage({ id: 'pages.home.login' })}
                  </AppButton>
                )}
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <AppButton
                onClick={() => navigate('/test2')}
                className='bg-white py-[12px] px-[60px]'
              >
                {intl.formatMessage({ id: 'pages.home.launch-app' })}
              </AppButton>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-[20px] flex items-center justify-center flex-col'>
          <img src={bannerIcon} />
          <span className='text-[#8795AF] text-[12px] px-[60px]'>
            {intl.formatMessage({ id: 'pages.home.test-front-end' })}
          </span>
        </div>
      </div>
      <div className='mt-[85px]'>
        <TradeVolume data={dataTrades} />
      </div>
    </>
  );
};
