import { Loader } from '@/common';
import { useCheckConnect, useIPAddress } from '@/hooks';
import { DefaultLayout } from '@/layouts';
import { AccessDenied } from '@/pages/AccessDenied/AccessDenied';
import { isIPAddressFromJapan } from '@/utils';
import { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import routes from './routers';
import { ACCOUNT_STORAGE_KEY, initialStateAccount } from './utils/constants';

function App() {
  const { data, isLoading } = useIPAddress();
  const { data: dataConnect, isLoading: isLoadingConnect } = useCheckConnect();
  const [, setAccount] = useLocalStorage(
    ACCOUNT_STORAGE_KEY,
    initialStateAccount
  );

  const navigate = useNavigate();

  window?.aptos?.onDisconnect(() => {
    setAccount(initialStateAccount);
  });

  useEffect(() => {
    if (data && isIPAddressFromJapan(data!)) {
      navigate('/access-denied');
    }
  }, [data, navigate]);

  useEffect(() => {
    if (dataConnect) {
      (async () => {
        const account = await window.aptos.account();
        setAccount(account);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataConnect]);

  return isLoading || isLoadingConnect ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route path='/access-denied' element={<AccessDenied />} />
        <Route path='*' element={<>404 Notfound !</></>} />
      </Routes>
    </>
  );
}

export default App;
