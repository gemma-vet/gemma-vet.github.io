import styles from './AppButton.module.scss';
import { useEffect, Fragment } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import Link from 'next/link';
import Image from 'next/image';

const AppButton = ({ buttonInfo }) => {
  const { href, src, alt, dimensions } = buttonInfo;
  let analytics;

  useEffect(() => {
    analytics = firebase.analytics();
  });

  const handleClick = () => {
    analytics.logEvent('select_item', {
      content_type: 'click',
      content_id: 'app_button',
    });
  };
  return (
    <Fragment>
      <Link onClick={handleClick} href={href}>
        <a className={styles.desktopVersion}>
          <Image
            src={src}
            width={dimensions.desktop.width}
            height={dimensions.desktop.height}
            alt={alt}
            layout="fixed"
          />
        </a>
      </Link>
      <Link onClick={handleClick} href={href}>
        <a className={styles.mobileVersion}>
          <Image src={src} width={dimensions.mobile.width} height={dimensions.mobile.height} alt={alt} layout="fixed" />
        </a>
      </Link>
    </Fragment>
  );
};

export default AppButton;
