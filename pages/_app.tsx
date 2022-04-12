import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import 'styles/globals.css';
import { MyLayout } from 'layouts';
import { theme } from 'styles/theme';
import store, { persistor } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <MyLayout>
              <Component {...pageProps} />
            </MyLayout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
