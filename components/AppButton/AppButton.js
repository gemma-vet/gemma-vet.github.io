import styles from './AppButton.module.scss';
import firebase from 'firebase/app';
import 'firebase/analytics';
import Link from 'next/link';
import Image from 'next/image';

const AppButton = ({ buttonInfo }) => {
  const { href, src, alt, dimensions } = buttonInfo;

  const handleClick = () => {
    // if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      const analytics = firebase.analytics();
      analytics.logEvent('select_item');
    // }
  };
  return (
    <Link onClick={handleClick} href={href}>
      <a>
        <Image src={src} width={dimensions.width} height={dimensions.height} alt={alt} layout="fixed" />
      </a>
    </Link>
  );
};

export default AppButton;
