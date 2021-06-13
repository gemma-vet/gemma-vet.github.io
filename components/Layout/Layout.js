import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <main className={styles.container}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
