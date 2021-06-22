import '../styles/globals.scss';
import '../styles/fonts.scss';
import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        {/* <facebook open graph tags */}
        <meta property="og:image:url" content={`/images/mission-image@2x.png`} key="image_url" />
        <meta property="og:image:secure_url" content={`/images/mission-image@2x.png`} key="image_secure_url" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1041" />
        <meta
          property="og:image:alt"
          content="Smarter and better client communication for vets and their teams. Your mobile app for happier pet
          families."
        />
        {/* <twitter card tags additive with the og: tags */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:domain" value="gemma.com" />
        <meta name="twitter:image" content={`/images/mission-image@2x.png`} key="twitter_img" />
        <meta name="twitter:description" value="For Vets Who Click With Their Clients" key="twitter_description" />
        <meta
          name="twitter:image:alt"
          content="Smarter and better client communication for vets and their teams. Your mobile app for happier pet
          families."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
