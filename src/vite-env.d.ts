/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
}

declare interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aptos?: any;
}
