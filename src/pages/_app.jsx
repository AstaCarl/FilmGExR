import Layout from './layout';
import '../styles/globals.css'; // Import global styles
import { LoaderProvider } from '../contexts/LoaderContext';

function MyApp({ Component, pageProps }) {
  return (
    <LoaderProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoaderProvider>
  );
}

export default MyApp;
