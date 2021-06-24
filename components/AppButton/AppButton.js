import styles from './AppButton.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const AppButton =  ({ buttonInfo}) => {
    const { href, src, alt, dimensions} = buttonInfo;
  return (
    <Link href={href}>
      <a>
        <Image src={src} width={dimensions.width} height={dimensions.height} alt={alt} layout="fixed" />
      </a>
    </Link>
  );
};

export default AppButton;
