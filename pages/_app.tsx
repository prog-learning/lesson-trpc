import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { trpc } from '../src/utils/trpc';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
