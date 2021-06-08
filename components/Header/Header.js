import styles from './Header.module.scss';
import Image from 'next/image';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/svg/Logo_Gemma.svg" width={219} height={46} alt="gemma logo representing a dog head" />
      <Menu />
      <div className={styles.menuHamburger}>
        <Image src="/svg/menuHamburger.svg" width={24} height={16} alt="menu hamburger icon" />
      </div>
    </div>
  );
};

export default Header;
