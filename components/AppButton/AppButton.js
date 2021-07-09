import styles from './AppButton.module.scss';
import { Fragment } from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import Link from 'next/link';
import Image from 'next/image';

const AppButton = ({ buttonInfo }) => {
  const { id, href, src, alt, dimensions } = buttonInfo;

  const handleClick = () => {
    const analytics = firebase.analytics();
    analytics.logEvent(`${id}`, {
      content_type: 'button',
      content_id: 'click_app_button',
      items: [{ name: 'AppButton' }],
    });
  };
  return (
    <Fragment>
       <div onClick={handleClick}>
        <Link href={href}>
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
      </div>
      <div onClick={handleClick}>
        <Link href={href}>
          <a className={styles.mobileVersion}>
            <Image
              src={src}
              width={dimensions.mobile.width}
              height={dimensions.mobile.height}
              alt={alt}
              layout="fixed"
            />
          </a>
        </Link>
      </div>
    </Fragment>
  );
};

export default AppButton;
