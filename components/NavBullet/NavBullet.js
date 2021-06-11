import styles from './NavBullet.module.scss';
import Image from 'next/image';

const NavBullet = ({ bullet, increment, fade, bulletClick }) => {
  return (
    <div onClick={() => bulletClick(bullet)} className={styles.navElement} role="button">
      {bullet === increment ? (
        <Image
          className={fade ? 'fade-in' : ''}
          src="/svg/squashedBullet.svg"
          width={20}
          height={10}
          alt="bullet icon"
        />
      ) : (
        <Image src="/svg/navBullet.svg" width={10} height={10} alt="bullet icon" />
      )}
    </div>
  );
};

export default NavBullet;
