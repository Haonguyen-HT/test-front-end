import viVI from '../locales/vi-VI';
import { useEffect, useState } from 'react';
import { IntlProvider as Provider } from 'react-intl';
import type { PropsWithChildren } from 'react';
import { useLayout } from '@/hooks/useLayout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function IntlProvider({ children }: PropsWithChildren<any>) {
  const [{ locale }] = useLayout();
  const [message, setMessage] = useState(viVI);

  useEffect(() => {
    import(`../locales/${locale}.ts`).then((module) => {
      setMessage(module.default);
    });
  }, [locale]);

  return (
    <Provider messages={message} defaultLocale='vi-VI' locale='vi-VI'>
      {children}
    </Provider>
  );
}
