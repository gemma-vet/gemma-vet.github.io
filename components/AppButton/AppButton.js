import styles from './AppButton.module.scss';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AppButton = ({ buttonInfo }) => {
  const { id, href, src, alt, dimensions } = buttonInfo;

  const handleClick = () => {
  };
  return (
    <Fragment>
      <div onClick={handleClick}>
        <Link href={href} className={styles.desktopVersion}>

          <Image
            src={src}
            width={dimensions.desktop.width}
            height={dimensions.desktop.height}
            alt={alt}
            layout="fixed"
          />

        </Link>
      </div>
      <div onClick={handleClick}>
        <Link href={href} className={styles.mobileVersion}>

          <Image
            src={src}
            width={dimensions.mobile.width}
            height={dimensions.mobile.height}
            alt={alt}
            layout="fixed"
          />

        </Link>
      </div>
    </Fragment>
  );
};

export default AppButton;
