import styles from './Header.module.scss';
import { useState } from 'react';
import hamburger from '../../public/svg/menuHamburger.svg';
import logo from '../../public/svg/Logo_Gemma.svg';
import close from '../../public/svg/close.svg';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../Menu/Menu';

const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className={`${styles.header} ${active ? `${styles.displayColumn}` : ''}`}>
      <div className={styles.menuDesktop}>
        <Link href="/">
          <a className={styles.logoDesktop}>
            <Image src={logo} alt="gemma logo representing a dog head" />
          </a>
        </Link>
        <Menu />
      </div>
      <div className={styles.menuMobile}>
        <Link href="/">
          <a className={styles.logoMobile}>
            <Image src={logo} width={195} height={42} alt="gemma logo representing a dog head" />
          </a>
        </Link>
        <div className={`${styles.notVisible} ${active ? `${styles.visible}` : ""}`}>
          <Menu mobile />
        </div>
      </div>

      <div onClick={handleClick} className={styles.menuHamburger}>
        {active ? <Image src={close} alt="menu hamburger icon" /> : <Image src={hamburger} alt="menu hamburger icon" />}
      </div>
    </header>
  );
};

export default Header;
