import Layout from './layout';
import '../styles/globals.css';
import { LoaderProvider } from '../contexts/LoaderContext';

function MyApp({ Component, pageProps }) {
  return (
    // Provide loading state context to the entire application
    <LoaderProvider>
      {/* Wrap the application with the Layout component */}
      <Layout>
        {/* Render the current page component with its props */}
        <Component {...pageProps} />
      </Layout>
    </LoaderProvider>
  );
}

export default MyApp;
