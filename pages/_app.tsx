import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MyLayout } from '../layouts';
import { theme } from '../styles/theme';
import { Provider } from 'react-redux';
import store from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MyLayout>
            <Component {...pageProps} />
          </MyLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
