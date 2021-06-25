import styles from './Layout.module.scss';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import initFirebase from '../../firebase';
import 'firebase/analytics';
import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DownloadBanner from '../DownloadBanner/DownloadBanner';

initFirebase();

const Layout = ({ title, textOne, lightGreen, textWhite, children }) => {
  useEffect(() => {
    // if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      const analytics = firebase.analytics();
      analytics.logEvent('page_view');
    // }
  });
  return (
    <main className={styles.container}>
      <Head>
        <title>Gemma | {title}</title>
        <meta name="description" content="For Vets Who Click With Their Clients" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
      {children}
      <DownloadBanner textOne={textOne} lightGreen={lightGreen} textWhite={textWhite} />
      <Footer />
    </main>
  );
};

export default Layout;
