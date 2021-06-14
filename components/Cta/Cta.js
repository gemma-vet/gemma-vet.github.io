import styles from './Cta.module.scss';
import React from 'react';
import Image from 'next/image';

const Cta = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <div onClick={onClick} ref={ref}>
      <a className={styles.cta} onClick={onClick} href={href}>
        <p>{children}</p>
        <Image src="/svg/learnMore_cta.svg" width={12} height={12} alt="next arrow icon" />
      </a>
    </div>
  );
});

export default Cta;
