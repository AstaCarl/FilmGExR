import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>FilmGExR | Your One Stop Shop for Virtual Production Services</title>
      <meta
        name="description"
        content="FilmGExR: Seamless virtual production enhancing film realism. We're a trusted partner for Netflix, Uma Film, SF Studios and more. Experience the future of filmmaking with us."
        key="desc"
      />
      <link rel="icon" href="/assets/favicon.png" sizes="any" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
