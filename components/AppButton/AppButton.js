import styles from './AppButton.module.scss';
import { Fragment } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import Link from 'next/link';
import Image from 'next/image';

const AppButton = ({ buttonInfo }) => {
  const { href, src, alt, dimensions } = buttonInfo;

  const handleClick = () => {
    const analytics = firebase.analytics();
    analytics.logEvent('select_item');
  };
  return (
    <Fragment>
      <Link onClick={handleClick} href={href}>
        <a className={styles.desktopVersion}>
          {/* <Image
            src={src}
            width={dimensions.desktop.width}
            height={dimensions.desktop.height}
            alt={alt}
            layout="fixed"
          /> */}
          <img src={src} alt={alt} />
        </a>
      </Link>
      <Link onClick={handleClick} href={href}>
        <a className={styles.mobileVersion}>
          {/* <Image src={src} width={dimensions.mobile.width} height={dimensions.mobile.height} alt={alt} layout="fixed" /> */}
          <img src={src} width={dimensions.mobile.width} height={dimensions.mobile.height} alt={alt} />
        </a>
      </Link>
    </Fragment>
  );
};

export default AppButton;
