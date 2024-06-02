import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Head component for including elements in the head section of the document */}
        <title>FilmGExR | Your One Stop Shop for Virtual Production Services</title> {/* Set the title of the page */}
        {/* Set the meta description for SEO */}
        <meta
          name="description"
          content="FilmGExR: Seamless virtual production enhancing film realism. We're a trusted partner for Netflix, Uma Film, SF Studios and more. Experience the future of filmmaking with us."
          key="desc"
        />{' '}
        {/* Set the favicon for SEO */}
        <link rel="icon" href="/assets/favicon.png" sizes="any" /> {/* Link to the favicon */}
      </Head>
      <body>
        <Main /> {/* Main component where the application's content will be rendered */}
        <NextScript />
      </body>
    </Html>
  );
}
