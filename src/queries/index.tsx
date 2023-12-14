/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from '@/libs/request';
import React from 'react';
import { QueryClientProvider as Provider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => {
        return request(queryKey[0] as any);
      },
      staleTime: 6000,
    },
  },
});

export default function QueryClientProvider({
  children,
}: React.PropsWithChildren<Record<string, any>>) {
  return <Provider client={queryClient}>{children}</Provider>;
}
