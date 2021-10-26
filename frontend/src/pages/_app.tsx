import WssProvider from '@frontend/contexts/WssContext';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WssProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </WssProvider>
  );
}
export default MyApp;
