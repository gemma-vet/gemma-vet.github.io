import styles from './LearnMore.module.scss';
import React from 'react';
import Image from 'next/image';

const LearnMore = React.forwardRef(({ onClick, href, ...props }, ref) => {
  const { down, children } = props;
  return (
    <a className={styles.cta} onClick={onClick} href={href} ref={ref}>
      <p>{children}</p>
      {down ? (
        <Image src="/svg/downArrow.svg" width={12} height={12} alt="down arrow icon" />
      ) : (
        <Image src="/svg/learnMore_cta.svg" width={12} height={12} alt="next arrow icon" />
      )}
    </a>
  );
});

LearnMore.displayName = 'LearnMore';

export default LearnMore;
