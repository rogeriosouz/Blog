import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import client from '../api/apoloClient';
import { Header } from '../components/Header';
import { ThemeContextProvider } from '../context/ContextTheme';
import { GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
