import { IAccount } from '@/types/app.types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const LAYOUT_STORAGE_KEY = 'VITE_LAYOUT';
export const ACCOUNT_STORAGE_KEY = 'VITE_ACCOUNT';
export const navData = [
  'navBar.products',
  'navBar.protocols',
  'navBar.tokens',
  'navBar.use-cases',
];
export const contentData = [
  'pages.test2.1',
  'pages.test2.2',
  'pages.test2.3',
  'pages.test2.4',
  'pages.test2.5',
  'pages.test2.6',
  'pages.test2.7',
];
export const initialStateLayout: Record<string, any> = {
  locale: 'vi-VN',
};
export const initialStateAccount: IAccount = {
  address: '',
  publicKey: '',
};
