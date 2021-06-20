import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DownloadBanner from '../DownloadBanner/DownloadBanner';

const Layout = ({ textOne, lightGreen, textWhite, children }) => {
  return (
    <main className={styles.container}>
      <Header />
      {children}
      <DownloadBanner textOne={textOne} lightGreen={lightGreen} textWhite={textWhite} />
      <Footer />
    </main>
  );
};

export default Layout;
