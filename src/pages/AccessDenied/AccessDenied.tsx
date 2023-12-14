import { useIPAddress } from '@/hooks';
import { isIPAddressFromJapan } from '@/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AccessDenied = () => {
  const { data } = useIPAddress();
  const navigate = useNavigate();

  useEffect(() => {
    if (data && !isIPAddressFromJapan(data!)) {
      navigate('/');
    }
  }, [data, navigate]);
  return (
    <div className='h-screen w-screen flex justify-center items-center bg text-white text-[28px]'>
      Sorry, the service is not available in your country.
    </div>
  );
};
