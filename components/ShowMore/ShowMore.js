import React from 'react';
import styles from './ShowMore.module.scss';
import Image from 'next/image';

const ShowMore = React.forwardRef(({ onClick, href, ...props }, ref) => {
  const { handleShowMore, showMore, children } = props;
  return (
    <a className={styles.showMore} onClick={() => handleShowMore()} href={href} ref={ref}>
      <p>{children}</p>
      {!showMore ? (
        <Image src="/svg/downArrow.svg" width={12} height={12} alt="down arrow icon" />
      ) : (
        <Image src="/svg/arrowUp.svg" width={12} height={12} alt="up arrow icon" />
      )}
    </a>
  );
});

export default ShowMore;
