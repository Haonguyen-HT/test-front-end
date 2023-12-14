import IntlProvider from '@/context/intl';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import QueryClientProvider from './queries/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <IntlProvider>
        <Router>
          <App />
        </Router>
      </IntlProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
