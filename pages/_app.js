import '../styles/globals.scss';
import '../styles/fonts.scss';
import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        {/* <facebook open graph tags */}
        <meta property="og:image:url" content="/images/mission-image@2x.png" key="image_url" />
        <meta
          property="og:description"
          content="Gemma’s mission is to enhance the lives of veterinary providers and pet owners by keeping them connected, all from the convenience of a mobile device."
        />
        <meta property="og:image:secure_url" content="/images/mission-image@2x.png" key="image_secure_url" />
        <meta property="og:site_name" content="Gemma" key="ogsitename" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1041" />
        <meta
          property="og:image:alt"
          content="Smarter and better client communication for vets and their teams. Your mobile app for happier pet
          families."
        />
        {/* <twitter card tags additive with the og: tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gemma" />
        <meta name="twitter:title" content="For Vets Who Click With Their Clients" />
        <meta
          name="twitter:description"
          content="Smarter and better client communication for vets and their teams. Your mobile app for happier pet
          families."
        />
        <meta name="twitter:image" content="/images/mission-image@2x.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
