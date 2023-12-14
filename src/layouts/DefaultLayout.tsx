import { Header } from '@/common/Header/Header';
import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark font-helvetica bg'>
      <div className='flex h-screen overflow-hidden'>
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <Header />
          <main>
            <div className='mx-auto max-w-screen px-[16px]'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
