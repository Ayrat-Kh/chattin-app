import RoomWssProvider from '@frontend/contexts/RoomWssProvider';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RoomWssProvider>
        <Component {...pageProps} />
      </RoomWssProvider>
    </Provider>
  );
}
export default MyApp;
