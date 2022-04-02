import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import MyLayout from '../layouts/MyLayout/MyLayout';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
