import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/svg/Logo_Gemma.svg"
          width={219}
          height={46}
          alt="gemma logo representing a dog head"
        />
      </Link>

      <Menu />
      <div className={styles.menuHamburger}>
        <Image src="/svg/menuHamburger.svg" width={24} height={16} alt="menu hamburger icon" />
      </div>
    </header>
  );
};

export default Header;
