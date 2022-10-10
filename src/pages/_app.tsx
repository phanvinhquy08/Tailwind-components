import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
// import { SSRProvider } from 'react-aria';

//TODO: wrap SSR

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <SSRProvider>
    <Component {...pageProps} />
    // </SSRProvider>
  );
}

export default MyApp;
